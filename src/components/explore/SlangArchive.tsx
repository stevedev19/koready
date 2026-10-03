"use client";

import { ChevronRight, Search, SearchX } from "lucide-react";
import { useId, useState } from "react";
import { SLANG, type SlangTone } from "@/lib/slang";
import { t } from "@/lib/strings";
import { Input } from "../ui/input";
import { ChipGroup } from "../ui/Chips";
import { EmptyState } from "../ui/States";
import { Card as CardSurface } from "../ui/card";
import { Badge } from "../ui/badge";

const s = t.explore.slang;
const TONES = Object.keys(t.slang.tone) as SlangTone[];

const normalize = (text: string) => text.normalize("NFKC").toLowerCase().replace(/\s+/g, "");

export function SlangArchive() {
  const [query, setQuery] = useState("");
  const [tone, setTone] = useState<SlangTone | null>(null);
  const searchId = useId();

  const q = normalize(query);
  const results = SLANG.filter(
    (e) =>
      (!tone || e.tone === tone) &&
      (!q || [e.term, e.romanization, e.meaning].some((text) => normalize(text).includes(q))),
  );

  return (
    <div className="space-y-4">
      <div role="search" className="space-y-3">
        <label htmlFor={searchId} className="block px-1 font-bold">{s.searchLabel}</label>
        <div className="relative">
          <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-placeholder" />
          <Input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={s.searchPlaceholder}
            autoComplete="off"
            className="pl-12"
          />
        </div>
        <ChipGroup<SlangTone | null>
          label={s.toneLabel}
          value={tone}
          onChange={setTone}
          options={[{ value: null, label: s.allTones }, ...TONES.map((v) => ({ value: v, label: t.slang.tone[v] }))]}
        />
      </div>

      <p aria-live="polite" className={results.length === 0 ? "sr-only" : "px-1 font-bold text-muted-foreground"}>
        {results.length === 0 ? s.noResults : `${results.length} ${s.count}`}
      </p>
      {results.length === 0 && (
        <CardSurface className="p-0">
          <EmptyState icon={SearchX} title={s.noResults} />
        </CardSurface>
      )}

      <ul className="space-y-2">
        {results.map((entry) => (
          <li key={entry.id}>
            <CardSurface asChild className="group px-4 py-2.5">
              <details>
                <summary className="flex min-h-14 cursor-pointer list-none items-center gap-3 rounded-xl [&::-webkit-details-marker]:hidden">
                  <span className="flex-1">
                    <span lang="ko" className="text-[1.375rem] font-extrabold">{entry.term}</span>{" "}
                    <span className="text-muted-foreground italic">{entry.romanization}</span>
                    <span className="block">{entry.meaning}</span>
                  </span>
                  <ChevronRight
                    aria-hidden="true"
                    className="size-5 shrink-0 text-placeholder transition-transform group-open:rotate-90"
                  />
                </summary>
                <div className="space-y-2 pt-3">
                  <p className="flex flex-wrap gap-2">
                    <Badge>{t.slang.tone[entry.tone]}</Badge>
                    <Badge>{t.slang.usage[entry.usage_level]}</Badge>
                  </p>
                  <ul className="space-y-2">
                    {entry.examples.map((ex) => (
                      <li key={ex.ko} className="rounded-xl bg-surface-2 px-3.5 py-2.5">
                        <p lang="ko">{ex.ko}</p>
                        <p className="text-muted-foreground">{ex.en}</p>
                      </li>
                    ))}
                  </ul>
                  {entry.needs_native_review && <p className="text-[0.9375rem] text-muted-foreground">{t.slang.reviewNote}</p>}
                </div>
              </details>
            </CardSurface>
          </li>
        ))}
      </ul>
    </div>
  );
}
