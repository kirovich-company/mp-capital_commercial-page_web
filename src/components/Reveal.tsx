import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

type RevealProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  delayMs?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
};

export function Reveal({
  children,
  as: Component = "div",
  className,
  delayMs = 0,
  direction = "up",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const directionClass =
    direction === "left"
      ? "reveal-left"
      : direction === "right"
        ? "reveal-right"
        : "reveal"; // up/down use same base translateY in CSS

  return (
    <Component
      ref={ref as any}
      className={clsx("reveal", directionClass, isVisible && "is-visible", className)}
      style={{ transitionDelay: `${Math.max(0, delayMs)}ms` }}
    >
      {children}
    </Component>
  );
}


