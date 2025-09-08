import { useState, useEffect, Fragment } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptimizedImage, { PriorityImagePreload } from "./OptimizedImage";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import ca from "@/assets/far.png";
import { useIsMobile } from "@/hooks/use-mobile";

// Convert images to WebP format and optimize loading
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1); // Track next slide for preloading
  const isMobile = useIsMobile();
  
  // Define image data with optimized formats
  const images = [
    { src: hero3, alt: "CAD Design Competition", quality: 85 },
    { src: hero2, alt: "Robotics Competition Arena", quality: 85 },
    { src: ca, alt: "CATALYST", quality: 80 },
  ];

  // Update next index whenever current index changes
  useEffect(() => {
    setNextIndex((currentIndex + 1) % images.length);
  }, [currentIndex, images.length]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Increased from 3000ms to 5000ms for better viewing experience

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden">
      {/* Preload next image for smoother transitions */}
      <Fragment>
        <PriorityImagePreload src={images[currentIndex].src} format="webp" />
        <PriorityImagePreload src={images[nextIndex].src} format="webp" />
      </Fragment>
      
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => {
          // Determine loading strategy based on slide position
          const isPriority = index === currentIndex;
          const isNextSlide = index === nextIndex;
          
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                // Priority loading for current and next slides
                priority={isPriority}
                loading={isPriority || isNextSlide ? 'eager' : 'lazy'}
                // Use responsive sizes
                sizes="100vw"
                // Convert to WebP format
                format="webp"
                // Apply quality settings
                quality={image.quality}
                // Maintain styling
                className="w-full h-full"
                objectFit="cover"
                style={{ objectPosition: isMobile ? 'center center' : 'center center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/20 backdrop-blur-md hover:bg-background/40 text-foreground"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/20 backdrop-blur-md hover:bg-background/40 text-foreground"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-primary shadow-glow" 
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;