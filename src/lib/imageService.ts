/**
 * Image Service for optimizing and transforming images using Cloudinary
 * This service provides a free CDN for image optimization without requiring API keys
 */

// Cloudinary URL base (using demo account for now - replace with your own account in production)
const CLOUDINARY_URL = 'https://res.cloudinary.com/demo/image/fetch';

// Image formats in order of preference (most optimized first)
type ImageFormat = 'auto' | 'webp' | 'avif' | 'jpg' | 'png';

interface ImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: ImageFormat;
  crop?: 'fill' | 'fit' | 'scale' | 'crop';
  gravity?: 'auto' | 'center' | 'face' | 'faces';
  fetchFormat?: ImageFormat;
  dpr?: number | 'auto';
}

/**
 * Generate a CDN URL for an image with optimization parameters
 * @param src Original image URL or path
 * @param options Image transformation options
 * @returns Optimized image URL
 */
export function getOptimizedImageUrl(src: string, options: ImageOptions = {}): string {
  // For local development with local images, return the original src
  if (src.startsWith('/') || src.startsWith('./') || src.startsWith('../') || src.includes('data:image')) {
    return src;
  }
  
  // For imported images in Vite (they become URLs with hash)
  if (src.startsWith('http') || src.includes('blob:')) {
    // Build transformation string
    const transformations = [];
    
    // Add width if specified
    if (options.width) {
      transformations.push(`w_${options.width}`);
    }
    
    // Add height if specified
    if (options.height) {
      transformations.push(`h_${options.height}`);
    }
    
    // Add quality (default to 80% for good balance)
    transformations.push(`q_${options.quality || 80}`);
    
    // Add format (default to auto for best browser support)
    transformations.push(`f_${options.fetchFormat || 'auto'}`);
    
    // Add crop mode if specified
    if (options.crop) {
      transformations.push(`c_${options.crop}`);
    }
    
    // Add gravity if specified
    if (options.gravity) {
      transformations.push(`g_${options.gravity}`);
    }
    
    // Add DPR for retina displays
    if (options.dpr) {
      transformations.push(`dpr_${options.dpr}`);
    }
    
    // Build the final URL
    return `${CLOUDINARY_URL}/${transformations.join(',')}/${encodeURIComponent(src)}`;
  }
  
  // Fallback to original source
  return src;
}

/**
 * Generate a responsive srcSet for different viewport sizes
 * @param src Original image URL
 * @param options Base options for the image
 * @returns srcSet string for responsive images
 */
export function generateSrcSet(src: string, options: ImageOptions = {}): string {
  // Define widths for different viewport sizes
  const widths = [320, 640, 768, 1024, 1280, 1536, 1920];
  
  return widths
    .map(width => {
      const imgUrl = getOptimizedImageUrl(src, {
        ...options,
        width,
        fetchFormat: 'auto', // Let the CDN choose the best format
      });
      return `${imgUrl} ${width}w`;
    })
    .join(', ');
}

/**
 * Generate appropriate sizes attribute for responsive images
 * @returns sizes attribute string
 */
export function getResponsiveSizes(): string {
  return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
}

/**
 * Generate a low-quality image placeholder
 * @param src Original image URL
 * @returns Low quality placeholder URL
 */
export function getLowQualityPlaceholder(src: string): string {
  if (src.startsWith('/') || src.includes('data:image')) {
    return src;
  }
  
  return getOptimizedImageUrl(src, {
    width: 20,
    quality: 20,
    fetchFormat: 'auto',
  });
}