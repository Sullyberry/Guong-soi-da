import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Features } from "./components/Features";
import { InteractiveDemo } from "./components/InteractiveDemo";
import { Trust } from "./components/Trust";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { BrandHome } from "./components/BrandHome";
import { AboutUs } from "./components/AboutUs";

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'product' | 'about'>('product');

  useEffect(() => {
    // Reset window scroll position when switching views
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, [currentView]);

  const renderContent = () => {
    switch (currentView) {
      case "home":
        return (
          <BrandHome 
            onNavigateToProduct={() => setCurrentView('product')} 
            onNavigateToAbout={() => setCurrentView('about')} 
          />
        );
      case "about":
        return <AboutUs />;
      case "product":
      default:
        return (
          <div className="relative">
            <Hero />
            <Problem />
            <Features />
            <InteractiveDemo />
            <Trust />
            <Pricing />
            <FAQ />
          </div>
        );
    }
  };

  return (
    <div className="bg-[var(--color-bg-dark)] text-white min-h-screen flex flex-col justify-between">
      <Navbar currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer onViewChange={setCurrentView} />
    </div>
  );
}
