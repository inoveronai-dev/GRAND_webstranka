import Image from "next/image";
import { contactContent } from "@/data/content";
import { mainNavLinks } from "@/data/navigation";
import { PhoneLink } from "@/components/ui/PhoneLink";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-grand-charcoal">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3 md:gap-8">
        <div>
          <Image
            src="/logo.png"
            alt="GRAND správa bytových domov"
            width={140}
            height={40}
            className="mb-4 h-auto w-auto max-h-10 brightness-110"
          />
          <p className="text-sm leading-relaxed text-[#f9f9f6]/55">
            {contactContent.company}
          </p>
        </div>

        <div>
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-grand-orange">
            Kontakt
          </p>
          <div className="space-y-2 text-sm text-[#f9f9f6]/60">
            <p>
              <PhoneLink
                phone={contactContent.phone}
                display={contactContent.phone}
                showIcon={false}
              />
            </p>
            <p>
              <a
                href={`mailto:${contactContent.email}`}
                className="transition-colors hover:text-grand-orange"
              >
                {contactContent.email}
              </a>
            </p>
            <p>{contactContent.headquarters.address}</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-grand-orange">
            Navigácia
          </p>
          <ul className="space-y-2 text-sm text-[#f9f9f6]/60">
            {mainNavLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="transition-colors hover:text-grand-orange"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs tracking-[0.08em] text-[#f9f9f6]/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {contactContent.company} · IČO: {contactContent.ico}
          </p>
          <p className="text-[#f9f9f6]/30">{contactContent.registry}</p>
        </div>
      </div>
    </footer>
  );
}
