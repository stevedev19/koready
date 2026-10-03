"use client";

import { Copy, Map as MapIcon, Maximize2 } from "lucide-react";
import { useState } from "react";
import { useVisited } from "@/hooks/useVisited";
import { copyText } from "@/lib/clipboard";
import { t } from "@/lib/strings";
import type { Trail, TrailStop } from "@/lib/trails";
import { Button } from "../ui/button";
import { CheckRow } from "../ui/CheckRow";
import type { Tone } from "../ui/IconTile";
import { ListGroup, ListRow } from "../ui/List";
import { BottomSheet } from "../ui/BottomSheet";
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
      className={`overflow-hidden rounded-card border bg-card shadow-card ${visited ? "border-primary" : "border-card-border"}`}
      aria-labelledby={`stop-${stop.id}`}
    >
      <div className="p-5">
        <div className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className={`grid size-9 shrink-0 place-items-center rounded-full text-lg font-extrabold ${
              visited ? "bg-primary text-primary-foreground" : "bg-surface-2 text-foreground"
            }`}
          >
            {visited ? "✓" : index + 1}
          </span>
          <div className="min-w-0 flex-1">
            <h3 id={`stop-${stop.id}`} className="text-lg leading-snug font-extrabold">{stop.name}</h3>
            <p lang="ko" className="text-xl font-bold">{stop.nameKo}</p>
            <p className="text-[0.9375rem] text-muted-foreground">{stop.kind}</p>
          </div>
        </div>

        <p className="mt-3">{stop.why}</p>
        {stop.relatedWork && (
          <p className="mt-2">
            <span className="font-bold">{s.relatedTo}:</span> {stop.relatedWork.title}{" "}
            <span className="text-muted-foreground">({stop.relatedWork.type})</span>
          </p>
        )}

        <dl className="mt-3 grid gap-2">
          <div className="rounded-xl bg-surface-2 px-3.5 py-2.5">
            <dt className="text-sm font-bold text-muted-foreground">{s.hours}</dt>
            <dd>{stop.hours ?? s.notPublished}</dd>
          </div>
          {stop.cost && (
            <div className="rounded-xl bg-surface-2 px-3.5 py-2.5">
              <dt className="text-sm font-bold text-muted-foreground">{s.cost}</dt>
              <dd>{stop.cost}</dd>
            </div>
          )}
        </dl>

        <Button type="button" onClick={onOpenMap} className="mt-4 w-full">
          <MapIcon aria-hidden="true" className="size-5" />
          {s.map}
        </Button>

        <p className="mt-3 text-[0.9375rem] text-muted-foreground">
          {s.lastChecked}: {stop.last_checked} ·{" "}
          <a href={stop.source} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">
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
        <p className="font-bold text-muted-foreground">
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
      <p className="px-1 text-[0.9375rem] text-muted-foreground">{s.progressNote}</p>

      <BottomSheet open={mapStop !== null} onClose={() => setMapStop(null)} title={mapStop ? <span lang="ko">{mapStop.nameKo}</span> : ""}>
        {mapStop && (
          <>
            <p className="mb-2 text-sm font-bold text-muted-foreground">{t.local.clinic.openIn}</p>
            <ListGroup>
              {MAP_APPS.map(({ key, label, tone }) => (
                <ListRow key={key} href={mapStop.mapLinks[key]} external icon={MapIcon} tone={tone} title={label} />
              ))}
            </ListGroup>
            <div className="mt-3 grid gap-2">
              <Button
                type="button"
                onClick={async () => {
                  if (await copyText(mapStop.nameKo)) showToast(s.copied);
                }}
                variant="outline"
              >
                <Copy aria-hidden="true" className="size-5" />
                {s.copyKorean}
              </Button>
              <Button
                type="button"
                onClick={() => {
                  const stop = mapStop;
                  setMapStop(null);
                  setShown({ ko: stop.nameKo, en: stop.name });
                }}
                variant="tonal"
              >
                <Maximize2 aria-hidden="true" className="size-5" />
                {t.local.phrases.showLarge}
              </Button>
            </div>
          </>
        )}
      </BottomSheet>
      <ShowToStaff text={shown} onClose={() => setShown(null)} />
      <Toast message={toast} />
    </section>
  );
}
