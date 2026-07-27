import React from "react";
import { Logo } from "./Logo";

interface FooterProps {
  onViewChange?: (view: 'home' | 'product' | 'about' | 'news') => void;
}

export function Footer({ onViewChange }: FooterProps) {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // Giữ hành vi mặc định khi người dùng muốn mở tab mới
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (onViewChange) {
      e.preventDefault();
      onViewChange('product');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Fallback to scrolling page to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handlePageClick = (e: React.MouseEvent<HTMLAnchorElement>, view: 'home' | 'product' | 'about' | 'news') => {
    // Giữ hành vi mặc định khi người dùng muốn mở tab mới
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (onViewChange) {
      e.preventDefault();
      onViewChange(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-[var(--color-panel-border)] bg-[var(--color-panel)] py-12 px-12">
      <div className="max-w-[1024px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2 md:col-span-1">
          <a
            href="/"
            onClick={(e) => handlePageClick(e, 'home')}
            className="mb-6 cursor-pointer block text-left"
            title="Về trang chủ Luvia"
          >
            <Logo className="w-25 h-25" />
          </a>
          <div className="text-[14px] text-[var(--color-espresso-muted)] leading-relaxed mb-6">
            Tuyệt tác gương thông minh giải mã tương lai của làn da.
          </div>

          {/* Trang Facebook: chỉ tải nội dung từ Facebook sau khi người dùng bấm */}
          <div className="lv-fb-box" data-lv-fb-box="">
            <button type="button" data-lv-fb-embed="" className="lv-fb-btn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9.5 21v-7H7v-3h2.5V8.5C9.5 6 11 4.7 13.2 4.7c1.06 0 2.17.19 2.17.19V7.3h-1.2c-1.2 0-1.57.74-1.57 1.5V11H15l-.44 3h-2.35v7z" />
              </svg>
              <strong>Trang Facebook Luvia</strong>
              <span>Bấm nếu nội dung chưa hiển thị</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100070111910232"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fanpage Facebook Luvia"
              title="Fanpage Facebook Luvia"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/30 text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-[var(--color-ivory)] hover:border-[var(--color-brand)] transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor" aria-hidden="true">
                <path d="M9.5 21v-7H7v-3h2.5V8.5C9.5 6 11 4.7 13.2 4.7c1.06 0 2.17.19 2.17.19V7.3h-1.2c-1.2 0-1.57.74-1.57 1.5V11H15l-.44 3h-2.35v7z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@luviabeautytech?_r=1&_t=ZS-97heWj7tLNM"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Luvia"
              title="TikTok Luvia"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/30 text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-[var(--color-ivory)] hover:border-[var(--color-brand)] transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor" aria-hidden="true">
                <path d="M16.6 5.82a4.3 4.3 0 0 1-1.06-2.82h-3.2v12.9a2.34 2.34 0 0 1-2.34 2.28 2.34 2.34 0 1 1 .73-4.57V8.3a5.56 5.56 0 0 0-.73-.05A5.55 5.55 0 1 0 15.5 14.4V9.01a7.5 7.5 0 0 0 4.37 1.4V7.2a4.3 4.3 0 0 1-3.27-1.38z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <div className="editorial-label mb-6">Khám phá</div>
          <ul className="flex flex-col gap-4 text-[13px] text-[var(--color-espresso-muted)] list-none m-0 p-0">
            <li>
              <a href="/san-pham/#features" onClick={(e) => handleAnchorClick(e, 'features')} className="footer-link" title="Công nghệ phân tích da AI">Công nghệ & Khoa học</a>
            </li>
            <li>
              <a href="/san-pham/#how-it-works" onClick={(e) => handleAnchorClick(e, 'how-it-works')} className="footer-link" title="Gương soi thông minh Luvia">Gương thông minh</a>
            </li>
            <li>
              <a href="/san-pham/#pricing" onClick={(e) => handleAnchorClick(e, 'pricing')} className="footer-link" title="Đặt mua sản phẩm Luvia">Sản phẩm & Đặt hàng</a>
            </li>
          </ul>
        </div>

        <div>
          <div className="editorial-label mb-6">Kết nối</div>
          <ul className="flex flex-col gap-4 text-[13px] text-[var(--color-espresso-muted)] list-none m-0 p-0">
            <li>
              <a href="/tin-tuc/" onClick={(e) => handlePageClick(e, 'news')} className="footer-link" title="Bản tin khoa học da liễu Luvia">Tin tức & Xu hướng</a>
            </li>
            <li>
              <a href="/gioi-thieu/" onClick={(e) => handlePageClick(e, 'about')} className="footer-link" title="Câu chuyện phát triển LUVIA">Về LUVIA</a>
            </li>
            <li>
              <a href="/tin-tuc/" onClick={(e) => handlePageClick(e, 'news')} className="footer-link" title="Báo cáo & Sưu tập tài liệu mới nhất">Tòa soạn & Insights</a>
            </li>
          </ul>
        </div>

        <div>
          <div className="editorial-label mb-6">Hỗ trợ & Pháp lý</div>
          <ul className="flex flex-col gap-4 text-[13px] text-[var(--color-espresso-muted)] list-none m-0 p-0">
            <li>
              <a href="/san-pham/#faq" onClick={(e) => handleAnchorClick(e, 'faq')} className="footer-link" title="Câu hỏi thường gặp và giải đáp thắc mắc">Hỏi đáp (FAQs)</a>
            </li>
            <li>
              <a href="/privacy/" className="footer-link" title="Chính sách bảo mật thông tin khách hàng">Chính sách Bảo mật</a>
            </li>
            <li>
              <a href="/terms/#doi-tra" className="footer-link" title="Chính sách bảo hành và đổi trả sản phẩm Luvia">Chính sách Đổi trả</a>
            </li>
            <li>
              <a href="/terms/#doi-tra" className="footer-link" title="Chính sách bảo hành sản phẩm thông minh Luvia">Chính sách Bảo hành</a>
            </li>
            <li>
              <a href="/terms/" className="footer-link" title="Điều khoản sử dụng gương thông minh Luvia">Điều khoản Sử dụng</a>
            </li>
            <li>
              <a href="#" data-lv-cookie-settings className="footer-link" title="Thay đổi lựa chọn cookie của bạn">Cài đặt Cookie</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1024px] mx-auto border-t border-[var(--color-panel-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <div className="editorial-label !text-[10px]">© Luvia All Rights Reserved</div>
          <a
            href="/san-pham/"
            onClick={(e) => handlePageClick(e, 'product')}
            className="footer-link !text-[11px]"
            title="Chi tiết Gương thông minh AI Luvia"
          >
            Gương thông minh AI Luvia
          </a>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://www.dmca.com/Protection/Status.aspx?ID=e69a4a6d-3648-4c74-ad79-4c732d2054b5&refurl=https://luvia.id.vn/"
            title="DMCA.com Protection Status"
            target="_blank"
            rel="noopener noreferrer"
            className="dmca-badge inline-flex"
          >
            <img
              src="https://images.dmca.com/Badges/dmca-badge-w100-2x1-04.png?ID=e69a4a6d-3648-4c74-ad79-4c732d2054b5"
              alt="DMCA.com Protection Status"
              width={100}
              height={50}
              loading="lazy"
              className="block h-[26px] w-auto opacity-85 transition-opacity hover:opacity-100"
            />
          </a>
          <div className="editorial-label !text-[10px]">Kiến tạo cho tương lai.</div>
        </div>
      </div>
    </footer>
  );
}
