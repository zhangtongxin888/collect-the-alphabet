import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Slant from "@/components/Slant";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ & Codes — Date-Checked Answers",
  description:
    "Collect The Alphabet FAQ: how to redeem codes in Settings, the verified 100KMEMBERS code (checked August 26, 2026), game passes, Money vs Diamonds, group reward, and sell panel questions.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I redeem codes in Collect The Alphabet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open the Settings menu, find the Codes section, type the code into the Enter Code field, and press Submit.",
      },
    },
    {
      "@type": "Question",
      name: "What is the current working code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of August 26, 2026, the only independently cross-checked working code is 100KMEMBERS, entered in uppercase. In a recorded redemption it granted three Mythic Packs.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Money and Diamonds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Money and Diamonds are separate currencies. Mounted letters generate Money every second for packs and upgrades; spare letters sell for Diamonds, which unlock Symbol Packs.",
      },
    },
    {
      "@type": "Question",
      name: "Who makes Collect The Alphabet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The official creator is the Roblox group Cosmic Collection.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free reward for joining the group?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the game advertises a free in-game reward for joining Cosmic Collection. The in-game entry opens a prompt to join the group; the reward contents are not specified.",
      },
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        eyebrow="FAQ & codes"
        title="Quick answers, date-checked"
        lede="Straight answers to the questions players actually ask. Anything time-sensitive — codes, passes, prices — is stamped with the date it was last verified, because this game updates."
      />

      <Slant fill="#f4ead3" />

      {/* ---------- Codes ---------- */}
      <section className="section section--paper">
        <div className="wrap split">
          <div className="split__sticky">
            <p className="eyebrow">Codes</p>
            <h2 className="headline">How to redeem, and what works</h2>
            <p className="lede">
              {/* fact-115, fact-116, fact-117 */}
              Codes live in the Settings menu: open Settings, find the Codes
              section, type into the Enter Code field, and press Submit.
            </p>
          </div>
          <div>
            <div className="panel">
              {/* fact-118, fact-119, fact-120 */}
              <p className="eyebrow" style={{ color: "var(--accent)" }}>
                Verified 2026-08-26
              </p>
              <p>
                <span className="code-chip">100KMEMBERS</span>
              </p>
              <p>
                The only code independently cross-checked as working on August
                26, 2026. Enter it exactly in uppercase; a successful recorded
                redemption granted three Mythic Packs. Code status changes over
                time — if it fails, it has likely expired.
              </p>
            </div>
            <p className="note" style={{ marginTop: "var(--s-5)" }}>
              Typos are the top redemption failure — see{" "}
              <Link className="link-arrow" href="/common-mistakes">
                common mistakes
              </Link>{" "}
              before assuming a code is dead.
            </p>
          </div>
        </div>
      </section>

      <Slant fill="#17130d" flip />

      {/* ---------- FAQ list ---------- */}
      <section className="section section--ink">
        <div className="wrap">
          <p className="eyebrow">Frequently asked</p>
          <h2 className="headline">Everything else, answered</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Who develops Collect The Alphabet?</summary>
              <div className="faq-item__body">
                {/* fact-005 */}
                <p>
                  The official creator is the Roblox group Cosmic Collection.{" "}
                  {/* fact-001 */}
                  <a
                    className="link-arrow"
                    href={site.robloxUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Official game page on Roblox (external) ↗
                  </a>
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>What is the goal of the game?</summary>
              <div className="faq-item__body">
                {/* fact-015, fact-016, fact-017, fact-018, fact-019 */}
                <p>
                  Collect all 26 letters from A through Z. Letters come from
                  packs ranging from Common to MYTHIC; mount them on your board
                  and they generate Money every second. The{" "}
                  <Link className="link-arrow" href="/gameplay-loop">
                    core loop page
                  </Link>{" "}
                  maps the whole cycle.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>What is the difference between Money and Diamonds?</summary>
              <div className="faq-item__body">
                {/* fact-028, fact-019, fact-023, fact-024 */}
                <p>
                  They are separate currencies with different roles. Mounted
                  letters generate Money every second; spare letters sell for
                  Diamonds; Diamonds unlock secret Symbol Packs in the Symbol
                  Shop. The{" "}
                  <Link className="link-arrow" href="/progression-guide">
                    progression guide
                  </Link>{" "}
                  explains the routing.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Is there a free reward for joining the group?</summary>
              <div className="faq-item__body">
                {/* fact-026, fact-091 */}
                <p>
                  Yes — joining Cosmic Collection is advertised as granting a
                  free in-game reward. The in-game entry opens a prompt to join
                  the group rather than granting anything silently, and the
                  reward contents are not specified.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Why does my Sell panel say there is nothing to sell?</summary>
              <div className="faq-item__body">
                {/* fact-058, fact-074, fact-071 */}
                <p>
                  The Sell button (top navigation, next to Home and Shop)
                  teleports you to the Sell area. When nothing is sellable, the
                  panel says there are no letters to sell and suggests opening
                  packs — only extra copies beyond your board needs appear in
                  the list.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>What game passes exist?</summary>
              <div className="faq-item__body">
                {/* fact-121, fact-122, fact-123, fact-124, fact-125 */}
                <p>
                  As of the official Game Pass API check on August 26, 2026, the
                  listed passes are: Starter Pack, 2X Diamonds (permanent), 2X
                  Money, 4X Money, and 8x Money. All are optional, and the
                  lineup or prices can change — verify on the game page before
                  buying.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>How often does the game update?</summary>
              <div className="faq-item__body">
                {/* fact-027, fact-062 */}
                <p>
                  The creator description promises new words, updates, and
                  events every week, and the Word of the Day wall counts down to
                  a fresh word. Treat any listed prices, odds, or codes —
                  including the ones on this page — as date-scoped snapshots.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary>Where should a new player start?</summary>
              <div className="faq-item__body">
                <p>
                  With the{" "}
                  <Link className="link-arrow" href="/beginner-guide">
                    Beginner Guide
                  </Link>{" "}
                  — it walks the exact tutorial order from your first pack to
                  your first Money collection.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <Slant fill="#e9d8b8" />

      {/* ---------- Official link ---------- */}
      <section className="section section--paper-deep">
        <div className="wrap">
          <p className="eyebrow">Official source</p>
          <h2 className="headline">Play the game</h2>
          <p className="lede">
            {/* fact-001, fact-005 */}
            This wiki is a fan-made companion. The only official version is
            Collect The Alphabet by Cosmic Collection on Roblox.
          </p>
          <div className="cta-row">
            <a
              className="btn btn--paper"
              href={site.robloxUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open the official Roblox game page
              <span aria-hidden="true">↗</span>
            </a>
            <Link className="btn btn--ghost-paper" href="/beginner-guide">
              Start the Beginner Guide
            </Link>
          </div>
          <span className="external-note">
            The Roblox link is external and opens in a new tab.
          </span>
        </div>
      </section>
    </>
  );
}
