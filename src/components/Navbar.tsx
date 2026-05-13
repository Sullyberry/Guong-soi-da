import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div className="max-w-[1024px] mx-auto px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-glow-blue to-glow-purple flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-extrabold text-[20px] tracking-[4px] uppercase">Lumina AI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <a href="#features" className="editorial-nav-link">Công nghệ</a>
          <a href="#how-it-works" className="editorial-nav-link">Cách hoạt động</a>
          <a href="#testimonials" className="editorial-nav-link">Đánh giá</a>
        </div>

        <button className="editorial-nav-link border-b border-white pb-0.5 hover:text-white" style={{ borderBottomWidth: '1px' }}>
          CART (0)
        </button>
      </div>
    </motion.header>
  );
}
