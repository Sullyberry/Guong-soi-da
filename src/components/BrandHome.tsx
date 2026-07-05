import React from "react";
import { motion } from "motion/react";

interface BrandHomeProps {
  onNavigateToProduct: () => void;
  onNavigateToAbout: () => void;
}

export function BrandHome({ onNavigateToProduct, onNavigateToAbout }: BrandHomeProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[radial-gradient(ellipse_at_center,#ECDCD6_0%,#FCFAF7_80%)]">
      <div className="absolute inset-0 bg-grid-white bg-[size:50px_50px] opacity-60" />
      
      <div className="max-w-[1024px] mx-auto px-12 relative z-10 w-full text-center py-20 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[44px] md:text-[80px] font-light tracking-tighter leading-[1.05] text-[#241C1B] mb-12 font-display"
        >
          HIỂU DA BẠN<br/>
          <span className="text-[var(--color-rose-gold)]" style={{ fontSize: "0.85em" }}>hơn chính bạn</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-[17px] text-[#241C1B]/70 leading-relaxed max-w-[500px] mb-12"
        >
          Chào mừng tới thế giới gương thông minh phân tích da cao cấp từ LUVIA. Ứng dụng công nghệ soi da và phân tích da mặt bằng AI, gương sẽ tự động đo độ ẩm da, xác định sợi bã nhờn, nhân mụn ẩn và tối ưu hóa quy trình skincare routine cá nhân hóa hàng ngày của bạn ngay tại nhà.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-[480px]"
        >
          <button 
            onClick={onNavigateToProduct}
            className="editorial-button flex-1 justify-center align-middle py-0 h-[57px]"
          >
            <span className="inline-flex items-center justify-center w-[120px] h-[40px] text-[11px] text-center font-normal">Trải nghiệm sản phẩm</span>
            <span className="ml-4">→</span>
          </button>
          
          <button 
            onClick={onNavigateToAbout}
            className="editorial-button-outline flex-1 py-4 text-[#241C1B] text-[11px]"
          >
            Sứ mệnh LUVIA
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="mt-16 text-[10px] uppercase font-mono tracking-widest text-[#241C1B]/40"
        >
          Chế tác thủ công giới hạn &middot; Swiss Design &middot; Luvia OS.
        </motion.div>
      </div>
    </section>
  );
}
