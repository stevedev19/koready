"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { ALERT_SAMPLES, MAX_ALERT_CHARS, translateAlert, type AlertReading } from "@/lib/alerts/check";
import { HELP_LINES } from "@/lib/helpLines";
import { t } from "@/lib/strings";
import { Card } from "./Card";

// Privacy: the alert text lives only in this component's state. It is never sent,
// stored or logged, and it is gone when you leave the page.

const s = t.alerts;

const bigButton =
  "min-h-14 rounded-xl px-5 text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border pt-4">
      <h4 className="mb-2 text-lg font-bold">{title}</h4>
      {children}
    </section>
  );
}

function Disclaimer() {
  return <p role="note" className="rounded-lg bg-background p-3 font-semibold">⚠️ {s.disclaimer}</p>;
}

function NotUnderstoodCard() {
  return (
    <div role="alert" className="rounded-xl border-2 border-amber-500 bg-amber-50 p-4 text-amber-950 dark:border-amber-600 dark:bg-amber-950 dark:text-amber-50">
      <p className="text-lg font-bold">{s.notUnderstoodTitle}</p>
      <p className="mt-1 text-lg">{s.notUnderstoodBody}</p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <a href="tel:119" className={`${bigButton} flex items-center justify-center bg-red-700 text-white dark:bg-red-600`}>
          📞 {s.call119}
        </a>
        <a
          href={`tel:${HELP_LINES.travelHotline.number}`}
          className={`${bigButton} flex items-center justify-center bg-accent text-accent-contrast`}
          aria-label={`${t.helpLines.call} ${t.helpLines.lines.travelHotline.name}`}
        >
          📞 {HELP_LINES.travelHotline.number}
        </a>
      </div>
      <p className="mt-2 text-sm">{t.helpLines.lines.travelHotline.detail}</p>
    </div>
  );
}

function Result({ r }: { r: AlertReading }) {
  const primary = r.types[0];
  const others = r.types.slice(1);
  const fact = (label: string, value: string | null) => (
    <div>
      <dt className="text-sm font-semibold text-muted uppercase">{label}</dt>
      <dd lang={value ? "ko" : undefined} className="text-lg">{value ?? s.notFound}</dd>
    </div>
  );

  return (
    <div className="mt-4 space-y-4 rounded-xl border-2 border-foreground/20 bg-surface p-4">
      {/* 0. The original alert, always first and never modified. */}
      <section>
        <h3 className="text-sm font-semibold text-muted uppercase">{s.originalTitle}</h3>
        <p lang="ko" className="mt-1 rounded-lg bg-background p-3 text-lg leading-relaxed whitespace-pre-wrap break-words">
          {r.original}
        </p>
      </section>

      <Disclaimer />
      {!r.fullyUnderstood && <NotUnderstoodCard />}

      {/* 1. Type, area, time */}
      <Section title={s.typeTitle}>
        <p className="text-2xl font-bold">
          {primary ? `${primary.en} (${primary.ko})` : s.unknownType}
        </p>
        {others.length > 0 && (
          <p className="mt-1">
            {s.alsoMentions}: {others.map((o) => `${o.en} (${o.ko})`).join(", ")}
          </p>
        )}
        <dl className="mt-3 space-y-2">
          {fact(s.area, r.areas.join(", ") || null)}
          {fact(s.time, r.times.join(", ") || null)}
          {fact(s.sender, r.sender)}
          <div>
            <dt className="text-sm font-semibold text-muted uppercase">{s.category}</dt>
            <dd className="text-lg">{r.category ? `${r.category.en} (${r.category.ko})` : s.categoryNotShown}</dd>
          </div>
        </dl>
      </Section>

      {/* 2. Summary built only from what was found in the text */}
      <Section title={s.summaryTitle}>
        <ul className="space-y-2 text-lg">
          {r.lifted && <li className="font-semibold">{s.lifted}</li>}
          {r.drill && <li className="font-semibold">{s.drill}</li>}
          <li>{primary ? primary.summary : s.noSummary}</li>
          {r.level === "warning" && <li>{s.levelWarning}</li>}
          {r.level === "advisory" && <li>{s.levelAdvisory}</li>}
          {r.instructions.length > 0 && (
            <li>
              {s.mentions}{" "}
              {r.instructions.map((g) => `${g.en} (${g.ko})`).join("; ")}
            </li>
          )}
        </ul>
      </Section>

      {/* 3. What to do */}
      {r.types.length > 0 && (
        <Section title={s.actionsTitle}>
          <p className="mb-2 text-muted">{s.actionsIntro}</p>
          {r.types.slice(0, 2).map((type) => (
            <div key={type.id} className="mb-3">
              {r.types.length > 1 && <p className="font-semibold">{type.en}</p>}
              <ol className="list-decimal space-y-1.5 pl-6 text-lg">
                {type.actions.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ol>
              <a
                href={type.actionsSource}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex min-h-11 items-center text-sm text-accent underline underline-offset-2"
              >
                {s.actionsSource} ↗
              </a>
            </div>
          ))}
        </Section>
      )}

      {/* 4. Glossary */}
      {r.glossary.length > 0 && (
        <Section title={s.glossaryTitle}>
          <ul className="divide-y divide-border">
            {r.glossary.map((g) => (
              <li key={g.ko} className="flex flex-wrap items-baseline gap-x-3 py-2">
                <span lang="ko" className="text-lg font-bold">{g.ko}</span>
                <span className="text-muted italic">{g.romanization}</span>
                <span className="w-full sm:w-auto">{g.en}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Line by line: unrecognized parts stay in the original Korean */}
      <Section title={s.linesTitle}>
        <ol className="space-y-2">
          {r.segments.map((seg, i) => (
            <li key={`${i}-${seg.text}`} className="rounded-lg bg-background p-3">
              <p lang="ko" className="text-lg">{seg.text}</p>
              {seg.recognized ? (
                seg.terms.length > 0 && (
                  <p className="mt-1 text-muted">
                    {s.keyWords} {seg.terms.filter((g) => g.kind !== "filler").map((g) => g.en).join(", ") || "—"}
                  </p>
                )
              ) : (
                <p className="mt-1 font-semibold text-amber-800 dark:text-amber-300">⚠️ {s.notTranslated}</p>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Disclaimer />
    </div>
  );
}

export function AlertTranslator() {
  const [text, setText] = useState("");
  const [reading, setReading] = useState<AlertReading | null>(null);
  const [showSamples, setShowSamples] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const inputId = useId();
  const privacyId = useId();

  function explain(value: string) {
    if (!value.trim()) return;
    setReading(translateAlert(value));
    requestAnimationFrame(() => resultRef.current?.focus());
  }

  return (
    <Card title={s.title} icon="📢" footer={s.disclaimer}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          explain(text);
        }}
        className="space-y-3"
      >
        <p className="text-lg">{s.intro}</p>
        <label htmlFor={inputId} className="block text-lg font-semibold">
          {s.label}
        </label>
        <textarea
          id={inputId}
          lang="ko"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setReading(null); // a result must always match the text shown
          }}
          placeholder={s.placeholder}
          aria-describedby={privacyId}
          rows={5}
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          className="w-full resize-y rounded-lg border-2 border-border bg-background p-3 text-lg focus-visible:outline-2 focus-visible:outline-accent"
        />
        <p id={privacyId} className="text-sm text-muted">🔒 {s.privacy}</p>
        {text.length > MAX_ALERT_CHARS && <p className="text-sm text-muted">{s.tooLong}</p>}
        <div className="grid grid-cols-[1fr_auto] gap-2">
          <button type="submit" disabled={!text.trim()} className={`${bigButton} bg-accent text-accent-contrast`}>
            {s.translate}
          </button>
          <button
            type="button"
            onClick={() => {
              setText("");
              setReading(null);
            }}
            disabled={!text && !reading}
            className={`${bigButton} border-2 border-border text-accent`}
          >
            {s.clear}
          </button>
        </div>
        <button
          type="button"
          aria-expanded={showSamples}
          onClick={() => setShowSamples((v) => !v)}
          className={`${bigButton} w-full border-2 border-border`}
        >
          🧪 {s.samples}
        </button>
        {showSamples && (
          <div>
            <p className="mb-2 text-muted">{s.samplesHint}</p>
            <div className="grid grid-cols-2 gap-2">
              {ALERT_SAMPLES.map((sample) => (
                <button
                  key={sample.id}
                  type="button"
                  onClick={() => {
                    setText(sample.text);
                    explain(sample.text);
                  }}
                  className="min-h-12 rounded-lg border border-border bg-background px-3 text-left font-medium focus-visible:outline-2 focus-visible:outline-accent"
                >
                  {sample.label}
                </button>
              ))}
            </div>
          </div>
        )}
        <Link
          href="/safety/alerts"
          className="inline-flex min-h-11 items-center font-semibold text-accent underline underline-offset-2"
        >
          📘 {s.learnLink}
        </Link>
      </form>

      <div ref={resultRef} tabIndex={-1} className="focus:outline-none">
        {reading && <Result r={reading} />}
      </div>
    </Card>
  );
}
