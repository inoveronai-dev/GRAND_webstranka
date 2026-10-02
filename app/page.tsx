import { CinematicHero } from "@/components/landing/CinematicHero";
import { ValuesGrid } from "@/components/landing/ValuesGrid";
import { AboutSection } from "@/components/landing/AboutSection";
import { ArchitecturalBreak } from "@/components/landing/ArchitecturalBreak";
import { AdvantagesSection } from "@/components/landing/AdvantagesSection";
import { ContactTransition } from "@/components/landing/ContactTransition";
import { ContactSection } from "@/components/landing/ContactSection";
import { MapSection } from "@/components/landing/MapSection";

export default function HomePage() {
  return (
    <>
      <CinematicHero />
      <ValuesGrid />
      <AboutSection />
      <ArchitecturalBreak />
      <AdvantagesSection />
      <ContactTransition />
      <ContactSection />
      <MapSection />
    </>
  );
}
