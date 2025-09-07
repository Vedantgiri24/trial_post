import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getOptimizedImageUrl, generateSrcSet, getResponsiveSizes, getLowQualityPlaceholder } from '@/lib/imageService';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  srcSet?: string;
  onClick?: () => void;
  onLoad?: () => void;
  onError?: () => void;
  placeholder?: string;
  style?: React.CSSProperties;
  priority?: boolean; // For above-the-fold images
  quality?: number; // Image quality (1-100)
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
}

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  sizes = '100vw',
  loading = 'lazy',
  srcSet,
  onClick,
  onLoad,
  onError,
  style,
  priority = false,
  quality = 80,
  objectFit = 'cover',
  format = 'auto',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjAyMDIwIiAvPjwvc3ZnPg==',
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Priority images start as in view
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  // Generate optimized image URL
  const optimizedSrc = getOptimizedImageUrl(src, {
    width,
    height,
    quality,
    fetchFormat: format,
  });
  
  // Generate responsive srcSet if not provided
  const responsiveSrcSet = srcSet || generateSrcSet(src, {
    quality,
    fetchFormat: format,
  });
  
  // Generate responsive sizes if default
  const responsiveSizes = sizes === '100vw' ? getResponsiveSizes() : sizes;
  
  // Generate low quality placeholder
  const blurPlaceholder = getLowQualityPlaceholder(src);

  // Handle image load event
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  }, [onLoad]);

  // Handle image error event
  const handleError = useCallback(() => {
    setError(true);
    if (onError) onError();
  }, [onError]);

  // Set up Intersection Observer for lazy loading
  useEffect(() => {
    // Skip for priority images or if loading is eager
    if (priority || loading === 'eager') {
      setIsInView(true);
      return;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          if (imgRef.current) {
            observer.unobserve(imgRef.current);
          }
        }
      },
      {
        rootMargin: '300px', // Increased from 200px for earlier loading
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [priority, loading]);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {/* Blur placeholder shown until image loads */}
      {!isLoaded && !error && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse" 
          style={{ 
            backgroundImage: `url(${blurPlaceholder || placeholder})`, 
            backgroundSize: 'cover',
            filter: 'blur(10px)',
            transform: 'scale(1.1)' // Slightly larger to prevent blur edges
          }}
        />
      )}
      
      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <span className="text-gray-500">Failed to load image</span>
        </div>
      )}
      
      {/* Main image with optimizations */}
      <img
        ref={imgRef}
        src={isInView ? optimizedSrc : placeholder}
        data-src={src} // Original source for debugging
        srcSet={isInView ? responsiveSrcSet : undefined}
        sizes={responsiveSizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={handleLoad}
        onError={handleError}
        onClick={onClick}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        style={{ 
          objectFit, 
          ...style 
        }}
      />
    </div>
  );
};

// Add preload hint for priority images
function PriorityImagePreload({ src, format = 'auto' }: { src: string, format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png' }) {
  const optimizedSrc = getOptimizedImageUrl(src, { fetchFormat: format });
  
  return (
    <link
      rel="preload"
      as="image"
      href={optimizedSrc}
      imageSrcSet={generateSrcSet(src, { fetchFormat: format })}
      imageSizes={getResponsiveSizes()}
    />
  );
}

// Export the preload component
export { PriorityImagePreload };

export default OptimizedImage;