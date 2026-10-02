import type { NextRequest } from "next/server";
import { getDistrict } from "@/lib/districts";
import { cachedJson, errorJson, fetchJson, THIRTY_MINUTES } from "@/lib/server/upstream";
import type { AirData, AirGrade } from "@/lib/types";

type OpenMeteoAir = {
  current: { time: string; pm10: number | null; pm2_5: number | null };
};

const GRADE_ORDER: AirGrade[] = ["good", "moderate", "bad", "veryBad"];

// Korean Ministry of Environment PM grades (µg/m³), same scale Korean apps use.
function gradePm10(v: number): AirGrade {
  if (v <= 30) return "good";
  if (v <= 80) return "moderate";
  if (v <= 150) return "bad";
  return "veryBad";
}

function gradePm25(v: number): AirGrade {
  if (v <= 15) return "good";
  if (v <= 35) return "moderate";
  if (v <= 75) return "bad";
  return "veryBad";
}

export async function GET(request: NextRequest) {
  const district = getDistrict(request.nextUrl.searchParams.get("district"));
  if (!district) return errorJson("Unknown district", 400);

  const url =
    "https://air-quality-api.open-meteo.com/v1/air-quality" +
    `?latitude=${district.lat}&longitude=${district.lon}` +
    "&current=pm10,pm2_5&timezone=Asia%2FSeoul";

  try {
    const raw = await fetchJson<OpenMeteoAir>(url, THIRTY_MINUTES);
    const { pm10, pm2_5 } = raw.current;
    if (pm10 == null || pm2_5 == null) throw new Error("Missing PM values");

    const pm10Grade = gradePm10(pm10);
    const pm25Grade = gradePm25(pm2_5);
    const data: AirData = {
      districtId: district.id,
      observedAt: raw.current.time,
      pm10: Math.round(pm10),
      pm25: Math.round(pm2_5),
      pm10Grade,
      pm25Grade,
      overall: GRADE_ORDER[Math.max(GRADE_ORDER.indexOf(pm10Grade), GRADE_ORDER.indexOf(pm25Grade))],
    };
    return cachedJson(data, THIRTY_MINUTES);
  } catch (err) {
    console.error("air route failed:", err instanceof Error ? err.message : err);
    return errorJson("Air quality is unavailable right now", 502);
  }
}
