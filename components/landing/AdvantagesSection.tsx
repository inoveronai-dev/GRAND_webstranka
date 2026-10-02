"use client";

import { useEffect, useRef, useState } from "react";
import { advantagesContent } from "@/data/content";
import { AccentRule } from "@/components/ui/AccentRule";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export function AdvantagesSection() {
  const count = advantagesContent.items.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const nodes = rowRefs.current.filter(Boolean) as HTMLLIElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (!visible.length) return;
        const idx = nodes.indexOf(visible[0].target as HTMLLIElement);
        if (idx >= 0) setActiveIndex(idx);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.2, 0.5, 0.8] }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="vyhody"
      className="relative scroll-mt-28 overflow-hidden bg-grand-charcoal py-24 md:py-32"
      aria-labelledby="vyhody-heading"
    >
      {/* Imperceptible warm depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 15% 20%, rgba(240,129,34,0.07) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 80%, rgba(92,60,30,0.18) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[0.85fr_1.65fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <AccentRule animated className="bg-grand-orange" />
            <h2
              id="vyhody-heading"
              className="mb-8 max-w-[11ch] text-[clamp(1.85rem,4vw,2.85rem)] font-light uppercase leading-[1.1] tracking-[0.1em] text-[#f9f9f6] md:mb-10"
            >
              V čom sme lepší
            </h2>
            <p className="mb-14 max-w-sm text-base leading-loose text-[#f9f9f6]/70 md:text-lg">
              {advantagesContent.intro}
            </p>
            <div>
              <p
                className="font-light tabular-nums leading-none tracking-tight text-grand-orange"
                style={{ fontSize: "clamp(5.5rem, 14vw, 10.5rem)" }}
              >
                {String(count).padStart(2, "0")}
              </p>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.28em] text-[#f9f9f6]/45">
                konkrétnych rozdielov
              </p>
            </div>
          </Reveal>
        </div>

        <ul className="divide-y divide-white/[0.08]">
          {advantagesContent.items.map((item, index) => {
            const active = activeIndex === index;
            return (
              <li
                key={item.raw}
                ref={(el) => {
                  rowRefs.current[index] = el;
                }}
              >
                <Reveal delayMs={index * 70} y={16}>
                  <div
                    className={cn(
                      "group relative grid gap-4 py-8 transition-all duration-300 ease-out md:grid-cols-[3.5rem_1fr] md:gap-8 md:px-4",
                      "hover:translate-x-1.5 md:hover:translate-x-2",
                      active && "translate-x-1 bg-grand-orange/[0.055] md:translate-x-1.5"
                    )}
                  >
                    <span
                      className={cn(
                        "font-light tabular-nums text-lg transition-colors duration-300 md:text-xl",
                        active
                          ? "text-grand-orange"
                          : "text-grand-orange/50 group-hover:text-grand-orange"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      {item.featured && (
                        <div className="mb-5 flex items-baseline gap-3">
                          <span className="text-4xl font-light tabular-nums tracking-tight text-grand-orange md:text-5xl">
                            24
                          </span>
                          <span className="text-2xl font-light text-[#f9f9f6]/35">
                            /
                          </span>
                          <span className="text-4xl font-light tabular-nums tracking-tight text-grand-orange md:text-5xl">
                            365
                          </span>
                        </div>
                      )}
                      <p className="text-base leading-loose md:text-lg">
                        <span
                          className={cn(
                            "transition-colors duration-300",
                            active
                              ? "text-white"
                              : "text-[#f9f9f6]/88 group-hover:text-white"
                          )}
                        >
                          {item.title}
                        </span>
                        {item.body ? (
                          <>
                            {" "}
                            <span
                              className={cn(
                                "transition-colors duration-300",
                                active
                                  ? "text-[#f9f9f6]/70"
                                  : "text-[#f9f9f6]/50 group-hover:text-[#f9f9f6]/70"
                              )}
                            >
                              ({item.body})
                            </span>
                          </>
                        ) : null}
                      </p>
                      <span
                        aria-hidden
                        className={cn(
                          "mt-6 block h-px w-full transition-colors duration-300",
                          active
                            ? "bg-white/30"
                            : "bg-white/10 group-hover:bg-white/25"
                        )}
                      />
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
