"use client";

import { BookOpen, FlaskConical, Languages, Lock, Megaphone, Phone, TriangleAlert } from "lucide-react";
import { useId, useRef, useState, type ReactNode } from "react";
import { ALERT_SAMPLES, MAX_ALERT_CHARS, translateAlert, type AlertReading } from "@/lib/alerts/check";
import { HELP_LINES } from "@/lib/helpLines";
import { t } from "@/lib/strings";
import { Card } from "./Card";
import { Button, buttonVariants, fieldClass } from "./ui/button";
import { Card as CardSurface } from "./ui/card";
import { ListGroup, ListRow } from "./ui/List";
import { Disclaimer } from "./ui/Notice";
import { Sheet } from "./ui/Sheet";

// Privacy: the alert text lives only in this component's state. It is never sent,
// stored or logged, and it is gone when you leave the page.

const s = t.alerts;

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <CardSurface asChild>
      <section>
        <h4 className="mb-2.5 text-lg font-extrabold">{title}</h4>
        {children}
      </section>
    </CardSurface>
  );
}

/** Emergency-mode styling: plain surface, big text, the two calls within thumb reach. */
function NotUnderstoodCard() {
  return (
    <div role="alert" className="rounded-card bg-warning-soft p-5">
      <p className="flex items-start gap-2.5 text-xl font-extrabold text-warning">
        <TriangleAlert aria-hidden="true" className="mt-0.5 size-7 shrink-0" />
        {s.notUnderstoodTitle}
      </p>
      <p className="mt-2 text-lg">{s.notUnderstoodBody}</p>
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <a href="tel:119" className={buttonVariants({ variant: "emergency", size: "lg" })}>
          <Phone aria-hidden="true" className="size-5" />
          {s.call119}
        </a>
        <a
          href={`tel:${HELP_LINES.travelHotline.number}`}
          className={buttonVariants({ size: "lg" })}
          aria-label={`${t.helpLines.call} ${t.helpLines.lines.travelHotline.name}, ${HELP_LINES.travelHotline.number}`}
        >
          <Phone aria-hidden="true" className="size-5" />
          {HELP_LINES.travelHotline.number}
        </a>
      </div>
      <p className="mt-2.5 text-[0.9375rem]">{t.helpLines.lines.travelHotline.detail}</p>
    </div>
  );
}

function Result({ r }: { r: AlertReading }) {
  const primary = r.types[0];
  const others = r.types.slice(1);
  const fact = (label: string, value: string | null) => (
    <div className="rounded-xl bg-surface-2 px-3.5 py-2.5">
      <dt className="text-sm font-bold text-muted-foreground">{label}</dt>
      <dd lang={value ? "ko" : undefined} className="text-lg font-semibold">{value ?? s.notFound}</dd>
    </div>
  );

  return (
    <div className="space-y-3">
      {/* 0. The original alert, always first and never modified. */}
      <CardSurface asChild>
        <section>
          <h3 className="text-sm font-bold text-muted-foreground">{s.originalTitle}</h3>
          <p lang="ko" className="mt-2 rounded-xl bg-surface-2 p-3.5 text-lg leading-relaxed whitespace-pre-wrap break-words">
            {r.original}
          </p>
          <div className="mt-3">
            <Disclaimer>{s.disclaimer}</Disclaimer>
          </div>
        </section>
      </CardSurface>

      {!r.fullyUnderstood && <NotUnderstoodCard />}

      {/* 1. Type, area, time */}
      <Section title={s.typeTitle}>
        <p className="text-[1.625rem] leading-tight font-extrabold tracking-tight">
          {primary ? `${primary.en} (${primary.ko})` : s.unknownType}
        </p>
        {others.length > 0 && (
          <p className="mt-1.5">
            {s.alsoMentions}: {others.map((o) => `${o.en} (${o.ko})`).join(", ")}
          </p>
        )}
        <dl className="mt-3.5 grid gap-2">
          {fact(s.area, r.areas.join(", ") || null)}
          {fact(s.time, r.times.join(", ") || null)}
          {fact(s.sender, r.sender)}
          <div className="rounded-xl bg-surface-2 px-3.5 py-2.5">
            <dt className="text-sm font-bold text-muted-foreground">{s.category}</dt>
            <dd className="text-lg font-semibold">{r.category ? `${r.category.en} (${r.category.ko})` : s.categoryNotShown}</dd>
          </div>
        </dl>
      </Section>

      {/* 2. Summary built only from what was found in the text */}
      <Section title={s.summaryTitle}>
        <ul className="space-y-2 text-lg">
          {r.lifted && <li className="font-bold">{s.lifted}</li>}
          {r.drill && <li className="font-bold">{s.drill}</li>}
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
          <p className="mb-3 text-muted-foreground">{s.actionsIntro}</p>
          {r.types.slice(0, 2).map((type) => (
            <div key={type.id} className="mb-3 last:mb-0">
              {r.types.length > 1 && <p className="mb-1 font-bold">{type.en}</p>}
              <ol className="space-y-2">
                {type.actions.map((a, i) => (
                  <li key={a} className="flex gap-3 text-lg">
                    <span
                      aria-hidden="true"
                      className="grid size-7 shrink-0 place-items-center rounded-full bg-accent text-[0.9375rem] font-extrabold text-primary"
                    >
                      {i + 1}
                    </span>
                    <span>{a}</span>
                  </li>
                ))}
              </ol>
              <a
                href={type.actionsSource}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex min-h-12 items-center text-[0.9375rem] text-primary underline underline-offset-2"
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
              <li key={g.ko} className="flex flex-wrap items-baseline gap-x-3 py-2.5">
                <span lang="ko" className="text-lg font-extrabold">{g.ko}</span>
                <span className="text-muted-foreground italic">{g.romanization}</span>
                <span className="w-full">{g.en}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Line by line: unrecognized parts stay in the original Korean */}
      <Section title={s.linesTitle}>
        <ol className="space-y-2">
          {r.segments.map((seg, i) => (
            <li key={`${i}-${seg.text}`} className="rounded-xl bg-surface-2 p-3.5">
              <p lang="ko" className="text-lg">{seg.text}</p>
              {seg.recognized ? (
                seg.terms.length > 0 && (
                  <p className="mt-1 text-muted-foreground">
                    {s.keyWords} {seg.terms.filter((g) => g.kind !== "filler").map((g) => g.en).join(", ") || "—"}
                  </p>
                )
              ) : (
                <p className="mt-1.5 flex items-center gap-1.5 font-bold text-warning">
                  <TriangleAlert aria-hidden="true" className="size-[1.125rem]" />
                  {s.notTranslated}
                </p>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Disclaimer>{s.disclaimer}</Disclaimer>
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
    <div className="space-y-4">
      <Card title={s.title} icon={Megaphone}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            explain(text);
          }}
          className="space-y-3"
        >
          <p className="text-lg">{s.intro}</p>
          <div className="flex items-end justify-between gap-2">
            <label htmlFor={inputId} className="block font-bold">
              {s.label}
            </label>
            <Button
              type="button"
              onClick={() => {
                setText("");
                setReading(null);
              }}
              disabled={!text && !reading}
              variant="link"
              className="-mr-2 shrink-0"
            >
              {s.clear}
            </Button>
          </div>
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
            className={`${fieldClass} min-h-32 resize-y text-lg`}
          />
          <p id={privacyId} className="flex items-center gap-1.5 text-[0.9375rem] text-muted-foreground">
            <Lock aria-hidden="true" className="size-[1.125rem] shrink-0" />
            {s.privacy}
          </p>
          {text.length > MAX_ALERT_CHARS && <p className="text-[0.9375rem] text-muted-foreground">{s.tooLong}</p>}
          <Button type="button" onClick={() => setShowSamples(true)} variant="tonal" className="w-full">
            <FlaskConical aria-hidden="true" className="size-5" />
            {s.samples}
          </Button>
          {/* Main action sticks above the tab bar, within thumb reach (unstuck while typing, see globals.css). */}
          <div data-sticky-action className="sticky bottom-[calc(6.5rem+env(safe-area-inset-bottom))] z-10 -mx-1 flex gap-2 rounded-[1.125rem] bg-card/90 p-1 backdrop-blur">
            <Button type="submit" disabled={!text.trim()} size="lg" className="flex-1">
              <Languages aria-hidden="true" className="size-5" />
              {s.translate}
            </Button>
          </div>
        </form>
        <div className="mt-3">
          <Disclaimer>{s.disclaimer}</Disclaimer>
        </div>
      </Card>

      <ListGroup>
        <ListRow href="/safety/alerts" icon={BookOpen} tone="teal" title={s.learnLink} />
      </ListGroup>

      <Sheet open={showSamples} onClose={() => setShowSamples(false)} title={s.samples}>
        <p className="mb-3 text-muted-foreground">{s.samplesHint}</p>
        <ListGroup>
          {ALERT_SAMPLES.map((sample) => (
            <ListRow
              key={sample.id}
              title={sample.label}
              onClick={() => {
                setShowSamples(false);
                setText(sample.text);
                explain(sample.text);
              }}
            />
          ))}
        </ListGroup>
      </Sheet>

      <div ref={resultRef} tabIndex={-1} className="focus:outline-none">
        {reading && <Result r={reading} />}
      </div>
    </div>
  );
}
