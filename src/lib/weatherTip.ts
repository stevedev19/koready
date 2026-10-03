import type { WeatherCodeKey, WeatherData } from "./types";

export type WeatherTip = "storm" | "snow" | "umbrella" | "cold" | "heat" | "layers" | "none";

const STORM: WeatherCodeKey[] = ["thunderstorm", "thunderstormHail"];
const SNOW_OR_ICE: WeatherCodeKey[] = ["snow", "snowGrains", "snowShowers", "freezingRain", "freezingDrizzle"];
const WET: WeatherCodeKey[] = ["rain", "showers", "drizzle"];

/** One plain tip for today, most important first. Thresholds are simple on purpose. */
export function weatherTip(w: WeatherData): WeatherTip {
  if (STORM.includes(w.condition)) return "storm";
  if (SNOW_OR_ICE.includes(w.condition)) return "snow";
  if (WET.includes(w.condition) || (w.rainChance ?? 0) >= 50) return "umbrella";
  if (w.feelsLike <= 0) return "cold";
  if (w.feelsLike >= 31) return "heat";
  if (w.high - w.low >= 10) return "layers";
  return "none";
}
