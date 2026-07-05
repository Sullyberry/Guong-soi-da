import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[radial-gradient(ellipse_at_30%_50%,#ECDCD6_0%,#FCFAF7_70%)]">
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white bg-[size:50px_50px]" />
      
      <div className="max-w-[1024px] mx-auto px-12 relative z-10 w-full flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex flex-col items-start text-left max-w-[500px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="editorial-badge mb-8"
          >
            Vinh danh Giải thưởng Sáng tạo CES 2024
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="editorial-eyebrow mb-4"
          >
            Khơi mở tương lai làn da của bạn.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="editorial-h1 mb-8 uppercase"
          >
            <span>Your self,</span><br/>
            <span className="text-white/40">Perfected</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-[16px] text-white/60 leading-relaxed max-w-[380px] mb-12"
          >
            Đừng đoán mò làn da. Gương thông minh Luvia AI phân tích chuyên sâu mụn, bã nhờn, độ ẩm và mức độ căng thẳng theo thời gian thực, mang đến liệu trình chăm sóc da lý tưởng được may đo hoàn hảo cho riêng bạn mỗi sớm mai.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-4 w-full sm:w-auto"
          >
            <button 
              className="editorial-button w-fit"
              onClick={() => {
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>ĐẶT TRƯỚC PHIÊN BẢN GENESIS</span>
              <span className="ml-5">→</span>
            </button>
            <div className="text-[10px] text-white/30 text-center uppercase tracking-wider mt-2">
              Chế tác giới hạn. Giao hàng mùa thu 2026.
            </div>
          </motion.div>
        </div>

        {/* Product image (responsive, hiện cả trên mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-[360px] mt-16 md:mt-0 md:w-[44%] shrink-0"
        >
          <div className="relative overflow-hidden rounded-[20px] border border-white/70 shadow-[0_30px_100px_rgba(160,98,76,0.15)] bg-white">
            <img
              src="/images/san-pham/hero.jpg"
              alt="Gương thông minh Luvia AI phân tích da"
              loading="eager"
              className="w-full h-auto block"
            />

            {/* Chip chỉ số overlay */}
            <div className="absolute top-4 right-4 bg-white/95 border border-[var(--color-panel-border)] shadow-sm py-2 px-3 rounded-[4px] flex flex-col gap-[2px] font-mono">
              <span className="editorial-label !text-[8px] text-[var(--color-brand)] font-bold">ĐỘ ẨM LÀN DA</span>
              <span className="text-[var(--color-brand)] font-bold text-[13px]">82% Đạt Chuẩn</span>
            </div>
            <div className="absolute bottom-4 left-4 bg-white/95 border border-[var(--color-panel-border)] shadow-sm py-2 px-3 rounded-[4px] flex flex-col gap-[2px] font-mono">
              <span className="editorial-label !text-[8px] text-[var(--color-brand)] font-bold">LỖ CHÂN LÔNG</span>
              <span className="text-[var(--color-brand)] font-bold text-[13px]">-12% Se Nhỏ</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-12 flex flex-col items-start gap-2 text-white/40"
        >
          <span className="text-[10px] uppercase tracking-widest">Cuộn để khám phá</span>
          <ChevronDown className="w-4 h-4 animate-bounce shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
