import Image from "next/image";
import { heroContent } from "@/data/content";

export function CinematicHero() {
  return (
    <section
      id="domov"
      className="relative flex min-h-screen scroll-mt-28 items-center justify-center overflow-hidden"
    >
      <Image
        src="/hero-bg-highres.jpg"
        alt="Mesto Piešťany"
        fill
        priority
        quality={100}
        sizes="100vw"
        unoptimized
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/50 to-black/80"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-40 text-center">
        <h1 className="text-shadow-hero text-4xl font-light uppercase leading-tight tracking-[0.2em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {heroContent.headline}
        </h1>
        <p className="text-shadow-subtle mx-auto mt-10 max-w-2xl text-base font-light leading-relaxed tracking-wide text-white/85 sm:text-lg md:text-xl">
          {heroContent.subtitle}
        </p>

        <a
          href="#o-nas"
          className="mt-24 inline-block text-[10px] font-medium uppercase tracking-[0.4em] text-white/40 transition-colors duration-300 hover:text-grand-orange"
          aria-label="Posunúť sa nižšie"
        >
          ↓
        </a>
      </div>
    </section>
  );
}
