import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-panel-border)] bg-[var(--color-panel)] py-12 px-12">
      <div className="max-w-[1024px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2 md:col-span-1">
          <div className="font-extrabold text-[16px] tracking-[3px] uppercase mb-6">Lumina AI</div>
          <div className="text-[14px] text-white/50 leading-relaxed">
            The intelligent mirror that decodes the future of your skin.
          </div>
        </div>
        
        <div>
          <div className="editorial-label mb-6">Explore</div>
          <div className="flex flex-col gap-4 text-[13px] text-white/60">
            <a href="#" className="hover:text-white transition-colors">Science</a>
            <a href="#" className="hover:text-white transition-colors">The Mirror</a>
            <a href="#" className="hover:text-white transition-colors">App Ecosystem</a>
          </div>
        </div>

        <div>
          <div className="editorial-label mb-6">Connect</div>
          <div className="flex flex-col gap-4 text-[13px] text-white/60">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
            <a href="#" className="hover:text-white transition-colors">Press</a>
          </div>
        </div>

        <div>
          <div className="editorial-label mb-6">Legal</div>
          <div className="flex flex-col gap-4 text-[13px] text-white/60">
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1024px] mx-auto border-t border-[var(--color-panel-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="editorial-label !text-[10px]">
          © 2026 Lumina AI. All rights reserved.
        </div>
        <div className="editorial-label !text-[10px]">
          Designed for the future.
        </div>
      </div>
    </footer>
  );
}
