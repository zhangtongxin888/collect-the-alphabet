import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Slant from "@/components/Slant";

export const metadata: Metadata = {
  title: "Beginner Guide — Your First Session",
  description:
    "Step-by-step beginner guide for Collect The Alphabet on Roblox: buy and place your first pack, open it at READY, drop off letters, and start your per-second Money engine.",
  alternates: { canonical: "/beginner-guide" },
};

export default function BeginnerGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Beginner guide"
        title="Zero to a working letter plot"
        lede="Everything a brand-new player needs: the exact order the tutorial expects, what each zone on your plot does, and how to leave your first session with letters mounted and Money ticking."
      />

      <Slant fill="#f4ead3" />

      {/* ---------- The first purchase ---------- */}
      <section className="section section--paper">
        <div className="wrap split">
          <div className="split__sticky">
            <p className="eyebrow">Step one</p>
            <h2 className="headline">Buy your first pack</h2>
            <p className="lede">
              {/* fact-041 */}
              The tutorial’s first instruction is simple: buy a pack. Head for
              the shop area and pick the Common pack to start.
            </p>
            <p className="note">
              {/* fact-042, fact-043 */}
              Date-scoped snapshot (August 19, 2026 build): a new player began
              with 100 Money and 0 Diamonds, and the first Common pack cost 100
              Money. Starting balances and prices can change with updates —
              check the live board before planning around exact numbers.
            </p>
          </div>
          <ol className="steps">
            <li className="step">
              <div>
                {/* fact-058 */}
                <h3>Know your three buttons</h3>
                <p>
                  The top of the screen keeps Sell, Home, and Shop available at
                  all times. Home returns you to your plot; Shop takes you to
                  the packs; Sell teleports you to the selling area.
                </p>
              </div>
            </li>
            <li className="step">
              <div>
                {/* fact-035, fact-036 */}
                <h3>Read the board before paying</h3>
                <p>
                  Every pack board lists its possible letters and shows visible
                  result percentages up front. You always know what a tier can
                  drop before you spend.
                </p>
              </div>
            </li>
            <li className="step">
              <div>
                {/* fact-044 */}
                <h3>Buying is not opening</h3>
                <p>
                  A purchased pack goes into your hands for placement — it does
                  not open on its own. The next move happens back at your plot.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <Slant fill="#17130d" flip />

      {/* ---------- Placement and hatching ---------- */}
      <section className="section section--ink">
        <div className="wrap split">
          <div className="split__sticky">
            <p className="eyebrow">Step two</p>
            <h2 className="headline">Place it, wait, open it</h2>
            <p className="lede">
              {/* fact-045, fact-046, fact-047, fact-048 */}
              Your plot has dedicated ground pads. Click to set the pack down,
              watch its countdown, and wait for the pad to flip to READY.
            </p>
          </div>
          <ol className="steps">
            <li className="step">
              <div>
                {/* fact-045, fact-046 */}
                <h3>Click to place on a pad</h3>
                <p>
                  The placement tutorial tells you to click to place the pack
                  down. Packs sit on the dedicated ground pads on your own plot.
                </p>
              </div>
            </li>
            <li className="step">
              <div>
                {/* fact-047, fact-048 */}
                <h3>Watch the countdown</h3>
                <p>
                  A placed pack shows a countdown on its pad. When the timer
                  finishes, the pad changes to READY.
                </p>
              </div>
            </li>
            <li className="step">
              <div>
                {/* fact-049, fact-050 */}
                <h3>Interact to open</h3>
                <p>
                  A READY pack still needs you — interact with it and the pack
                  pops open into a large physical letter you can see and carry.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <Slant fill="#e9d8b8" />

      {/* ---------- Deposit and income ---------- */}
      <section className="section section--paper-deep">
        <div className="wrap split">
          <div className="split__sticky">
            <p className="eyebrow">Step three</p>
            <h2 className="headline">Drop off, mount, earn</h2>
            <p className="lede">
              {/* fact-052, fact-053 */}
              Carry your letter to the blue DROP OFF LETTERS zone. Your first
              unique deposit flashes “New Letter Unlocked” and sets board
              progress to 1/26.
            </p>
          </div>
          <ol className="steps">
            <li className="step">
              <div>
                {/* fact-051, fact-052 */}
                <h3>Carry it to the blue zone</h3>
                <p>
                  You visibly carry the opened letter until you deposit it. Walk
                  it into the plot’s blue DROP OFF LETTERS zone to bank it.
                </p>
              </div>
            </li>
            <li className="step">
              <div>
                {/* fact-053, fact-054, fact-055 */}
                <h3>Unique letters move the counter</h3>
                <p>
                  Only new letters count: any first-time deposit — even an F on
                  an empty board — moves progress to 1/26, and the board slot
                  flips from missing to collected.
                </p>
              </div>
            </li>
            <li className="step">
              <div>
                {/* fact-018, fact-019, fact-056, fact-057 */}
                <h3>Collect your Money</h3>
                <p>
                  Collected letters mount on your board and generate Money every
                  second. After your first deposit the tutorial sends you to the
                  plot’s visible Money collection point — visit it and pocket
                  the earnings.
                </p>
              </div>
            </li>
            <li className="step">
              <div>
                {/* fact-069, fact-070, fact-071 */}
                <h3>Handle duplicates calmly</h3>
                <p>
                  Packs can repeat letters you already own. Extras trigger a
                  “Sell your extra letters” prompt, and the Sell panel lists
                  exactly which letters are eligible.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <Slant fill="#231c12" />

      {/* ---------- Next steps ---------- */}
      <section className="section section--ink-raise">
        <div className="wrap">
          <p className="eyebrow">Next stops</p>
          <h2 className="headline">Where to go from here</h2>
          <div className="link-lanes">
            <Link className="lane" href="/gameplay-loop">
              <span className="lane__index">→</span>
              <span>
                <span className="lane__title">Gameplay Loop</span>
                <br />
                <span className="lane__desc">
                  Turn these first steps into a repeatable Money and Diamond
                  engine.
                </span>
              </span>
              <span className="lane__arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <Link className="lane" href="/progression-guide">
              <span className="lane__index">→</span>
              <span>
                <span className="lane__title">Progression Guide</span>
                <br />
                <span className="lane__desc">
                  Learn what Money Multiplier, Pack Rarity, Pack Time, and Pack
                  Amount each do.
                </span>
              </span>
              <span className="lane__arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <Link className="lane" href="/common-mistakes">
              <span className="lane__index">→</span>
              <span>
                <span className="lane__title">Common Mistakes</span>
                <br />
                <span className="lane__desc">
                  Dodge the keep-or-sell traps that slow most new boards down.
                </span>
              </span>
              <span className="lane__arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <Link className="lane" href="/faq">
              <span className="lane__index">→</span>
              <span>
                <span className="lane__title">FAQ & Codes</span>
                <br />
                <span className="lane__desc">
                  Redeem the date-checked code and claim your group reward.
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
