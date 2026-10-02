"use client";

import { useKstDay } from "@/hooks/useKstDay";
import { slangForDay, type SlangUsage } from "@/lib/slang";
import { t } from "@/lib/strings";
import { Card, CardLoading } from "./Card";

const USAGE_STYLE: Record<SlangUsage, string> = {
  safe: "bg-green-100 text-green-900 dark:bg-green-950 dark:text-green-100",
  casual: "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-100",
  risky: "bg-red-100 text-red-900 dark:bg-red-950 dark:text-red-100",
};

export function SlangCard() {
  // Day is computed in Korea time on the client so the card changes at KST midnight.
  const day = useKstDay();
  const entry = day === null ? null : slangForDay(day);

  return (
    <Card title={t.slang.title} icon="💬" footer={entry?.needs_native_review ? t.slang.reviewNote : undefined}>
      {!entry ? (
        <CardLoading />
      ) : (
        <div>
          <p lang="ko" className="text-3xl font-bold">{entry.term}</p>
          <p className="text-muted italic">{entry.romanization}</p>
          <p className="mt-2">{entry.meaning}</p>
          <div className="mt-2 flex flex-wrap gap-2 text-sm font-semibold">
            <span className="rounded-full border border-border px-2.5 py-0.5">{t.slang.tone[entry.tone]}</span>
            <span className={`rounded-full px-2.5 py-0.5 ${USAGE_STYLE[entry.usage_level]}`}>
              {t.slang.usage[entry.usage_level]}
            </span>
          </div>
          <h3 className="mt-3 text-sm font-semibold tracking-wide text-muted uppercase">{t.slang.examples}</h3>
          <ul className="mt-1 space-y-2">
            {entry.examples.map((ex) => (
              <li key={ex.ko} className="border-l-4 border-accent pl-3">
                <p lang="ko">{ex.ko}</p>
                <p className="text-muted">{ex.en}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}
