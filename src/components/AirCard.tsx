"use client";

import { useApi } from "@/hooks/useApi";
import { t } from "@/lib/strings";
import type { AirData, AirGrade } from "@/lib/types";
import { Card, CardError, CardLoading } from "./Card";

// Color is never the only signal: every badge also shows the grade as text.
const GRADE_STYLE: Record<AirGrade, string> = {
  good: "bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-100",
  moderate: "bg-green-100 text-green-900 dark:bg-green-950 dark:text-green-100",
  bad: "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-100",
  veryBad: "bg-red-100 text-red-900 dark:bg-red-950 dark:text-red-100",
};

const GRADE_ICON: Record<AirGrade, string> = { good: "😊", moderate: "🙂", bad: "😷", veryBad: "🚨" };

function Badge({ grade }: { grade: AirGrade }) {
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-sm font-semibold ${GRADE_STYLE[grade]}`}>
      {t.air.grades[grade]}
    </span>
  );
}

export function AirCard({ districtId }: { districtId: string }) {
  const result = useApi<AirData>(`/api/air?district=${districtId}`);

  return (
    <Card
      title={t.air.title}
      icon="🌫️"
      footer={
        <>
          <p>{t.air.note}</p>
          <a href="https://open-meteo.com/" className="underline" target="_blank" rel="noopener noreferrer">{t.air.attribution}</a>
        </>
      }
    >
      {result.status === "loading" && <CardLoading />}
      {result.status === "error" && <CardError onRetry={result.retry} />}
      {result.status === "success" && (
        <div>
          <div className="flex items-center gap-3">
            <span className="text-5xl" aria-hidden="true">{GRADE_ICON[result.data.overall]}</span>
            <div>
              <p className="text-2xl font-bold">
                <span className="sr-only">{t.air.overall}: </span>
                {t.air.grades[result.data.overall]}
              </p>
              <p className="text-muted">{t.air.advice[result.data.overall]}</p>
            </div>
          </div>
          <dl className="mt-3 space-y-2 text-base">
            <div className="flex items-center justify-between gap-2">
              <dt className="text-muted">{t.air.pm10}</dt>
              <dd className="flex items-center gap-2 font-medium">
                {result.data.pm10} {t.air.unit} <Badge grade={result.data.pm10Grade} />
              </dd>
            </div>
            <div className="flex items-center justify-between gap-2">
              <dt className="text-muted">{t.air.pm25}</dt>
              <dd className="flex items-center gap-2 font-medium">
                {result.data.pm25} {t.air.unit} <Badge grade={result.data.pm25Grade} />
              </dd>
            </div>
          </dl>
        </div>
      )}
    </Card>
  );
}
