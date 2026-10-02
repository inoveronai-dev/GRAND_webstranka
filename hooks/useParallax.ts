"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/useInView";

/** Desktop-only subtle parallax (~40–60px). Disabled on mobile / reduced-motion. */
export function useParallax(maxOffset = 50) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const mq = window.matchMedia("(min-width: 1024px)");
    if (!mq.matches) return;

    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const viewH = window.innerHeight || 1;
        const progress = (viewH - rect.top) / (viewH + rect.height);
        const clamped = Math.min(1, Math.max(0, progress));
        setOffset((clamped - 0.5) * maxOffset * 2);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [maxOffset, reduced]);

  return { ref, offset };
}
