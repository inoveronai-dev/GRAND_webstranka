import Image from "next/image";
import { aboutContent } from "@/data/content";
import { ChangeManagerModal } from "@/components/landing/ChangeManagerModal";
import { AccentRule } from "@/components/ui/AccentRule";
import { Reveal } from "@/components/motion/Reveal";

export function AboutSection() {
  return (
    <section
      id="o-nas"
      className="scroll-mt-28 bg-grand-sand py-28 md:py-36"
      aria-labelledby="o-nas-heading"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-14 px-6 lg:grid-cols-[1.25fr_1fr] lg:gap-16 xl:gap-8">
        <Reveal y={16} scale className="lg:sticky lg:top-28 lg:-ml-4 xl:-ml-10">
          <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[3/4] lg:min-h-[560px] lg:aspect-auto lg:h-[min(72vh,640px)]">
            <Image
              src="/images/grand-about-office.jpg"
              alt="Tím GRAND na pracovnom stretnutí v kancelárii"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              quality={90}
              className="object-cover object-[center_18%]"
            />
          </div>
        </Reveal>

        <div className="lg:pt-2">
          <Reveal>
            <AccentRule animated />
            <h2
              id="o-nas-heading"
              className="mb-10 text-[clamp(2.25rem,5vw,3.5rem)] font-light uppercase leading-[1.05] tracking-[0.12em] text-grand-gray-dark md:mb-12"
            >
              O nás
            </h2>
          </Reveal>

          <Reveal delayMs={80} y={16}>
            <blockquote className="relative mb-12 border-l-2 border-grand-orange py-1 pl-6 md:mb-14 md:pl-8">
              <p className="text-xl font-light leading-snug tracking-tight text-grand-gray-dark md:text-2xl md:leading-[1.3]">
                {aboutContent.pullQuote}
              </p>
            </blockquote>
          </Reveal>

          <div className="space-y-7 text-base leading-loose text-grand-gray md:text-[1.0625rem]">
            {aboutContent.introParagraphs.map((p, i) => (
              <Reveal key={p.slice(0, 24)} delayMs={i * 80} y={12}>
                <p>{p}</p>
              </Reveal>
            ))}

            <Reveal delayMs={80} y={12}>
              <p className="pt-2 text-grand-gray-dark">{aboutContent.pillarsIntro}</p>
            </Reveal>

            <ul className="mt-4 divide-y divide-grand-gray/20">
              {aboutContent.pillars.map((pillar, index) => (
                <Reveal key={pillar} delayMs={index * 90} y={14} as="li">
                  <div className="grid grid-cols-[3.25rem_1fr] gap-4 py-6 md:gap-6">
                    <span className="pt-0.5 text-lg font-light tabular-nums text-grand-orange md:text-xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.975rem] leading-relaxed text-grand-gray-dark md:text-base">
                      {pillar}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delayMs={100} y={12}>
              <p className="pt-6">{aboutContent.closing}</p>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="flex justify-center pt-8 md:justify-start">
                <ChangeManagerModal />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
