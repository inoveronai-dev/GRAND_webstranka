"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "grand-splash-seen";

export function BrandSplash() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      // sessionStorage unavailable — skip splash
      return;
    }

    setVisible(true);

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const holdMs = reduced ? 500 : 1100;
    const fadeMs = reduced ? 350 : 500;

    const exitTimer = window.setTimeout(() => {
      setExiting(true);
    }, holdMs);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
    }, holdMs + fadeMs);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-[#F9F7F3]",
        "transition-opacity duration-500 ease-out",
        exiting ? "pointer-events-none opacity-0" : "opacity-100"
      )}
      role="presentation"
      aria-hidden
    >
      <div
        className={cn(
          "flex flex-col items-center px-8",
          "splash-brand-enter",
          exiting && "splash-brand-exit"
        )}
      >
        <Image
          src="/logo.png"
          alt=""
          width={220}
          height={60}
          priority
          className="h-auto w-auto max-h-12 sm:max-h-14 md:max-h-16"
        />
        <span
          aria-hidden
          className="mt-6 mb-5 block h-px w-10 bg-grand-orange sm:mt-7 sm:mb-6 sm:w-12"
        />
        <p className="text-center text-[10px] font-medium uppercase tracking-[0.28em] text-grand-gray-dark/70 sm:text-[11px]">
          správa bytových domov
        </p>
        <span className="sr-only">{siteConfig.companyName}</span>
      </div>
    </div>
  );
}
