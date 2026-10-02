import { contactContent } from "@/data/content";
import { AccentRule } from "@/components/ui/AccentRule";
import { Reveal } from "@/components/motion/Reveal";
import { PhoneLink } from "@/components/ui/PhoneLink";

export function MapSection() {
  return (
    <section
      id="mapa"
      aria-labelledby="map-heading"
      className="bg-grand-sand py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal y={14} className="lg:col-span-4">
            <AccentRule animated />
            <h2
              id="map-heading"
              className="text-2xl font-light tracking-tight text-grand-gray-dark md:text-3xl"
            >
              Kde nás nájdete
            </h2>

            <div className="mt-8 space-y-6 text-sm leading-loose text-grand-gray">
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
              <div className="border-t border-grand-gray/20 pt-6">
                <PhoneLink
                  phone={contactContent.phone}
                  display={contactContent.phone}
                  showIcon={false}
                />
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={90} y={16} className="lg:col-span-8">
            <div className="overflow-hidden border-t-2 border-grand-orange shadow-[0_1px_0_rgba(0,0,0,0.03)]">
              <div className="h-[380px] w-full md:h-[480px] lg:h-[520px]">
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
