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
        <div className="grid grid-cols-1 md:grid-cols-3">
          {valuesCards.map((text, index) => (
            <Reveal key={text} delayMs={index * 110} y={22}>
              <article
                className={cn(
                  "group relative overflow-hidden px-0 py-12 transition-transform duration-300 ease-out md:px-10 md:py-8",
                  "md:hover:translate-y-[-4px]",
                  index > 0 && "border-t border-grand-gray/15 md:border-l md:border-t-0 md:border-grand-gray/15",
                  index === 1 && "md:bg-grand-sand/70"
                )}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -left-1 -top-4 select-none font-light tabular-nums leading-none text-grand-orange/[0.14] transition-colors duration-300 group-hover:text-grand-orange/[0.22] md:-left-2 md:-top-6"
                  style={{
                    fontSize: "clamp(5.5rem, 14vw, 9.5rem)",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative pt-10 md:pt-14">
                  <span
                    aria-hidden
                    className="mb-6 block h-px w-8 bg-grand-orange/50 transition-all duration-300 group-hover:w-14 group-hover:bg-grand-orange"
                  />
                  <p className="text-base leading-loose text-grand-gray-dark md:text-[1.0625rem] md:leading-[1.85]">
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
