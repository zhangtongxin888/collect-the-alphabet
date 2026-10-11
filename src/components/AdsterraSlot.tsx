"use client";
import { usePathname } from "next/navigation";

// Adsterra (Banner/Native only). Rendered by React (not injected into out/*.html after build)
// so hydration keeps the slots; legal pages stay clean. The host div is left to runtime.js.
const CLEAN = /(^|\/)(about|accessibility|advertising-policy|affiliate-disclosure|contact|cookie-policy|cookies|disclosure|dmca|editorial-policy|legal|privacy|sources|terms|404)(\/|$)/i;

export function AdsterraSlot({ id }: { id: string }) {
  const path = usePathname() || "/";
  if (CLEAN.test(path)) return null;
  return (
    <aside className="ad-placement" data-ad-slot={id} aria-label="Advertisement">
      <span className="ad-label">Advertisement</span>
      <div className="ad-host" data-ad-host={id} dangerouslySetInnerHTML={{ __html: "" }} suppressHydrationWarning />
    </aside>
  );
}
