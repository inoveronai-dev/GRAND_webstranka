import { contactContent } from "@/data/content";
import { ContactForm } from "@/components/landing/ContactForm";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { AccentRule } from "@/components/ui/AccentRule";
import { Reveal } from "@/components/motion/Reveal";

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-28 bg-grand-cream py-24 md:py-32"
      aria-labelledby="kontakt-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 md:mb-16">
            <AccentRule animated />
            <h2
              id="kontakt-heading"
              className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-light uppercase leading-[1.1] tracking-[0.12em] text-grand-gray-dark"
            >
              Kontakt
            </h2>
          </div>
        </Reveal>

        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <Reveal y={14}>
            <ContactForm />
          </Reveal>

          <Reveal delayMs={100} y={14}>
            <div className="relative overflow-hidden border-t border-grand-orange/50 pt-10 lg:border-l lg:border-t-0 lg:bg-grand-sand/50 lg:py-10 lg:pl-12 lg:pr-8 lg:pt-10">
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-[-0.15em] left-1/2 z-0 w-[140%] -translate-x-1/2 select-none text-center font-light uppercase leading-none tracking-[0.14em] text-grand-gray/[0.14]"
                style={{ fontSize: "clamp(4.5rem, 14vw, 8.5rem)" }}
              >
                GRAND
              </span>

              <div className="relative z-10 space-y-0">
                <div className="pb-8">
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-grand-gray-dark md:text-base">
                    {contactContent.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-grand-gray">
                    {contactContent.registry}
                  </p>
                  <p className="mt-1 text-sm text-grand-gray">
                    IČO: {contactContent.ico}
                  </p>
                </div>

                <div className="divide-y divide-grand-gray/20 border-t border-grand-gray/20">
                  <div className="py-6">
                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-grand-orange">
                      Telefón
                    </p>
                    <PhoneLink
                      phone={contactContent.phone}
                      display={contactContent.phone}
                      showIcon={false}
                      className="text-base text-grand-gray-dark md:text-lg"
                    />
                  </div>

                  <div className="py-6">
                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-grand-orange">
                      E-mail
                    </p>
                    <a
                      href={`mailto:${contactContent.email}`}
                      className="text-base text-grand-gray-dark transition-colors hover:text-grand-orange md:text-lg"
                    >
                      {contactContent.email}
                    </a>
                  </div>

                  <div className="py-6">
                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-grand-orange">
                      {contactContent.headquarters.label}
                    </p>
                    <p className="text-base leading-relaxed text-grand-gray-dark">
                      {contactContent.headquarters.address}
                    </p>
                  </div>

                  <div className="py-6">
                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-grand-orange">
                      {contactContent.branch.label}
                    </p>
                    <p className="text-base leading-relaxed text-grand-gray-dark">
                      {contactContent.branch.address}
                    </p>
                  </div>

                  <div className="py-6">
                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-grand-orange">
                      Web
                    </p>
                    <a
                      href={`https://${contactContent.web}`}
                      className="text-base text-grand-gray-dark transition-colors hover:text-grand-orange md:text-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contactContent.web}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
