"use client";

import { useDistrict } from "@/hooks/useDistrict";
import { useT } from "@/lib/i18n/client";
import { AirCard } from "./AirCard";
import { CardError } from "./Card";
import { DistrictPicker } from "./DistrictPicker";
import { ErrorBoundary } from "./ErrorBoundary";
import { Card } from "./ui/card";
import { PageHeader } from "./ui/PageHeader";
import { WeatherCard } from "./WeatherCard";

const fallback = (
  <Card>
    <CardError />
  </Card>
);

/** Full weather for the chosen district, then air quality as "Going outside?". */
export function WeatherScreen() {
  const t = useT();
  const [district, setDistrict] = useDistrict();

  return (
    <div className="space-y-3">
      <PageHeader title={t.weather.pageTitle} back={{ href: "/", label: t.tabs.home }} />
      <DistrictPicker district={district} onChange={setDistrict} />
      {/* key resets a card's boundary when the district changes */}
      <ErrorBoundary key={`w-${district.id}`} fallback={fallback}>
        <WeatherCard districtId={district.id} />
      </ErrorBoundary>
      <ErrorBoundary key={`a-${district.id}`} fallback={fallback}>
        <AirCard districtId={district.id} />
      </ErrorBoundary>
    </div>
  );
}
