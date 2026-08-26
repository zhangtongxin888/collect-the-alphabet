export const site = {
  name: "Collect The Alphabet Wiki",
  shortName: "CTA Wiki",
  gameName: "Collect The Alphabet",
  developer: "Cosmic Collection",
  domain: "collectthealphabetrolbox.wiki",
  baseUrl: "https://collectthealphabetrolbox.wiki",
  // fact-001: official experience page, place 127103413498148
  robloxUrl:
    "https://www.roblox.com/games/127103413498148/Collect-The-Alphabet",
  tagline:
    "An independent, fan-made guide to the Roblox experience Collect The Alphabet by Cosmic Collection.",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/beginner-guide", label: "Beginner Guide" },
  { href: "/gameplay-loop", label: "Gameplay Loop" },
  { href: "/progression-guide", label: "Progression" },
  { href: "/common-mistakes", label: "Common Mistakes" },
  { href: "/faq", label: "FAQ" },
] as const;
