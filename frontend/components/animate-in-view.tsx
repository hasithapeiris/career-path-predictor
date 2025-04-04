"use client";

import { useInView } from "@/hooks/use-in-view";
import type { ReactNode } from "react";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-up";

interface AnimateInViewProps {
  children: ReactNode;
  animation: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export function AnimateInView({
  children,
  animation,
  delay = 0,
  duration = 500,
  className = "",
  threshold = 0.1,
}: AnimateInViewProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold });

  const getAnimationClass = (type: AnimationType) => {
    switch (type) {
      case "fade-up":
        return "translate-y-10 opacity-0";
      case "fade-down":
        return "translate-y-[-10px] opacity-0";
      case "fade-left":
        return "translate-x-[-10px] opacity-0";
      case "fade-right":
        return "translate-x-10 opacity-0";
      case "zoom-in":
        return "scale-95 opacity-0";
      case "zoom-out":
        return "scale-105 opacity-0";
      case "flip-up":
        return "rotateX-90 opacity-0";
      default:
        return "opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} transition-all ${
        isInView ? "transform-none opacity-100" : getAnimationClass(animation)
      }`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
