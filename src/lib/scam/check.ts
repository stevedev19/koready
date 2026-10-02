import rulesData from "../../../data/scam-rules.json";
import { checkWithRules, compileRules, type ScamCheckResult, type ScamRuleSet } from "./engine";

export type { ScamCheckResult, ScamSignal, ScamVerdict, ScamVerdictReason } from "./engine";

/** "rules" runs on the device. An optional "ai" mode can be added here later. */
export type ScamCheckMode = "rules";

export type ScamCheckInput = {
  text: string;
  mode?: ScamCheckMode;
};

/** Longer input is cut off before checking. Scam texts are short. */
export const MAX_INPUT_CHARS = 5000;

const compiled = compileRules(rulesData as ScamRuleSet);

/**
 * Single entry point the UI calls. Async so a future server-side mode fits the
 * same signature. Privacy: never log, store or send `input.text` in rules mode.
 */
export async function checkMessage(input: ScamCheckInput): Promise<ScamCheckResult> {
  const text = input.text.slice(0, MAX_INPUT_CHARS);
  switch (input.mode ?? "rules") {
    case "rules":
      return checkWithRules(text, compiled);
  }
}
