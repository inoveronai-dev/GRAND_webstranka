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

      {/* Soft top fade — navigation readability */}
      <div
        className="absolute inset-x-0 top-0 z-[1] h-36 bg-gradient-to-b from-black/36 via-black/[0.1] to-transparent md:h-44"
        aria-hidden
      />

      {/* Soft elliptical veil behind headline — no hard box */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 52% 36% at 50% 44%, rgba(0,0,0,0.34) 0%, rgba(0,0,0,0.14) 46%, transparent 74%)",
        }}
        aria-hidden
      />

      {/* Soft bottom edge */}
      <div
        className="absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-black/16 to-transparent"
        aria-hidden
      />

      {/* Centered editorial text — slightly above vertical center */}
      <div className="relative z-10 flex w-full flex-1 items-center justify-center px-6 pb-28 pt-32 text-center">
        <div className="flex w-full max-w-[22rem] -translate-y-[4vh] flex-col items-center sm:max-w-[28rem] md:-translate-y-[5vh] lg:max-w-[820px] lg:-translate-y-[6vh]">
          <span
            aria-hidden
            className="hero-enter mb-5 block h-px w-10 bg-grand-orange lg:mb-6 lg:w-12"
          />
          <h1 className="hero-enter text-shadow-hero w-full max-w-[860px] font-normal uppercase text-white">
            <span className="block text-[clamp(1.45rem,5.2vw,2.15rem)] font-normal leading-[1.0] tracking-[0.04em] text-white lg:text-[clamp(2.65rem,3.9vw,4.35rem)] lg:tracking-[0.035em]">
              {line1}
            </span>
            <span className="mt-1 block text-[clamp(1.7rem,5.8vw,2.5rem)] font-normal leading-[0.98] tracking-[0.03em] text-white lg:mt-1.5 lg:text-[clamp(3rem,4.4vw,5rem)] lg:tracking-[0.028em]">
              {line2}
            </span>
          </h1>
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
