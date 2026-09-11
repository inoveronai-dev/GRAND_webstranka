"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { GlobalHeader } from "@/components/layout/GlobalHeader";

export function HeroNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-grand-gray/10 bg-grand-cream/95 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <EmergencyBanner overHero={!scrolled} />
      <GlobalHeader overHero={!scrolled} />
    </div>
  );
}
