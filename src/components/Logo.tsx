import { useState, useCallback } from "react";

type LogoProps = {
  className?: string;
  alt?: string;
};

const candidateSources = [
  "/logo.png",
  "/logo.jpg",
  "/logo.jpeg",
  "/logo.webp",
  "/logo.svg",
];

export const Logo = ({ className = "w-10 h-10", alt = "Logo" }: LogoProps) => {
  const [sourceIndex, setSourceIndex] = useState(0);

  const handleError = useCallback(() => {
    setSourceIndex((prev) => {
      const next = prev + 1;
      return next < candidateSources.length ? next : prev;
    });
  }, []);

  const src = candidateSources[sourceIndex];

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      className={`${className} object-contain bg-transparent`}
    />
  );
};

export default Logo;



