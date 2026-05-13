import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export function Trust() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-24 max-w-[1024px] mx-auto px-12" id="testimonials" ref={ref}>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Certifications/Endorsement */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
           transition={{ duration: 0.8 }}
           className="relative aspect-square md:aspect-auto md:h-[500px] rounded-[4px] bg-[var(--color-panel)] border border-[var(--color-panel-border)] p-10 flex flex-col justify-between overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-glow-blue/5 blur-[80px] group-hover:bg-glow-blue/10 transition-colors duration-700" />
          <div className="relative z-10">
            <ShieldCheck className="w-10 h-10 text-white/40 mb-8" />
            <h3 className="editorial-h2 !text-4xl text-white mb-6">Được tin dùng bởi các Bác sĩ Da liễu hàng đầu.</h3>
            <p className="text-[14px] leading-relaxed text-white/60 max-w-sm">
              "AI Smart Skin Mirror thay thế hoàn toàn máy soi da cồng kềnh tại clinic. Độ chính xác lên tới 98% trên 10,000+ mẫu lâm sàng."
            </p>
          </div>
          <div className="flex items-center gap-4 mt-8 relative z-10 border-t border-[var(--color-panel-border)] pt-6">
            <div className="w-12 h-12 bg-white/10 shrink-0" />
            <div>
              <div className="text-[14px] font-bold text-white tracking-widest uppercase mb-1">Dr. Elena Rostova</div>
              <div className="editorial-label">Giám đốc Viện Da liễu Quốc tế</div>
            </div>
          </div>
        </motion.div>

        {/* Right: Technical Specs */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="editorial-eyebrow mb-4">Thông số kỹ thuật</h2>
          <h3 className="editorial-h2 mb-10">Phần cứng đẳng cấp.<br/><span className="text-white/40">Hoàn thiện tỉ mỉ.</span></h3>
          
          <div className="space-y-6">
            {[
              "Màn hình viền siêu mỏng OLED 15.6 inch",
              "Công nghệ kính AR chống đọng hơi nước",
              "Hệ thống Camera Micro-Lens 4K sắc nét",
              "Cảm biến nhiệt độ & phân tích độ ẩm môi trường",
              "Chip xử lý AI Neural Engine thế hệ 2"
            ].map((spec, i) => (
              <div key={i} className="flex gap-4 items-center border-b border-[var(--color-panel-border)] pb-6">
                <CheckCircle2 className="w-5 h-5 text-glow-blue shrink-0 opacity-80" />
                <span className="text-[14px] text-white/80">{spec}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
