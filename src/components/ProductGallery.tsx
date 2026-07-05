import { motion, useInView } from "motion/react";
import { useRef } from "react";

const gallery = [
  { src: "/images/san-pham/gallery-1.jpg", alt: "Gương thông minh Luvia - góc chính diện" },
  { src: "/images/san-pham/gallery-2.jpg", alt: "Chi tiết khung Rose Gold của gương Luvia" },
  { src: "/images/san-pham/gallery-3.jpg", alt: "Khay tinh chất và khay xuất mặt nạ" },
  { src: "/images/san-pham/gallery-4.jpg", alt: "Gương Luvia trong không gian sống" },
];

export function ProductGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-24 max-w-[1024px] mx-auto px-6 md:px-12" id="gallery" ref={ref}>
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="editorial-eyebrow mb-4"
        >
          Thư viện hình ảnh
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="editorial-h2"
        >
          Chiêm ngưỡng LUVIA <span className="text-white/40">từ mọi góc nhìn</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {gallery.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group overflow-hidden rounded-[6px] border border-[var(--color-panel-border)] aspect-square"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
