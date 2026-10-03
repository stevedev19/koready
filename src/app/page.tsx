import { ChevronRight, Lock, Settings } from "lucide-react";
import { TrailBanner } from "@/components/trails/TrailBanner";
import { TrailTags } from "@/components/trails/TrailTags";
import { AudienceWelcome } from "@/components/AudienceWelcome";
import { ForYou } from "@/components/ForYou";
import { InstallHint } from "@/components/InstallHint";
import { Pressable } from "@/components/pressable";
import { Card } from "@/components/ui/card";
import { ListGroup, ListRow } from "@/components/ui/List";
import { HTML_LANG, LANGUAGE_WORD, LOCALES } from "@/lib/i18n/locales";
import { getT } from "@/lib/i18n/server";
import { trailsByCity } from "@/lib/trails";

export default async function HomePage() {
  const t = await getT();
  return (
    <div className="space-y-5">
      {/* Page heading for screen readers; "For you" (when shown) and "Trails" are its sections. */}
      <h1 className="sr-only">{t.tabs.home}</h1>
      <AudienceWelcome />
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
        <ListRow
          href="/settings"
          icon={Settings}
          tone="neutral"
          title={t.audience.settings.link}
          subtitle={LOCALES.map((l) => (
            <span key={l} lang={HTML_LANG[l]}>
              {l !== LOCALES[0] && " · "}
              {LANGUAGE_WORD[l]}
            </span>
          ))}
        />
        <ListRow href="/privacy" icon={Lock} tone="neutral" title={t.privacy.link} />
      </ListGroup>
    </div>
  );
}
