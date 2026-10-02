// Runs the alert samples through the rule-based reader and prints expected vs actual.
// Run with: npm run test:alerts
// Samples are written for this app (not real alerts), so printing them is fine.
import { readFileSync } from "node:fs";
import { compileAlertRules, readAlert, type AlertRuleSet } from "../src/lib/alerts/engine.ts";

type Expect = {
  type?: string | null;
  lifted?: boolean;
  drill?: boolean;
  level?: string | null;
  fullyUnderstood?: boolean;
  areaIncludes?: string;
  timeIncludes?: string;
};
type Case = { id: string; text?: string; expect: Expect };

const root = new URL("..", import.meta.url);
const readJson = <T>(path: string): T => JSON.parse(readFileSync(new URL(path, root), "utf8")) as T;

const compiled = compileAlertRules(readJson<AlertRuleSet>("data/alert-rules.json"));
const samples = readJson<{ samples: { id: string; text: string }[] }>("data/alert-samples.json").samples;
const cases = readJson<{ cases: Case[] }>("tests/alert-samples.json").cases;

let misses = 0;
for (const c of cases) {
  const text = c.text ?? samples.find((s) => s.id === c.id)?.text;
  if (!text) throw new Error(`No text for case ${c.id}`);
  const r = readAlert(text, compiled);
  const actual: Record<string, unknown> = {
    type: r.types[0]?.id ?? null,
    lifted: r.lifted,
    drill: r.drill,
    level: r.level,
    fullyUnderstood: r.fullyUnderstood,
    areaIncludes: r.areas.join(" | "),
    timeIncludes: r.times.join(" | "),
  };
  const problems: string[] = [];
  for (const [key, want] of Object.entries(c.expect)) {
    const got = actual[key];
    const ok = key.endsWith("Includes") ? String(got).includes(String(want)) : got === want;
    if (!ok) problems.push(`${key}: expected ${JSON.stringify(want)}, got ${JSON.stringify(got)}`);
  }
  if (problems.length) misses++;
  const unrecognized = r.segments.filter((s) => !s.recognized).map((s) => s.text);
  console.log(`${problems.length ? "✗" : "✓"} ${c.id.padEnd(16)} type=${actual.type} lifted=${r.lifted} drill=${r.drill} level=${r.level} full=${r.fullyUnderstood}`);
  console.log(`    areas: ${r.areas.join(" | ") || "-"}   times: ${r.times.join(" | ") || "-"}`);
  if (unrecognized.length) console.log(`    not translated: ${unrecognized.join(" ‖ ")}`);
  for (const p of problems) console.log(`    MISS ${p}`);
}
console.log(`\n${cases.length - misses}/${cases.length} cases matched, ${misses} with misses.`);
process.exitCode = misses ? 1 : 0;
