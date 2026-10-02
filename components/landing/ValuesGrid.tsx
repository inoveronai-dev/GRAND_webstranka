import { valuesCards } from "@/data/content";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export function ValuesGrid() {
  return (
    <section
      aria-label="Naše hodnoty"
      className="bg-grand-cream py-24 md:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0">
          {valuesCards.map((text, index) => (
            <Reveal key={text} delayMs={index * 110} y={22}>
              <article
                className={cn(
                  "group relative overflow-hidden px-1 py-8 transition-transform duration-300 ease-out md:px-6 md:py-6",
                  "md:hover:translate-y-[-3px]",
                  index > 0 && "md:border-l md:border-grand-gray/15"
                )}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-2 top-2 z-0 select-none font-light tabular-nums leading-none text-grand-orange/[0.13] transition-colors duration-300 group-hover:text-grand-orange/[0.2] md:left-4 md:top-0"
                  style={{
                    fontSize: "clamp(5rem, 12vw, 8.5rem)",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Structured text panel — overlaps the oversized number */}
                <div
                  className={cn(
                    "relative z-10 mt-14 border-t border-grand-orange/55 bg-grand-sand/80 px-6 py-7 transition-[border-color,background-color] duration-300 md:mt-16 md:px-7 md:py-8",
                    "group-hover:border-grand-orange group-hover:bg-grand-sand",
                    index === 1 && "bg-grand-sand border-grand-orange/70"
                  )}
                >
                  <span
                    aria-hidden
                    className="mb-5 block h-px w-7 bg-grand-orange/60 transition-all duration-300 group-hover:w-12 group-hover:bg-grand-orange"
                  />
                  <p className="text-[0.975rem] leading-[1.75] text-grand-gray-dark md:text-[1.05rem] md:leading-[1.8]">
                    {text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
