"use client";

import { useEffect, useState } from "react";
import { useVisited } from "@/hooks/useVisited";
import { copyText } from "@/lib/clipboard";
import { t } from "@/lib/strings";
import type { Trail, TrailStop } from "@/lib/trails";

const s = t.explore.trail;

const MAP_APPS = [
  { key: "naver", label: t.local.clinic.apps.naver },
  { key: "kakao", label: t.local.clinic.apps.kakao },
  { key: "google", label: t.local.clinic.apps.google },
] as const;

function StopCard({
  stop,
  index,
  visited,
  onToggle,
}: {
  stop: TrailStop;
  index: number;
  visited: boolean;
  onToggle: () => void;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <li
      className={`rounded-2xl border bg-surface p-4 shadow-sm ${visited ? "border-accent" : "border-border"}`}
      aria-labelledby={`stop-${stop.id}`}
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className={`flex size-9 shrink-0 items-center justify-center rounded-full text-lg font-bold ${
            visited ? "bg-accent text-accent-contrast" : "border-2 border-border"
          }`}
        >
          {visited ? "✓" : index + 1}
        </span>
        <div className="min-w-0 flex-1">
          <h3 id={`stop-${stop.id}`} className="text-lg font-bold">{stop.name}</h3>
          <p lang="ko" className="text-xl font-semibold">{stop.nameKo}</p>
          <p className="text-muted">{stop.kind}</p>
        </div>
      </div>

      <p className="mt-3">{stop.why}</p>
      {stop.relatedWork && (
        <p className="mt-2">
          <span className="font-semibold">{s.relatedTo}:</span> {stop.relatedWork.title}{" "}
          <span className="text-muted">({stop.relatedWork.type})</span>
        </p>
      )}

      <dl className="mt-2 space-y-1">
        <div>
          <dt className="inline font-semibold">{s.hours}: </dt>
          <dd className="inline">{stop.hours ?? s.notPublished}</dd>
        </div>
        {stop.cost && (
          <div>
            <dt className="inline font-semibold">{s.cost}: </dt>
            <dd className="inline">{stop.cost}</dd>
          </div>
        )}
      </dl>

      <p className="mt-3 text-sm font-semibold text-muted">{s.map}</p>
      <div className="mt-1 grid grid-cols-3 gap-2">
        {MAP_APPS.map(({ key, label }) => (
          <a
            key={key}
            href={stop.mapLinks[key]}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center justify-center rounded-xl border-2 border-accent px-1 text-center text-sm font-semibold text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {label}
          </a>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={async () => setCopied(await copyText(stop.nameKo))}
          className="min-h-12 rounded-xl border border-border px-2 font-semibold text-accent focus-visible:outline-2 focus-visible:outline-accent"
        >
          {copied ? `✓ ${s.copied}` : s.copyKorean}
        </button>
        <label className="flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border border-border px-2 font-semibold">
          <input type="checkbox" checked={visited} onChange={onToggle} className="size-5 accent-(--accent)" />
          {s.markVisited}
        </label>
      </div>
      <p aria-live="polite" className="sr-only">{copied ? s.copied : ""}</p>

      <p className="mt-3 text-sm text-muted">
        {s.lastChecked}: {stop.last_checked} ·{" "}
        <a href={stop.source} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
          {s.source} ↗
        </a>
        {stop.needs_review && <> · {s.needsReview}</>}
      </p>
    </li>
  );
}

export function TrailStops({ trail }: { trail: Trail }) {
  const [visited, toggle] = useVisited(trail.id);
  const done = trail.stops.filter((stop) => visited.has(stop.id)).length;

  return (
    <section aria-labelledby="stops-title" className="space-y-3">
      <div className="flex items-baseline justify-between">
        <h2 id="stops-title" className="text-xl font-bold">{s.stopsTitle}</h2>
        <p className="font-semibold text-muted">
          {done}/{trail.stops.length} {s.progress}
        </p>
      </div>
      <ol className="space-y-3">
        {trail.stops.map((stop, i) => (
          <StopCard
            key={stop.id}
            stop={stop}
            index={i}
            visited={visited.has(stop.id)}
            onToggle={() => toggle(stop.id)}
          />
        ))}
      </ol>
      <p className="text-sm text-muted">{s.progressNote}</p>
    </section>
  );
}
