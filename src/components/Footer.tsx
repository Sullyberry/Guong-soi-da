import React from "react";
import { Logo } from "./Logo";

interface FooterProps {
  onViewChange?: (view: 'home' | 'product' | 'about') => void;
}

export function Footer({ onViewChange }: FooterProps) {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
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

  const handlePageClick = (e: React.MouseEvent<HTMLAnchorElement>, view: 'home' | 'product' | 'about') => {
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
          <button 
            onClick={() => {
              if (onViewChange) {
                onViewChange('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="mb-6 p-0 border-none bg-transparent cursor-pointer block text-left"
          >
            <Logo className="w-25 h-25" />
          </button>
          <div className="text-[14px] text-white/50 leading-relaxed">
            Tuyệt tác gương thông minh giải mã tương lai của làn da.
          </div>
        </div>
        
        <div>
          <div className="editorial-label mb-6">Khám phá</div>
          <ul className="flex flex-col gap-4 text-[13px] text-white/60 list-none m-0 p-0">
            <li>
              <a href="#features" onClick={(e) => handleAnchorClick(e, 'features')} className="footer-link" title="Công nghệ phân tích da AI">Công nghệ & Khoa học</a>
            </li>
            <li>
              <a href="#how-it-works" onClick={(e) => handleAnchorClick(e, 'how-it-works')} className="footer-link" title="Gương soi thông minh Luvia">Gương thông minh</a>
            </li>
            <li>
              <a href="#pricing" onClick={(e) => handleAnchorClick(e, 'pricing')} className="footer-link" title="Đặt mua sản phẩm Luvia">Sản phẩm & Đặt hàng</a>
            </li>
          </ul>
        </div>

        <div>
          <div className="editorial-label mb-6">Kết nối</div>
          <ul className="flex flex-col gap-4 text-[13px] text-white/60 list-none m-0 p-0">
            <li>
              <a href="https://news.luvia.ai" target="_blank" rel="noopener noreferrer" className="footer-link" title="Bản tin công nghệ Luvia">Tin tức công nghệ</a>
            </li>
            <li>
              <a href="#" onClick={(e) => handlePageClick(e, 'about')} className="footer-link" title="Câu chuyện phát triển Luvia Labs">Về Luvia Labs</a>
            </li>
            <li>
              <a href="https://news.luvia.ai" target="_blank" rel="noopener noreferrer" className="footer-link" title="Báo cáo & Truyền thông mới nhất">Tòa soạn & Truyền thông</a>
            </li>
          </ul>
        </div>

        <div>
          <div className="editorial-label mb-6">Hỗ trợ & Pháp lý</div>
          <ul className="flex flex-col gap-4 text-[13px] text-white/60 list-none m-0 p-0">
            <li>
              <a href="#faq" onClick={(e) => handleAnchorClick(e, 'faq')} className="footer-link" title="Câu hỏi thường gặp và giải đáp thắc mắc">Hỏi đáp (FAQs)</a>
            </li>
            <li>
              <a href="#" onClick={(e) => handlePageClick(e, 'about')} className="footer-link" title="Chính sách bảo mật thông tin khách hàng">Chính sách Bảo mật</a>
            </li>
            <li>
              <a href="#" onClick={(e) => handlePageClick(e, 'about')} className="footer-link" title="Chính sách bảo hành và đổi trả sản phẩm Luvia">Chính sách Đổi trả</a>
            </li>
            <li>
              <a href="#" onClick={(e) => handlePageClick(e, 'about')} className="footer-link" title="Chính sách bảo hành sản phẩm thông minh Luvia">Chính sách Bảo hành</a>
            </li>
            <li>
              <a href="#" onClick={(e) => handlePageClick(e, 'about')} className="footer-link" title="Điều khoản sử dụng gương thông minh Luvia">Điều khoản Sử dụng</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1024px] mx-auto border-t border-[var(--color-panel-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="editorial-label !text-[10px]">
          © 2026 Luvia AI. Bảo lưu mọi bản quyền.
        </div>
        <div className="editorial-label !text-[10px]">
          Kiến tạo cho tương lai.
        </div>
      </div>
    </footer>
  );
}
