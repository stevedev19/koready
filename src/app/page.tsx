import { ChevronRight, Lock } from "lucide-react";
import { CardError } from "@/components/Card";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { TrailBanner } from "@/components/trails/TrailBanner";
import { TrailTags } from "@/components/trails/TrailTags";
import { InstallHint } from "@/components/InstallHint";
import { Pressable } from "@/components/pressable";
import { Card } from "@/components/ui/card";
import { ListGroup, ListRow } from "@/components/ui/List";
import { PageHeader } from "@/components/ui/PageHeader";
import { WeatherSummaryCard } from "@/components/WeatherSummaryCard";
import { t } from "@/lib/strings";
import { trailsByCity } from "@/lib/trails";

export default function HomePage() {
  return (
    <div className="space-y-5">
      <PageHeader title={t.trails.title} subtitle={t.trails.intro} />
      <InstallHint />
      <TrailBanner />

      {trailsByCity().map(({ city, cityKo, trails }) => (
        <section key={city} aria-labelledby={`city-${city}`} className="space-y-2.5">
          <h2 id={`city-${city}`} className="px-1 text-lg font-extrabold">
            {city}{" "}
            <span lang="ko" className="text-[0.9375rem] font-semibold text-muted-foreground">
              {cityKo}
            </span>
          </h2>
          <ul className="grid gap-3">
            {trails.map((trail) => (
              <li key={trail.id}>
                <Card asChild className="flex items-center gap-3">
                  <Pressable href={`/trails/${trail.id}`}>
                    <span className="min-w-0 flex-1">
                      <TrailTags tags={trail.tags} />
                      <span className="mt-2.5 block text-xl leading-snug font-extrabold">{trail.title}</span>
                      <span className="mt-1 block text-[0.9375rem] text-muted-foreground">
                        {trail.region} · {trail.estimatedTime} · {trail.stops.length} {t.trails.stopsCount}
                      </span>
                    </span>
                    <ChevronRight aria-hidden="true" className="size-5 shrink-0 text-placeholder" />
                  </Pressable>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <ErrorBoundary
        fallback={
          <Card>
            <CardError />
          </Card>
        }
      >
        <WeatherSummaryCard />
      </ErrorBoundary>

      <ListGroup>
        <ListRow href="/privacy" icon={Lock} tone="neutral" title={t.privacy.link} />
      </ListGroup>
    </div>
  );
}
