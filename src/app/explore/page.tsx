import { BookOpen, ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ExploreBanner } from "@/components/explore/ExploreBanner";
import { TrailTags } from "@/components/explore/TrailTags";
import { ListGroup, ListRow } from "@/components/ui/List";
import { PageHeader } from "@/components/ui/PageHeader";
import { t } from "@/lib/strings";
import { TRAILS } from "@/lib/trails";

export const metadata: Metadata = { title: t.tabs.explore };

export default function ExplorePage() {
  return (
    <div className="space-y-5">
      <PageHeader title={t.tabs.explore} subtitle={t.explore.intro} />
      <ExploreBanner />

      <section aria-labelledby="trails" className="space-y-3">
        <h2 id="trails" className="px-1 text-xl font-extrabold">{t.explore.trailsTitle}</h2>
        <ul className="grid gap-3">
          {TRAILS.map((trail) => (
            <li key={trail.id}>
              <Link
                href={`/explore/trails/${trail.id}`}
                className="flex items-center gap-3 rounded-card border border-card-border bg-card p-5 shadow-card"
              >
                <span className="min-w-0 flex-1">
                  <TrailTags tags={trail.tags} />
                  <span className="mt-2.5 block text-xl leading-snug font-extrabold">{trail.title}</span>
                  <span className="mt-1 block text-[0.9375rem] text-muted-foreground">
                    {trail.region} · {trail.estimatedTime} · {trail.stops.length} {t.explore.stopsCount}
                  </span>
                </span>
                <ChevronRight aria-hidden="true" className="size-5 shrink-0 text-placeholder" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="slang-archive" className="space-y-3">
        <h2 id="slang-archive" className="px-1 text-xl font-extrabold">{t.explore.slang.title}</h2>
        <ListGroup>
          <ListRow href="/explore/slang" icon={BookOpen} tone="violet" title={t.explore.slang.title} subtitle={t.explore.slang.hint} />
        </ListGroup>
      </section>
    </div>
  );
}
