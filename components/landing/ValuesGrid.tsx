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
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
          {valuesCards.map((text, index) => {
            const [lead, rest] = splitValueText(text);
            const emphasized = index === 1;

            return (
              <Reveal key={text} delayMs={index * 110} y={22}>
                <article
                  className={cn(
                    "group relative overflow-hidden px-0 py-2 transition-transform duration-300 ease-out md:px-8 md:py-4",
                    "md:hover:translate-y-[-3px]",
                    index > 0 && "border-t border-grand-gray/15 pt-10 md:border-l md:border-t-0 md:pt-4",
                    emphasized && "md:bg-grand-sand/35"
                  )}
                >
                  {/* Oversized editorial number */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -left-1 top-0 z-0 select-none font-light tabular-nums leading-none text-grand-orange/[0.12] transition-colors duration-300 group-hover:text-grand-orange/[0.2] md:-left-2 md:top-1"
                    style={{ fontSize: "clamp(4.75rem, 11vw, 7.75rem)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Content with left orange rule — no full card box */}
                  <div
                    className={cn(
                      "relative z-10 mt-16 border-l border-grand-orange pl-5 transition-[border-color,padding] duration-300 group-hover:border-grand-orange md:mt-[4.75rem] md:pl-6",
                      emphasized && "border-l-2 pl-6 md:pl-7"
                    )}
                  >
                    <p className="text-[1.0625rem] leading-[1.65] text-grand-gray-dark md:text-[1.125rem] md:leading-[1.7]">
                      <span className="font-medium text-grand-charcoal">
                        {lead}
                      </span>
                      {rest ? (
                        <>
                          {" "}
                          <span className="font-normal text-grand-gray-dark">
                            {rest}
                          </span>
                        </>
                      ) : null}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Visual hierarchy only — same words, no rewritten copy. */
function splitValueText(text: string): [string, string] {
  const comma = text.match(/^(.+?,)\s+(.+)$/);
  if (comma) return [comma[1], comma[2]];
  return [text, ""];
}
