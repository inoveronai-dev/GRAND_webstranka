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
        className="scroll-mt-28 bg-white py-24 md:py-32"
        aria-labelledby="o-nas-heading"
      >
        <div className="mx-auto max-w-4xl px-6">
          <h2
            id="o-nas-heading"
            className="mb-12 text-3xl font-light tracking-tight text-grand-gray-dark md:text-4xl"
          >
            O nás
          </h2>

          <div className="mx-auto max-w-4xl space-y-8 text-base leading-relaxed text-grand-gray md:text-lg md:leading-loose">
            <p>{aboutContent.intro}</p>

            <div>
              <p className="mb-4">{aboutContent.pillarsIntro}</p>
              <ul className="space-y-4 pl-0">
                {aboutContent.pillars.map((pillar) => (
                  <li key={pillar} className="flex items-start">
                    <span
                      className="mr-3 mt-1.5 h-2 w-2 shrink-0 rounded-full bg-grand-orange"
                      aria-hidden
                    />
                    <span className="flex-1">{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>{aboutContent.closing}</p>

            <ChangeManagerModal />
          </div>
        </div>
      </section>

      {/* V čom sme lepší */}
      <section
        id="vyhody"
        className="scroll-mt-28 bg-grand-gray-light py-24 md:py-32"
        aria-labelledby="vyhody-heading"
      >
        <div className="mx-auto max-w-3xl px-6">
          <h2
            id="vyhody-heading"
            className="mb-12 text-3xl font-light tracking-tight text-grand-gray-dark md:text-4xl"
          >
            V čom sme lepší
          </h2>

          <p className="mb-10 text-base leading-relaxed text-grand-gray md:text-lg md:leading-loose">
            {advantagesContent.intro}
          </p>

          <ul className="space-y-6">
            {advantagesContent.items.map((item, index) => (
              <li
                key={item}
                className="flex gap-5 border-l-2 border-grand-orange/30 pl-6"
              >
                <span className="text-sm font-medium tabular-nums text-grand-orange">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed text-grand-gray-dark md:text-lg md:leading-loose">
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
        className="scroll-mt-28 bg-white py-24 md:py-32"
        aria-labelledby="kontakt-heading"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2
            id="kontakt-heading"
            className="mb-16 text-3xl font-light tracking-tight text-grand-gray-dark md:text-4xl"
          >
            Kontakt
          </h2>

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-8 text-base leading-relaxed text-grand-gray">
              <div>
                <p className="text-lg font-medium text-grand-gray-dark">
                  {contactContent.company}
                </p>
                <p className="mt-2">{contactContent.registry}</p>
                <p className="mt-1">IČO: {contactContent.ico}</p>
              </div>

              <div>
                <p className="font-medium text-grand-gray-dark">
                  {contactContent.headquarters.label}
                </p>
                <p>{contactContent.headquarters.address}</p>
              </div>

              <div>
                <p className="font-medium text-grand-gray-dark">
                  {contactContent.branch.label}
                </p>
                <p>{contactContent.branch.address}</p>
              </div>

              <div className="space-y-2 border-t border-grand-gray/20 pt-8">
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
                    className="font-semibold text-grand-orange hover:text-grand-orange-hover"
                  >
                    {contactContent.email}
                  </a>
                </p>
                <p>
                  Web:{" "}
                  <a
                    href={`https://${contactContent.web}`}
                    className="font-semibold text-grand-orange hover:text-grand-orange-hover"
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
        className="bg-gray-50 py-16"
      >
        <div className="mx-auto max-w-5xl px-6">
          <h2
            id="map-heading"
            className="mb-8 text-center text-3xl font-bold text-grand-gray-dark"
          >
            Kde nás nájdete
          </h2>
          <div className="mx-auto h-[450px] w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-200 shadow-xl">
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
