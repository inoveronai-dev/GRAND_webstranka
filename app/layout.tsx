import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { GlobalHeader } from "@/components/layout/GlobalHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GRAND, správa bytových domov",
  description:
    "Spoľahlivá správa bytových domov s prehľadným systémom financovania a moderným elektronickým systémom správy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${inter.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col font-sans">
        <div className="sticky top-0 z-50">
          <EmergencyBanner />
          <GlobalHeader />
        </div>
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
