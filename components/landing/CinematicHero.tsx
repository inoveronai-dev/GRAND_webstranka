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

      {/* Tight localized veil behind headline — preserves bright photo edges */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 42% 28% at 50% 40%, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.18) 45%, transparent 72%)",
        }}
        aria-hidden
      />

      {/* Soft bottom edge */}
      <div
        className="absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-black/18 to-transparent"
        aria-hidden
      />

      {/* Text — higher, narrower, calmer */}
      <div className="relative z-10 mx-auto flex w-full max-w-[32rem] flex-col items-center px-6 pt-[22vh] text-center sm:max-w-[36rem] sm:pt-[23vh] md:max-w-[38rem] md:pt-[24vh]">
        <h1 className="hero-enter text-shadow-hero text-[clamp(1.55rem,5vw,2.4rem)] font-light uppercase leading-[1.05] tracking-[0.04em] text-white sm:text-[clamp(2.35rem,3.8vw,3.85rem)] sm:tracking-[0.055em] md:leading-[1.04] md:tracking-[0.05em]">
          <span className="block whitespace-nowrap">{line1}</span>
          <span className="block whitespace-nowrap">{line2}</span>
        </h1>
        <p className="hero-enter-sub text-shadow-subtle mx-auto mt-3 max-w-[20rem] text-[0.78rem] font-light leading-relaxed tracking-[0.015em] text-white/[0.87] sm:mt-3.5 sm:max-w-sm sm:text-[0.875rem] md:text-[0.9375rem]">
          {heroContent.subtitle}
        </p>
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
