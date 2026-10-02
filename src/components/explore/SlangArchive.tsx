"use client";

import { useId, useState } from "react";
import { SLANG, type SlangTone } from "@/lib/slang";
import { t } from "@/lib/strings";

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
        <label htmlFor={searchId} className="block font-semibold">{s.searchLabel}</label>
        <input
          id={searchId}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={s.searchPlaceholder}
          autoComplete="off"
          className="min-h-12 w-full rounded-lg border border-border bg-surface px-3 text-base focus-visible:outline-2 focus-visible:outline-accent"
        />
        <div className="flex flex-wrap gap-2" role="group" aria-label={s.toneLabel}>
          {[null, ...TONES].map((value) => (
            <button
              key={value ?? "all"}
              type="button"
              aria-pressed={tone === value}
              onClick={() => setTone(value)}
              className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                tone === value ? "border-accent bg-accent text-accent-contrast" : "border-border bg-surface"
              }`}
            >
              {value ? t.slang.tone[value] : s.allTones}
            </button>
          ))}
        </div>
      </div>

      <p aria-live="polite" className="text-muted">
        {results.length === 0 ? s.noResults : `${results.length} ${s.count}`}
      </p>

      <ul className="space-y-2">
        {results.map((entry) => (
          <li key={entry.id}>
            <details className="group rounded-2xl border border-border bg-surface px-4 py-3 shadow-sm">
              <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3 focus-visible:outline-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
                <span className="flex-1">
                  <span lang="ko" className="text-xl font-bold">{entry.term}</span>{" "}
                  <span className="text-muted italic">{entry.romanization}</span>
                  <span className="block">{entry.meaning}</span>
                </span>
                <span aria-hidden="true" className="text-2xl text-muted transition-transform group-open:rotate-90">›</span>
              </summary>
              <div className="space-y-2 pt-3">
                <p className="text-sm font-semibold">
                  {t.slang.tone[entry.tone]} · {t.slang.usage[entry.usage_level]}
                </p>
                <ul className="space-y-2">
                  {entry.examples.map((ex) => (
                    <li key={ex.ko} className="border-l-4 border-accent pl-3">
                      <p lang="ko">{ex.ko}</p>
                      <p className="text-muted">{ex.en}</p>
                    </li>
                  ))}
                </ul>
                {entry.needs_native_review && <p className="text-sm text-muted">{t.slang.reviewNote}</p>}
              </div>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}
