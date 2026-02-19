import { useEffect, useRef, useState, RefObject } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface UseScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
  margin?: string;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.15, once = true, margin = "0px" } = options;
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: margin }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, once, margin]);

  return { ref, isVisible };
}

interface UseParallaxOptions {
  offset?: number;
  clamp?: boolean;
}

export function useParallax(
  ref: RefObject<HTMLElement>,
  options: UseParallaxOptions = {}
): MotionValue<string> {
  const { offset = 50, clamp = true } = options;
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    clamp ? [`${-offset}px`, `${offset}px`] : [`-${offset}%`, `${offset}%`]
  );

  return y;
}

export function useFadeInOnScroll(options: UseScrollAnimationOptions = {}) {
  const animation = useScrollAnimation(options);
  
  return {
    ...animation,
    style: {
      opacity: animation.isVisible ? 1 : 0,
      transform: animation.isVisible ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
    },
  };
}

export function useSlideInOnScroll(
  direction: "left" | "right" | "up" | "down" = "up",
  options: UseScrollAnimationOptions = {}
) {
  const animation = useScrollAnimation(options);
  
  const transforms = {
    left: "translateX(-40px)",
    right: "translateX(40px)",
    up: "translateY(40px)",
    down: "translateY(-40px)",
  };

  return {
    ...animation,
    style: {
      opacity: animation.isVisible ? 1 : 0,
      transform: animation.isVisible ? "translate(0, 0)" : transforms[direction],
      transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
    },
  };
}

export function useScaleOnScroll(options: UseScrollAnimationOptions = {}) {
  const animation = useScrollAnimation(options);
  
  return {
    ...animation,
    style: {
      opacity: animation.isVisible ? 1 : 0,
      transform: animation.isVisible ? "scale(1)" : "scale(0.9)",
      transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
    },
  };
}

interface UseScrollProgressOptions {
  offset?: [string, string];
}

export function useScrollProgress(
  ref: RefObject<HTMLElement>,
  options: UseScrollProgressOptions = {}
) {
  const { offset = ["start end", "end start"] } = options;
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  return scrollYProgress;
}

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
}
