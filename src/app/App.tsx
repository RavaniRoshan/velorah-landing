import { VideoBackground } from "./components/hero/video-background";
import { NavBar } from "./components/hero/nav-bar";
import { HeroContent } from "./components/hero/hero-content";
import { FeatureCards } from "./components/sections/feature-cards";
import { BentoGrid } from "./components/sections/bento-grid";
import { Stats } from "./components/sections/stats";
import { Faq } from "./components/sections/faq";
import { CtaBand } from "./components/sections/cta-band";
import { Footer } from "./components/sections/footer";

export default function App() {
  return (
    <div className="relative w-full bg-background text-foreground overflow-x-hidden">
      {/* Hero — video pinned to this block only */}
      <div className="relative min-h-screen w-full overflow-hidden">
        <VideoBackground />
        {/* Scrim to anchor hero text over the bright image */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/20 to-black/50 pointer-events-none" />
        <div className="relative z-10 flex min-h-screen flex-col">
          <NavBar />
          <main className="flex flex-1 items-center justify-center">
            <HeroContent />
          </main>
        </div>
      </div>

      {/* Scrolling sections over the navy background */}
      <FeatureCards />
      <BentoGrid />
      <Stats />
      <Faq />
      <CtaBand />
      <Footer />
    </div>
  );
}
