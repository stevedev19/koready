"use client";

import { Wind } from "lucide-react";
import { useApi } from "@/hooks/useApi";
import { t } from "@/lib/strings";
import type { AirData, AirGrade } from "@/lib/types";
import { Card, CardError, CardLoading } from "./Card";
import { IconTile, type Tone } from "./ui/IconTile";
import { Tag } from "./ui/Chips";

// Color is never the only signal: every grade is also written out.
// Success green is reserved for completed actions, so "moderate" uses teal.
const GRADE_TONE: Record<AirGrade, Tone> = { good: "blue", moderate: "teal", bad: "amber", veryBad: "red" };
const TAG_STYLE: Record<AirGrade, string> = {
  good: "bg-accent text-primary",
  moderate: "bg-info-soft text-info",
  bad: "bg-warning-soft text-warning",
  veryBad: "bg-destructive-soft text-destructive",
};

export function AirCard({ districtId }: { districtId: string }) {
  const result = useApi<AirData>(`/api/air?district=${districtId}`);

  return (
    <Card
      title={t.air.title}
      icon={Wind}
      footer={
        <>
          <p>{t.air.note}</p>
          <a href="https://open-meteo.com/" className="inline-flex min-h-12 items-center underline" target="_blank" rel="noopener noreferrer">{t.air.attribution}</a>
        </>
      }
    >
      {result.status === "loading" && <CardLoading />}
      {result.status === "error" && <CardError onRetry={result.retry} />}
      {result.status === "success" && (
        <div>
          <div className="flex items-center gap-3.5">
            <IconTile icon={Wind} tone={GRADE_TONE[result.data.overall]} size="lg" />
            <div>
              <p className="text-2xl font-extrabold">
                <span className="sr-only">{t.air.overall}: </span>
                {t.air.grades[result.data.overall]}
              </p>
              <p className="text-muted-foreground">{t.air.advice[result.data.overall]}</p>
            </div>
          </div>
          <dl className="mt-4 divide-y divide-border rounded-xl bg-surface-2 px-3">
            {(
              [
                [t.air.pm10, result.data.pm10, result.data.pm10Grade],
                [t.air.pm25, result.data.pm25, result.data.pm25Grade],
              ] as const
            ).map(([label, value, grade]) => (
              <div key={label} className="flex flex-wrap items-center justify-between gap-2 py-2.5">
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="flex items-center gap-2 font-bold tabular-nums">
                  {value} {t.air.unit} <Tag className={TAG_STYLE[grade]}>{t.air.grades[grade]}</Tag>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </Card>
  );
}
