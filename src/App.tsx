import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Features } from "./components/Features";
import { InteractiveDemo } from "./components/InteractiveDemo";
import { Trust } from "./components/Trust";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[var(--color-bg-dark)] text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <InteractiveDemo />
        <Trust />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
