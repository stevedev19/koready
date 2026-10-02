import type { NextRequest } from "next/server";
import { getDistrict } from "@/lib/districts";
import { cachedJson, errorJson, fetchJson, THIRTY_MINUTES } from "@/lib/server/upstream";
import type { WeatherCodeKey, WeatherData } from "@/lib/types";

type OpenMeteoForecast = {
  current: {
    time: string;
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    weather_code: number;
    wind_speed_10m: number;
  };
  daily: {
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: (number | null)[];
  };
};

// https://open-meteo.com/en/docs — WMO weather interpretation codes
function conditionFromCode(code: number): WeatherCodeKey {
  if (code === 0) return "clear";
  if (code === 1) return "mostlyClear";
  if (code === 2) return "partlyCloudy";
  if (code === 3) return "overcast";
  if (code === 45 || code === 48) return "fog";
  if (code >= 51 && code <= 55) return "drizzle";
  if (code === 56 || code === 57) return "freezingDrizzle";
  if (code >= 61 && code <= 65) return "rain";
  if (code === 66 || code === 67) return "freezingRain";
  if (code >= 71 && code <= 75) return "snow";
  if (code === 77) return "snowGrains";
  if (code >= 80 && code <= 82) return "showers";
  if (code === 85 || code === 86) return "snowShowers";
  if (code === 95) return "thunderstorm";
  if (code === 96 || code === 99) return "thunderstormHail";
  return "unknown";
}

export async function GET(request: NextRequest) {
  const district = getDistrict(request.nextUrl.searchParams.get("district"));
  if (!district) return errorJson("Unknown district", 400);

  const url =
    "https://api.open-meteo.com/v1/forecast" +
    `?latitude=${district.lat}&longitude=${district.lon}` +
    "&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m" +
    "&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max" +
    "&timezone=Asia%2FSeoul&forecast_days=1";

  try {
    const raw = await fetchJson<OpenMeteoForecast>(url, THIRTY_MINUTES);
    const data: WeatherData = {
      districtId: district.id,
      observedAt: raw.current.time,
      temperature: raw.current.temperature_2m,
      feelsLike: raw.current.apparent_temperature,
      humidity: raw.current.relative_humidity_2m,
      windKmh: raw.current.wind_speed_10m,
      condition: conditionFromCode(raw.current.weather_code),
      high: raw.daily.temperature_2m_max[0],
      low: raw.daily.temperature_2m_min[0],
      rainChance: raw.daily.precipitation_probability_max[0] ?? null,
    };
    return cachedJson(data, THIRTY_MINUTES);
  } catch (err) {
    console.error("weather route failed:", err instanceof Error ? err.message : err);
    return errorJson("Weather is unavailable right now", 502);
  }
}
