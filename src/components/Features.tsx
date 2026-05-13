import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ScanFace, Droplets, Activity, Smartphone, MoonStar } from "lucide-react";
import { cn } from "@/src/lib/utils";

const features = [
  {
    title: "Phân tích 6 chỉ số da",
    description: "AI quét bề mặt phát hiện mụn, dầu thừa, lỗ chân lông, thâm nám và độ ẩm theo thời gian thực.",
    icon: ScanFace,
    className: "md:col-span-2 bg-[var(--color-panel)] border border-[var(--color-panel-border)]",
  },
  {
    title: "Chăm sóc cá nhân hoá",
    description: "Đề xuất sản phẩm và các bước dưỡng vừa vặn với ngày hôm nay.",
    icon: Droplets,
    className: "bg-transparent border border-[var(--color-panel-border)]",
  },
  {
    title: "Theo dõi chu kỳ",
    description: "Xem lại biểu đồ cải thiện sau 7, 30 và 90 ngày sử dụng.",
    icon: Activity,
    className: "bg-transparent border border-[var(--color-panel-border)]",
  },
  {
    title: "Đồng bộ Lifestyle",
    description: "Kết nối dữ liệu giấc ngủ, nhịp tim từ smartwatch để dự báo tình trạng da.",
    icon: MoonStar,
    className: "md:col-span-2 bg-[var(--color-panel)] border border-[var(--color-panel-border)]",
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-24 max-w-[1024px] mx-auto px-12" id="features">
      <div className="mb-16 text-center max-w-3xl mx-auto" ref={ref}>
        <motion.div
           initial={{ opacity: 0 }}
           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
           className="editorial-eyebrow mb-4"
        >
           Precision Science.
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="editorial-h2 mb-6"
        >
          Công nghệ tiên phong. <br />
          <span className="text-white/40">Chỉ trong một cái nhìn.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[16px] text-white/60 leading-relaxed max-w-2xl mx-auto"
        >
          Trang bị camera 4K siêu cận và cảm biến ánh sáng phức hợp, AI Smart Skin Mirror thấu hiểu làn da bạn sâu hơn những gì mắt thường có thể thấy.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={cn(
              "p-10 group relative overflow-hidden flex flex-col justify-between items-start",
              feature.className
            )}
          >
            <feature.icon className="w-8 h-8 text-glow-blue mb-8 opacity-80" />
            <div>
              <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">{feature.title}</h3>
              <p className="text-[14px] leading-relaxed text-white/60">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
