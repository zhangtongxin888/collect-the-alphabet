import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__grid">
          <div>
            <h2>{site.shortName}</h2>
            <p>{site.tagline}</p>
            <p>
              {/* fact-001, fact-005 */}
              Official game: {site.gameName} by {site.developer} on Roblox.{" "}
              <a
                href={site.robloxUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Play the official game on Roblox (external link)
              </a>
              .
            </p>
          </div>
          <div>
            <h2>Guides</h2>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Start here</h2>
            <ul>
              <li>
                <Link href="/beginner-guide">Start the Beginner Guide</Link>
              </li>
              <li>
                <Link href="/gameplay-loop">Core gameplay loop</Link>
              </li>
              <li>
                <Link href="/faq">Codes and FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="site-footer__legal">
          {site.name} is an unofficial fan resource. It is not affiliated with,
          endorsed by, or sponsored by Roblox Corporation or {site.developer}.
          Game mechanics, prices, codes, and rewards can change with updates;
          date-scoped notes on each page mark anything time-sensitive.
        </p>
      </div>
    </footer>
  );
}
