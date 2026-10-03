"use client";

import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Sun,
  Thermometer,
  type LucideIcon,
} from "lucide-react";
import { useApi } from "@/hooks/useApi";
import { t } from "@/lib/strings";
import type { WeatherCodeKey, WeatherData } from "@/lib/types";
import { Card, CardError, CardLoading } from "./Card";
import { IconTile } from "./ui/IconTile";

const ICONS: Record<WeatherCodeKey, LucideIcon> = {
  clear: Sun,
  mostlyClear: CloudSun,
  partlyCloudy: CloudSun,
  overcast: Cloud,
  fog: CloudFog,
  drizzle: CloudDrizzle,
  freezingDrizzle: CloudDrizzle,
  rain: CloudRain,
  freezingRain: CloudRain,
  snow: CloudSnow,
  snowGrains: CloudSnow,
  showers: CloudRain,
  snowShowers: CloudSnow,
  thunderstorm: CloudLightning,
  thunderstormHail: CloudLightning,
  unknown: Thermometer,
};

const deg = (n: number) => `${Math.round(n)}°`;

export function WeatherCard({ districtId }: { districtId: string }) {
  const result = useApi<WeatherData>(`/api/weather?district=${districtId}`);

  return (
    <Card
      title={t.weather.title}
      icon={CloudSun}
      footer={<a href="https://open-meteo.com/" className="inline-flex min-h-12 items-center underline" target="_blank" rel="noopener noreferrer">{t.weather.attribution}</a>}
    >
      {result.status === "loading" && <CardLoading />}
      {result.status === "error" && <CardError onRetry={result.retry} />}
      {result.status === "success" && (
        <div>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[2.75rem] leading-none font-extrabold tracking-[-0.035em] tabular-nums">
                {deg(result.data.temperature)}C
              </p>
              <p className="mt-1.5 text-lg font-semibold">{t.weather.codes[result.data.condition]}</p>
            </div>
            <IconTile icon={ICONS[result.data.condition]} tone="blue" size="lg" />
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-2 min-[380px]:grid-cols-3">
            <Stat label={t.weather.feelsLike} value={deg(result.data.feelsLike)} />
            <Stat label={`${t.weather.high} / ${t.weather.low}`} value={`${deg(result.data.high)} / ${deg(result.data.low)}`} />
            {result.data.rainChance !== null && <Stat label={t.weather.rainChance} value={`${result.data.rainChance}%`} />}
            <Stat label={t.weather.humidity} value={`${result.data.humidity}%`} />
            <Stat label={t.weather.wind} value={`${Math.round(result.data.windKmh)} km/h`} />
          </dl>
        </div>
      )}
    </Card>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-surface-2 px-3 py-2">
      <dt className="text-[0.9375rem] text-muted-foreground">{label}</dt>
      <dd className="font-bold tabular-nums">{value}</dd>
    </div>
  );
}
