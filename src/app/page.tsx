import Link from "next/link";
import type { Metadata } from "next";
import LetterTile from "@/components/LetterTile";
import Slant from "@/components/Slant";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Collect The Alphabet Wiki — Beginner Guide, Loop, Upgrades & Codes",
  description:
    "Learn Collect The Alphabet on Roblox: quick start, the pack-to-board core loop, Money and Diamond progression, Symbol Packs, Word of the Day, common mistakes, and a date-checked FAQ.",
  alternates: { canonical: "/" },
};

const trayTiles: Array<{ glyph: string; color: string }> = [
  { glyph: "C", color: "coral" },
  { glyph: "O", color: "amber" },
  { glyph: "L", color: "teal" },
  { glyph: "L", color: "violet" },
  { glyph: "E", color: "leaf" },
  { glyph: "C", color: "blue" },
  { glyph: "T", color: "coral" },
  { glyph: "26", color: "ink" },
];

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero section--ink">
        <div className="wrap hero__grid">
          <div>
            <p className="eyebrow">Unofficial fan wiki</p>
            <h1 className="hero__title">
              Collect every letter. <span className="accent">A to Z.</span>
            </h1>
            <p className="hero__lede">
              {/* fact-015, fact-016, fact-018, fact-019 */}
              {site.gameName} is a Roblox collector by {site.developer} where
              you open letter packs, mount letters on your board, and earn Money
              every second — all the way from A through Z. This wiki walks you
              from your first pack to a full alphabet.
            </p>
            <div className="cta-row">
              <Link href="/beginner-guide" className="btn btn--primary">
                Start the Beginner Guide
                <span aria-hidden="true">→</span>
              </Link>
              <a
                className="btn btn--secondary"
                href={site.robloxUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* fact-001 */}
                Official game on Roblox
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <span className="external-note">
              Secondary link: the official Roblox experience page opens in a new
              tab.
            </span>
            <div className="stat-strip">
              <div className="stat">
                {/* fact-015 */}
                <p className="stat__num">26</p>
                <p className="stat__label">Letters, A through Z</p>
              </div>
              <div className="stat">
                {/* fact-017 */}
                <p className="stat__num">6+</p>
                <p className="stat__label">Pack tiers, Common to MYTHIC</p>
              </div>
              <div className="stat">
                {/* fact-029, fact-092 */}
                <p className="stat__num">9</p>
                <p className="stat__label">Secret symbols beyond the board</p>
              </div>
            </div>
          </div>
          <div>
            <div className="tray" aria-hidden="true">
              {trayTiles.map((t, i) => (
                <LetterTile
                  key={i}
                  glyph={t.glyph}
                  color={t.color as never}
                />
              ))}
            </div>
            <p className="tray-caption">The workbench — every tile is a goal</p>
          </div>
        </div>
      </section>

      <Slant fill="#f4ead3" />

      {/* ---------- Quick start ---------- */}
      <section className="section section--paper" id="quick-start">
        <div className="wrap split">
          <div className="split__sticky">
            <p className="eyebrow">Quick start</p>
            <h2 className="headline">Your first five minutes</h2>
            <p className="lede">
              {/* fact-041 */}
              The game opens with one instruction: buy your first pack.
              Everything after that is a short, satisfying loop you can learn in
              one session.
            </p>
            <p>
              <Link className="link-arrow" href="/beginner-guide">
                Full beginner walkthrough →
              </Link>
            </p>
          </div>
          <ol className="steps">
            <li className="step">
              <div>
                {/* fact-041, fact-044, fact-045, fact-046 */}
                <h3>Buy a pack and place it</h3>
                <p>
                  Purchase a letter pack from the shop area, then click to place
                  it on one of the ground pads on your plot. Buying a pack does
                  not open it — placement comes first.
                </p>
              </div>
            </li>
            <li className="step">
              <div>
                {/* fact-047, fact-048, fact-049 */}
                <h3>Wait for READY</h3>
                <p>
                  A placed pack counts down on its pad. When the timer ends the
                  pad switches to READY, and you interact with it to open the
                  pack.
                </p>
              </div>
            </li>
            <li className="step">
              <div>
                {/* fact-050, fact-051, fact-052, fact-053 */}
                <h3>Carry and drop off</h3>
                <p>
                  Opening a pack produces a big physical letter you carry to the
                  blue DROP OFF LETTERS zone. A new letter flashes “New Letter
                  Unlocked” and moves your board progress to 1/26.
                </p>
              </div>
            </li>
            <li className="step">
              <div>
                {/* fact-019, fact-056, fact-057 */}
                <h3>Collect your Money</h3>
                <p>
                  Mounted letters generate Money every second. After your first
                  deposit, the tutorial points you to your plot’s Money
                  collection point — grab it and reinvest in more packs.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <Slant fill="#17130d" flip />

      {/* ---------- Core loop ---------- */}
      <section className="section section--ink" id="core-loop">
        <div className="wrap split">
          <div className="split__sticky">
            <p className="eyebrow">Core gameplay loop</p>
            <h2 className="headline">Pack → letter → board → Money</h2>
            <p className="lede">
              {/* fact-016, fact-019, fact-023, fact-024 */}
              Every session runs on the same engine: open letter packs, mount
              unique letters for per-second Money, sell spare letters for
              Diamonds, and feed Diamonds into secret Symbol Packs.
            </p>
            <p>
              <Link className="link-arrow" href="/gameplay-loop">
                See the full loop, step by step →
              </Link>
            </p>
          </div>
          <div>
            <div className="tile-row" aria-label="Letter tiles spelling LEARN">
              <LetterTile glyph="P" color="coral" label="Pack" />
              <LetterTile glyph="→" color="ink" label="leads to" />
              <LetterTile glyph="B" color="teal" label="Board" />
              <LetterTile glyph="→" color="ink" label="leads to" />
              <LetterTile glyph="$" color="amber" label="Money" />
              <LetterTile glyph="→" color="ink" label="leads to" />
              <LetterTile glyph="◆" color="violet" label="Diamonds" />
            </div>
            <ul className="flow">
              <li className="flow__item">
                <span className="flow__badge flow__badge--coral">Buy</span>
                <div className="flow__body">
                  {/* fact-017, fact-035, fact-036 */}
                  <h3>Choose a pack tier</h3>
                  <p>
                    Packs range from Common up to MYTHIC. Each pack board shows
                    its possible letters and visible result percentages before
                    you pay.
                  </p>
                </div>
              </li>
              <li className="flow__item">
                <span className="flow__badge flow__badge--teal">Place</span>
                <div className="flow__body">
                  {/* fact-046, fact-077, fact-078 */}
                  <h3>Fill your plot pads</h3>
                  <p>
                    Place packs on your plot’s ground pads. Several packs can
                    count down at the same time, each on its own timer.
                  </p>
                </div>
              </li>
              <li className="flow__item">
                <span className="flow__badge flow__badge--amber">Open</span>
                <div className="flow__body">
                  {/* fact-049, fact-050, fact-069 */}
                  <h3>Open and reveal</h3>
                  <p>
                    READY packs open on interaction and reveal a physical
                    letter. Duplicates happen — extras feed the Sell panel
                    instead of the board.
                  </p>
                </div>
              </li>
              <li className="flow__item">
                <span className="flow__badge flow__badge--leaf">Earn</span>
                <div className="flow__body">
                  {/* fact-019, fact-023, fact-072, fact-075 */}
                  <h3>Money and Diamonds</h3>
                  <p>
                    Mounted letters drip Money every second; selling spare
                    letters pays out Diamonds with a visible total before you
                    confirm.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Slant fill="#e9d8b8" />

      {/* ---------- Progression + Word of the Day ---------- */}
      <section className="section section--paper-deep" id="progression">
        <div className="wrap split">
          <div className="split__sticky">
            <p className="eyebrow">Progression route</p>
            <h2 className="headline">Upgrades, symbols, and the daily word</h2>
            <p className="lede">
              {/* fact-020, fact-021, fact-022 */}
              Money output, Luck, and pack opening speed all have named upgrade
              paths. Beyond the A–Z board, a nine-slot symbol wall waits for
              your Diamonds.
            </p>
            <p>
              <Link className="link-arrow" href="/progression-guide">
                Plan your upgrade route →
              </Link>
            </p>
          </div>
          <div>
            <div className="word-wall">
              <span className="word-wall__label">
                {/* fact-025, fact-060, fact-062 */}
                Word of the Day — a changing word with a countdown to the next
                one
              </span>
              <LetterTile glyph="W" color="coral" />
              <LetterTile glyph="O" color="amber" />
              <LetterTile glyph="R" color="teal" />
              <LetterTile glyph="D" color="violet" />
              <LetterTile glyph="?" color="ink" />
            </div>
            <p>
              {/* fact-025, fact-061 */}
              Spell the changing Word of the Day by delivering physical letters
              to its own DROP OFF WORD zone for a prize. Check the wall — the
              word rotates, and today’s answer is never yesterday’s.
            </p>
            <div className="symbol-row" aria-label="The nine symbol slots">
              {/* fact-092, fact-093 */}
              <LetterTile glyph="+" color="teal" label="Symbol plus" />
              <LetterTile glyph="-" color="coral" label="Symbol minus" />
              <LetterTile glyph="%" color="amber" label="Symbol percent" />
              <LetterTile glyph="!" color="violet" label="Symbol exclamation" />
              <LetterTile glyph="?" color="leaf" label="Symbol question mark" />
              <LetterTile glyph="$" color="blue" label="Symbol dollar" />
              <LetterTile glyph="&" color="coral" label="Symbol ampersand" />
              <LetterTile glyph="#" color="amber" label="Symbol hash" />
              <LetterTile glyph="@" color="teal" label="Symbol at" />
            </div>
            <p>
              {/* fact-029, fact-092, fact-094, fact-104 */}
              Symbols are a separate collection layer tracked on their own wall
              with nine slots — unlocked through Symbol Packs bought with
              Diamonds, and counted apart from your 26-letter progress.
            </p>
          </div>
        </div>
      </section>

      <Slant fill="#231c12" />

      {/* ---------- Site map lanes ---------- */}
      <section className="section section--ink-raise" id="guides">
        <div className="wrap">
          <p className="eyebrow">All guides</p>
          <h2 className="headline">Pick your next stop on the bench</h2>
          <div className="link-lanes">
            <Link className="lane" href="/beginner-guide">
              <span className="lane__index">01</span>
              <span>
                <span className="lane__title">Beginner Guide</span>
                <br />
                <span className="lane__desc">
                  From your first 100-Money pack to a running Money engine.
                </span>
              </span>
              <span className="lane__arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <Link className="lane" href="/gameplay-loop">
              <span className="lane__index">02</span>
              <span>
                <span className="lane__title">Gameplay Loop</span>
                <br />
                <span className="lane__desc">
                  The full pack-to-payout cycle, including Word of the Day.
                </span>
              </span>
              <span className="lane__arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <Link className="lane" href="/progression-guide">
              <span className="lane__index">03</span>
              <span>
                <span className="lane__title">Progression Guide</span>
                <br />
                <span className="lane__desc">
                  Upgrade roles, Diamond routing, symbols, and daily rewards.
                </span>
              </span>
              <span className="lane__arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <Link className="lane" href="/common-mistakes">
              <span className="lane__index">04</span>
              <span>
                <span className="lane__title">Common Mistakes</span>
                <br />
                <span className="lane__desc">
                  Keep-or-sell traps, missed interactions, and code typos.
                </span>
              </span>
              <span className="lane__arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <Link className="lane" href="/faq">
              <span className="lane__index">05</span>
              <span>
                <span className="lane__title">FAQ & Codes</span>
                <br />
                <span className="lane__desc">
                  Date-checked codes, game passes, currencies, and group
                  rewards.
                </span>
              </span>
              <span className="lane__arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
