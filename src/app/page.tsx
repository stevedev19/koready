import { ChevronRight } from "lucide-react";
import { TrailSearch } from "@/components/trails/TrailSearch";
import { TrailTags } from "@/components/trails/TrailTags";
import { AudienceWelcome } from "@/components/AudienceWelcome";
import { ForYou } from "@/components/ForYou";
import { InstallHint } from "@/components/InstallHint";
import { Pressable } from "@/components/pressable";
import { Card } from "@/components/ui/card";
import { getT } from "@/lib/i18n/server";
import { trailsByCity } from "@/lib/trails";

export default async function HomePage() {
  const t = await getT();
  const groups = trailsByCity().map(({ city, cityKo, trails }) => ({
    city,
    cityKo,
    items: trails.map((trail) => ({
      id: trail.id,
      text: [
        trail.title,
        city,
        cityKo,
        trail.region,
        trail.regionKo,
        ...trail.tags.map((tag) => t.trails.tags[tag]),
        ...trail.stops.flatMap((stop) => [stop.name, stop.nameKo, stop.relatedWork?.title ?? ""]),
      ].join(" "),
      card: (
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
      ),
    })),
  }));

  return (
    <div className="space-y-5">
      {/* Page heading for screen readers; "For you" (when shown) and "Places to visit" are its sections. */}
      <h1 className="sr-only">{t.tabs.home}</h1>
      <AudienceWelcome />
      <InstallHint />
      <ForYou />
      <h2 className="text-[1.75rem] leading-tight font-extrabold tracking-[-0.025em]">{t.trails.title}</h2>
      <TrailSearch groups={groups} />
    </div>
  );
}
