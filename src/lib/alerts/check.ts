import rulesData from "../../../data/alert-rules.json";
import samplesData from "../../../data/alert-samples.json";
import { compileAlertRules, readAlert, type AlertReading, type AlertRuleSet } from "./engine";

export type { AlertCategory, AlertReading, AlertSegment, AlertType, GlossaryEntry } from "./engine";

export const ALERT_RULES = rulesData as AlertRuleSet;
export const ALERT_SAMPLES = samplesData.samples;

/** Longer input is cut off before reading. Real alerts are short (up to a few hundred characters). */
export const MAX_ALERT_CHARS = 2000;

const compiled = compileAlertRules(ALERT_RULES);

/**
 * Reads a pasted alert on the device. Privacy: never log, store or send the text.
 * Returns the reading with `original` set to the exact pasted text.
 */
export function translateAlert(text: string): AlertReading {
  return readAlert(text.slice(0, MAX_ALERT_CHARS), compiled);
}
