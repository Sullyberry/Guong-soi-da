/**
 * LUVIA - Widget dùng chung cho toàn site (chạy trên cả trang React lẫn trang tĩnh)
 *   1. Hộp thoại Cookie: xin đồng ý trước khi bật Google Analytics (Consent Mode v2)
 *   2. Popup thu thập thông tin: hiện ngẫu nhiên trên các trang không có form sẵn
 */
(function () {
  'use strict';

  var ENDPOINT =
    'https://script.google.com/macros/s/AKfycbx9u7MdOfeftBLdHS2de2P5CNFqwjDfzfCU_YWHpUqEYmdRAvMmb5HMbFOZCglihx8k/exec';

  var CONSENT_KEY = 'luvia_cookie_consent';
  var POPUP_KEY = 'luvia_popup_state';
  var POPUP_SNOOZE_DAYS = 7;

  var PRIVACY_URL = '/privacy/';
  var FANPAGE_URL = 'https://www.facebook.com/profile.php?id=100070111910232';

  /* Không hiện popup ở những trang này: trang sản phẩm đã có form, trang pháp lý cần tập trung đọc */
  var POPUP_EXCLUDE = ['/san-pham/', '/privacy/', '/terms/'];
  /* Trang chủ cũng đã có biểu mẫu liên hệ; so khớp chính xác vì '/' là tiền tố của mọi đường dẫn */
  var POPUP_EXCLUDE_EXACT = ['/', '/index.html'];

  var PHONE_RE = /^(0\d{9}|(\+?84)\d{9})$/;
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function getLS(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function setLS(k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} }

  function gtagSafe() {
    if (typeof window.gtag === 'function') {
      window.gtag.apply(window, arguments);
    }
  }

  /* ------------------------------------------------------------------ CSS */
  function injectStyles() {
    if (document.getElementById('luvia-widget-styles')) return;
    var css =
      '.lv-cookie{position:fixed;left:16px;right:16px;bottom:16px;z-index:9998;max-width:660px;margin:0 auto;' +
      'background:var(--color-panel,#fff);border:1px solid var(--color-panel-border,rgba(160,98,76,.2));' +
      'border-radius:12px;box-shadow:0 12px 40px rgba(36,28,27,.16);padding:20px 22px;' +
      'font-family:var(--font-sans,system-ui,sans-serif);opacity:0;transform:translateY(12px);' +
      'transition:opacity .35s ease,transform .35s ease}' +
      '.lv-cookie.is-in{opacity:1;transform:translateY(0)}' +
      '.lv-cookie h2{margin:0 0 6px;font-size:15px;font-weight:600;color:var(--color-espresso,#241C1B)}' +
      '.lv-cookie p{margin:0 0 14px;font-size:13.5px;line-height:1.65;color:var(--color-espresso-muted,#6b5b57)}' +
      '.lv-cookie a{color:var(--color-brand,#A0624C)}' +
      '.lv-cookie-actions{display:flex;flex-wrap:wrap;gap:10px}' +
      '.lv-btn{cursor:pointer;border-radius:999px;font-size:11px;font-weight:600;letter-spacing:1.5px;' +
      'text-transform:uppercase;padding:11px 24px;border:1px solid transparent;transition:background .2s,color .2s,border-color .2s}' +
      '.lv-btn-primary{background:var(--color-espresso,#241C1B);color:var(--color-ivory,#FCFAF7)}' +
      '.lv-btn-primary:hover{background:var(--color-brand,#A0624C)}' +
      '.lv-btn-ghost{background:transparent;color:var(--color-espresso,#241C1B);border-color:var(--color-panel-border,rgba(160,98,76,.35))}' +
      '.lv-btn-ghost:hover{border-color:var(--color-brand,#A0624C);color:var(--color-brand,#A0624C)}' +

      '.lv-modal{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;' +
      'padding:16px;background:rgba(36,28,27,.55);opacity:0;transition:opacity .3s ease}' +
      '.lv-modal.is-in{opacity:1}' +
      '.lv-modal-box{position:relative;width:100%;max-width:460px;max-height:92vh;overflow-y:auto;' +
      'background:var(--color-panel,#fff);border-radius:14px;padding:32px 28px;' +
      'font-family:var(--font-sans,system-ui,sans-serif);transform:translateY(14px);transition:transform .3s ease}' +
      '.lv-modal.is-in .lv-modal-box{transform:translateY(0)}' +
      '.lv-close{position:absolute;top:12px;right:12px;width:32px;height:32px;border:none;background:transparent;' +
      'cursor:pointer;color:var(--color-espresso-muted,#6b5b57);font-size:22px;line-height:1;border-radius:999px}' +
      '.lv-close:hover{background:rgba(160,98,76,.1);color:var(--color-brand,#A0624C)}' +
      '.lv-eyebrow{font-size:10px;letter-spacing:2.5px;text-transform:uppercase;color:var(--color-brand,#A0624C);' +
      'font-weight:600;margin:0 0 10px}' +
      '.lv-modal-box h2{margin:0 0 10px;font-family:var(--font-display,Georgia,serif);font-weight:400;font-size:25px;' +
      'line-height:1.25;color:var(--color-espresso,#241C1B)}' +
      '.lv-modal-box .lv-sub{margin:0 0 20px;font-size:14px;line-height:1.7;color:var(--color-espresso-muted,#6b5b57)}' +
      '.lv-field{margin-bottom:14px}' +
      '.lv-field label{display:block;margin-bottom:6px;font-size:12.5px;font-weight:500;color:var(--color-espresso,#241C1B)}' +
      '.lv-field input{width:100%;box-sizing:border-box;border-radius:6px;padding:11px 14px;font-size:14.5px;' +
      'color:var(--color-espresso,#241C1B);background:var(--color-panel,#fff);' +
      'border:1px solid var(--color-panel-border,rgba(160,98,76,.25));outline:none;transition:border-color .2s}' +
      '.lv-field input:focus{border-color:var(--color-brand,#A0624C)}' +
      '.lv-field input.lv-invalid{border-color:#f87171}' +
      '.lv-err{margin:5px 0 0;font-size:11.5px;color:#dc2626}' +
      '.lv-consent{display:flex;align-items:flex-start;gap:9px;margin:4px 0 18px;font-size:12.5px;line-height:1.6;' +
      'color:var(--color-espresso-muted,#6b5b57)}' +
      '.lv-consent input{margin-top:2px;width:15px;height:15px;accent-color:var(--color-brand,#A0624C);flex:none}' +
      '.lv-consent a{color:var(--color-brand,#A0624C)}' +
      '.lv-submit{width:100%;justify-content:center}' +
      '.lv-note{margin:12px 0 0;font-size:11.5px;line-height:1.6;color:var(--color-espresso-muted,#6b5b57);opacity:.85;text-align:center}' +
      '.lv-hp{position:absolute;left:-9999px;width:0;height:0;overflow:hidden}' +
      '.lv-done{text-align:center;padding:8px 0}' +
      '.lv-done-icon{width:46px;height:46px;margin:0 auto 14px;border-radius:999px;display:flex;align-items:center;' +
      'justify-content:center;background:rgba(160,98,76,.12);color:var(--color-brand,#A0624C);font-size:22px}' +
      '.lv-alert{margin:0 0 14px;padding:11px 13px;border-radius:8px;background:#fef2f2;border:1px solid #fecaca;' +
      'color:#b91c1c;font-size:12.5px;line-height:1.6}' +

      '.lv-fb-box{width:100%;max-width:340px;margin:0 0 20px;min-height:400px}' +
      '.lv-fb-btn{width:100%;min-height:400px;display:flex;flex-direction:column;align-items:center;' +
      'justify-content:center;gap:8px;cursor:pointer;' +
      'padding:20px 16px;border-radius:10px;background:var(--color-panel,#fff);text-align:center;' +
      'border:1px solid var(--color-panel-border,rgba(160,98,76,.25));transition:border-color .2s,background .2s;' +
      'font-family:var(--font-sans,system-ui,sans-serif)}' +
      '.lv-fb-btn:hover{border-color:var(--color-brand,#A0624C);background:rgba(160,98,76,.05)}' +
      '.lv-fb-btn svg{width:24px;height:24px;fill:#1877F2}' +
      '.lv-fb-btn strong{font-size:13px;font-weight:600;color:var(--color-espresso,#241C1B)}' +
      '.lv-fb-btn span{font-size:11px;line-height:1.5;color:var(--color-espresso-muted,#6b5b57)}' +
      '@media (max-width:600px){.lv-cookie{padding:18px}.lv-modal-box{padding:28px 20px}' +
      '.lv-cookie-actions .lv-btn{flex:1 1 auto;text-align:center}}';

    var s = document.createElement('style');
    s.id = 'luvia-widget-styles';
    s.textContent = css;
    document.head.appendChild(s);
  }

  /* -------------------------------------------------------- Cookie banner */
  function applyConsent(state) {
    if (state === 'accepted') {
      gtagSafe('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    } else {
      gtagSafe('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }
  }

  function showCookieBanner(onDecision) {
    injectStyles();

    var el = document.createElement('div');
    el.className = 'lv-cookie';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-label', 'Thông báo về cookie');
    el.innerHTML =
      '<h2>Website này sử dụng cookie</h2>' +
      '<p>Trang web của chúng tôi sử dụng cookie để cải thiện trải nghiệm của bạn và phân tích lưu lượng truy cập. ' +
      'Bạn có thể quản lý lựa chọn của mình bất kỳ lúc nào tại mục "Cài đặt cookie" ở chân trang. ' +
      'Xem thêm tại <a href="' + PRIVACY_URL + '">Chính sách bảo mật</a>.</p>' +
      '<div class="lv-cookie-actions">' +
      '<button type="button" class="lv-btn lv-btn-primary" data-lv="accept">Chấp nhận</button>' +
      '<button type="button" class="lv-btn lv-btn-ghost" data-lv="decline">Từ chối</button>' +
      '</div>';

    document.body.appendChild(el);
    requestAnimationFrame(function () { el.classList.add('is-in'); });

    function decide(state) {
      setLS(CONSENT_KEY, state);
      applyConsent(state);
      gtagSafe('event', 'cookie_consent', { consent_state: state });
      el.classList.remove('is-in');
      setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
        if (onDecision) onDecision(state);
      }, 350);
    }

    el.querySelector('[data-lv="accept"]').addEventListener('click', function () { decide('accepted'); });
    el.querySelector('[data-lv="decline"]').addEventListener('click', function () { decide('declined'); });
  }

  /* ----------------------------------------------------------- Popup form */
  function popupAllowed() {
    var path = window.location.pathname;
    for (var i = 0; i < POPUP_EXCLUDE.length; i++) {
      if (path.indexOf(POPUP_EXCLUDE[i]) === 0) return false;
    }
    for (var j = 0; j < POPUP_EXCLUDE_EXACT.length; j++) {
      if (path === POPUP_EXCLUDE_EXACT[j]) return false;
    }
    var raw = getLS(POPUP_KEY);
    if (!raw) return true;
    if (raw === 'submitted') return false;
    var ts = parseInt(raw, 10);
    if (isNaN(ts)) return true;
    return Date.now() - ts > POPUP_SNOOZE_DAYS * 86400000;
  }

  function openPopup() {
    injectStyles();

    var overlay = document.createElement('div');
    overlay.className = 'lv-modal';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Để lại thông tin liên hệ');

    overlay.innerHTML =
      '<div class="lv-modal-box">' +
      '<button type="button" class="lv-close" data-lv="close" aria-label="Đóng">&times;</button>' +
      '<div data-lv="content">' +
      '<p class="lv-eyebrow">Liên hệ</p>' +
      '<h2>Bạn muốn hiểu làn da mình hơn?</h2>' +
      '<p class="lv-sub">Để lại thông tin, Luvia sẽ liên hệ tư vấn về Gương thông minh AI Luvia. Hoàn toàn miễn phí và không ràng buộc.</p>' +
      '<form novalidate data-lv="form">' +
      '<div class="lv-hp"><label for="lv-website">Website</label>' +
      '<input id="lv-website" name="website" type="text" tabindex="-1" autocomplete="off"></div>' +
      '<div class="lv-field"><label for="lv-hoten">Họ và tên *</label>' +
      '<input id="lv-hoten" name="hoTen" type="text" autocomplete="name" placeholder="Nguyễn Thị An"></div>' +
      '<div class="lv-field"><label for="lv-phone">Số điện thoại *</label>' +
      '<input id="lv-phone" name="soDienThoai" type="tel" inputmode="tel" autocomplete="tel" placeholder="0912345678"></div>' +
      '<div class="lv-field"><label for="lv-email">Email *</label>' +
      '<input id="lv-email" name="email" type="email" autocomplete="email" placeholder="an.nguyen@email.com"></div>' +
      '<label class="lv-consent"><input type="checkbox" data-lv="consent">' +
      '<span>Tôi đã đọc và đồng ý với <a href="' + PRIVACY_URL + '">Chính sách bảo mật</a> của website</span></label>' +
      '<div data-lv="alert"></div>' +
      '<button type="submit" class="lv-btn lv-btn-primary lv-submit" data-lv="submit">Gửi thông tin</button>' +
      '</form>' +
      '<p class="lv-note">Bạn có thể đóng cửa sổ này và tiếp tục đọc bài viết.</p>' +
      '</div></div>';

    document.body.appendChild(overlay);
    var prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(function () { overlay.classList.add('is-in'); });

    var box = overlay.querySelector('.lv-modal-box');
    var content = overlay.querySelector('[data-lv="content"]');
    var form = overlay.querySelector('[data-lv="form"]');
    var alertBox = overlay.querySelector('[data-lv="alert"]');
    var submitBtn = overlay.querySelector('[data-lv="submit"]');
    var consent = overlay.querySelector('[data-lv="consent"]');

    setTimeout(function () {
      var f = overlay.querySelector('#lv-hoten');
      if (f) f.focus();
    }, 320);

    function close(reason) {
      if (reason !== 'submitted') setLS(POPUP_KEY, String(Date.now()));
      overlay.classList.remove('is-in');
      document.removeEventListener('keydown', onKey);
      setTimeout(function () {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        document.body.style.overflow = prevOverflow;
      }, 300);
    }

    function onKey(e) { if (e.key === 'Escape') close('dismissed'); }
    document.addEventListener('keydown', onKey);

    overlay.querySelector('[data-lv="close"]').addEventListener('click', function () { close('dismissed'); });
    overlay.addEventListener('mousedown', function (e) {
      if (!box.contains(e.target)) close('dismissed');
    });

    function fieldError(input, msg) {
      input.classList.add('lv-invalid');
      var p = document.createElement('p');
      p.className = 'lv-err';
      p.textContent = msg;
      input.parentNode.appendChild(p);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      Array.prototype.forEach.call(form.querySelectorAll('.lv-err'), function (n) { n.remove(); });
      Array.prototype.forEach.call(form.querySelectorAll('.lv-invalid'), function (n) { n.classList.remove('lv-invalid'); });
      alertBox.innerHTML = '';

      var hoTen = form.querySelector('#lv-hoten');
      var phone = form.querySelector('#lv-phone');
      var email = form.querySelector('#lv-email');
      var hp = form.querySelector('#lv-website');
      var ok = true;

      if (!hoTen.value.trim()) { fieldError(hoTen, 'Vui lòng nhập họ tên của bạn.'); ok = false; }
      var phoneVal = phone.value.replace(/[\s.-]/g, '');
      if (!phoneVal) { fieldError(phone, 'Vui lòng nhập số điện thoại.'); ok = false; }
      else if (!PHONE_RE.test(phoneVal)) { fieldError(phone, 'Số điện thoại không hợp lệ (VD: 0912345678).'); ok = false; }
      if (!email.value.trim()) { fieldError(email, 'Vui lòng nhập email.'); ok = false; }
      else if (!EMAIL_RE.test(email.value.trim())) { fieldError(email, 'Email không hợp lệ.'); ok = false; }
      if (!consent.checked) {
        alertBox.innerHTML = '<div class="lv-alert">Vui lòng đồng ý với Chính sách bảo mật trước khi gửi.</div>';
        ok = false;
      }
      if (!ok) return;

      /* Bot điền vào ô ẩn: coi như xong, không gửi đi đâu cả */
      if (hp.value.trim() !== '') { showDone(); return; }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Đang gửi...';

      var body = new URLSearchParams();
      body.append('hoTen', hoTen.value.trim());
      body.append('soDienThoai', phoneVal);
      body.append('email', email.value.trim());
      body.append('tinhThanh', '');
      body.append('ghiChu', '');
      body.append('trangGui', window.location.pathname + ' [popup]');
      body.append('website', hp.value.trim()); // o bay bot, may chu se tu kiem tra

      fetch(ENDPOINT, { method: 'POST', mode: 'no-cors', body: body })
        .then(function () {
          setLS(POPUP_KEY, 'submitted');
          gtagSafe('event', 'generate_lead', {
            form_name: 'popup_luvia',
            page_path: window.location.pathname
          });
          showDone();
        })
        .catch(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Gửi thông tin';
          alertBox.innerHTML =
            '<div class="lv-alert">Không gửi được lúc này. Bạn thử lại sau ít phút hoặc liên hệ Luvia qua ' +
            '<a href="' + FANPAGE_URL + '" target="_blank" rel="noopener noreferrer">Fanpage</a>.</div>';
        });
    });

    function showDone() {
      setLS(POPUP_KEY, 'submitted');
      content.innerHTML =
        '<div class="lv-done"><div class="lv-done-icon">&#10003;</div>' +
        '<h2>Đã nhận thông tin của bạn</h2>' +
        '<p class="lv-sub">Luvia sẽ liên hệ trong vòng 24 giờ làm việc. Cảm ơn bạn đã quan tâm.</p>' +
        '<button type="button" class="lv-btn lv-btn-ghost" data-lv="done-close">Tiếp tục đọc</button></div>';
      var b = content.querySelector('[data-lv="done-close"]');
      if (b) b.addEventListener('click', function () { close('submitted'); });
      setTimeout(function () { close('submitted'); }, 6000);
    }
  }

  /* Hẹn giờ ngẫu nhiên, hoặc khi người đọc cuộn quá nửa trang (điều kiện nào đến trước) */
  function schedulePopup() {
    if (!popupAllowed()) return;

    var fired = false;
    function fire() {
      if (fired) return;
      fired = true;
      window.removeEventListener('scroll', onScroll);
      if (popupAllowed()) openPopup();
    }

    var delay = 20000 + Math.floor(Math.random() * 25000); /* 20s đến 45s */
    var timer = setTimeout(fire, delay);

    function onScroll() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0 && window.scrollY / h > 0.5) {
        clearTimeout(timer);
        fire();
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ------------------------------------ Nhúng trang Facebook (bấm mới tải) */
  var FB_PAGE = 'https://www.facebook.com/profile.php?id=100070111910232';

  /**
   * Chỉ gọi sang Facebook SAU KHI người dùng bấm, nên khi mới vào trang
   * website không gửi dữ liệu nào sang Facebook.
   */
  function loadFacebookEmbed(box) {
    if (box.getAttribute('data-lv-loaded') === '1') return;
    box.setAttribute('data-lv-loaded', '1');

    var src =
      'https://www.facebook.com/plugins/page.php?href=' +
      encodeURIComponent(FB_PAGE) +
      '&tabs=timeline&width=340&height=400&small_header=false' +
      '&adapt_container_width=true&hide_cover=false&show_facepile=true';

    var frame = document.createElement('iframe');
    frame.src = src;
    frame.title = 'Trang Facebook Luvia';
    frame.setAttribute('scrolling', 'no');
    frame.setAttribute('frameborder', '0');
    frame.setAttribute('allowfullscreen', 'true');
    frame.setAttribute('allow', 'clipboard-write; encrypted-media; picture-in-picture; web-share');
    frame.style.cssText = 'width:100%;height:400px;border:none;overflow:hidden;display:block;';

    box.innerHTML = '';
    box.appendChild(frame);
    gtagSafe('event', 'facebook_embed_load', { page_path: window.location.pathname });
  }

  /* Vẫn giữ xử lý bấm để phòng trường hợp khối được thêm vào sau khi trang tải */
  document.addEventListener('click', function (e) {
    var btn = e.target && e.target.closest ? e.target.closest('[data-lv-fb-embed]') : null;
    if (btn) {
      e.preventDefault();
      loadFacebookEmbed(btn.closest('[data-lv-fb-box]') || btn.parentElement);
    }
  });

  /**
   * Tự động tải khung Facebook khi khối cuộn tới gần khung nhìn.
   * Dùng IntersectionObserver để không tải ngay lúc mở trang (footer nằm cuối trang),
   * tránh làm chậm lần tải đầu.
   */
  function autoLoadFacebookEmbeds() {
    var boxes = document.querySelectorAll('[data-lv-fb-box]');
    if (!boxes.length) return;

    if (!('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(boxes, loadFacebookEmbed);
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            loadFacebookEmbed(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '300px' }
    );
    Array.prototype.forEach.call(boxes, function (b) { io.observe(b); });
  }

  /* ------------------------------------------- Mở lại lựa chọn cookie sau này */
  function openCookieSettings() {
    if (document.querySelector('.lv-cookie')) return;
    showCookieBanner(null);
  }

  /* Uỷ quyền sự kiện ở document: hoạt động cả khi link do React render sau này */
  document.addEventListener('click', function (e) {
    var t = e.target && e.target.closest ? e.target.closest('[data-lv-cookie-settings]') : null;
    if (t) {
      e.preventDefault();
      openCookieSettings();
    }
  });

  window.LuviaCookies = {
    open: openCookieSettings,
    getState: function () { return getLS(CONSENT_KEY); }
  };

  /* ------------------------------------------------------------------ init */
  function init() {
    var consent = getLS(CONSENT_KEY);
    if (!consent) {
      showCookieBanner(function () { schedulePopup(); });
    } else {
      applyConsent(consent);
      schedulePopup();
    }

    /* Trang React dựng footer sau khi tải, nên thử lại vài lần để bắt được khối */
    autoLoadFacebookEmbeds();
    var tries = 0;
    var retry = setInterval(function () {
      tries++;
      if (document.querySelector('[data-lv-fb-box]:not([data-lv-observed])')) {
        Array.prototype.forEach.call(
          document.querySelectorAll('[data-lv-fb-box]'),
          function (b) { b.setAttribute('data-lv-observed', '1'); }
        );
        autoLoadFacebookEmbeds();
      }
      if (tries >= 10) clearInterval(retry);
    }, 500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
