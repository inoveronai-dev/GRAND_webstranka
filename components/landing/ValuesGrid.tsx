import { valuesCards } from "@/data/content";

export function ValuesGrid() {
  return (
    <section
      aria-label="Naše hodnoty"
      className="bg-grand-gray-light py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3 md:gap-8">
        {valuesCards.map((text, index) => (
          <article
            key={text}
            className="rounded-2xl bg-white p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <span
              className="mb-4 block text-sm font-medium tabular-nums text-grand-orange"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-base leading-relaxed text-grand-gray-dark md:text-left md:leading-loose">
              {text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
