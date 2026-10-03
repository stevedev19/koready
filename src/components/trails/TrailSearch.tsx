"use client";

import { Search, SearchX } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useT } from "@/lib/i18n/client";
import { Input } from "../ui/input";
import { EmptyState } from "../ui/States";
import { Card } from "../ui/card";

export type TrailSearchGroup = {
  city: string;
  cityKo: string;
  /** `text` is what the search matches against; `card` is rendered on the server. */
  items: { id: string; text: string; card: ReactNode }[];
};

const normalize = (text: string) => text.normalize("NFKC").toLowerCase().replace(/\s+/g, "");

/** Places-to-visit list grouped by city, with a sticky search bar on top. */
export function TrailSearch({ groups }: { groups: TrailSearchGroup[] }) {
  const t = useT();
  const [query, setQuery] = useState("");

  const q = normalize(query);
  const results = groups
    .map((group) => ({ ...group, items: group.items.filter((item) => !q || normalize(item.text).includes(q)) }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      {/* Sticky search: stays reachable while scrolling the list. */}
      <div
        role="search"
        className="sticky top-0 z-20 -mx-4 bg-background/95 px-4 pt-[max(0.5rem,env(safe-area-inset-top))] pb-2 backdrop-blur"
      >
        <div className="relative">
          <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-placeholder" />
          <Input
            type="search"
            aria-label={t.trails.searchLabel}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.trails.searchPlaceholder}
            autoComplete="off"
            className="pl-12"
          />
        </div>
      </div>

      {results.length === 0 ? (
        <Card className="p-0" aria-live="polite">
          <EmptyState icon={SearchX} title={t.trails.noResults} />
        </Card>
      ) : (
        results.map(({ city, cityKo, items }) => (
          <section key={city} aria-labelledby={`city-${city}`} className="space-y-2.5">
            <h3 id={`city-${city}`} className="px-1 text-lg font-extrabold">
              {city}{" "}
              <span lang="ko" className="text-[0.9375rem] font-semibold text-muted-foreground">
                {cityKo}
              </span>
            </h3>
            <ul className="grid gap-3">
              {items.map((item) => (
                <li key={item.id}>{item.card}</li>
              ))}
            </ul>
          </section>
        ))
      )}
    </>
  );
}
