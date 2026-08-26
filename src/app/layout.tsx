import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: `${site.name} — Collect The Alphabet Guides, Codes & Tips`,
    template: `%s | ${site.name}`,
  },
  description:
    "Independent fan wiki for Collect The Alphabet on Roblox: beginner guide, core gameplay loop, upgrade progression, common mistakes, verified codes, and FAQ.",
  keywords: [
    "collect the alphabet wiki",
    "collect the alphabet codes",
    "collect the alphabet roblox",
    "collect the alphabet how to play",
    "collect the alphabet letters",
    "collect the alphabet packs",
    "collect the alphabet symbols",
    "collect the alphabet word of the day",
    "collect the alphabet upgrades",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Collect The Alphabet Guides, Codes & Tips`,
    description:
      "Independent fan wiki for Collect The Alphabet on Roblox: beginner guide, core gameplay loop, upgrade progression, common mistakes, verified codes, and FAQ.",
    url: site.baseUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
