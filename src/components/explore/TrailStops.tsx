"use client";

import { Copy, Map as MapIcon, Maximize2 } from "lucide-react";
import { useState } from "react";
import { useVisited } from "@/hooks/useVisited";
import { copyText } from "@/lib/clipboard";
import { t } from "@/lib/strings";
import type { Trail, TrailStop } from "@/lib/trails";
import { buttonClass } from "../ui/button";
import { CheckRow } from "../ui/CheckRow";
import type { Tone } from "../ui/IconTile";
import { ListGroup, ListRow } from "../ui/List";
import { Sheet } from "../ui/Sheet";
import { ShowToStaff, type StaffText } from "../ui/ShowToStaff";
import { Toast, useToast } from "../ui/Toast";

const s = t.explore.trail;

const MAP_APPS = [
  { key: "naver", label: t.local.clinic.apps.naver, tone: "green" },
  { key: "kakao", label: t.local.clinic.apps.kakao, tone: "amber" },
  { key: "google", label: t.local.clinic.apps.google, tone: "blue" },
] as const satisfies readonly { key: string; label: string; tone: Tone }[];

function StopCard({
  stop,
  index,
  visited,
  onToggle,
  onOpenMap,
}: {
  stop: TrailStop;
  index: number;
  visited: boolean;
  onToggle: () => void;
  onOpenMap: () => void;
}) {
  return (
    <li
      className={`overflow-hidden rounded-card border bg-surface shadow-card ${visited ? "border-accent" : "border-card-border"}`}
      aria-labelledby={`stop-${stop.id}`}
    >
      <div className="p-5">
        <div className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className={`grid size-9 shrink-0 place-items-center rounded-full text-lg font-extrabold ${
              visited ? "bg-accent text-accent-contrast" : "bg-surface-2 text-foreground"
            }`}
          >
            {visited ? "✓" : index + 1}
          </span>
          <div className="min-w-0 flex-1">
            <h3 id={`stop-${stop.id}`} className="text-lg leading-snug font-extrabold">{stop.name}</h3>
            <p lang="ko" className="text-xl font-bold">{stop.nameKo}</p>
            <p className="text-[0.9375rem] text-muted">{stop.kind}</p>
          </div>
        </div>

        <p className="mt-3">{stop.why}</p>
        {stop.relatedWork && (
          <p className="mt-2">
            <span className="font-bold">{s.relatedTo}:</span> {stop.relatedWork.title}{" "}
            <span className="text-muted">({stop.relatedWork.type})</span>
          </p>
        )}

        <dl className="mt-3 grid gap-2">
          <div className="rounded-xl bg-surface-2 px-3.5 py-2.5">
            <dt className="text-sm font-bold text-muted">{s.hours}</dt>
            <dd>{stop.hours ?? s.notPublished}</dd>
          </div>
          {stop.cost && (
            <div className="rounded-xl bg-surface-2 px-3.5 py-2.5">
              <dt className="text-sm font-bold text-muted">{s.cost}</dt>
              <dd>{stop.cost}</dd>
            </div>
          )}
        </dl>

        <button type="button" onClick={onOpenMap} className={buttonClass("primary", "md", "mt-4 w-full")}>
          <MapIcon aria-hidden="true" className="size-5" />
          {s.map}
        </button>

        <p className="mt-3 text-[0.9375rem] text-muted">
          {s.lastChecked}: {stop.last_checked} ·{" "}
          <a href={stop.source} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
            {s.source} ↗
          </a>
          {stop.needs_review && <> · {s.needsReview}</>}
        </p>
      </div>
      <div className="border-t border-border">
        <CheckRow checked={visited} onChange={onToggle}>
          <span className="font-bold">{s.markVisited}</span>
        </CheckRow>
      </div>
    </li>
  );
}

export function TrailStops({ trail }: { trail: Trail }) {
  const [visited, toggle] = useVisited(trail.id);
  const [mapStop, setMapStop] = useState<TrailStop | null>(null);
  const [shown, setShown] = useState<StaffText | null>(null);
  const [toast, showToast] = useToast();
  const done = trail.stops.filter((stop) => visited.has(stop.id)).length;

  return (
    <section aria-labelledby="stops-title" className="space-y-3">
      <div className="flex items-baseline justify-between px-1">
        <h2 id="stops-title" className="text-xl font-extrabold">{s.stopsTitle}</h2>
        <p className="font-bold text-muted">
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
            onOpenMap={() => setMapStop(stop)}
          />
        ))}
      </ol>
      <p className="px-1 text-[0.9375rem] text-muted">{s.progressNote}</p>

      <Sheet open={mapStop !== null} onClose={() => setMapStop(null)} title={mapStop ? <span lang="ko">{mapStop.nameKo}</span> : ""}>
        {mapStop && (
          <>
            <p className="mb-2 text-sm font-bold text-muted">{t.local.clinic.openIn}</p>
            <ListGroup>
              {MAP_APPS.map(({ key, label, tone }) => (
                <ListRow key={key} href={mapStop.mapLinks[key]} external icon={MapIcon} tone={tone} title={label} />
              ))}
            </ListGroup>
            <div className="mt-3 grid gap-2">
              <button
                type="button"
                onClick={async () => {
                  if (await copyText(mapStop.nameKo)) showToast(s.copied);
                }}
                className={buttonClass("secondary")}
              >
                <Copy aria-hidden="true" className="size-5" />
                {s.copyKorean}
              </button>
              <button
                type="button"
                onClick={() => {
                  const stop = mapStop;
                  setMapStop(null);
                  setShown({ ko: stop.nameKo, en: stop.name });
                }}
                className={buttonClass("tonal")}
              >
                <Maximize2 aria-hidden="true" className="size-5" />
                {t.local.phrases.showLarge}
              </button>
            </div>
          </>
        )}
      </Sheet>
      <ShowToStaff text={shown} onClose={() => setShown(null)} />
      <Toast message={toast} />
    </section>
  );
}
