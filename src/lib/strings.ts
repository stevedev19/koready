// All user-facing UI text lives here so Korean can be added later.
// To add Korean: create a `ko` object with the same shape and pick it by locale.

export const en = {
  app: {
    name: "Korea Survival Kit",
    shortName: "KSurvival",
    description: "Daily essentials for foreigners living in Korea.",
  },

  tabs: {
    label: "Main navigation",
    home: "Home",
    safety: "Safety",
    local: "Local",
    explore: "Explore",
  },

  comingSoon: {
    title: "Coming soon",
    body: "We're still building this section. Check back later!",
    backHome: "Back to Home",
  },

  home: {
    todayIn: "Today in",
    pickDistrict: "Choose district",
  },

  common: {
    loading: "Loading…",
    error: "Couldn't load this right now.",
    retry: "Try again",
    updated: "Updated",
  },

  weather: {
    title: "Weather",
    feelsLike: "Feels like",
    high: "High",
    low: "Low",
    rainChance: "Rain chance",
    humidity: "Humidity",
    wind: "Wind",
    attribution: "Weather data by Open-Meteo.com (CC BY 4.0)",
    // WMO weather codes → short label
    codes: {
      clear: "Clear",
      mostlyClear: "Mostly clear",
      partlyCloudy: "Partly cloudy",
      overcast: "Overcast",
      fog: "Fog",
      drizzle: "Drizzle",
      freezingDrizzle: "Freezing drizzle",
      rain: "Rain",
      freezingRain: "Freezing rain",
      snow: "Snow",
      snowGrains: "Snow grains",
      showers: "Rain showers",
      snowShowers: "Snow showers",
      thunderstorm: "Thunderstorm",
      thunderstormHail: "Thunderstorm with hail",
      unknown: "Unknown",
    },
  },

  air: {
    title: "Air quality",
    pm10: "Fine dust (PM10)",
    pm25: "Ultrafine dust (PM2.5)",
    overall: "Overall",
    unit: "µg/m³",
    grades: {
      good: "Good",
      moderate: "Moderate",
      bad: "Bad",
      veryBad: "Very bad",
    },
    advice: {
      good: "Great day to be outside.",
      moderate: "Fine for most people.",
      bad: "Consider a KF94 mask outdoors.",
      veryBad: "Wear a KF94 mask and limit time outside.",
    },
    note: "Model estimate using Korean grading. Station readings may differ.",
    attribution: "Air quality data by Open-Meteo.com (CC BY 4.0)",
  },

  exchange: {
    title: "Exchange rate",
    per: "per",
    note: "Daily reference rates. Banks and exchange shops will differ.",
    attribution: "Rates by Frankfurter (central bank data)",
    asOf: "As of",
  },

  slang: {
    title: "Slang of the day",
    meaning: "Meaning",
    examples: "Examples",
    tone: {
      casual: "Casual",
      playful: "Playful",
      rude: "Rude",
      formal: "Formal",
    },
    usage: {
      safe: "Safe to use",
      casual: "Friends only",
      risky: "Risky — avoid with strangers",
    },
    reviewNote: "Not yet reviewed by a native speaker.",
  },

  offline: {
    title: "You're offline",
    body: "Check your connection and try again. Pages you opened before may still work.",
    retry: "Retry",
  },
} as const;

export type Strings = typeof en;

// Single entry point so components don't care which locale is active.
export const t: Strings = en;
