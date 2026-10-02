import slangData from "../../data/slang.json";

export type SlangTone = "casual" | "playful" | "rude" | "formal";
export type SlangUsage = "safe" | "casual" | "risky";

export type SlangEntry = {
  id: string;
  term: string;
  romanization: string;
  meaning: string;
  tone: SlangTone;
  usage_level: SlangUsage;
  examples: { ko: string; en: string }[];
  last_verified: string | null;
  needs_native_review: boolean;
};

export const SLANG = slangData as SlangEntry[];

const KST_OFFSET_MS = 9 * 60 * 60 * 1000; // Korea has no DST
const DAY_MS = 24 * 60 * 60 * 1000;

/** Days since 1970-01-01 in Korea time, so everyone flips at KST midnight. */
export function kstDayNumber(now: Date = new Date()): number {
  return Math.floor((now.getTime() + KST_OFFSET_MS) / DAY_MS);
}

export function slangForDay(dayNumber: number): SlangEntry {
  return SLANG[dayNumber % SLANG.length];
}
