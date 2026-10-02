import Image from "next/image";
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
          <AccentRule animated />
          <h2
            id="kontakt-heading"
            className="mb-16 text-xs font-medium uppercase tracking-[0.3em] text-grand-orange md:mb-20"
          >
            Kontakt
          </h2>
        </Reveal>

        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-0">
          <Reveal y={14} className="lg:col-span-5 lg:pr-12">
            <ContactForm />
          </Reveal>

          <div className="relative lg:col-span-7 lg:border-l lg:border-grand-orange/40 lg:bg-grand-sand/60 lg:pl-12 lg:pr-2 lg:py-2">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-6 bottom-0 select-none font-light leading-none text-grand-gray-dark/[0.06] md:-right-10 md:text-[clamp(12rem,28vw,20rem)]"
              style={{ fontSize: "clamp(11rem, 26vw, 18rem)" }}
            >
              G
            </span>

            <Reveal delayMs={80} y={16} className="relative mb-10 lg:mb-12">
              <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden sm:max-w-lg lg:ml-auto lg:max-w-none lg:w-[90%]">
                <Image
                  src="/images/grand-architecture-detail.jpg"
                  alt="Vstup do bytového domu"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  quality={90}
                  className="object-cover object-center"
                />
              </div>
            </Reveal>

            <Reveal delayMs={120} y={14}>
              <div className="relative max-w-md space-y-10 text-sm leading-loose tracking-wide text-grand-gray lg:pl-1">
                <div>
                  <p className="text-base font-medium uppercase tracking-[0.15em] text-grand-gray-dark">
                    {contactContent.company}
                  </p>
                  <p className="mt-4">{contactContent.registry}</p>
                  <p className="mt-1">IČO: {contactContent.ico}</p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-grand-orange">
                    {contactContent.headquarters.label}
                  </p>
                  <p className="mt-2 text-grand-gray-dark">
                    {contactContent.headquarters.address}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-grand-orange">
                    {contactContent.branch.label}
                  </p>
                  <p className="mt-2 text-grand-gray-dark">
                    {contactContent.branch.address}
                  </p>
                </div>

                <div className="space-y-3 border-t border-grand-gray/20 pt-10">
                  <p>
                    Telefón:{" "}
                    <PhoneLink
                      phone={contactContent.phone}
                      display={contactContent.phone}
                      showIcon={false}
                    />
                  </p>
                  <p>
                    E-mail:{" "}
                    <a
                      href={`mailto:${contactContent.email}`}
                      className="text-grand-orange transition-colors hover:text-grand-orange-hover"
                    >
                      {contactContent.email}
                    </a>
                  </p>
                  <p>
                    Web:{" "}
                    <a
                      href={`https://${contactContent.web}`}
                      className="text-grand-orange transition-colors hover:text-grand-orange-hover"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contactContent.web}
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
