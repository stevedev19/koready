import type { Audience } from "./audience";

export type ForYouCard = "exchange" | "pharmacy" | "alerts" | "trail" | "weather" | "recycling" | "slang" | "doctor";

export const FOR_YOU_HREF: Record<ForYouCard, string> = {
  exchange: "/local/money",
  pharmacy: "/local/pharmacy",
  alerts: "/safety#alert-translator",
  trail: "/trails/seoul-jongno-hanok",
  weather: "/weather",
  recycling: "/local/recycling",
  slang: "/slang",
  doctor: "/local/doctor",
};

/** Featured cards per audience. Only order and selection change; nothing is hidden elsewhere. */
export const FOR_YOU: Record<Audience, ForYouCard[]> = {
  visitor: ["exchange", "pharmacy", "alerts", "trail"],
  resident: ["weather", "recycling", "slang", "doctor"],
  all: ["weather", "exchange", "pharmacy", "slang"],
};
