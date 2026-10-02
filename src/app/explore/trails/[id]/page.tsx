import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExploreBanner } from "@/components/explore/ExploreBanner";
import { TrailStops } from "@/components/explore/TrailStops";
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
      icon="🗺️"
      backHref="/explore"
      backLabel={t.explore.back}
      notice={<ExploreBanner trailTitle={trail.title} />}
    >
      <dl className="grid grid-cols-1 gap-2 rounded-2xl border border-border bg-surface p-4">
        <div><dt className="inline font-semibold">📍 </dt><dd className="inline">{trail.region} <span lang="ko" className="text-muted">({trail.regionKo})</span></dd></div>
        <div><dt className="inline font-semibold">⏱️ {s.time}: </dt><dd className="inline">{trail.estimatedTime}</dd></div>
        <div><dt className="inline font-semibold">🥾 {s.difficulty}: </dt><dd className="inline">{trail.difficulty}</dd></div>
        <div><dt className="inline font-semibold">🌸 {s.season}: </dt><dd className="inline">{trail.bestSeason}</dd></div>
      </dl>

      <Card title={s.gettingThere} icon="🚆">
        <ol className="list-decimal space-y-1 pl-5">
          {trail.gettingThere.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </Card>

      <Card title={s.respectTitle} icon="🤝">
        <p>{trail.respectNote}</p>
      </Card>

      <TrailStops trail={trail} />
    </LocalScreen>
  );
}
