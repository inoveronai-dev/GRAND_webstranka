import Image from "next/image";
import { heroContent } from "@/data/content";

export function CinematicHero() {
  const [line1, line2] = splitHeadline(heroContent.headline);

  return (
    <section
      id="domov"
      className="relative flex min-h-screen scroll-mt-28 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <Image
          src="/images/grand-hero-city.jpg"
          alt="Mesto Piešťany"
          fill
          priority
          quality={92}
          sizes="100vw"
          className="hero-ken-burns object-cover object-[center_42%]"
        />
      </div>

      {/* Soft top fade — header readability only */}
      <div
        className="absolute inset-x-0 top-0 z-[1] h-32 bg-gradient-to-b from-black/32 via-black/[0.08] to-transparent md:h-40"
        aria-hidden
      />

      {/* Left-side readability veil — keeps photo bright on the right */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.22) 28%, rgba(0,0,0,0.06) 52%, transparent 72%)",
        }}
        aria-hidden
      />
      {/* Soft mobile-centered veil when text is centered */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_55%_35%_at_50%_48%,rgba(0,0,0,0.32)_0%,transparent_70%)] lg:hidden"
        aria-hidden
      />

      {/* Soft bottom edge */}
      <div
        className="absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-black/18 to-transparent"
        aria-hidden
      />

      {/* Editorial text — centered on mobile, left-aligned on desktop */}
      <div className="relative z-10 flex w-full flex-1 items-center justify-center px-6 pb-28 pt-36 text-center lg:block lg:px-0 lg:pb-0 lg:pt-0 lg:text-left">
        <div className="flex w-full max-w-[22rem] flex-col items-center sm:max-w-[26rem] lg:absolute lg:left-[13vw] lg:top-[57%] lg:max-w-[720px] lg:-translate-y-1/2 lg:items-start">
          <span
            aria-hidden
            className="hero-enter mb-5 block h-px w-10 bg-grand-orange lg:mb-6 lg:w-12"
          />
          <h1 className="hero-enter text-shadow-hero text-[clamp(1.65rem,6vw,2.35rem)] font-normal uppercase leading-[1.02] tracking-[0.035em] text-white sm:tracking-[0.04em] lg:text-[clamp(3rem,4.5vw,5.2rem)] lg:font-light lg:leading-[1.0] lg:tracking-[0.045em]">
            <span className="block whitespace-nowrap">{line1}</span>
            <span className="block whitespace-nowrap">{line2}</span>
          </h1>
          <p className="hero-enter-sub text-shadow-subtle mt-4 max-w-[18rem] text-[0.8125rem] font-light leading-relaxed tracking-[0.01em] text-white/[0.86] sm:mt-5 sm:max-w-[22rem] sm:text-sm lg:mt-6 lg:max-w-[500px] lg:text-base lg:leading-relaxed">
            {heroContent.subtitle}
          </p>
        </div>
      </div>

      <a
        href="#o-nas"
        className="hero-enter-cue absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[9px] font-medium uppercase tracking-[0.28em] text-white/60 transition-colors duration-300 hover:text-grand-orange md:bottom-10"
        aria-label="Posunúť sa nižšie"
      >
        <span
          className="block h-7 w-px bg-gradient-to-b from-white/65 to-transparent"
          aria-hidden
        />
        <span aria-hidden>↓</span>
      </a>
    </section>
  );
}

/** Prefer natural two-line break: “Životný partner” / “bytového domu”. */
function splitHeadline(headline: string): [string, string] {
  const match = headline.match(/^(.+?\bpartner)\s+(.+)$/i);
  if (match) return [match[1], match[2]];
  const words = headline.trim().split(/\s+/);
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}
