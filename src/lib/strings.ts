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

  safety: {
    intro: "Tools to help you spot scams. Nothing you type here leaves your phone.",
    disclaimer: "Not official advice. If unsure, contact the company or police.",
  },

  scam: {
    title: "Scam checker",
    intro: "Paste a text, KakaoTalk message or email you're not sure about.",
    placeholder: "Paste the message here…",
    privacy: "Checked on your phone only. Your message is not sent, saved or logged.",
    check: "Check message",
    clear: "Clear",
    tooLong: "Only the first 5,000 characters are checked.",
    resultHeading: "Result",
    verdicts: {
      likely_scam: "Likely scam",
      unclear: "Unclear",
      no_obvious_signs: "No obvious scam signs, but verify with the official source.",
    },
    advice: {
      likely_scam:
        "Don't tap any links, call back, install apps, or send money or codes. Delete the message, or report it to 1394.",
      unclear:
        "We can't tell. Treat it with care: contact the sender through an official app, website or phone number you find yourself.",
      no_obvious_signs:
        "Our rules can't catch every scam. If it asks for money, codes or personal details, check with the company through its official app or number.",
    },
    reasons: {
      too_short: "The message is too short to judge.",
      odd_input: "This doesn't look like a normal message, so we can't judge it.",
    },
    signalsTitle: "Warning signs found",
    rulesNote: "These checks are simple rules, still being reviewed by native speakers. New scam styles can slip past them.",
  },

  helpLines: {
    title: "Get help",
    call: "Call",
    lines: {
      police: {
        name: "Police",
        detail: "Emergencies, or if you sent money or are in danger. English interpretation available.",
      },
      scamReport: {
        name: "Voice phishing & smishing report",
        detail: "Police-run 24/7 center: report scam calls and texts, get help stopping payments.",
      },
      fss: {
        name: "Financial Supervisory Service",
        detail: "Advice and reports on financial fraud and illegal loans. Call charges apply.",
      },
      kisa: {
        name: "KISA (spam & hacking)",
        detail: "Report spam texts, smishing links and hacking.",
      },
      immigration: {
        name: "Immigration Contact Center",
        detail: "Check if a visa or immigration message is real. Many languages available.",
      },
    },
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
