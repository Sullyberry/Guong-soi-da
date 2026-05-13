import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[radial-gradient(circle_at_70%_30%,#1a1a2e_0%,#050505_70%)]">
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="max-w-[1024px] mx-auto px-12 relative z-10 w-full flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex flex-col items-start text-left max-w-[500px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="editorial-badge mb-8"
          >
            CES 2024 Innovation Award Winner
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="editorial-eyebrow mb-4"
          >
            The future of your skin, decoded.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="editorial-h1 mb-8 uppercase"
          >
            <span>Your self,</span><br/>
            <span className="text-white/40">Perfected.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-[16px] text-white/60 leading-relaxed max-w-[380px] mb-12"
          >
            Stop guessing. Lumina AI analyzes acne, oil, hydration, and stress markers in real-time, delivering a personalized skincare protocol every morning.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-4 w-full sm:w-auto"
          >
            <button className="editorial-button w-fit">
              <span>PRE-ORDER GENESIS EDITION</span>
              <span className="ml-5">→</span>
            </button>
            <div className="text-[10px] text-white/30 text-center uppercase tracking-wider mt-2">
              Limited supply. Shipping Fall 2026.
            </div>
          </motion.div>
        </div>

        {/* Mirror Mockup mimicking the Design HTML */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="hidden md:flex absolute right-[-50px] top-[120px] w-[600px] h-[700px] bg-gradient-to-br from-white/10 to-white/5 rounded-t-[300px] border border-white/10 backdrop-blur-[20px] shadow-[0_0_100px_rgba(0,240,255,0.1)] justify-center items-start pt-[80px]"
        >
          <div className="w-[340px] h-[460px] border border-dashed border-glow-blue/30 rounded-[170px] relative">
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-glow-blue to-transparent absolute top-[40%] shadow-[0_0_15px_#00f0ff] animate-pulse" />
            
            <div className="absolute top-[20%] right-[-60px] bg-black/80 border border-glow-blue/50 p-2 px-3 rounded-[4px] flex flex-col gap-[2px] font-mono text-[10px]">
              <span className="editorial-label !text-[8px]">HYDRATION</span>
              <span className="text-glow-blue font-bold text-[14px]">82% Optimal</span>
            </div>
            
            <div className="absolute top-[50%] left-[-80px] bg-black/80 border border-glow-blue/50 p-2 px-3 rounded-[4px] flex flex-col gap-[2px] font-mono text-[10px]">
              <span className="editorial-label !text-[8px]">PORE ANALYSIS</span>
              <span className="text-glow-blue font-bold text-[14px]">-12% Reduction</span>
            </div>
            
            <div className="absolute bottom-[20%] right-[-40px] bg-black/80 border border-glow-blue/50 p-2 px-3 rounded-[4px] flex flex-col gap-[2px] font-mono text-[10px]">
              <span className="editorial-label !text-[8px]">STRESS INDEX</span>
              <span className="text-glow-blue font-bold text-[14px]">Mild (Level 2)</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-12 flex flex-col items-start gap-2 text-white/40"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
