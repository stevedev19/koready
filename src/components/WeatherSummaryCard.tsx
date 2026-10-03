"use client";

import { ChevronRight, CloudSun, Lightbulb } from "lucide-react";
import Link from "next/link";
import { useDistrict } from "@/hooks/useDistrict";
import { useApi } from "@/hooks/useApi";
import { t } from "@/lib/strings";
import type { WeatherData } from "@/lib/types";
import { weatherTip } from "@/lib/weatherTip";
import { CardError, CardLoading } from "./Card";
import { DistrictSelect } from "./DistrictPicker";
import { IconTile } from "./ui/IconTile";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { WEATHER_ICONS, deg } from "./WeatherCard";

/** Home card: today's weather at a glance. The picker sits outside the link (no controls inside links). */
export function WeatherSummaryCard() {
  const [district, setDistrict] = useDistrict();
  const result = useApi<WeatherData>(`/api/weather?district=${district.id}`);

  return (
    <Card asChild>
      <section aria-labelledby="weather-summary">
        <CardHeader className="flex-wrap">
          <CardTitle asChild>
            <h2 id="weather-summary">
              <CloudSun aria-hidden="true" className="size-[1.375rem] shrink-0 text-jade-icon" />
              {t.weather.title}
              <span lang="ko" className="text-[0.9375rem] font-semibold tracking-normal text-jade-text">
                {t.weather.titleKo}
              </span>
            </h2>
          </CardTitle>
          <DistrictSelect district={district} onChange={setDistrict} />
        </CardHeader>

        {result.status === "loading" && <CardLoading />}
        {result.status === "error" && <CardError onRetry={result.retry} />}
        {result.status === "success" && (
          <Link href="/weather" className="-mx-2 block rounded-2xl px-2 py-1 active:bg-surface-2">
            <span className="flex items-start justify-between gap-3">
              <span>
                <span className="block text-[2.5rem] leading-none font-extrabold tracking-[-0.035em] tabular-nums">
                  {deg(result.data.temperature)}C
                </span>
                <span className="mt-1.5 block text-lg font-semibold">{t.weather.codes[result.data.condition]}</span>
              </span>
              <IconTile icon={WEATHER_ICONS[result.data.condition]} tone="blue" size="lg" />
            </span>
            <span className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[0.9375rem]">
              <span>
                <span className="text-muted-foreground">{t.weather.feelsLike}</span>{" "}
                <span className="font-bold tabular-nums">{deg(result.data.feelsLike)}</span>
              </span>
              {result.data.rainChance !== null && (
                <span>
                  <span className="text-muted-foreground">{t.weather.rainChance}</span>{" "}
                  <span className="font-bold tabular-nums">{result.data.rainChance}%</span>
                </span>
              )}
            </span>
            <span className="mt-3 flex items-start gap-2 rounded-xl bg-surface-2 px-3.5 py-2.5 font-semibold">
              <Lightbulb aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-jade-icon" />
              <span>
                <span className="sr-only">{t.weather.tipLabel}: </span>
                {t.weather.tips[weatherTip(result.data)]}
              </span>
            </span>
            <span className="mt-2 flex min-h-12 items-center justify-between font-bold text-primary">
              {t.weather.seeDetails}
              <ChevronRight aria-hidden="true" className="size-5" />
            </span>
          </Link>
        )}

        <CardFooter>
          <a href="https://open-meteo.com/" className="inline-flex min-h-12 items-center underline" target="_blank" rel="noopener noreferrer">
            {t.weather.attribution}
          </a>
        </CardFooter>
      </section>
    </Card>
  );
}
