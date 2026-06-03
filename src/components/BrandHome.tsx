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
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="editorial-badge bg-[#ECDCD6] text-[#A0624C] border border-[#A0624C]/20 mb-8"
        >
          PREMIUM CES INNOVATION RECIPIENT
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[44px] md:text-[84px] font-light tracking-tighter leading-none text-[#241C1B] mb-8 uppercase font-display"
        >
          <span>Your self,</span><br/>
          <span className="text-[#241C1B]/30 italic">Perfected</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-[17px] text-[#241C1B]/70 leading-relaxed max-w-[500px] mb-12"
        >
          Chào mừng tới thế giới gương thông minh độc bản LUVIA. Nơi tích hợp công nghệ phân tích da y đức ngoại tuyến, thấu cảm nhịp sinh học làn da và tinh chỉnh routine chăm sóc mỗi sáng trở nên hoàn mỹ.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-[480px]"
        >
          <button 
            onClick={onNavigateToProduct}
            className="editorial-button flex-1 justify-center align-middle py-4"
          >
            <span>Trải nghiệm sản phẩm</span>
            <span className="ml-4">→</span>
          </button>
          
          <button 
            onClick={onNavigateToAbout}
            className="editorial-button-outline flex-1 py-4 text-[#241C1B]"
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
