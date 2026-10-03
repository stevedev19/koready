import type { Metadata } from "next";
import { WeatherScreen } from "@/components/WeatherScreen";
import { getT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t.weather.pageTitle };
}

export default function WeatherPage() {
  return <WeatherScreen />;
}
