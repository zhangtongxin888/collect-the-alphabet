import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Slant from "@/components/Slant";

export const metadata: Metadata = {
  title: "Common Mistakes — Keep-or-Sell Traps & Fixes",
  description:
    "The mistakes that slow down Collect The Alphabet players: spending your only letter copy on the Word of the Day, selling letters the word still needs, missed interactions, and code typos — with fixes for each.",
  alternates: { canonical: "/common-mistakes" },
};

export default function CommonMistakesPage() {
  return (
    <>
      <PageHero
        eyebrow="Common mistakes"
        title="Seven ways players stall their board"
        lede="Most slowdowns in Collect The Alphabet come from a handful of repeat errors. Each mistake below is drawn from recorded play sessions, paired with the fix that gets you moving again."
      />

      <Slant fill="#f4ead3" />

      {/* ---------- Collection mistakes ---------- */}
      <section className="section section--paper">
        <div className="wrap">
          <p className="eyebrow">Letters and the word</p>
          <h2 className="headline">Keep-or-sell traps</h2>
          <ul className="mistakes">
            <li className="mistake">
              <span className="mistake__mark" aria-hidden="true">
                ✗
              </span>
              <div>
                {/* fact-066, fact-067 */}
                <h3>Spending your only copy on the Word of the Day</h3>
                <p>
                  In one dated session, a player fed their only K into the word
                  and left K missing on the A–Z board. One letter copy does not
                  count for the board and the word at the same time.
                </p>
                <span className="mistake__fix">
                  Fix: mount the first copy of every letter on the board; spell
                  the word with duplicates only.
                </span>
              </div>
            </li>
            <li className="mistake">
              <span className="mistake__mark" aria-hidden="true">
                ✗
              </span>
              <div>
                {/* fact-068, fact-064 */}
                <h3>Selling a “duplicate” the word still needs</h3>
                <p>
                  A duplicate is not automatically safe to sell — the current
                  word may need it, and repeated-letter words (the dated KOALA
                  example needed two A’s) need more than one spare.
                </p>
                <span className="mistake__fix">
                  Fix: check the Word of the Day wall before every SELL ALL.
                </span>
              </div>
            </li>
            <li className="mistake">
              <span className="mistake__mark" aria-hidden="true">
                ✗
              </span>
              <div>
                {/* fact-076 */}
                <h3>Assuming a fixed Diamond price per letter</h3>
                <p>
                  Sale values are not a single permanent per-letter constant —
                  dated sessions show different letters returning different
                  Diamond amounts.
                </p>
                <span className="mistake__fix">
                  Fix: read the Sell panel’s total before confirming instead of
                  trusting memorized values.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <Slant fill="#17130d" flip />

      {/* ---------- Interaction mistakes ---------- */}
      <section className="section section--ink">
        <div className="wrap">
          <p className="eyebrow">Controls and glitches</p>
          <h2 className="headline">When the game seems stuck</h2>
          <ul className="mistakes">
            <li className="mistake">
              <span className="mistake__mark" aria-hidden="true">
                ✗
              </span>
              <div>
                {/* fact-110 */}
                <h3>Declaring a pack “gone” after one empty look</h3>
                <p>
                  A Common purchase position appeared empty right after a
                  purchase in one session, then returned later.
                </p>
                <span className="mistake__fix">
                  Fix: recheck after a moment instead of assuming a tier is
                  permanently unavailable.
                </span>
              </div>
            </li>
            <li className="mistake">
              <span className="mistake__mark" aria-hidden="true">
                ✗
              </span>
              <div>
                {/* fact-111, fact-112 */}
                <h3>Mashing E when an interaction does not register</h3>
                <p>
                  The E interaction sometimes failed to register in a long
                  session. Waiting briefly or repositioning before retrying let
                  some missed interactions go through.
                </p>
                <span className="mistake__fix">
                  Fix: pause, reposition your avatar, and press once more.
                </span>
              </div>
            </li>
            <li className="mistake">
              <span className="mistake__mark" aria-hidden="true">
                ✗
              </span>
              <div>
                {/* fact-113 */}
                <h3>Living with a frozen popup</h3>
                <p>
                  One August 25, 2026 player session resolved a frozen popup by
                  rejoining the experience. That is a player observation, not a
                  developer guarantee.
                </p>
                <span className="mistake__fix">
                  Fix: rejoin the server; placed packs can hatch while you are
                  offline, so little is lost.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <Slant fill="#e9d8b8" />

      {/* ---------- Code mistakes ---------- */}
      <section className="section section--paper-deep">
        <div className="wrap">
          <p className="eyebrow">Codes and expectations</p>
          <h2 className="headline">Redemption errors</h2>
          <ul className="mistakes">
            <li className="mistake">
              <span className="mistake__mark" aria-hidden="true">
                ✗
              </span>
              <div>
                {/* fact-120 */}
                <h3>Typing the code in lowercase</h3>
                <p>
                  The verified code must be entered exactly as the uppercase
                  string 100KMEMBERS — casing matters.
                </p>
                <span className="mistake__fix">
                  Fix: copy the code in full uppercase in Settings → Codes.{" "}
                  <Link className="link-arrow" href="/faq">
                    Full redemption steps →
                  </Link>
                </span>
              </div>
            </li>
            <li className="mistake">
              <span className="mistake__mark" aria-hidden="true">
                ✗
              </span>
              <div>
                {/* fact-074 */}
                <h3>Thinking the Sell panel is broken when it is empty</h3>
                <p>
                  When nothing is sellable, the panel says there are no letters
                  to sell and suggests opening packs. That is a normal state,
                  not a bug.
                </p>
                <span className="mistake__fix">
                  Fix: open more packs and come back once duplicates appear.
                </span>
              </div>
            </li>
          </ul>
          <p style={{ marginTop: "var(--s-6)" }}>
            Review the{" "}
            <Link className="link-arrow" href="/gameplay-loop">
              core gameplay loop
            </Link>{" "}
            to rebuild good habits, or jump to the{" "}
            <Link className="link-arrow" href="/beginner-guide">
              beginner guide
            </Link>{" "}
            if your first plot is still empty.
          </p>
        </div>
      </section>
    </>
  );
}
