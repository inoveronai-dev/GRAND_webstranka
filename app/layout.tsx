import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { HeroNav } from "@/components/layout/HeroNav";
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
      <body className="flex min-h-screen flex-col bg-grand-cream font-sans">
        <HeroNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
