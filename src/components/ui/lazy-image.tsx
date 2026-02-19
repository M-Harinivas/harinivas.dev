import { useState, useEffect, useRef, ImgHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LazyImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string;
  placeholderSrc?: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  blurAmount?: number;
}

export const LazyImage = ({
  src,
  placeholderSrc,
  alt,
  className,
  wrapperClassName,
  blurAmount = 20,
  ...props
}: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc || src);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "50px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
    };
  }, [src, isInView]);

  return (
    <div
      ref={imgRef}
      className={cn("relative overflow-hidden bg-muted", wrapperClassName)}
      style={{ position: "relative" }}
    >
      {!imageLoaded && placeholderSrc && (
        <motion.img
          src={placeholderSrc}
          alt={alt}
          className={cn("absolute inset-0 w-full h-full object-cover", className)}
          style={{ filter: `blur(${blurAmount}px)` }}
          {...props}
        />
      )}
      <motion.img
        src={imageSrc}
        alt={alt}
        className={cn("w-full h-full object-cover", className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        {...props}
      />
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}
    </div>
  );
};

interface ImageSkeletonProps {
  className?: string;
  aspectRatio?: "square" | "video" | "portrait";
}

export const ImageSkeleton = ({
  className,
  aspectRatio = "video",
}: ImageSkeletonProps) => {
  const aspectRatios = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  };

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-xl bg-muted",
        aspectRatios[aspectRatio],
        className
      )}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
    </motion.div>
  );
};
