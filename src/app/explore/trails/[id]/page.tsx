import { HandHeart, Train } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExploreBanner } from "@/components/explore/ExploreBanner";
import { TrailStops } from "@/components/explore/TrailStops";
import { TrailTags } from "@/components/explore/TrailTags";
import { Card } from "@/components/Card";
import { LocalScreen } from "@/components/local/LocalScreen";
import { t } from "@/lib/strings";
import { getTrail, TRAILS } from "@/lib/trails";

const s = t.explore.trail;

export function generateStaticParams() {
  return TRAILS.map((trail) => ({ id: trail.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/explore/trails/[id]">): Promise<Metadata> {
  const trail = getTrail((await params).id);
  return { title: trail?.title ?? t.explore.trailsTitle };
}

export default async function TrailPage({ params }: PageProps<"/explore/trails/[id]">) {
  const trail = getTrail((await params).id);
  if (!trail) notFound();

  return (
    <LocalScreen
      title={trail.title}
      backHref="/explore"
      backLabel={t.explore.back}
      notice={<ExploreBanner trailTitle={trail.title} />}
    >
      <div className="space-y-3 rounded-card border border-card-border bg-surface p-5 shadow-card">
        <TrailTags tags={trail.tags} />
        <p className="font-bold">
          {trail.region} <span lang="ko" className="font-normal text-muted">({trail.regionKo})</span>
        </p>
        <dl className="grid gap-2">
          {(
            [
              [s.time, trail.estimatedTime],
              [s.difficulty, trail.difficulty],
              [s.season, trail.bestSeason],
            ] as const
          ).map(([label, value]) => (
            <div key={label} className="rounded-xl bg-surface-2 px-3.5 py-2.5">
              <dt className="text-sm font-bold text-muted">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Card title={s.gettingThere} icon={Train}>
        <ol className="list-decimal space-y-1.5 pl-5">
          {trail.gettingThere.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </Card>

      <Card title={s.respectTitle} icon={HandHeart}>
        <p>{trail.respectNote}</p>
      </Card>

      <TrailStops trail={trail} />
    </LocalScreen>
  );
}
