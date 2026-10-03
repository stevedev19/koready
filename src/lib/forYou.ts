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

/**
 * Featured cards for a visitor or resident. Skip / "Mix of both" shows no For-you
 * section at all. Nothing is hidden elsewhere: every card's page is still in the tabs.
 */
export const FOR_YOU: Record<Exclude<Audience, "all">, ForYouCard[]> = {
  visitor: ["exchange", "pharmacy", "alerts", "trail"],
  resident: ["weather", "recycling", "slang", "doctor"],
};
