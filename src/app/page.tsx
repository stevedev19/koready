import { ChevronRight, Lock, Settings } from "lucide-react";
import { TrailBanner } from "@/components/trails/TrailBanner";
import { TrailTags } from "@/components/trails/TrailTags";
import { ForYou } from "@/components/ForYou";
import { InstallHint } from "@/components/InstallHint";
import { Pressable } from "@/components/pressable";
import { Card } from "@/components/ui/card";
import { ListGroup, ListRow } from "@/components/ui/List";
import { t } from "@/lib/strings";
import { trailsByCity } from "@/lib/trails";

export default function HomePage() {
  return (
    <div className="space-y-5">
      <InstallHint />
      <ForYou />
      <header className="space-y-1">
        <h2 className="text-[1.75rem] leading-tight font-extrabold tracking-[-0.025em]">{t.trails.title}</h2>
        <p className="text-muted-foreground">{t.trails.intro}</p>
      </header>
      <TrailBanner />

      {trailsByCity().map(({ city, cityKo, trails }) => (
        <section key={city} aria-labelledby={`city-${city}`} className="space-y-2.5">
          <h3 id={`city-${city}`} className="px-1 text-lg font-extrabold">
            {city}{" "}
            <span lang="ko" className="text-[0.9375rem] font-semibold text-muted-foreground">
              {cityKo}
            </span>
          </h3>
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

      <ListGroup>
        <ListRow href="/settings" icon={Settings} tone="neutral" title={t.audience.settings.link} />
        <ListRow href="/privacy" icon={Lock} tone="neutral" title={t.privacy.link} />
      </ListGroup>
    </div>
  );
}
