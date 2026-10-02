"use client";

import { useId, useRef, useState } from "react";
import { checkMessage, MAX_INPUT_CHARS, type ScamCheckResult, type ScamVerdict } from "@/lib/scam/check";
import { t } from "@/lib/strings";
import { Card } from "./Card";

// Privacy: the message lives only in this component's state. It is never sent,
// stored (no localStorage) or logged, and it is cleared when you leave the page.

const VERDICT_STYLE: Record<ScamVerdict, { box: string; icon: string }> = {
  likely_scam: {
    box: "border-red-300 bg-red-50 text-red-950 dark:border-red-800 dark:bg-red-950 dark:text-red-50",
    icon: "⚠️",
  },
  unclear: {
    box: "border-amber-300 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-50",
    icon: "❓",
  },
  // Deliberately neutral (not green): this verdict is never "safe".
  no_obvious_signs: {
    box: "border-border bg-background text-foreground",
    icon: "🔎",
  },
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
    <Card title={t.scam.title} icon="🕵️" footer={t.safety.disclaimer}>
      <form onSubmit={onSubmit} className="space-y-3">
        <label htmlFor={inputId} className="block">
          {t.scam.intro}
        </label>
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
          className="w-full resize-y rounded-lg border border-border bg-background p-3 text-base focus-visible:outline-2 focus-visible:outline-accent"
        />
        <p id={privacyId} className="text-sm text-muted">
          🔒 {t.scam.privacy}
        </p>
        {text.length > MAX_INPUT_CHARS && <p className="text-sm text-muted">{t.scam.tooLong}</p>}
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={!text.trim()}
            className="min-h-11 flex-1 rounded-lg bg-accent px-5 font-semibold text-accent-contrast focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50"
          >
            {t.scam.check}
          </button>
          <button
            type="button"
            onClick={onClear}
            disabled={!text && !result}
            className="min-h-11 rounded-lg border border-border px-5 font-medium text-accent focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-50"
          >
            {t.scam.clear}
          </button>
        </div>
      </form>

      <div aria-live="polite">
        {result && signals && (
          <div className={`mt-4 rounded-xl border-2 p-4 ${VERDICT_STYLE[result.verdict].box}`}>
            <h3 ref={resultRef} tabIndex={-1} className="text-xl font-bold focus:outline-none">
              <span className="sr-only">{t.scam.resultHeading}: </span>
              <span aria-hidden="true">{VERDICT_STYLE[result.verdict].icon} </span>
              {t.scam.verdicts[result.verdict]}
            </h3>
            {(result.reason === "too_short" || result.reason === "odd_input") && (
              <p className="mt-1 font-medium">{t.scam.reasons[result.reason]}</p>
            )}
            <p className="mt-2">{t.scam.advice[result.verdict]}</p>

            {signals.length > 0 && (
              <>
                <h4 className="mt-3 font-semibold">{t.scam.signalsTitle}</h4>
                <ul className="mt-1 list-disc space-y-1.5 pl-5">
                  {signals.map((s) => (
                    <li key={s.ruleId}>{s.explanation.en}</li>
                  ))}
                </ul>
              </>
            )}
            <p className="mt-3 text-sm opacity-90">{t.scam.rulesNote}</p>
            <p className="mt-1 text-sm font-semibold">{t.safety.disclaimer}</p>
          </div>
        )}
      </div>
    </Card>
  );
}
