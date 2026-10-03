import type { Metadata } from "next";
import { WeatherScreen } from "@/components/WeatherScreen";
import { t } from "@/lib/strings";

export const metadata: Metadata = { title: t.weather.pageTitle };

export default function WeatherPage() {
  return <WeatherScreen />;
}
