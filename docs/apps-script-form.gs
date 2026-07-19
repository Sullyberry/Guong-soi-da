/**
 * LUVIA — Nhận thông tin khách hàng từ biểu mẫu liên hệ trên luvia.id.vn
 * ---------------------------------------------------------------------
 * Dán TOÀN BỘ file này vào Apps Script của Google Sheet.
 * Xem hướng dẫn triển khai ở cuối file.
 */

// ⚙️ CẤU HÌNH — sửa 2 dòng này
const SHEET_NAME = 'ThongTinKhachHang';       // Tên tab sẽ lưu dữ liệu
const EMAIL_THONG_BAO = 'THAY_EMAIL_CUA_BAN'; // Email nhận thông báo. Để '' nếu không muốn nhận.

function doPost(e) {
  try {
    const p = (e && e.parameter) || {};
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    let sh = ss.getSheetByName(SHEET_NAME);
    if (!sh) sh = ss.insertSheet(SHEET_NAME);

    // Tạo dòng tiêu đề ở lần chạy đầu tiên
    if (sh.getLastRow() === 0) {
      sh.appendRow(['Thời gian', 'Họ tên', 'Số điện thoại', 'Email', 'Tỉnh/Thành', 'Ghi chú', 'Trang gửi']);
      sh.getRange(1, 1, 1, 7).setFontWeight('bold');
      sh.setFrozenRows(1);
    }

    sh.appendRow([
      new Date(),
      p.hoTen || '',
      "'" + (p.soDienThoai || ''), // dấu ' để Sheets giữ số 0 ở đầu SĐT
      p.email || '',
      p.tinhThanh || '',
      p.ghiChu || '',
      p.trangGui || ''
    ]);

    if (EMAIL_THONG_BAO && EMAIL_THONG_BAO.indexOf('@') > -1) {
      MailApp.sendEmail({
        to: EMAIL_THONG_BAO,
        subject: '🔔 Liên hệ mới từ website Luvia: ' + (p.hoTen || 'Khách mới'),
        body: [
          'Có khách vừa để lại thông tin trên website:',
          '',
          'Họ tên     : ' + (p.hoTen || ''),
          'Điện thoại : ' + (p.soDienThoai || ''),
          'Email      : ' + (p.email || ''),
          'Tỉnh/Thành : ' + (p.tinhThanh || ''),
          'Ghi chú    : ' + (p.ghiChu || ''),
          'Trang gửi  : ' + (p.trangGui || ''),
          '',
          'Xem toàn bộ danh sách: ' + ss.getUrl()
        ].join('\n')
      });
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Mở URL /exec trên trình duyệt sẽ thấy dòng này => endpoint đang sống.
function doGet() {
  return ContentService.createTextOutput('Luvia form endpoint OK');
}

/**
 * ===== HƯỚNG DẪN TRIỂN KHAI =====
 *
 * 1. Tạo Google Sheet mới, đặt tên "Luvia - Thông tin khách hàng".
 * 2. Trong Sheet: Tiện ích mở rộng (Extensions) → Apps Script.
 * 3. Xoá hết code mẫu, dán toàn bộ file này vào.
 * 4. Sửa EMAIL_THONG_BAO thành email của bạn. Lưu (Ctrl+S).
 * 5. Bấm "Triển khai" (Deploy) → "Tuỳ chọn triển khai mới" (New deployment).
 * 6. Bấm icon bánh răng → chọn loại "Ứng dụng web" (Web app), rồi đặt:
 *      - Thực thi với tư cách (Execute as) : Tôi (Me)
 *      - Người có quyền truy cập (Who has access) : Bất kỳ ai (Anyone)
 * 7. Bấm "Triển khai" → "Cấp quyền truy cập" → chọn tài khoản Google của bạn.
 *      Gặp cảnh báo "Google chưa xác minh ứng dụng này" là BÌNH THƯỜNG
 *      (script do chính bạn viết): bấm "Nâng cao" (Advanced) →
 *      "Chuyển đến ... (không an toàn)" → "Cho phép" (Allow).
 * 8. Copy "URL ứng dụng web" dạng:
 *      https://script.google.com/macros/s/AKfycb....../exec
 * 9. Dán URL đó vào ENDPOINT trong src/components/LeadForm.tsx
 *
 * ⚠️ LƯU Ý: mỗi lần bạn SỬA code script, phải tạo phiên bản triển khai MỚI
 *    (Triển khai → Quản lý triển khai → biểu tượng bút chì → Phiên bản: Mới)
 *    thì thay đổi mới có hiệu lực.
 *
 * 📬 Giới hạn gửi email của tài khoản Gmail thường: 100 email/ngày (quá đủ).
 */
