import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { Logo } from "./Logo";

interface NavbarProps {
  currentView: 'home' | 'product' | 'about' | 'news';
  onViewChange: (view: 'home' | 'product' | 'about' | 'news') => void;
}

export function Navbar({ currentView, onViewChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Khóa cuộn trang khi menu mobile đang mở
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navItems = [
    { id: 'home', label: 'Trang chủ', title: 'Trang chủ LUVIA' },
    { id: 'product', label: 'Sản phẩm', title: 'Chi tiết Gương thông minh AI Luvia' },
    { id: 'about', label: 'Giới thiệu', title: 'Về chúng tôi - Triết lý và Hành trình' },
    { id: 'news', label: 'Tin tức', title: 'Tin tức và Xu hướng công nghệ' },
  ] as const;

  const handleMobileNav = (id: 'home' | 'product' | 'about' | 'news') => {
    onViewChange(id);
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || mobileOpen
          ? "bg-[var(--color-bg-dark)]/95 backdrop-blur-xl border-b border-[var(--color-panel-border)]"
          : "bg-transparent",
        scrolled ? "py-4" : "py-8"
      )}
    >
      <div className="max-w-[1024px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <button
          onClick={() => {
            onViewChange('home');
            setMobileOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="cursor-pointer flex items-center bg-transparent border-none p-0"
          title="Về Trang chủ Luvia"
        >
          <Logo className="w-25 h-25" />
        </button>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onViewChange(item.id as any)}
                  className={cn(
                    "editorial-nav-link relative py-1 cursor-pointer bg-transparent border-none font-medium text-[11px] tracking-widest uppercase",
                    currentView === item.id ? "text-[var(--color-brand)] font-semibold" : "text-[var(--color-espresso-muted)] hover:text-[var(--color-brand)]"
                  )}
                  title={item.title}
                >
                  {item.label}
                  {currentView === item.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[var(--color-brand)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button className="hidden md:inline-block editorial-nav-link border-b border-[var(--color-espresso)]/50 pb-0.5 hover:text-[var(--color-espresso)] cursor-pointer bg-transparent" style={{ borderBottomWidth: '1px' }}>
          GIỎ HÀNG (0)
        </button>

        {/* Nút hamburger - chỉ hiển thị trên mobile */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-10 h-10 -mr-2 bg-transparent border-none cursor-pointer text-[var(--color-espresso)]"
          aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu mobile xổ xuống */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden"
            aria-label="Menu điều hướng di động"
          >
            <ul className="flex flex-col list-none m-0 px-6 pt-6 pb-4 gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleMobileNav(item.id as any)}
                    className={cn(
                      "w-full text-left py-4 px-2 bg-transparent border-none border-b border-[var(--color-panel-border)] cursor-pointer text-[15px] tracking-wide uppercase font-medium transition-colors",
                      currentView === item.id ? "text-[var(--color-brand)]" : "text-[var(--color-espresso-muted)] hover:text-[var(--color-brand)]"
                    )}
                    title={item.title}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="mt-4">
                <button className="w-full editorial-nav-link text-center py-3 rounded-full border border-[var(--color-espresso)]/40 text-[var(--color-espresso)] bg-transparent cursor-pointer">
                  GIỎ HÀNG (0)
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
