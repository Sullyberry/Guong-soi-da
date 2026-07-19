/**
 * LUVIA - Nhan thong tin khach hang tu bieu mau lien he tren luvia.id.vn
 * ---------------------------------------------------------------------
 * Dan TOAN BO file nay vao Apps Script cua Google Sheet.
 * Xem huong dan trien khai o cuoi file.
 *
 * Phien ban co gia co chong rac:
 *   1. Kiem tra dinh dang du lieu phia may chu
 *   2. Gioi han do dai tung truong
 *   3. Chong formula injection khi ghi vao Sheet
 *   4. Gioi han tan suat gui + chan gui trung lap
 *   5. Bao ve han muc email hang ngay
 */

/* ============================ CAU HINH ============================ */

const SHEET_NAME = 'ThongTinKhachHang';       // Ten tab luu du lieu
const EMAIL_THONG_BAO = 'THAY_EMAIL_CUA_BAN'; // Email nhan thong bao. De '' neu khong muon nhan.

// Gioi han do dai toi da cho tung truong (ky tu)
const MAX_LEN = {
  hoTen: 100,
  soDienThoai: 20,
  email: 150,
  tinhThanh: 100,
  ghiChu: 1000,
  trangGui: 200
};

const MAX_GUI_MOI_GIO = 30;   // Toan he thong: toi da 30 luot/gio
const MAX_EMAIL_MOI_NGAY = 50; // Toi da 50 email thong bao/ngay (han muc Gmail la 100)
const CHAN_TRUNG_PHUT = 10;    // Cung SDT hoac email gui lai trong 10 phut se bi bo qua

const PHONE_RE = /^(0\d{9}|(\+?84)\d{9})$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* ============================ TIEN ICH ============================ */

/** Cat khoang trang thua va gioi han do dai */
function lamSach(giaTri, doDaiToiDa) {
  return String(giaTri == null ? '' : giaTri).trim().slice(0, doDaiToiDa);
}

/**
 * Chong formula injection: neu gia tri bat dau bang = + - @ hoac tab,
 * Google Sheets se hieu la CONG THUC va tu chay khi ban mo file.
 * Them dau nhay don o dau de Sheets luon coi day la van ban thuan.
 */
function chongCongThuc(giaTri) {
  if (giaTri === '') return '';
  return /^[=+\-@\t\r]/.test(giaTri) ? "'" + giaTri : giaTri;
}

/** Dem su kien trong khoang thoi gian, tra ve true neu VUOT gioi han */
function vuotGioiHan(khoa, gioiHan, songGiay) {
  const cache = CacheService.getScriptCache();
  const hienTai = Number(cache.get(khoa) || 0) + 1;
  cache.put(khoa, String(hienTai), songGiay);
  return hienTai > gioiHan;
}

/** Kiem tra han muc email theo ngay (dung Properties vi cache chi song toi da 6 gio) */
function conHanMucEmail() {
  const props = PropertiesService.getScriptProperties();
  const homNay = Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'yyyy-MM-dd');
  const luu = JSON.parse(props.getProperty('emailCounter') || '{}');
  if (luu.ngay !== homNay) {
    props.setProperty('emailCounter', JSON.stringify({ ngay: homNay, soLuong: 1 }));
    return true;
  }
  if (luu.soLuong >= MAX_EMAIL_MOI_NGAY) return false;
  luu.soLuong += 1;
  props.setProperty('emailCounter', JSON.stringify(luu));
  return true;
}

function traVe(duLieu) {
  return ContentService
    .createTextOutput(JSON.stringify(duLieu))
    .setMimeType(ContentService.MimeType.JSON);
}

/* ============================ XU LY CHINH ============================ */

function doPost(e) {
  const khoa = LockService.getScriptLock();
  try {
    // Tranh hai luot gui cung luc ghi de len nhau
    khoa.waitLock(10000);

    const p = (e && e.parameter) || {};

    /* --- Lop 1: bay bot (honeypot). Trinh duyet that luon gui rong --- */
    if (lamSach(p.website, 50) !== '') {
      return traVe({ ok: true }); // Gia vo thanh cong, khong ghi gi
    }

    /* --- Lop 2: lam sach + gioi han do dai --- */
    const hoTen = lamSach(p.hoTen, MAX_LEN.hoTen);
    const soDienThoai = lamSach(p.soDienThoai, MAX_LEN.soDienThoai).replace(/[\s.\-]/g, '');
    const email = lamSach(p.email, MAX_LEN.email);
    const tinhThanh = lamSach(p.tinhThanh, MAX_LEN.tinhThanh);
    const ghiChu = lamSach(p.ghiChu, MAX_LEN.ghiChu);
    const trangGui = lamSach(p.trangGui, MAX_LEN.trangGui);

    /* --- Lop 3: kiem tra dinh dang phia may chu --- */
    if (!hoTen || !PHONE_RE.test(soDienThoai) || !EMAIL_RE.test(email)) {
      return traVe({ ok: false, error: 'invalid_input' });
    }
    // Ten chi chua so hoac ky tu la thuong la rac
    if (!/[\p{L}]{2,}/u.test(hoTen)) {
      return traVe({ ok: false, error: 'invalid_name' });
    }
    // Chan noi dung co duong link (dac trung cua spam)
    if (/https?:\/\/|www\.|\[url|<a\s/i.test(hoTen + ' ' + ghiChu)) {
      return traVe({ ok: false, error: 'link_not_allowed' });
    }

    /* --- Lop 4: chan gui trung + gioi han tan suat --- */
    const cache = CacheService.getScriptCache();
    const khoaTrung = 'dup_' + Utilities.base64EncodeWebSafe(soDienThoai + '|' + email).slice(0, 100);
    if (cache.get(khoaTrung)) {
      return traVe({ ok: true, note: 'duplicate_ignored' });
    }
    cache.put(khoaTrung, '1', CHAN_TRUNG_PHUT * 60);

    if (vuotGioiHan('rate_hour', MAX_GUI_MOI_GIO, 3600)) {
      return traVe({ ok: false, error: 'rate_limited' });
    }

    /* --- Ghi vao Sheet --- */
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sh = ss.getSheetByName(SHEET_NAME);
    if (!sh) sh = ss.insertSheet(SHEET_NAME);

    if (sh.getLastRow() === 0) {
      sh.appendRow(['Thời gian', 'Họ tên', 'Số điện thoại', 'Email', 'Tỉnh/Thành', 'Ghi chú', 'Trang gửi']);
      sh.getRange(1, 1, 1, 7).setFontWeight('bold');
      sh.setFrozenRows(1);
    }

    sh.appendRow([
      new Date(),
      chongCongThuc(hoTen),
      "'" + soDienThoai,            // dau ' de giu so 0 o dau
      chongCongThuc(email),
      chongCongThuc(tinhThanh),
      chongCongThuc(ghiChu),
      chongCongThuc(trangGui)
    ]);

    /* --- Gui email thong bao (neu con han muc) --- */
    if (EMAIL_THONG_BAO && EMAIL_THONG_BAO.indexOf('@') > -1 && conHanMucEmail()) {
      MailApp.sendEmail({
        to: EMAIL_THONG_BAO,
        subject: 'Liên hệ mới từ website Luvia: ' + hoTen,
        body: [
          'Có khách vừa để lại thông tin trên website:',
          '',
          'Họ tên     : ' + hoTen,
          'Điện thoại : ' + soDienThoai,
          'Email      : ' + email,
          'Tỉnh/Thành : ' + tinhThanh,
          'Ghi chú    : ' + ghiChu,
          'Trang gửi  : ' + trangGui,
          '',
          'Xem toàn bộ danh sách: ' + ss.getUrl()
        ].join('\n')
      });
    }

    return traVe({ ok: true });

  } catch (err) {
    return traVe({ ok: false, error: String(err) });
  } finally {
    try { khoa.releaseLock(); } catch (e) {}
  }
}

/**
 * Mo URL /exec tren trinh duyet se thay dong nay => endpoint dang song.
 * CANH BAO BAO MAT: KHONG BAO GIO sua ham nay de tra ve du lieu tu Sheet.
 * URL /exec la cong khai, ai co URL cung doc duoc ket qua doGet.
 */
function doGet() {
  return ContentService.createTextOutput('Luvia form endpoint OK');
}

/**
 * ===== HUONG DAN TRIEN KHAI =====
 *
 * 1. Tao Google Sheet moi, dat ten "Luvia - Thong tin khach hang".
 * 2. Trong Sheet: Tien ich mo rong (Extensions) -> Apps Script.
 * 3. Xoa het code mau, dan toan bo file nay vao.
 * 4. Sua EMAIL_THONG_BAO thanh email cua ban. Luu (Ctrl+S).
 * 5. Bam "Trien khai" (Deploy) -> "Tuy chon trien khai moi" (New deployment).
 * 6. Bam icon banh rang -> chon loai "Ung dung web" (Web app), roi dat:
 *      - Thuc thi voi tu cach (Execute as) : Toi (Me)
 *      - Nguoi co quyen truy cap (Who has access) : Bat ky ai (Anyone)
 * 7. Bam "Trien khai" -> "Cap quyen truy cap" -> chon tai khoan Google cua ban.
 *      Gap canh bao "Google chua xac minh ung dung nay" la BINH THUONG
 *      (script do chinh ban viet): bam "Nang cao" (Advanced) ->
 *      "Chuyen den ... (khong an toan)" -> "Cho phep" (Allow).
 * 8. Copy "URL ung dung web" dang:
 *      https://script.google.com/macros/s/AKfycb....../exec
 *
 * ===== KHI CAP NHAT CODE NAY =====
 * Phai tao PHIEN BAN TRIEN KHAI MOI thi thay doi moi co hieu luc:
 *   Trien khai -> Quan ly trien khai -> bieu tuong but chi -> Phien ban: Moi -> Trien khai
 * URL /exec KHONG doi, nen khong can sua lai website.
 *
 * ===== GHI CHU BAO MAT =====
 * - URL /exec la cong khai theo thiet ke (trinh duyet cua khach phai goi duoc).
 *   Vi vay script nay tu kiem tra du lieu thay vi tin tuong phia trinh duyet.
 * - Bat xac thuc 2 lop cho tai khoan Google dang giu Sheet.
 * - Giu Sheet o che do rieng tu, khong chia se "bat ky ai co link".
 */
