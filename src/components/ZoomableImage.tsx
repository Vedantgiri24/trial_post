import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ZoomableImage = ({ src, alt, className = '' }: ZoomableImageProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileZoomed, setIsMobileZoomed] = useState(false);
  const isMobile = useIsMobile();
  const imageRef = useRef<HTMLImageElement>(null);

  const toggleZoom = () => {
    if (isMobile) {
      setIsMobileZoomed(!isMobileZoomed);
    } else {
      setIsZoomed(!isZoomed);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  // Handle clicking outside the image to close mobile zoom
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile && isMobileZoomed && imageRef.current && !imageRef.current.contains(event.target as Node)) {
        setIsMobileZoomed(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, isMobileZoomed]);

  return (
    <>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        onClick={isMobile ? toggleZoom : undefined}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`cursor-pointer transition-transform duration-300 ${isMobile ? (isMobileZoomed ? 'scale-135' : '') : (isHovered ? 'scale-110' : '')} ${className}`}
      />

      {/* Zoomed overlay (only shown when zoomed on desktop) */}
      {!isMobile && isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={toggleZoom}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden">
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ZoomableImage;