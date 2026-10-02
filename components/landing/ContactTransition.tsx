import { contactTransition } from "@/data/content";
import { Reveal } from "@/components/motion/Reveal";

export function ContactTransition() {
  const headline = contactTransition.headline;
  // Intentional editorial break after the question mark clause
  const [line1, line2] = splitCtaHeadline(headline);

  return (
    <section
      aria-labelledby="contact-transition-heading"
      className="bg-grand-orange py-24 md:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-4xl px-6 text-center md:text-left">
        <Reveal y={18}>
          <span
            aria-hidden
            className="mb-8 block h-px w-12 bg-grand-charcoal/35 md:mb-10"
          />
          <h2
            id="contact-transition-heading"
            className="text-[clamp(1.85rem,4.5vw,3.35rem)] font-light leading-[1.15] tracking-tight text-grand-charcoal"
          >
            <span className="block">{line1}</span>
            {line2 ? <span className="block">{line2}</span> : null}
          </h2>
          <a
            href="#kontakt"
            className="group mt-10 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-grand-charcoal transition-colors duration-300 hover:text-grand-charcoal/80 md:mt-12"
          >
            <span>{contactTransition.support.replace(/\.$/, "")}</span>
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5"
            >
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function splitCtaHeadline(headline: string): [string, string] {
  // Prefer break before “vášho domu?” for editorial line rhythm
  const match = headline.match(/^(.+?\bspáve)\s+(.+)$/i);
  if (match) return [match[1], match[2]];
  return [headline, ""];
}
