"use client";

import { useEffect, useRef } from "react";

interface PaintRevealProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function PaintReveal({
  text,
  delay = 0,
  duration = 1.4,
  className,
}: PaintRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => {
      el.style.clipPath = "inset(0 0 0 0)";
    }, delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <span
      ref={ref}
      className={className}
      style={{
        clipPath: "inset(0 100% 0 0)",
        transition: `clip-path ${duration}s cubic-bezier(0.77, 0, 0.175, 1)`,
        display: "inline-block",
      }}
    >
      {text}
    </span>
  );
}
