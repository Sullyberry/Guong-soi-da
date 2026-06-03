import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className="py-32 bg-[var(--color-bg-dark)] relative" id="problem">
      <div className="max-w-[1024px] mx-auto px-12 text-center" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="editorial-h2 text-white/40 mb-8"
        >
          Bạn đang chọn sản phẩm dưỡng da <br className="hidden md:block" />
          <span className="text-white">theo cảm tính?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[16px] text-white/60 leading-relaxed max-w-2xl mx-auto"
        >
          Làn da thay đổi mỗi ngày do <span className="text-white/90">thời tiết, giấc ngủ, stress</span> và <span className="text-white/90">hoóc-môn.</span>
          <br /><br />
          Đừng chăm sóc da theo cảm tính, hãy để công nghệ giúp thấu hiểu làn da của bạn.
        </motion.p>
      </div>
    </section>
  );
}
