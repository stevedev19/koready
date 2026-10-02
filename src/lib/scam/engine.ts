// Rule-based scam checker. Pure functions with no runtime imports, so the
// sample script (scripts/check-scam-samples.ts) can run it directly in Node.
// Privacy: the text is only read in memory here. Never log, store or send it.

export type ScamVerdict = "likely_scam" | "unclear" | "no_obvious_signs";

/** Why the verdict was chosen, so the UI can explain "Unclear" results. */
export type ScamVerdictReason = "signals" | "too_short" | "odd_input" | "no_signals";

export type LocalizedText = { en: string; ko?: string };

export type ScamRule = {
  id: string;
  category: string;
  weight: number;
  patterns: { en?: string[]; ko?: string[]; any?: string[] };
  detector?: "mixed_language";
  explanation: LocalizedText;
  needs_native_review: boolean;
};

export type ScamRuleSet = {
  version: number;
  scoring: {
    likely_scam_min_score: number;
    reassurance_min_chars: number;
    reassurance_min_letter_ratio: number;
  };
  rules: ScamRule[];
};

export type ScamSignal = {
  ruleId: string;
  category: string;
  weight: number;
  explanation: LocalizedText;
};

export type ScamCheckResult = {
  verdict: ScamVerdict;
  reason: ScamVerdictReason;
  score: number;
  /** Matched rules, strongest first. */
  signals: ScamSignal[];
  mode: "rules";
};

type CompiledRule = {
  rule: ScamRule;
  spaced: RegExp[]; // en + any: matched against whitespace-collapsed text
  unspaced: RegExp[]; // ko: matched against text with all whitespace removed
};

export type CompiledRuleSet = { scoring: ScamRuleSet["scoring"]; rules: CompiledRule[] };

export function compileRules(set: ScamRuleSet): CompiledRuleSet {
  const toRegex = (source: string) => new RegExp(source, "iu");
  return {
    scoring: set.scoring,
    rules: set.rules.map((rule) => ({
      rule,
      spaced: [...(rule.patterns.en ?? []), ...(rule.patterns.any ?? [])].map(toRegex),
      unspaced: (rule.patterns.ko ?? []).map(toRegex),
    })),
  };
}

const ZERO_WIDTH = /[​-‍⁠﻿]/g;
const HANGUL = /[가-힣ㄱ-ㆎ]/g;
const LATIN_LETTER = /[a-z]/gi;
const URL_LIKE = /(https?:\/\/\S+|www\.\S+|\b\S+\.(com|net|org|kr|me|io|ly)\/\S*)/gi;
// Words with lowercase letters, so brand acronyms like "KB" or "USD" don't count.
const ENGLISH_WORD = /\b[A-Za-z]*[a-z]{2,}[A-Za-z]*\b/g;

function normalize(text: string): string {
  // NFKC folds full-width letters (ｈｔｔｐ → http) that scammers use to dodge filters.
  return text.normalize("NFKC").replace(ZERO_WIDTH, "").replace(/\s+/g, " ").trim();
}

function count(text: string, pattern: RegExp): number {
  return text.match(pattern)?.length ?? 0;
}

function isMixedLanguage(text: string): boolean {
  const withoutLinks = text.replace(URL_LIKE, " ");
  const englishWords = (withoutLinks.match(ENGLISH_WORD) ?? []).filter((w) => w.length >= 3);
  return count(withoutLinks, HANGUL) >= 6 && englishWords.length >= 3;
}

/** Share of non-space characters that are letters or digits (low = odd input like "!!!???"). */
function letterRatio(text: string): number {
  const compact = text.replace(/\s/g, "");
  if (compact.length === 0) return 0;
  const letters = count(compact, HANGUL) + count(compact, LATIN_LETTER) + count(compact, /\d/g);
  return letters / compact.length;
}

export function checkWithRules(rawText: string, compiled: CompiledRuleSet): ScamCheckResult {
  const text = normalize(rawText);
  const unspaced = text.replace(/\s/g, "");
  const { scoring } = compiled;

  const signals: ScamSignal[] = [];
  for (const { rule, spaced, unspaced: ko } of compiled.rules) {
    const matched =
      (rule.detector === "mixed_language" && isMixedLanguage(text)) ||
      spaced.some((re) => re.test(text)) ||
      ko.some((re) => re.test(unspaced));
    if (matched) {
      signals.push({
        ruleId: rule.id,
        category: rule.category,
        weight: rule.weight,
        explanation: rule.explanation,
      });
    }
  }
  signals.sort((a, b) => b.weight - a.weight);
  const score = signals.reduce((sum, s) => sum + s.weight, 0);

  const result = (verdict: ScamVerdict, reason: ScamVerdictReason): ScamCheckResult => ({
    verdict,
    reason,
    score,
    signals,
    mode: "rules",
  });

  if (score >= scoring.likely_scam_min_score) return result("likely_scam", "signals");
  if (signals.length > 0) return result("unclear", "signals");
  // No signals. Only reassure when there is enough normal text to judge.
  if (unspaced.length < scoring.reassurance_min_chars) return result("unclear", "too_short");
  if (letterRatio(text) < scoring.reassurance_min_letter_ratio) return result("unclear", "odd_input");
  return result("no_obvious_signs", "no_signals");
}
