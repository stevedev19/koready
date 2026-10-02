import type { Metadata } from "next";
import Link from "next/link";
import { ExploreBanner } from "@/components/explore/ExploreBanner";
import { t } from "@/lib/strings";
import { TRAILS, type TrailTag } from "@/lib/trails";

export const metadata: Metadata = { title: t.tabs.explore };

// Simple colored cards instead of images keeps the page light.
const TAG_STYLE: Record<TrailTag, string> = {
  kpop: "bg-fuchsia-100 text-fuchsia-900 dark:bg-fuchsia-950 dark:text-fuchsia-100",
  kdrama: "bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-100",
  film: "bg-violet-100 text-violet-900 dark:bg-violet-950 dark:text-violet-100",
  food: "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-100",
  nature: "bg-green-100 text-green-900 dark:bg-green-950 dark:text-green-100",
  culture: "bg-sky-100 text-sky-900 dark:bg-sky-950 dark:text-sky-100",
};

const cardLink =
  "flex min-h-18 items-center gap-4 rounded-2xl border border-border bg-surface px-5 py-4 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function ExplorePage() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold">{t.tabs.explore}</h1>
        <p className="mt-1 text-muted">{t.explore.intro}</p>
      </header>
      <ExploreBanner />

      <section aria-labelledby="trails" className="space-y-3">
        <h2 id="trails" className="text-lg font-semibold">
          <span aria-hidden="true">🗺️ </span>
          {t.explore.trailsTitle}
        </h2>
        <ul className="grid gap-3">
          {TRAILS.map((trail) => (
            <li key={trail.id}>
              <Link href={`/explore/trails/${trail.id}`} className={cardLink}>
                <span className="flex-1">
                  <span className="block text-xl font-semibold">{trail.title}</span>
                  <span className="block text-muted">
                    📍 {trail.region} · ⏱️ {trail.estimatedTime} · {trail.stops.length} {t.explore.stopsCount}
                  </span>
                  <span className="mt-2 flex flex-wrap gap-1.5">
                    {trail.tags.map((tag) => (
                      <span key={tag} className={`rounded-full px-2.5 py-0.5 text-sm font-semibold ${TAG_STYLE[tag]}`}>
                        {t.explore.tags[tag]}
                      </span>
                    ))}
                  </span>
                </span>
                <span aria-hidden="true" className="text-2xl text-muted">›</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="slang-archive" className="space-y-3 pt-2">
        <h2 id="slang-archive" className="text-lg font-semibold">
          <span aria-hidden="true">💬 </span>
          {t.explore.slang.title}
        </h2>
        <Link href="/explore/slang" className={cardLink}>
          <span aria-hidden="true" className="text-3xl">📚</span>
          <span className="flex-1">
            <span className="block text-xl font-semibold">{t.explore.slang.title}</span>
            <span className="block text-muted">{t.explore.slang.hint}</span>
          </span>
          <span aria-hidden="true" className="text-2xl text-muted">›</span>
        </Link>
      </section>
    </div>
  );
}
