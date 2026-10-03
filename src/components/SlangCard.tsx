"use client";

import { useKstDay } from "@/hooks/useKstDay";
import { slangForDay } from "@/lib/slang";
import { useT } from "@/lib/i18n/client";
import { MessageCircle } from "lucide-react";
import { Card, CardLoading } from "./Card";
import { SlangBadges } from "./SlangBadges";

export function SlangCard() {
  const t = useT();
  // Day is computed in Korea time on the client so the card changes at KST midnight.
  const day = useKstDay();
  const entry = day === null ? null : slangForDay(day);

  return (
    <Card title={t.slang.title} icon={MessageCircle}>
      {!entry ? (
        <CardLoading />
      ) : (
        <div>
          <p lang="ko" className="text-[2rem] leading-tight font-extrabold tracking-tight">{entry.term}</p>
          <p className="text-muted-foreground italic">{entry.romanization}</p>
          <p className="mt-2">{entry.meaning}</p>
          <div className="mt-3">
            <SlangBadges entry={entry} />
          </div>
          <h3 className="mt-4 text-sm font-bold text-muted-foreground">{t.slang.examples}</h3>
          <ul className="mt-1 space-y-2">
            {entry.examples.map((ex) => (
              <li key={ex.ko} className="rounded-xl bg-surface-2 px-3.5 py-2.5">
                <p lang="ko">{ex.ko}</p>
                <p className="text-muted-foreground">{ex.en}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}
