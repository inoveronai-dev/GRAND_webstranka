import { valuesCards } from "@/data/content";

export function ValuesGrid() {
  return (
    <section
      aria-label="Naše hodnoty"
      className="bg-grand-cream py-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-3 md:gap-12 lg:gap-20">
        {valuesCards.map((text, index) => (
          <article key={text} className="text-center md:text-left">
            <span
              className="mb-6 block font-light tabular-nums text-grand-orange"
              style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", lineHeight: 1 }}
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-base leading-loose text-grand-gray-dark md:text-[1.05rem]">
              {text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
