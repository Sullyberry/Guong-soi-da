import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Img } from "./Img";

export function Hero() {
  return (
    <section className="relative overflow-hidden md:min-h-screen bg-[var(--color-ivory)]">
      {/* Ảnh nền có sản phẩm - desktop (full-bleed) */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/san-pham/hero-bg.jpg')" }}
      />
      {/* Scrim ngang giúp chữ bên trái đọc rõ - desktop */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[var(--color-ivory)]/95 via-[var(--color-ivory)]/55 to-transparent" />

      {/* Ảnh dọc - mobile: hiển thị TRỌN theo tỷ lệ gốc (không crop, luôn thấy đủ sản phẩm) */}
      <Img
        src="/images/san-pham/hero-bg-mobile.jpg"
        alt="Gương thông minh AI Luvia trong không gian phòng tắm cao cấp"
        width={1080}
        height={2546}
        fetchPriority="high"
        className="md:hidden block w-full h-auto"
      />
      {/* Scrim sáng nhẹ cho vùng chữ phía trên - mobile */}
      <div className="md:hidden absolute inset-0 bg-[linear-gradient(to_bottom,rgba(252,250,247,0.6)_0%,rgba(252,250,247,0.12)_40%,transparent_58%)]" />

      {/* Nội dung chữ: đè lên phần trên (mobile) / căn giữa (desktop) */}
      <div className="absolute top-0 inset-x-0 md:relative z-10 max-w-[1024px] mx-auto w-full px-6 md:px-12 pt-40 pb-10 md:py-0 md:min-h-screen md:flex md:items-center">
        <div className="flex flex-col items-start text-left max-w-[540px]">
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
            className="editorial-h1 !text-[44px] md:!text-[80px] leading-[1.05] mb-8 md:mb-24"
          >
            HIỂU DA BẠN<br/>
            <span className="text-[var(--color-rose-gold)]" style={{ fontSize: "0.85em" }}>hơn chính bạn</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-[15px] md:text-[16px] text-[var(--color-espresso-muted)] leading-relaxed max-w-[440px] mb-8 md:mb-12"
          >
            Đừng đoán mò làn da. Gương thông minh AI Luvia phân tích chuyên sâu mụn, bã nhờn, độ ẩm và mức độ căng thẳng theo thời gian thực, mang đến liệu trình chăm sóc da lý tưởng được may đo hoàn hảo cho riêng bạn mỗi sớm mai.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-4 w-full sm:w-auto"
          >
            <button
              className="editorial-button w-full sm:w-fit justify-center sm:justify-between"
              onClick={() => {
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>ĐẶT TRƯỚC PHIÊN BẢN GENESIS</span>
              <span className="ml-5">→</span>
            </button>
            <div className="text-[10px] text-[var(--color-espresso-muted)]/80 uppercase tracking-wider mt-2">
              Chế tác giới hạn. Giao hàng dự kiến Tháng 12, 2026.
            </div>
          </motion.div>
        </div>
      </div>

      {/* Chỉ báo cuộn - desktop */}
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
