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
import { News } from "./components/News";

type AppView = 'home' | 'product' | 'about' | 'news';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>(() => {
    const path = window.location.pathname;
    if (path.includes("/san-pham")) return "product";
    if (path.includes("/gioi-thieu")) return "about";
    if (path.includes("/tin-tuc")) return "news";
    return "home";
  });

  useEffect(() => {
    // Sync React state if user navigates back/forward in browser history
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.includes("/san-pham")) setCurrentView("product");
      else if (path.includes("/gioi-thieu")) setCurrentView("about");
      else if (path.includes("/tin-tuc")) setCurrentView("news");
      else setCurrentView("home");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    // Reset window scroll position when switching views
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, [currentView]);

  const handleViewChange = (view: AppView) => {
    setCurrentView(view);
    
    let targetPath = "/";
    if (view === "product") targetPath = "/san-pham/";
    else if (view === "about") targetPath = "/gioi-thieu/";
    else if (view === "news") targetPath = "/tin-tuc/";
    
    if (window.location.pathname !== targetPath && window.location.pathname !== targetPath.slice(0, -1)) {
      window.history.pushState(null, "", targetPath);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case "home":
        return (
          <BrandHome 
            onNavigateToProduct={() => handleViewChange('product')} 
            onNavigateToAbout={() => handleViewChange('about')} 
          />
        );
      case "about":
        return <AboutUs />;
      case "news":
        return <News />;
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
      <Navbar currentView={currentView} onViewChange={handleViewChange} />
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
      <Footer onViewChange={handleViewChange} />
    </div>
  );
}
