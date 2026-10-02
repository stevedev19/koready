// Runs tests/scam-samples.json through the rule-based checker and prints
// expected vs actual verdicts. Run with: npm run test:scam
// Samples are made up for testing, so printing them here is fine. Never add real user messages.
import { readFileSync } from "node:fs";
import {
  checkWithRules,
  compileRules,
  type ScamRuleSet,
  type ScamVerdict,
} from "../src/lib/scam/engine.ts";

type Sample = { id: string; kind: "scam" | "normal"; expected: ScamVerdict; text: string };

const root = new URL("..", import.meta.url);
const readJson = <T>(path: string): T => JSON.parse(readFileSync(new URL(path, root), "utf8")) as T;

const compiled = compileRules(readJson<ScamRuleSet>("data/scam-rules.json"));
const samples = readJson<Sample[]>("tests/scam-samples.json");

let falseNegatives = 0; // scam not rated "likely_scam"
let missedAsReassured = 0; // scam rated "no_obvious_signs" (worst case)
let falsePositives = 0; // normal rated "likely_scam"
let normalsUnclear = 0; // normal rated "unclear" (cautious, not a false positive)

console.log("id".padEnd(30), "expected".padEnd(17), "actual".padEnd(17), "score", "signals");
for (const sample of samples) {
  const result = checkWithRules(sample.text, compiled);
  const ok = result.verdict === sample.expected;
  if (sample.kind === "scam" && result.verdict !== "likely_scam") falseNegatives++;
  if (sample.kind === "scam" && result.verdict === "no_obvious_signs") missedAsReassured++;
  if (sample.kind === "normal" && result.verdict === "likely_scam") falsePositives++;
  if (sample.kind === "normal" && result.verdict === "unclear") normalsUnclear++;
  console.log(
    `${ok ? "✓" : "✗"} ${sample.id}`.padEnd(30),
    sample.expected.padEnd(17),
    result.verdict.padEnd(17),
    String(result.score).padStart(5),
    result.signals.map((s) => s.ruleId).join(", ") || "-",
  );
}

const scams = samples.filter((s) => s.kind === "scam").length;
const normals = samples.length - scams;
console.log(`
False negatives (scam not rated "Likely scam"): ${falseNegatives}/${scams}
  of which rated "No obvious scam signs":        ${missedAsReassured}/${scams}
False positives (normal rated "Likely scam"):   ${falsePositives}/${normals}
Normal messages rated "Unclear" (cautious):     ${normalsUnclear}/${normals}`);

process.exitCode = missedAsReassured > 0 || falsePositives > 0 ? 1 : 0;
