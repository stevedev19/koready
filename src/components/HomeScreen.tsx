"use client";

import { useDistrict } from "@/hooks/useDistrict";
import { AirCard } from "./AirCard";
import { CardError } from "./Card";
import { DistrictPicker } from "./DistrictPicker";
import { ErrorBoundary } from "./ErrorBoundary";
import { ExchangeCard } from "./ExchangeCard";
import { SlangCard } from "./SlangCard";
import { WeatherCard } from "./WeatherCard";

const fallback = (
  <div className="rounded-2xl border border-border bg-surface p-4">
    <CardError />
  </div>
);

export function HomeScreen() {
  const [district, setDistrict] = useDistrict();

  return (
    <div className="space-y-4">
      <DistrictPicker district={district} onChange={setDistrict} />
      {/* key resets a card's boundary when the district changes */}
      <ErrorBoundary key={`w-${district.id}`} fallback={fallback}>
        <WeatherCard districtId={district.id} />
      </ErrorBoundary>
      <ErrorBoundary key={`a-${district.id}`} fallback={fallback}>
        <AirCard districtId={district.id} />
      </ErrorBoundary>
      <ErrorBoundary fallback={fallback}>
        <ExchangeCard />
      </ErrorBoundary>
      <ErrorBoundary fallback={fallback}>
        <SlangCard />
      </ErrorBoundary>
    </div>
  );
}
