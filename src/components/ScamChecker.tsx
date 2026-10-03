"use client";

import { Lock, ScanSearch } from "lucide-react";
import { useId, useRef, useState } from "react";
import { checkMessage, MAX_INPUT_CHARS, type ScamCheckResult, type ScamVerdict } from "@/lib/scam/check";
import { t } from "@/lib/strings";
import { Card } from "./Card";
import { buttonClass, fieldClass } from "./ui/button";
import { Disclaimer, StatusCard, type StatusTone } from "./ui/Notice";

// Privacy: the message lives only in this component's state. It is never sent,
// stored (no localStorage) or logged, and it is cleared when you leave the page.

// Fixed meanings: danger = likely scam, warning = unclear, neutral = no obvious signs (never "safe").
const VERDICT_TONE: Record<ScamVerdict, StatusTone> = {
  likely_scam: "danger",
  unclear: "warning",
  no_obvious_signs: "neutral",
};

export function ScamChecker() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<ScamCheckResult | null>(null);
  const resultRef = useRef<HTMLHeadingElement>(null);
  const inputId = useId();
  const privacyId = useId();

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!text.trim()) return;
    setResult(await checkMessage({ text }));
    // Move focus so screen readers announce the verdict.
    requestAnimationFrame(() => resultRef.current?.focus());
  }

  function onClear() {
    setText("");
    setResult(null);
  }

  // A generic "has a link" sign adds nothing when a more specific link sign matched.
  const signals = result?.signals.filter(
    (s, _, all) => s.ruleId !== "link_any" || !all.some((o) => o.category === "link" && o.ruleId !== "link_any"),
  );

  return (
    <div className="space-y-4">
      <Card title={t.scam.title} icon={ScanSearch}>
        <form id="scam-form" onSubmit={onSubmit} className="space-y-3">
          <div className="flex items-end justify-between gap-2">
            <label htmlFor={inputId} className="block font-bold">
              {t.scam.intro}
            </label>
            <button type="button" onClick={onClear} disabled={!text && !result} className={buttonClass("text", "md", "-mr-2 shrink-0")}>
              {t.scam.clear}
            </button>
          </div>
          <textarea
            id={inputId}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setResult(null); // a verdict must always match the text shown
            }}
            placeholder={t.scam.placeholder}
            aria-describedby={privacyId}
            rows={6}
            // Keep the text away from cloud spellcheck and autofill.
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            className={`${fieldClass} min-h-36 resize-y`}
          />
          <p id={privacyId} className="flex items-center gap-1.5 text-[0.9375rem] text-muted-foreground">
            <Lock aria-hidden="true" className="size-[1.125rem] shrink-0" />
            {t.scam.privacy}
          </p>
          {text.length > MAX_INPUT_CHARS && <p className="text-[0.9375rem] text-muted-foreground">{t.scam.tooLong}</p>}
          {/* Main action sticks above the tab bar, within thumb reach (unstuck while typing, see globals.css). */}
          <div data-sticky-action className="sticky bottom-[calc(6.5rem+env(safe-area-inset-bottom))] z-10 -mx-1 flex gap-2 rounded-[1.125rem] bg-card/90 p-1 backdrop-blur">
            <button type="submit" disabled={!text.trim()} className={buttonClass("primary", "lg", "flex-1")}>
              <ScanSearch aria-hidden="true" className="size-5" />
              {t.scam.check}
            </button>
          </div>
        </form>
        <div className="mt-3">
          <Disclaimer>{t.safety.disclaimer}</Disclaimer>
        </div>
      </Card>

      {result && signals && (
        <section aria-label={t.scam.resultHeading} className="space-y-3">
          <StatusCard tone={VERDICT_TONE[result.verdict]} label={t.scam.verdicts[result.verdict]} headingRef={resultRef}>
            {(result.reason === "too_short" || result.reason === "odd_input") && (
              <p className="font-semibold">{t.scam.reasons[result.reason]}</p>
            )}
            <p className="mt-1">{t.scam.advice[result.verdict]}</p>
          </StatusCard>

          {signals.length > 0 && (
            <Card title={t.scam.signalsTitle}>
              <ul className="space-y-2.5">
                {signals.map((s) => (
                  <li key={s.ruleId} className="rounded-xl bg-surface-2 px-3.5 py-3">
                    {s.explanation.en}
                  </li>
                ))}
              </ul>
            </Card>
          )}
          <p className="text-[0.9375rem] text-muted-foreground">{t.scam.rulesNote}</p>
          <Disclaimer>{t.safety.disclaimer}</Disclaimer>
        </section>
      )}
    </div>
  );
}
