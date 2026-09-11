import { CinematicHero } from "@/components/landing/CinematicHero";
import { ValuesGrid } from "@/components/landing/ValuesGrid";
import { ContactForm } from "@/components/landing/ContactForm";
import { ChangeManagerModal } from "@/components/landing/ChangeManagerModal";
import { PhoneLink } from "@/components/ui/PhoneLink";
import {
  aboutContent,
  advantagesContent,
  contactContent,
} from "@/data/content";

export default function HomePage() {
  return (
    <>
      <CinematicHero />
      <ValuesGrid />

      {/* O nás */}
      <section
        id="o-nas"
        className="scroll-mt-28 bg-grand-cream py-32"
        aria-labelledby="o-nas-heading"
      >
        <div className="mx-auto max-w-3xl px-6">
          <h2
            id="o-nas-heading"
            className="mb-16 text-center text-xs font-medium uppercase tracking-[0.3em] text-grand-orange md:text-left"
          >
            O nás
          </h2>

          <div className="mx-auto max-w-3xl space-y-10 text-base leading-loose text-grand-gray md:text-lg">
            <p>{aboutContent.intro}</p>

            <div>
              <p className="mb-6">{aboutContent.pillarsIntro}</p>
              <ul className="space-y-5 pl-0">
                {aboutContent.pillars.map((pillar) => (
                  <li key={pillar} className="flex items-start gap-4">
                    <span
                      className="mt-3 h-px w-6 shrink-0 bg-grand-orange/60"
                      aria-hidden
                    />
                    <span className="flex-1">{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>{aboutContent.closing}</p>

            <div className="flex justify-center pt-4 md:justify-start">
              <ChangeManagerModal />
            </div>
          </div>
        </div>
      </section>

      {/* V čom sme lepší */}
      <section
        id="vyhody"
        className="scroll-mt-28 bg-[#111111] py-32"
        aria-labelledby="vyhody-heading"
      >
        <div className="mx-auto max-w-3xl px-6">
          <h2
            id="vyhody-heading"
            className="mb-16 text-center text-xs font-medium uppercase tracking-[0.3em] text-grand-orange md:text-left"
          >
            V čom sme lepší
          </h2>

          <p className="mb-14 text-base leading-loose text-[#f9f9f6]/75 md:text-lg">
            {advantagesContent.intro}
          </p>

          <ul className="divide-y divide-white/10">
            {advantagesContent.items.map((item, index) => (
              <li
                key={item}
                className="grid grid-cols-[3rem_1fr] gap-6 py-8 first:pt-0 last:pb-0 md:grid-cols-[4rem_1fr] md:gap-10"
              >
                <span className="font-light tabular-nums text-grand-orange/80 text-lg md:text-xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-loose text-[#f9f9f6]/90 md:text-lg">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Kontakt */}
      <section
        id="kontakt"
        className="scroll-mt-28 bg-grand-cream py-32"
        aria-labelledby="kontakt-heading"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2
            id="kontakt-heading"
            className="mb-20 text-center text-xs font-medium uppercase tracking-[0.3em] text-grand-orange md:text-left"
          >
            Kontakt
          </h2>

          <div className="grid gap-20 lg:grid-cols-2 lg:gap-32">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-10 text-sm leading-loose tracking-wide text-grand-gray lg:pt-2">
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

              <div className="space-y-3 border-t border-grand-gray/15 pt-10">
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
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section
        aria-labelledby="map-heading"
        className="bg-grand-cream py-24"
      >
        <div className="mx-auto max-w-5xl px-6">
          <h2
            id="map-heading"
            className="mb-12 text-center text-xs font-medium uppercase tracking-[0.3em] text-grand-gray-dark"
          >
            Kde nás nájdete
          </h2>
          <div className="mx-auto h-[450px] w-full max-w-5xl overflow-hidden rounded-sm border border-grand-gray/15">
            <iframe
              src="https://maps.google.sk/maps/ms?msid=204739905539668704522.0004e5902dc9d9de28ed2&msa=0&ie=UTF8&t=m&ll=48.334343,18.215332&spn=1.113752,3.78479&z=8&output=embed"
              title="Mapa — kde nás nájdete"
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
