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

        {/* Mirror Mockup mimicking the Design HTML */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="hidden md:flex absolute right-[-50px] top-[120px] w-[600px] h-[700px] bg-gradient-to-br from-white/95 to-white/60 rounded-t-[300px] border border-white/80 backdrop-blur-[20px] shadow-[0_30px_100px_rgba(160,98,76,0.12)] justify-center items-start pt-[80px]"
        >
          <div className="w-[340px] h-[460px] border border-dashed border-[var(--color-rose-gold)]/50 rounded-[170px] relative bg-[radial-gradient(circle_at_center,rgba(252,250,247,0.8)_0%,transparent_80%)]">
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brand)] to-transparent absolute top-[40%] shadow-[0_0_15px_rgba(160,98,76,0.25)] animate-pulse" />
            
            <div className="absolute top-[20%] right-[-60px] bg-white/95 border border-[var(--color-panel-border)] shadow-sm p-3 px-4 rounded-[4px] flex flex-col gap-[2px] font-mono text-[10px]">
              <span className="editorial-label !text-[8px] text-[var(--color-brand)] font-bold">ĐỘ ẨM LÀN DA</span>
              <span className="text-[var(--color-brand)] font-bold text-[14px]">82% Đạt Chuẩn</span>
            </div>
            
            <div className="absolute top-[50%] left-[-80px] bg-white/95 border border-[var(--color-panel-border)] shadow-sm p-3 px-4 rounded-[4px] flex flex-col gap-[2px] font-mono text-[10px]">
              <span className="editorial-label !text-[8px] text-[var(--color-brand)] font-bold">LỖ CHÂN LÔNG</span>
              <span className="text-[var(--color-brand)] font-bold text-[14px]">-12% Se Nhỏ</span>
            </div>
            
            <div className="absolute bottom-[20%] right-[-40px] bg-white/95 border border-[var(--color-panel-border)] shadow-sm p-3 px-4 rounded-[4px] flex flex-col gap-[2px] font-mono text-[10px]">
              <span className="editorial-label !text-[8px] text-[var(--color-brand)] font-bold">CHỈ SỐ CĂNG THẲNG</span>
              <span className="text-[var(--color-brand)] font-bold text-[14px]">Êm dịu (Cấp độ 2)</span>
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
