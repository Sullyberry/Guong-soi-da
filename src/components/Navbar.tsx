import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/src/lib/utils";
import { Logo } from "./Logo";

interface NavbarProps {
  currentView: 'home' | 'product' | 'about' | 'news';
  onViewChange: (view: 'home' | 'product' | 'about' | 'news') => void;
}

export function Navbar({ currentView, onViewChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Trang chủ', title: 'Trang chủ LUVIA' },
    { id: 'product', label: 'Sản phẩm', title: 'Chi tiết Gương thông minh Luvia AI' },
    { id: 'about', label: 'Giới thiệu', title: 'Về chúng tôi - Triết lý và Hành trình' },
    { id: 'news', label: 'Tin tức', title: 'Tin tức và Xu hướng công nghệ' },
  ] as const;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-[var(--color-bg-dark)]/90 backdrop-blur-xl border-b border-[var(--color-panel-border)] py-4" : "bg-transparent py-8"
      )}
    >
      <div className="max-w-[1024px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <button 
          onClick={() => onViewChange('home')} 
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
                    currentView === item.id ? "text-[var(--color-brand)] font-semibold" : "text-white/60 hover:text-[var(--color-brand)]"
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

        <button className="editorial-nav-link border-b border-white pb-0.5 hover:text-white cursor-pointer bg-transparent border-none" style={{ borderBottomWidth: '1px' }}>
          GIỎ HÀNG (0)
        </button>
      </div>
    </motion.header>
  );
}
