"use client";

import { useApi } from "@/hooks/useApi";
import { t } from "@/lib/strings";
import type { WeatherCodeKey, WeatherData } from "@/lib/types";
import { Card, CardError, CardLoading } from "./Card";

const ICONS: Record<WeatherCodeKey, string> = {
  clear: "☀️",
  mostlyClear: "🌤️",
  partlyCloudy: "⛅",
  overcast: "☁️",
  fog: "🌫️",
  drizzle: "🌦️",
  freezingDrizzle: "🌧️",
  rain: "🌧️",
  freezingRain: "🌧️",
  snow: "🌨️",
  snowGrains: "🌨️",
  showers: "🌦️",
  snowShowers: "🌨️",
  thunderstorm: "⛈️",
  thunderstormHail: "⛈️",
  unknown: "🌡️",
};

const deg = (n: number) => `${Math.round(n)}°`;

export function WeatherCard({ districtId }: { districtId: string }) {
  const result = useApi<WeatherData>(`/api/weather?district=${districtId}`);

  return (
    <Card
      title={t.weather.title}
      icon="🌤️"
      footer={<a href="https://open-meteo.com/" className="underline" target="_blank" rel="noopener noreferrer">{t.weather.attribution}</a>}
    >
      {result.status === "loading" && <CardLoading />}
      {result.status === "error" && <CardError onRetry={result.retry} />}
      {result.status === "success" && (
        <div>
          <div className="flex items-center gap-3">
            <span className="text-5xl" aria-hidden="true">{ICONS[result.data.condition]}</span>
            <div>
              <p className="text-4xl font-bold">{deg(result.data.temperature)}C</p>
              <p className="text-muted">{t.weather.codes[result.data.condition]}</p>
            </div>
          </div>
          <dl className="mt-3 grid grid-cols-3 gap-2">
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
    <div className="rounded-lg bg-background px-2 py-1.5">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="text-base font-semibold">{value}</dd>
    </div>
  );
}
