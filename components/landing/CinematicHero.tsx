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

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg md:text-7xl">
          {heroContent.headline}
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-white/90 drop-shadow-md sm:text-xl md:text-2xl">
          {heroContent.subtitle}
        </p>

        <a
          href="#o-nas"
          className="mt-20 inline-block text-xs font-medium uppercase tracking-[0.3em] text-white/50 transition-colors hover:text-grand-orange"
          aria-label="Posunúť sa nižšie"
        >
          ↓
        </a>
      </div>
    </section>
  );
}
