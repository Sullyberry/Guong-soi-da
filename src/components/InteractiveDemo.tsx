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
        {/* Left: Device Mockup */}
        <div className="relative aspect-[3/4] max-w-sm mx-auto w-full">
          {/* Mirror Frame */}
          <div className="absolute inset-0 rounded-[300px_300px_0_0] border-[10px] border-[#C29F94] bg-[#1C1615] shadow-2xl overflow-hidden flex flex-col justify-center items-center">
            {/* Pseudo reflection/face shape */}
            <div className="w-[180px] h-[240px] bg-white/5 blur-2xl rounded-full absolute" />
            
            {/* Mirror UI overlay */}
            <div className="absolute top-12 w-full px-8 flex justify-between items-start font-mono">
              <div>
                <div className="text-white text-xl">07:30</div>
                <div className="editorial-label !text-[8px] mt-1 !text-white/60">24 Th10</div>
              </div>
              <div className="text-right">
                <div className="text-[var(--color-rose-gold)] text-sm font-bold">82%</div>
                <div className="editorial-label !text-[8px] mt-1 !text-white/60">Độ ẩm</div>
              </div>
            </div>

            {/* Scanning Laser Effect */}
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
                className="absolute left-0 w-full h-[1px] bg-glow-blue shadow-[0_0_15px_#00f0ff] z-10"
              />
            )}
            
            {/* Fake Scanning nodes */}
            <motion.div 
               animate={scanning ? { opacity: [0, 1, 0] } : { opacity: 0 }}
               transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
               className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-glow-blue ring-2 ring-glow-blue/20"
            />
            <motion.div 
               animate={scanning ? { opacity: [0, 1, 0] } : { opacity: 0 }}
               transition={{ duration: 1.2, repeat: Infinity, delay: 1 }}
               className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-white ring-2 ring-white/20"
            />
          </div>
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
