import { valuesCards } from "@/data/content";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export function ValuesGrid() {
  return (
    <section
      aria-label="Naše hodnoty"
      className="bg-white py-28 md:py-36 lg:py-40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {valuesCards.map((text, index) => {
            const [lead, rest] = splitValueText(text);

            return (
              <Reveal key={text} delayMs={index * 100} y={18}>
                <article
                  className={cn(
                    "group relative overflow-hidden px-0 py-12 transition-transform duration-300 ease-out md:px-10 md:py-8",
                    "md:hover:translate-y-[-2px]",
                    index > 0 &&
                      "border-t border-grand-gray/12 md:border-l md:border-t-0 md:border-grand-gray/12"
                  )}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -left-0.5 -top-1 z-0 select-none font-light tabular-nums leading-none text-grand-orange/25 transition-colors duration-300 group-hover:text-grand-orange/35 md:-left-1 md:top-0"
                    style={{ fontSize: "clamp(5.25rem, 12vw, 8.25rem)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10 mt-[4.5rem] border-l border-grand-orange pl-5 md:mt-20 md:pl-6">
                    <p className="text-[1.0625rem] leading-[1.7] text-grand-gray-dark md:text-[1.125rem] md:leading-[1.75]">
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
