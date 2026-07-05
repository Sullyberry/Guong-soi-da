import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-start md:items-center pt-32 md:pt-20 overflow-hidden">
      {/* Ảnh nền có sản phẩm - desktop */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/san-pham/hero-bg.jpg')" }}
      />
      {/* Ảnh nền - mobile (crop quanh sản phẩm) */}
      <div
        className="md:hidden absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/san-pham/hero-bg-mobile.jpg')" }}
      />
      {/* Lớp scrim giúp chữ luôn đọc rõ: dọc trên mobile, ngang trên desktop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-ivory)]/95 via-[var(--color-ivory)]/45 to-transparent md:bg-gradient-to-r md:from-[var(--color-ivory)]/95 md:via-[var(--color-ivory)]/60 md:to-transparent" />

      <div className="max-w-[1024px] mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col items-start text-left max-w-[540px]">
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
            <span className="text-[var(--color-rose-gold)]">Perfected</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-[16px] text-[var(--color-espresso-muted)] leading-relaxed max-w-[400px] mb-12"
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
            <div className="text-[10px] text-[var(--color-espresso-muted)]/80 uppercase tracking-wider mt-2">
              Chế tác giới hạn. Giao hàng mùa thu 2026.
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="hidden md:flex absolute bottom-10 left-12 flex-col items-start gap-2 text-[var(--color-espresso-muted)] z-10"
      >
        <span className="text-[10px] uppercase tracking-widest">Cuộn để khám phá</span>
        <ChevronDown className="w-4 h-4 animate-bounce shrink-0" />
      </motion.div>
    </section>
  );
}
