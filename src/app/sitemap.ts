import type { MetadataRoute } from "next";
import { navLinks, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((link) => ({
    url: `${site.baseUrl}${link.href === "/" ? "" : link.href}`,
    lastModified: new Date("2026-08-26"),
    changeFrequency: link.href === "/" ? "weekly" : "monthly",
    priority: link.href === "/" ? 1 : link.href === "/beginner-guide" ? 0.9 : 0.8,
  }));
}
