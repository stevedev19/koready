"use client";

import { ChevronDown, Heart, Search, SearchX, TriangleAlert, Volume2 } from "lucide-react";
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui";
import { useId, useState } from "react";
import { useSavedSlang } from "@/hooks/useSavedSlang";
import { useSpeakKorean } from "@/hooks/useSpeakKorean";
import { SLANG, type SlangEntry, type SlangTone } from "@/lib/slang";
import { t } from "@/lib/strings";
import { cn } from "@/lib/utils";
import { SlangBadges } from "./SlangBadges";
import { Input } from "./ui/input";
import { EmptyState } from "./ui/States";
import { Card as CardSurface } from "./ui/card";
import { Toast, useToast } from "./ui/Toast";

const s = t.slangPage.archive;
const TONES = Object.keys(t.slang.tone) as SlangTone[];
type Filter = "all" | SlangTone | "saved" | "risky";
const FILTERS: Filter[] = ["all", ...TONES, "saved", "risky"];

const normalize = (text: string) => text.normalize("NFKC").toLowerCase().replace(/\s+/g, "");
const filterLabel = (f: Filter) => (f === "all" || f === "saved" || f === "risky" ? s.filters[f] : t.slang.tone[f]);

export function SlangArchive() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [saved, toggleSaved] = useSavedSlang();
  const [toast, showToast] = useToast(2500);
  const speak = useSpeakKorean();

  const q = normalize(query);
  const results = SLANG.filter(
    (e) =>
      (filter === "all" ||
        (filter === "saved" && saved.has(e.id)) ||
        (filter === "risky" && e.usage_level === "risky") ||
        e.tone === filter) &&
      (!q || [e.term, e.romanization, e.meaning].some((text) => normalize(text).includes(q))),
  );

  return (
    <section aria-labelledby="slang-archive" className="space-y-3">
      <h2 id="slang-archive" className="px-1 text-xl font-extrabold">
        {s.title} <span aria-hidden="true">·</span> <span aria-live="polite">{results.length}</span>
      </h2>

      {/* Sticky search: stays reachable while scrolling the list. */}
      <div
        role="search"
        className="sticky top-0 z-20 -mx-4 bg-background/95 px-4 pt-[max(0.5rem,env(safe-area-inset-top))] pb-2 backdrop-blur"
      >
        <div className="relative">
          <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-placeholder" />
          <Input
            type="search"
            aria-label={s.searchLabel}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={s.searchPlaceholder}
            autoComplete="off"
            className="pl-12"
          />
        </div>
      </div>

      {/* One scrollable row of compact chips; each keeps a 48px tap target. */}
      <ToggleGroupPrimitive.Root
        type="single"
        aria-label={s.filterLabel}
        value={filter}
        onValueChange={(v) => v && setFilter(v as Filter)}
        className="-mx-4 flex gap-1.5 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {FILTERS.map((f) => (
          <ToggleGroupPrimitive.Item
            key={f}
            value={f}
            className="group flex min-h-12 shrink-0 items-center [-webkit-tap-highlight-color:transparent]"
          >
            <span className="flex items-center gap-1 rounded-full bg-card px-3.5 py-1.5 text-[0.9375rem] font-bold whitespace-nowrap text-foreground ring-[1.5px] ring-input ring-inset transition-colors group-active:bg-surface-3 group-data-[state=on]:bg-primary group-data-[state=on]:text-primary-foreground group-data-[state=on]:ring-0">
              {f === "saved" && <Heart aria-hidden="true" className="size-4" />}
              {f === "risky" && <TriangleAlert aria-hidden="true" className="size-4" />}
              {filterLabel(f)}
            </span>
          </ToggleGroupPrimitive.Item>
        ))}
      </ToggleGroupPrimitive.Root>

      {results.length === 0 ? (
        <CardSurface className="p-0">
          <EmptyState icon={SearchX} title={filter === "saved" && !q ? s.noSaved : s.noResults} />
        </CardSurface>
      ) : (
        <ul className="space-y-2.5">
          {results.map((entry) => (
            <li key={entry.id}>
              <SlangRow
                entry={entry}
                saved={saved.has(entry.id)}
                onToggleSaved={() => toggleSaved(entry.id)}
                onSpeak={speak ? () => speak(entry.term) || showToast(s.noVoice) : null}
              />
            </li>
          ))}
        </ul>
      )}
      <Toast message={toast} />
    </section>
  );
}

function SlangRow({
  entry,
  saved,
  onToggleSaved,
  onSpeak,
}: {
  entry: SlangEntry;
  saved: boolean;
  onToggleSaved: () => void;
  onSpeak: (() => void) | null;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    // The expand button's ::after covers the whole card, so press feedback fills it
    // edge to edge with the card's own radius. Action buttons sit above that layer.
    <div
      className={cn(
        "relative overflow-hidden rounded-card border border-card-border bg-card shadow-card transition-colors duration-100",
        // Hover only where a real pointer exists (never sticks after a tap); pressed wins over hover.
        "[@media(hover:hover)]:has-[[data-expand]:hover:not(:active)]:bg-surface-2 has-[[data-expand]:active]:bg-surface-3",
        "has-[[data-expand]:focus-visible]:outline-3 has-[[data-expand]:focus-visible]:outline-offset-2 has-[[data-expand]:focus-visible]:outline-ring",
      )}
    >
      <div className="flex items-start gap-1 py-3.5 pr-1.5 pl-4">
        <button
          type="button"
          data-expand
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className="min-w-0 flex-1 text-left [-webkit-tap-highlight-color:transparent] after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
        >
          <span className="flex flex-wrap items-baseline gap-x-2">
            <span lang="ko" className="text-[1.5rem] leading-tight font-extrabold">{entry.term}</span>
            <span className="text-[0.9375rem] text-muted-foreground">{entry.romanization}</span>
          </span>
          <span className={cn("mt-1 block leading-snug", !open && "line-clamp-2")}>{entry.meaning}</span>
          <span className="mt-2.5 block">
            <SlangBadges entry={entry} />
          </span>
        </button>
        <div className="relative z-10 flex shrink-0 flex-col items-center">
          {onSpeak && (
            <button
              type="button"
              onClick={onSpeak}
              aria-label={`${s.listen} ${entry.term}`}
              className="grid size-12 place-items-center rounded-full text-primary [-webkit-tap-highlight-color:transparent] hover:bg-surface-2 active:bg-surface-3"
            >
              <Volume2 aria-hidden="true" className="size-6" />
            </button>
          )}
          <button
            type="button"
            onClick={onToggleSaved}
            aria-pressed={saved}
            aria-label={`${s.save} ${entry.term}`}
            className="grid size-12 place-items-center rounded-full text-destructive [-webkit-tap-highlight-color:transparent] hover:bg-surface-2 active:bg-surface-3"
          >
            <Heart aria-hidden="true" className={cn("size-6", saved && "fill-current")} />
          </button>
          <ChevronDown
            aria-hidden="true"
            className={cn("size-5 text-placeholder transition-transform", open && "rotate-180")}
          />
        </div>
      </div>
      <div id={panelId} hidden={!open} className="relative z-10 space-y-2 px-4 pb-4">
        <h3 className="text-sm font-bold text-muted-foreground">{s.examples}</h3>
        <ul className="space-y-2">
          {entry.examples.map((ex) => (
            <li key={ex.ko} className="rounded-xl bg-card px-3.5 py-2.5 ring-1 ring-border ring-inset">
              <p lang="ko">{ex.ko}</p>
              <p className="text-muted-foreground">{ex.en}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
