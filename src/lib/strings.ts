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
      emergency: {
        name: "Ambulance & fire",
        detail: "Emergencies. Also gives 24/7 medical advice and tells you which hospitals and pharmacies are open.",
      },
      mentalHealthCrisis: {
        name: "Suicide prevention & mental health line",
        detail: "24/7 counseling if you're struggling or worried about someone. Mainly in Korean.",
      },
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

  local: {
    intro: "Find help close to you.",
    hospital: {
      title: "Hospital & pharmacy helper",
      question: "What do you need?",
      options: {
        emergency: { label: "Emergency", hint: "Call 119 now" },
        doctor: { label: "See a doctor", hint: "Not an emergency" },
        pharmacy: { label: "Find a pharmacy", hint: "Medicine and prescriptions" },
        dental: { label: "Dental", hint: "Toothache, cleaning" },
        mentalHealth: { label: "Mental health", hint: "Stress, anxiety, low mood" },
      },
    },
    disclaimer: "Not medical advice. In an emergency call 119.",
    back: "Back",
    emergency: {
      title: "Emergency",
      callTitle: "Call 119",
      callBody: "For an ambulance or fire. Open 24 hours.",
      callButton: "Call 119",
      tellThem: "Tell them:",
      tellList: [
        "Where you are (address, or a nearby building or station)",
        "What happened",
        "Your phone number",
      ],
      notSureTitle: "Not sure it's an emergency?",
      notSureBody:
        "119 also gives medical advice by phone and tells you which hospitals and pharmacies are open at night and on holidays.",
      egenLink: "Find open ERs and pharmacies (E-Gen, Korean)",
      findEr: "Find a nearby emergency room",
    },
    doctor: {
      title: "See a doctor",
      pickerTitle: "What's wrong?",
      pickerHint: "Pick the closest match. This only suggests the type of clinic, not a diagnosis.",
      clinicTitle: "Clinic to visit",
      also: "Or:",
      phrasesTitle: "Say this at the clinic",
      bringTitle: "What to bring",
      bringList: [
        "ARC (외국인등록증)",
        "Passport",
        "Health insurance card, if you have one",
        "A list of medicines you take",
      ],
      bringNote: "Ticks are not saved.",
    },
    pharmacy: {
      title: "Find a pharmacy",
      phrasesTitle: "Pharmacy phrases",
      afterHours: "At night or on holidays, call 119 or check E-Gen to find an open pharmacy.",
      egenLink: "Open E-Gen (Korean)",
    },
    dental: {
      title: "Dental",
      phrasesTitle: "Say this at the dentist",
    },
    mentalHealth: {
      title: "Mental health",
      crisisTitle: "Need to talk now?",
      centerTitle: "Or try a public center",
      crisisBody: "If you might hurt yourself or you're in danger right now, call 119.",
      phrasesTitle: "Useful phrases",
      reassurance: "Seeing a doctor for stress, sleep or mood problems is common, and it's okay to ask for help.",
    },
    clinic: {
      findNearby: "Find nearby",
      locating: "Getting your location…",
      openIn: "Open in:",
      apps: { naver: "Naver Map", kakao: "Kakao Map", google: "Google Maps" },
      locationNote:
        "Your location stays on your phone. It's only added to the Google Maps link. Naver and Kakao use their own location.",
      locationDenied: "Location is off. The map app will search near where it thinks you are.",
    },
    recycling: {
      title: "Recycling & trash guide",
      hint: "Which bag or bin, and which day",
      banner: "Rules differ by district. Check your building's notice board or your district office.",
      chooseDistrict: "Choose your district",
      onlyThese: "Only these districts have a guide so far.",
      searchLabel: "Search for an item",
      searchPlaceholder: "e.g. pizza box, battery, 페트병",
      browse: "Browse",
      all: "All",
      noResults: "No match for that item.",
      whenTitle: "When to put trash out",
      appliesTo: "Applies to:",
      time: "Time:",
      place: "Where:",
      binLabel: "Put it in",
      prepLabel: "Before you throw it out",
      dayLabel: "Pickup days",
      noDay: "The district doesn't publish a day for this.",
      inferred: "Not listed by name. Based on the district's general rule.",
      bookOnline: "Book a pickup online (Korean)",
      notSureTitle: "Not sure?",
      notSureBody:
        "Don't guess. Ask your building manager (관리실), check the notice board by your building's trash area, or call the district's recycling office.",
      call: "Call",
      sourcesTitle: "Source",
      lastChecked: "Last checked",
      published: "published",
      noDate: "no date shown",
      reviewNote: "Translated from the district's Korean pages. Not yet reviewed by a native speaker.",
      backToItems: "All items",
      days: { mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat", sun: "Sun" },
    },
    phrases: {
      copy: "Copy",
      copied: "Copied",
      showLarge: "Show",
      close: "Close",
      showToStaff: "Show this to staff",
      blankHint: "Point to the ___ or say the word.",
      reviewNote: "Phrases not yet reviewed by a native speaker.",
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
