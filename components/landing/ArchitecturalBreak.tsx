/**
 * Residential editorial break — CSS fixed-background reveal on desktop.
 * Mobile / reduced-motion: graceful scroll + cover (no fixed attachment).
 */
export function ArchitecturalBreak() {
  return (
    <section
      aria-label="Spoločný dvor bytového domu v zlatom svetle"
      className="architectural-break relative z-10 -mb-px h-[55vh] overflow-hidden md:h-[65vh] lg:h-[70vh]"
    >
      <div className="architectural-break__bg" aria-hidden />

      {/* Soft readability veil */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-black/25"
        aria-hidden
      />

      {/* Soft edge from sand About above */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-14 bg-gradient-to-b from-grand-sand/35 to-transparent md:h-16"
        aria-hidden
      />

      {/* Subtle IMAGE → DARK into advantages */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[38%] bg-gradient-to-t from-grand-charcoal via-grand-charcoal/55 to-transparent"
        aria-hidden
      />
    </section>
  );
}
