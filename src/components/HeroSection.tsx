import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  const handleRegisterClick = () => {
    const eventsSection = document.getElementById("events");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative w-full flex items-center justify-center overflow-hidden p-0"
      style={{ minHeight: isMobile ? 'calc(100vh - 56px)' : '100vh' }}>
      {/* Fullscreen Carousel */}
      <div className="absolute inset-0 z-0">
        <ImageCarousel />
      </div>
      {/* Overlayed Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-wider select-none bg-clip-text metallic-shimmer font-quantico">
          MECHMERISE
        </h1>
        <p className="mt-2 sm:mt-3 md:mt-5 text-sm sm:text-base md:text-xl text-white max-w-3xl font-prosto px-2">
          Step in with your spark, leave with an unforgettable experience!
        </p>
        <div className="mt-6 sm:mt-8 md:mt-10">
          <Button
            variant="hero"
            size={isMobile ? "default" : "xl"}
            onClick={handleRegisterClick}
            className={`group ${isMobile ? 'text-base px-6 py-3' : 'text-2xl px-10 py-6'} shadow-glow`}
          >
            Register Now
            <ExternalLink className={`${isMobile ? 'h-4 w-4' : 'h-6 w-6'} ml-2 group-hover:translate-x-1 transition-transform duration-300`} />
          </Button>
        </div>
      </div>
      {/* Optional: dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />
    </section>
  );
};

export default HeroSection;