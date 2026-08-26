import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Slant from "@/components/Slant";
import LetterTile from "@/components/LetterTile";

export const metadata: Metadata = {
  title: "Progression Guide — Upgrades, Diamonds & Symbols",
  description:
    "Collect The Alphabet progression route: what Pack Rarity, Money Multiplier, Pack Time, and Pack Amount do, how Money and Diamonds split, the nine-slot symbol collection, daily rewards, and the group reward.",
  alternates: { canonical: "/progression-guide" },
};

export default function ProgressionGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Progression route"
        title="From Common packs to the symbol wall"
        lede="Progression is a route, not a race: grow per-second Money, widen pack capacity, push rarity with Luck, then turn duplicate letters into Diamonds and the nine secret symbols."
      />

      <Slant fill="#f4ead3" />

      {/* ---------- Two currencies ---------- */}
      <section className="section section--paper">
        <div className="wrap split">
          <div className="split__sticky">
            <p className="eyebrow">Economy</p>
            <h2 className="headline">Two currencies, two jobs</h2>
            <p className="lede">
              {/* fact-028 */}
              Money and Diamonds are separate currencies with different roles.
              Mixing up what feeds what is the most common way to stall — see{" "}
              <Link className="link-arrow" href="/common-mistakes">
                common mistakes
              </Link>{" "}
              before you sell anything.
            </p>
          </div>
          <div className="table-scroll">
            <table className="tier-table">
              <caption>Currency roles at a glance</caption>
              <thead>
                <tr>
                  <th scope="col">Currency</th>
                  <th scope="col">How you get it</th>
                  <th scope="col">What it feeds</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* fact-019, fact-016 */}
                  <td>
                    <strong>Money</strong>
                  </td>
                  <td>Mounted letters generate it every second</td>
                  <td>Letter packs and the upgrade panel</td>
                </tr>
                <tr>
                  {/* fact-023, fact-024, fact-094 */}
                  <td>
                    <strong>Diamonds</strong>
                  </td>
                  <td>Selling spare letters</td>
                  <td>Symbol Packs in the Symbol Shop</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Slant fill="#17130d" flip />

      {/* ---------- Upgrades ---------- */}
      <section className="section section--ink">
        <div className="wrap split">
          <div className="split__sticky">
            <p className="eyebrow">Upgrade panel</p>
            <h2 className="headline">Four levers, four jobs</h2>
            <p className="lede">
              {/* fact-020, fact-021, fact-022, fact-082 */}
              Money output, Luck, and pack opening speed all have named upgrade
              paths. The newer upgrade panel lists four separate fields — and
              each one tells you what the next step adds.
            </p>
          </div>
          <div className="table-scroll">
            <table className="tier-table">
              <caption>Upgrade fields and their stated effects</caption>
              <thead>
                <tr>
                  <th scope="col">Upgrade</th>
                  <th scope="col">What the next step adds</th>
                  <th scope="col">Buy it when</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* fact-084 */}
                  <td>
                    <strong>Money Multiplier</strong>
                  </td>
                  <td>Additional Money output</td>
                  <td>Your board has letters but income feels slow</td>
                </tr>
                <tr>
                  {/* fact-083 */}
                  <td>
                    <strong>Pack Rarity</strong>
                  </td>
                  <td>Additional Luck</td>
                  <td>You are hunting rarer tiers toward MYTHIC</td>
                </tr>
                <tr>
                  {/* fact-085 */}
                  <td>
                    <strong>Pack Time</strong>
                  </td>
                  <td>Reduced pack time</td>
                  <td>Timers are the bottleneck on your plot</td>
                </tr>
                <tr>
                  {/* fact-080, fact-086 */}
                  <td>
                    <strong>Pack Amount</strong>
                  </td>
                  <td>One more placed-pack slot</td>
                  <td>You can afford to keep every pad busy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="wrap" style={{ marginTop: "var(--s-6)" }}>
          <p className="note">
            {/* fact-114 */}
            Date-scoped observation: an upgraded session displayed “You can’t
            place more than 9 packs.” Nine is an upgraded ceiling in that
            session — the unupgraded base cap is not confirmed, so check your
            own panel.
          </p>
        </div>
      </section>

      <Slant fill="#e9d8b8" />

      {/* ---------- Symbols ---------- */}
      <section className="section section--paper-deep">
        <div className="wrap split">
          <div className="split__sticky">
            <p className="eyebrow">Second collection</p>
            <h2 className="headline">The nine symbols</h2>
            <p className="lede">
              {/* fact-029, fact-092, fact-104 */}
              Beyond the A–Z board sits a separate symbol wall with nine
              distinct slots, tracked apart from your 26-letter progress.
            </p>
            <div className="symbol-row" aria-label="The nine symbol slots">
              {/* fact-093 */}
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
          </div>
          <ol className="steps">
            <li className="step">
              <div>
                {/* fact-024, fact-094, fact-095 */}
                <h3>Unlock packs with Diamonds</h3>
                <p>
                  Diamonds connect the letter economy to secret Symbol Packs in
                  the Symbol Shop. Date-scoped snapshot: a Common Symbol Pack
                  cost 1,000 Diamonds in the August 25, 2026 build — prices can
                  change.
                </p>
              </div>
            </li>
            <li className="step">
              <div>
                {/* fact-097, fact-098, fact-099, fact-100 */}
                <h3>Open and deposit like letters</h3>
                <p>
                  Symbol Packs use the same countdown-and-ready style as letter
                  packs, produce a physical symbol, and deposit at the DROP OFF
                  SYMBOLS zone. One dated session showed a five-second Common
                  Symbol Pack timer — Pack Time upgrades can change that.
                </p>
              </div>
            </li>
            <li className="step">
              <div>
                {/* fact-101, fact-102, fact-103 */}
                <h3>Symbols earn too</h3>
                <p>
                  A first new symbol shows “New Symbol Unlocked” at 1/9, and a
                  placed symbol displays its own per-second income. Symbol Packs
                  can also repeat symbols you already own, so the sell decision
                  never fully goes away.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <Slant fill="#231c12" />

      {/* ---------- Daily + group ---------- */}
      <section className="section section--ink-raise">
        <div className="wrap split">
          <div className="split__sticky">
            <p className="eyebrow">Free boosts</p>
            <h2 className="headline">Daily rewards and the group reward</h2>
            <p className="lede">
              {/* fact-087, fact-088 */}
              A Daily button on the left side opens a login reward panel
              organized as a seven-day sequence — free progression for just
              showing up.
            </p>
            <p>
              <Link className="link-arrow" href="/faq">
                Codes and game passes →
              </Link>
            </p>
          </div>
          <ol className="steps">
            <li className="step">
              <div>
                {/* fact-087, fact-088, fact-089, fact-090 */}
                <h3>Claim the seven-day track</h3>
                <p>
                  Claim from the Daily panel each day. Reward contents are
                  version-scoped: dated videos show different items, including
                  an Uncommon Pack on August 25, 2026. Expect the table to shift
                  with updates.
                </p>
              </div>
            </li>
            <li className="step">
              <div>
                {/* fact-026, fact-091 */}
                <h3>Join Cosmic Collection for a free reward</h3>
                <p>
                  The game advertises a free in-game reward for joining the
                  Cosmic Collection group. The entry opens a prompt to join the
                  group rather than granting it silently, and the reward
                  contents are not specified — join first, then check in game.
                </p>
              </div>
            </li>
            <li className="step">
              <div>
                {/* fact-081 */}
                <h3>Use offline hatching</h3>
                <p>
                  A plot message confirms placed packs can hatch while you are
                  offline. Fill every pad before you log off so timers work for
                  you between sessions.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
