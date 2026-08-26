import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Slant from "@/components/Slant";
import LetterTile from "@/components/LetterTile";

export const metadata: Metadata = {
  title: "Core Gameplay Loop — Packs, Letters, Money & Diamonds",
  description:
    "The full Collect The Alphabet loop explained: pack tiers and odds boards, placement timers, READY opens, letter drop-off, per-second Money, selling extras for Diamonds, and the Word of the Day side loop.",
  alternates: { canonical: "/gameplay-loop" },
};

export default function GameplayLoopPage() {
  return (
    <>
      <PageHero
        eyebrow="Core gameplay loop"
        title="The loop that fills your board"
        lede="Collect The Alphabet runs on one repeatable cycle — buy, place, wait, open, deposit, earn — with two side loops for duplicates and the Word of the Day. Learn each station and the whole game clicks."
      />

      <Slant fill="#f4ead3" />

      {/* ---------- Main loop ---------- */}
      <section className="section section--paper">
        <div className="wrap split">
          <div className="split__sticky">
            <p className="eyebrow">Main loop</p>
            <h2 className="headline">Six stations, one rhythm</h2>
            <p className="lede">
              {/* fact-016, fact-018, fact-019 */}
              Letters come from letter packs. Unique letters mount on your
              board, and mounted letters generate Money every second. That Money
              buys the next round of packs.
            </p>
            <p>
              New here?{" "}
              <Link className="link-arrow" href="/beginner-guide">
                Start with the beginner guide →
              </Link>
            </p>
          </div>
          <ol className="flow">
            <li className="flow__item">
              <span className="flow__badge flow__badge--coral">Buy</span>
              <div className="flow__body">
                {/* fact-017, fact-035, fact-036 */}
                <h3>Pick a pack tier</h3>
                <p>
                  The official pack range runs from Common all the way to
                  MYTHIC. Each board displays its possible letter results and
                  their visible percentages before you buy, so you can target
                  the letters your board still misses.
                </p>
              </div>
            </li>
            <li className="flow__item">
              <span className="flow__badge flow__badge--amber">Place</span>
              <div className="flow__body">
                {/* fact-044, fact-045, fact-046, fact-077 */}
                <h3>Place packs on your pads</h3>
                <p>
                  Bought packs wait in your hands until you click to place them
                  on your plot’s ground pads. When placement capacity allows,
                  multiple packs can sit on the plot at the same time.
                </p>
              </div>
            </li>
            <li className="flow__item">
              <span className="flow__badge flow__badge--teal">Wait</span>
              <div className="flow__body">
                {/* fact-047, fact-078, fact-081 */}
                <h3>Timers run in parallel</h3>
                <p>
                  Each placed pack keeps its own countdown — they tick
                  independently, and placed packs can even hatch while you are
                  offline.
                </p>
              </div>
            </li>
            <li className="flow__item">
              <span className="flow__badge flow__badge--violet">Open</span>
              <div className="flow__body">
                {/* fact-048, fact-049, fact-050, fact-079 */}
                <h3>Open at READY</h3>
                <p>
                  Each pad flips to READY on its own schedule. Interact with a
                  READY pack to open it and reveal a large physical letter.
                </p>
              </div>
            </li>
            <li className="flow__item">
              <span className="flow__badge flow__badge--leaf">Deposit</span>
              <div className="flow__body">
                {/* fact-051, fact-052, fact-055 */}
                <h3>Drop off the letter</h3>
                <p>
                  Carry the letter to the blue DROP OFF LETTERS zone. A
                  first-time letter flips its board slot from missing to
                  collected.
                </p>
              </div>
            </li>
            <li className="flow__item">
              <span className="flow__badge flow__badge--blue">Earn</span>
              <div className="flow__body">
                {/* fact-019, fact-057 */}
                <h3>Harvest Money</h3>
                <p>
                  Mounted letters generate Money every second. Visit your plot’s
                  Money collection point, then reinvest in the next tier of
                  packs.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <Slant fill="#17130d" flip />

      {/* ---------- Duplicate loop ---------- */}
      <section className="section section--ink">
        <div className="wrap split">
          <div className="split__sticky">
            <p className="eyebrow">Side loop A</p>
            <h2 className="headline">Duplicates become Diamonds</h2>
            <p className="lede">
              {/* fact-023, fact-024, fact-028 */}
              Money and Diamonds are separate currencies with different roles.
              Money buys letter packs; spare letters sell for Diamonds; Diamonds
              connect you to secret Symbol Packs.
            </p>
            <p>
              <Link className="link-arrow" href="/progression-guide">
                Where Diamonds go next →
              </Link>
            </p>
          </div>
          <div>
            <ol className="steps">
              <li className="step">
                <div>
                  {/* fact-069, fact-070 */}
                  <h3>Pull a repeat</h3>
                  <p>
                    Letter packs can produce letters you already own. When
                    extras pile up, the game nudges you with a “Sell your extra
                    letters” prompt.
                  </p>
                </div>
              </li>
              <li className="step">
                <div>
                  {/* fact-058, fact-059 */}
                  <h3>Hit Sell in the top bar</h3>
                  <p>
                    The Sell button teleports you to the Sell area, where one
                    more interaction opens the Sell panel.
                  </p>
                </div>
              </li>
              <li className="step">
                <div>
                  {/* fact-071, fact-072, fact-073, fact-075 */}
                  <h3>Review, then SELL ALL</h3>
                  <p>
                    The panel lists your sellable extras and shows a total
                    Diamond value before confirmation. SELL ALL clears the list
                    and visibly raises your Diamond balance.
                  </p>
                </div>
              </li>
            </ol>
            <p className="note">
              {/* fact-076 */}
              Sale values are not a fixed per-letter constant — dated sessions
              show different letters returning different Diamond amounts. Treat
              the panel total as the source of truth each time.
            </p>
          </div>
        </div>
      </section>

      <Slant fill="#e9d8b8" />

      {/* ---------- Word of the day loop ---------- */}
      <section className="section section--paper-deep">
        <div className="wrap split">
          <div className="split__sticky">
            <p className="eyebrow">Side loop B</p>
            <h2 className="headline">Word of the Day</h2>
            <p className="lede">
              {/* fact-025, fact-060, fact-062 */}
              A dedicated display wall asks you to spell a changing word for a
              prize, with a visible countdown to the next word.
            </p>
          </div>
          <div>
            <div className="word-wall">
              <span className="word-wall__label">
                Example format only — the live word rotates daily
              </span>
              <LetterTile glyph="?" color="coral" />
              <LetterTile glyph="?" color="amber" />
              <LetterTile glyph="?" color="teal" />
              <LetterTile glyph="?" color="violet" />
              <LetterTile glyph="?" color="leaf" />
            </div>
            <ol className="steps">
              <li className="step">
                <div>
                  {/* fact-060, fact-062 */}
                  <h3>Read the wall</h3>
                  <p>
                    The Word of the Day wall shows today’s target and counts
                    down to the next one. Plan around the timer.
                  </p>
                </div>
              </li>
              <li className="step">
                <div>
                  {/* fact-064, fact-065 */}
                  <h3>Deliver letters one at a time</h3>
                  <p>
                    Letters are physically carried into the Word of the Day area
                    one by one. Some words repeat letters — the dated example
                    KOALA needed two copies of A.
                  </p>
                </div>
              </li>
              <li className="step">
                <div>
                  {/* fact-061, fact-067 */}
                  <h3>Use the right zone — and spare letters</h3>
                  <p>
                    Words go to the separate DROP OFF WORD zone, not the blue
                    letter zone. One copy of a letter does not count for both
                    the board and the word at the same time, so spell with
                    spares.
                  </p>
                </div>
              </li>
            </ol>
            <p className="note">
              {/* fact-063, fact-108 */}
              Date-scoped: KOALA (August 19, 2026) and later EAGLE (August 25,
              2026) were shown as words of the day in recorded builds. Neither
              is the current word — always read the wall in game.
            </p>
          </div>
        </div>
      </section>

      <Slant fill="#231c12" />

      {/* ---------- Symbol loop ---------- */}
      <section className="section section--ink-raise">
        <div className="wrap split">
          <div className="split__sticky">
            <p className="eyebrow">Late-game loop</p>
            <h2 className="headline">Symbol Packs mirror the same rhythm</h2>
            <p className="lede">
              {/* fact-094, fact-096, fact-097 */}
              Once Diamonds start flowing, the Symbol Shop converts them into
              Symbol Packs — which you carry back, place, and open with the
              same countdown-and-READY rhythm as letter packs.
            </p>
            <p>
              <Link className="link-arrow" href="/progression-guide">
                Full progression route →
              </Link>
            </p>
          </div>
          <ol className="steps">
            <li className="step">
              <div>
                {/* fact-094 */}
                <h3>Spend Diamonds at the Symbol Shop</h3>
                <p>
                  The Symbol Shop unlocks Symbol Packs with Diamonds — the
                  reason your duplicate letters matter.
                </p>
              </div>
            </li>
            <li className="step">
              <div>
                {/* fact-096, fact-097 */}
                <h3>Carry, place, wait</h3>
                <p>
                  Carry the Symbol Pack back to the pack-opening area and place
                  it; it counts down and flips to READY just like a letter pack.
                </p>
              </div>
            </li>
            <li className="step">
              <div>
                {/* fact-099, fact-100, fact-101 */}
                <h3>Drop off at the symbol zone</h3>
                <p>
                  Opening produces a physical symbol you deliver to the
                  dedicated DROP OFF SYMBOLS zone. Your first new symbol shows
                  “New Symbol Unlocked” with 1/9 progress.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
