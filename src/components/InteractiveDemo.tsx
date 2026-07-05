import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

export function InteractiveDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setScanning(true), 1000);
    }
  }, [isInView]);

  return (
    <section className="py-32 bg-[var(--color-bg-deep)] relative overflow-hidden" id="how-it-works">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-[1024px] mx-auto px-12 grid md:grid-cols-2 gap-16 items-center" ref={ref}>
        {/* Left: Ảnh AI phân tích da thật */}
        <div className="relative aspect-[3/4] max-w-sm mx-auto w-full rounded-[16px] overflow-hidden border border-[var(--color-panel-border)] shadow-2xl">
          <img
            src="/images/san-pham/phan-tich.jpg"
            alt="AI tự động quét và phân tích da mặt trên gương Luvia mỗi sáng"
            loading="lazy"
            className="w-full h-full object-cover"
          />

          {/* Hiệu ứng quét laser overlay trên ảnh */}
          {scanning && (
            <motion.div
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="absolute left-0 w-full h-[2px] bg-glow-blue shadow-[0_0_15px_#00f0ff] z-10"
            />
          )}
        </div>

        {/* Right: Text */}
        <div>
          <motion.div
             initial={{ opacity: 0 }}
             animate={isInView ? { opacity: 1 } : { opacity: 0 }}
             className="editorial-eyebrow mb-4"
          >
             Tương tác Vô hình.
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8 }}
            className="editorial-h2 mb-8"
            style={{ textAlign: "left", width: "444px", maxWidth: "100%" }}
          >
            Phân tích da tự động mỗi sáng <br />
          </motion.h2>
          <motion.div
             initial={{ opacity: 0 }}
             animate={isInView ? { opacity: 1 } : { opacity: 0 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="space-y-6 text-[16px] text-white/60 leading-relaxed"
          >
            <p>
              Chỉ cần đứng trước gương. Các cảm biến quang học tiên tiến sẽ tự kích hoạt, chụp và phân tích sâu các tầng biểu bì trên da mà không chói mắt hay cần thao tác nút bấm.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex gap-4 items-center p-4 border border-[var(--color-panel-border)] bg-white/60 backdrop-blur-md rounded-[4px]">
                <div className="w-8 h-8 flex items-center justify-center font-mono text-[10px] border border-[var(--color-brand)]/30 text-[var(--color-brand)] rounded-[2px] shrink-0 font-bold">01</div>
                <div className="text-[14px] font-medium text-[var(--color-espresso)]">Đứng trước gương 3 giây</div>
              </div>
              <div className="flex gap-4 items-center p-4 border border-[var(--color-panel-border)] bg-white/60 backdrop-blur-md rounded-[4px]">
                <div className="w-8 h-8 flex items-center justify-center font-mono text-[10px] border border-[var(--color-brand)]/30 text-[var(--color-brand)] rounded-[2px] shrink-0 font-bold">02</div>
                <div className="text-[14px] font-medium text-[var(--color-espresso)]">Xem báo cáo mức độ tổn thương da</div>
              </div>
              <div className="flex gap-4 items-center p-4 border border-[var(--color-panel-border)] bg-white/60 backdrop-blur-md rounded-[4px]">
                <div className="w-8 h-8 flex items-center justify-center font-mono text-[10px] border border-[var(--color-brand)]/30 text-[var(--color-brand)] rounded-[2px] shrink-0 font-bold">03</div>
                <div className="text-[14px] font-medium text-[var(--color-espresso)]">Thực hiện routine được gợi ý trên màn hình</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
