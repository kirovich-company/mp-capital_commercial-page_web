import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  durationMs?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  startOnVisible?: boolean;
  className?: string;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function CountUp({
  to,
  durationMs = 1400,
  decimals = 0,
  prefix = "",
  suffix = "",
  startOnVisible = true,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(!startOnVisible);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startOnVisible) return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / Math.max(1, durationMs));
      const eased = easeOutCubic(t);
      setValue(to * eased);
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setValue(to);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, to, durationMs]);

  const formatted = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}


