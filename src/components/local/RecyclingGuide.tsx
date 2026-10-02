"use client";

import { useId, useState } from "react";
import { searchItems, WEEKDAYS, type RecyclingGuide as Guide, type RecyclingItem, type Weekday } from "@/lib/recycling";
import { t } from "@/lib/strings";
import { Card } from "../Card";

const s = t.local.recycling;

function DayRow({ days }: { days: Weekday[] }) {
  return (
    <ul className="flex gap-1" aria-label={days.map((d) => s.days[d]).join(", ")}>
      {WEEKDAYS.map((day) => {
        const on = days.includes(day);
        return (
          <li
            key={day}
            aria-hidden="true"
            className={`flex h-9 flex-1 items-center justify-center rounded-md text-sm font-semibold ${
              on ? "bg-accent text-accent-contrast" : "border border-border text-muted line-through"
            }`}
          >
            {s.days[day]}
          </li>
        );
      })}
    </ul>
  );
}

function ItemDetail({ item, guide }: { item: RecyclingItem; guide: Guide }) {
  const bin = guide.bins[item.bin];
  const stream = item.schedule ? guide.schedule.streams[item.schedule] : undefined;
  return (
    <div className="space-y-3 pt-3">
      <div>
        <p className="text-sm font-semibold text-muted uppercase">{s.binLabel}</p>
        <p className="text-lg font-bold">{bin.name}</p>
        <p lang="ko" className="text-muted">{bin.nameKo}</p>
        <p className="mt-1">{bin.how}</p>
      </div>
      {item.prep.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-muted uppercase">{s.prepLabel}</p>
          <ol className="mt-1 list-decimal space-y-1 pl-5">
            {item.prep.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      )}
      <div>
        <p className="text-sm font-semibold text-muted uppercase">{s.dayLabel}</p>
        {stream ? (
          <div className="mt-1 space-y-1">
            <DayRow days={stream.days} />
            <p className="text-sm text-muted">{guide.schedule.time}</p>
          </div>
        ) : (
          <p className="mt-1">{item.pickupNote ?? s.noDay}</p>
        )}
        {stream && item.pickupNote && <p className="mt-1">{item.pickupNote}</p>}
      </div>
      {item.note && <p className="rounded-lg bg-background p-3">💡 {item.note}</p>}
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center font-semibold text-accent underline underline-offset-2"
        >
          {s.bookOnline} ↗
        </a>
      )}
      {item.inferred && <p className="text-sm text-muted italic">{s.inferred}</p>}
    </div>
  );
}

function NotSureCard({ guide, highlight }: { guide: Guide; highlight?: boolean }) {
  return (
    <section
      aria-labelledby="not-sure"
      className={`rounded-2xl border-2 p-4 ${highlight ? "border-amber-400 bg-amber-50 text-amber-950 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-50" : "border-border bg-surface"}`}
    >
      <h2 id="not-sure" className="text-lg font-semibold">🤔 {s.notSureTitle}</h2>
      <p className="mt-1">{s.notSureBody}</p>
      <a
        href={`tel:${guide.contact.phone.replace(/-/g, "")}`}
        className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg bg-accent px-4 font-semibold text-accent-contrast focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        📞 {s.call} {guide.contact.phone}
      </a>
      <p className="mt-1 text-sm opacity-80">{guide.contact.name}</p>
    </section>
  );
}

export function RecyclingGuide({ guide }: { guide: Guide }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const searchId = useId();

  const results = searchItems(guide.items, query).filter((i) => !category || i.category === category);

  return (
    <div className="space-y-4">
      <div role="search" className="space-y-3">
        <label htmlFor={searchId} className="block font-semibold">
          {s.searchLabel}
        </label>
        <input
          id={searchId}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={s.searchPlaceholder}
          autoComplete="off"
          className="min-h-12 w-full rounded-lg border border-border bg-surface px-3 text-base focus-visible:outline-2 focus-visible:outline-accent"
        />
        <div className="flex flex-wrap gap-2" role="group" aria-label={s.browse}>
          {[[null, s.all] as const, ...Object.entries(guide.categories)].map(([id, label]) => (
            <button
              key={id ?? "all"}
              type="button"
              aria-pressed={category === id}
              onClick={() => setCategory(id)}
              className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                category === id ? "border-accent bg-accent text-accent-contrast" : "border-border bg-surface"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        {results.length === 0 ? s.noResults : `${results.length}`}
      </p>

      {results.length === 0 ? (
        <>
          <p className="font-semibold">{s.noResults}</p>
          <NotSureCard guide={guide} highlight />
        </>
      ) : (
        <ul className="space-y-2">
          {results.map((item) => (
            <li key={item.id}>
              <details className="group rounded-2xl border border-border bg-surface px-4 py-3 shadow-sm">
                <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3 focus-visible:outline-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
                  <span className="flex-1">
                    <span className="block text-lg font-semibold">{item.name}</span>
                    <span lang="ko" className="block text-muted">{item.nameKo}</span>
                  </span>
                  <span aria-hidden="true" className="text-2xl text-muted transition-transform group-open:rotate-90">›</span>
                </summary>
                <ItemDetail item={item} guide={guide} />
              </details>
            </li>
          ))}
        </ul>
      )}

      <Card title={s.whenTitle} icon="🗓️">
        <dl className="space-y-1">
          <div><dt className="inline font-semibold">{s.time} </dt><dd className="inline">{guide.schedule.time}</dd></div>
          <div><dt className="inline font-semibold">{s.place} </dt><dd className="inline">{guide.schedule.place}</dd></div>
          <div><dt className="inline font-semibold">{s.appliesTo} </dt><dd className="inline">{guide.schedule.appliesTo}</dd></div>
        </dl>
        <ul className="mt-3 space-y-3">
          {Object.entries(guide.schedule.streams).map(([id, stream]) => (
            <li key={id}>
              <p className="mb-1 font-medium">{stream.label}</p>
              <DayRow days={stream.days} />
            </li>
          ))}
        </ul>
      </Card>

      {results.length > 0 && <NotSureCard guide={guide} />}

      <footer className="space-y-2 text-sm text-muted">
        <p className="font-semibold text-foreground">
          {s.lastChecked}: {guide.last_checked}
        </p>
        <p className="font-semibold">{s.sourcesTitle}:</p>
        <ul className="list-disc space-y-1 pl-5">
          {guide.sources.map((src) => (
            <li key={src.url}>
              <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
                {src.title}
              </a>{" "}
              ({src.published ? `${s.published} ${src.published}` : s.noDate})
            </li>
          ))}
        </ul>
        {guide.needs_native_review && <p>{s.reviewNote}</p>}
      </footer>
    </div>
  );
}
