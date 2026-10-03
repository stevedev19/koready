"use client";

import { CalendarDays, ChevronRight, Lightbulb, Phone, Search, SearchX } from "lucide-react";
import { useId, useState } from "react";
import { searchItems, WEEKDAYS, type RecyclingGuide as Guide, type RecyclingItem, type Weekday } from "@/lib/recycling";
import { t } from "@/lib/strings";
import { Card } from "../Card";
import { buttonClass, fieldClass } from "../ui/button";
import { ChipGroup } from "../ui/Chips";
import { EmptyState } from "../ui/States";

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
            className={`flex h-10 flex-1 items-center justify-center rounded-lg text-sm font-bold ${
              on ? "bg-primary text-primary-foreground" : "bg-surface-2 text-muted-foreground line-through"
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
        <p className="text-sm font-bold text-muted-foreground">{s.binLabel}</p>
        <p className="text-lg font-extrabold">{bin.name}</p>
        <p lang="ko" className="text-muted-foreground">{bin.nameKo}</p>
        <p className="mt-1">{bin.how}</p>
      </div>
      {item.prep.length > 0 && (
        <div>
          <p className="text-sm font-bold text-muted-foreground">{s.prepLabel}</p>
          <ol className="mt-1 list-decimal space-y-1 pl-5">
            {item.prep.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      )}
      <div>
        <p className="text-sm font-bold text-muted-foreground">{s.dayLabel}</p>
        {stream ? (
          <div className="mt-1 space-y-1">
            <DayRow days={stream.days} />
            <p className="text-[0.9375rem] text-muted-foreground">{guide.schedule.time}</p>
          </div>
        ) : (
          <p className="mt-1">{item.pickupNote ?? s.noDay}</p>
        )}
        {stream && item.pickupNote && <p className="mt-1">{item.pickupNote}</p>}
      </div>
      {item.note && (
        <p className="flex gap-2 rounded-xl bg-surface-2 p-3.5">
          <Lightbulb aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-warning" />
          <span>{item.note}</span>
        </p>
      )}
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center font-bold text-primary underline underline-offset-2"
        >
          {s.bookOnline} ↗
        </a>
      )}
      {item.inferred && <p className="text-[0.9375rem] text-muted-foreground italic">{s.inferred}</p>}
    </div>
  );
}

function NotSureCard({ guide, highlight }: { guide: Guide; highlight?: boolean }) {
  return (
    <section
      aria-labelledby="not-sure"
      className={`rounded-card p-5 ${highlight ? "bg-warning-soft" : "border border-card-border bg-card shadow-card"}`}
    >
      <h2 id="not-sure" className="text-lg font-extrabold">{s.notSureTitle}</h2>
      <p className="mt-1">{s.notSureBody}</p>
      <a href={`tel:${guide.contact.phone.replace(/-/g, "")}`} className={buttonClass("primary", "md", "mt-3 w-full")}>
        <Phone aria-hidden="true" className="size-5" />
        {s.call} {guide.contact.phone}
      </a>
      <p className="mt-2 text-[0.9375rem] text-muted-foreground">{guide.contact.name}</p>
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
        <label htmlFor={searchId} className="block px-1 font-bold">
          {s.searchLabel}
        </label>
        <div className="relative">
          <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-placeholder" />
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={s.searchPlaceholder}
            autoComplete="off"
            className={`${fieldClass} pl-12`}
          />
        </div>
        <ChipGroup<string | null>
          label={s.browse}
          value={category}
          onChange={setCategory}
          options={[{ value: null, label: s.all }, ...Object.entries(guide.categories).map(([value, label]) => ({ value, label }))]}
        />
      </div>

      <p aria-live="polite" className="sr-only">
        {results.length === 0 ? s.noResults : `${results.length}`}
      </p>

      {results.length === 0 ? (
        <>
          <div className="rounded-card border border-card-border bg-card shadow-card">
            <EmptyState icon={SearchX} title={s.noResults} />
          </div>
          <NotSureCard guide={guide} highlight />
        </>
      ) : (
        <ul className="space-y-2">
          {results.map((item) => (
            <li key={item.id}>
              <details className="group rounded-card border border-card-border bg-card px-4 py-2 shadow-card">
                <summary className="flex min-h-14 cursor-pointer list-none items-center gap-3 rounded-xl [&::-webkit-details-marker]:hidden">
                  <span className="flex-1">
                    <span className="block text-lg leading-snug font-bold">{item.name}</span>
                    <span lang="ko" className="block text-muted-foreground">{item.nameKo}</span>
                  </span>
                  <ChevronRight
                    aria-hidden="true"
                    className="size-5 shrink-0 text-placeholder transition-transform group-open:rotate-90"
                  />
                </summary>
                <ItemDetail item={item} guide={guide} />
              </details>
            </li>
          ))}
        </ul>
      )}

      <Card title={s.whenTitle} icon={CalendarDays}>
        <dl className="space-y-1">
          <div><dt className="inline font-semibold">{s.time} </dt><dd className="inline">{guide.schedule.time}</dd></div>
          <div><dt className="inline font-semibold">{s.place} </dt><dd className="inline">{guide.schedule.place}</dd></div>
          <div><dt className="inline font-semibold">{s.appliesTo} </dt><dd className="inline">{guide.schedule.appliesTo}</dd></div>
        </dl>
        <ul className="mt-3 space-y-3">
          {Object.entries(guide.schedule.streams).map(([id, stream]) => (
            <li key={id}>
              <p className="mb-1.5 font-bold">{stream.label}</p>
              <DayRow days={stream.days} />
            </li>
          ))}
        </ul>
      </Card>

      {results.length > 0 && <NotSureCard guide={guide} />}

      <footer className="space-y-2 text-[0.9375rem] text-muted-foreground">
        <p className="font-bold text-foreground">
          {s.lastChecked}: {guide.last_checked}
        </p>
        <p className="font-semibold">{s.sourcesTitle}:</p>
        <ul className="list-disc space-y-1 pl-5">
          {guide.sources.map((src) => (
            <li key={src.url}>
              <a href={src.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center text-primary underline underline-offset-2">
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
