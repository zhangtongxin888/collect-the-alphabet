import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (relativePath) => readFileSync(path.join(root, relativePath), "utf8");
const readJson = (relativePath) => JSON.parse(read(relativePath));

const requiredRoutes = [
  "/",
  "/beginner-guide",
  "/gameplay-loop",
  "/progression-guide",
  "/common-mistakes",
  "/faq",
];

function sourceFiles(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const absolute = path.join(directory, entry);
    return statSync(absolute).isDirectory() ? sourceFiles(absolute) : [absolute];
  });
}

test("all required guide routes exist", () => {
  for (const route of requiredRoutes) {
    const relative = route === "/" ? "src/app/page.tsx" : `src/app${route}/page.tsx`;
    assert.ok(existsSync(path.join(root, relative)), `missing ${route}`);
  }
});

test("the dominant hero action is the internal beginner guide", () => {
  const homepage = read("src/app/page.tsx");
  assert.match(homepage, /href="\/beginner-guide"[\s\S]{0,180}Start the Beginner Guide/);
  assert.doesNotMatch(
    homepage,
    /className="btn btn--primary"[\s\S]{0,180}roblox\.com/i,
  );
});

test("research and design handoffs stay linked and approved", () => {
  const research = readJson(".launch/research/codex-research-v1.json");
  const approval = readJson(".launch/research/research-approved.json");
  const design = readJson(".launch/design/kimi-design-v1.json");
  const approvalBytes = read(".launch/research/research-approved.json");
  const approvalHash = createHash("sha256").update(approvalBytes).digest("hex");
  const approved = new Set(approval.approved_fact_ids);
  const known = new Set(research.facts.map((fact) => fact.id));

  assert.equal(approval.approved_fact_ids.length, 125);
  assert.equal(design.provider.name, "Kimi");
  assert.equal(design.provider.model, "kimi-code/k3");
  assert.equal(design.research_approval_sha256, approvalHash);
  assert.equal(design.approved_fact_ids_used.length, 100);
  assert.ok(design.approved_fact_ids_used.every((id) => approved.has(id) && known.has(id)));
});

test("player-facing source contains no rejected facts or competitor references", () => {
  const approval = readJson(".launch/research/research-approved.json");
  const rejected = new Set(approval.rejected_facts.map((fact) => fact.id));
  const source = sourceFiles(path.join(root, "src"))
    .map((file) => readFileSync(file, "utf8"))
    .join("\n");
  const factIds = [...source.matchAll(/fact-\d{3}/g)].map(([id]) => id);

  assert.ok(factIds.length > 0);
  assert.ok(factIds.every((id) => !rejected.has(id)));
  assert.doesNotMatch(
    source,
    /collect-the-alphabet\.wiki|collectthealphabet\.wiki|Toybox|RainbowZ|FRIDAY|200KMEMBERS|NEWUPDATE/i,
  );
});

test("SEO routes declare the formal domain and all guide URLs", () => {
  const site = read("src/lib/site.ts");
  const sitemap = read("src/app/sitemap.ts");
  const robots = read("src/app/robots.ts");

  assert.match(site, /https:\/\/collectthealphabetrolbox\.wiki/);
  assert.match(robots, /sitemap\.xml/);
  assert.match(sitemap, /navLinks\.map/);
  for (const route of requiredRoutes.slice(1)) {
    assert.match(site, new RegExp(route.replace("/", "\\/")));
  }
});
