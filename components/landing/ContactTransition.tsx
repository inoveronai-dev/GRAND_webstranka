import { contactTransition } from "@/data/content";
import { Reveal } from "@/components/motion/Reveal";

export function ContactTransition() {
  const [line1, line2] = splitCtaHeadline(contactTransition.headline);
  const ctaLabel = contactTransition.support.replace(/\.$/, "");

  return (
    <section
      aria-labelledby="contact-transition-heading"
      className="bg-grand-orange py-28 md:py-36 lg:py-40"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <Reveal y={18} className="flex w-full flex-col items-center">
          <span
            aria-hidden
            className="mb-10 block h-px w-14 bg-grand-charcoal/40"
          />
          <h2
            id="contact-transition-heading"
            className="text-[clamp(1.9rem,4.8vw,3.4rem)] font-light leading-[1.15] tracking-tight text-grand-charcoal"
          >
            <span className="block">{line1}</span>
            {line2 ? <span className="block">{line2}</span> : null}
          </h2>
          <a
            href="#kontakt"
            className="group mt-12 inline-flex items-center gap-4 border-b border-grand-charcoal/40 pb-2 text-[clamp(0.95rem,2vw,1.25rem)] font-medium uppercase tracking-[0.22em] text-grand-charcoal transition-colors duration-300 hover:border-grand-charcoal md:mt-14"
          >
            <span>{ctaLabel}</span>
            <span
              aria-hidden
              className="inline-block text-[1.15em] transition-transform duration-300 ease-out group-hover:translate-x-1.5"
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
  const match = headline.match(/^(.+?\bspáve)\s+(.+)$/i);
  if (match) return [match[1], match[2]];
  return [headline, ""];
}
