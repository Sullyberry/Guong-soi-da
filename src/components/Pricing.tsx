import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-32 relative flex justify-center px-12 border-t border-[var(--color-panel-border)] bg-[var(--color-bg-dark)]" ref={ref} id="pricing">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1024px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(236,220,214,0.6)_0%,transparent_70%)] pointer-events-none" />
      
      <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
         transition={{ duration: 0.8 }}
         className="max-w-[1024px] mx-auto w-full bg-[var(--color-panel)] border border-[var(--color-panel-border)] rounded-[4px] p-10 md:p-20 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-glow-blue to-transparent" />
        
        <div className="editorial-eyebrow mb-6 mt-4">Mảnh ghép hoàn hảo cho chu trình chăm sóc da.</div>
        <h2 className="editorial-h2 mb-6">Vẻ đẹp bắt đầu từ sự thấu hiểu</h2>
        <p className="text-[16px] text-white/60 leading-relaxed mb-12 max-w-xl mx-auto" style={{ width: "306px" }}>
          Hiểu rõ làn da để chọn đúng sản phẩm, tiết kiệm chi phí và chăm sóc hiệu quả hơn.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
          <div className="text-center md:text-right">
            <div className="text-white/40 line-through text-xl mb-2 font-serif">$399</div>
            <div className="editorial-h1 !text-7xl font-bold text-white">$199</div>
          </div>
          <div className="hidden md:block w-[1px] h-24 bg-[var(--color-panel-border)]" />
          <div className="text-center md:text-left flex flex-col gap-2">
            <div className="editorial-badge w-fit mx-auto md:mx-0">Độc bản Ưu đãi Sớm</div>
            <div className="text-[14px] text-white/60">Giới hạn 500 slot đặt trước.</div>
            <div className="text-[14px] text-white/60 mt-1">Giao hàng dự kiến: Tháng 12, 2026.</div>
          </div>
        </div>

        <button className="editorial-button">
          ĐẶT HÀNG NGAY
        </button>
        <div className="editorial-label mt-8 text-white/30">
          Đảm bảo hoàn tiền trong 30 ngày. Miễn phí vận chuyển toàn cầu.
        </div>
      </motion.div>
    </section>
  );
}
