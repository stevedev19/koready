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
    pickDistrict: "Choose city",
    glance: {
      title: "Today at a glance",
      weatherKo: "날씨",
      airKo: "미세먼지",
      exchangeKo: "환율",
      air: "Air quality",
      perUsd: "per 1 USD",
      unavailable: "Not available",
    },
  },

  // iPhone/iPad only: iOS has no install prompt, so Home explains how to add the app.
  installHint: {
    title: "Add to Home Screen",
    dismiss: "Hide these instructions",
    why: "Open it like an app, full screen, with one tap.",
    safari: {
      share: "Tap the Share button (a square with an arrow). If you don't see it, tap ••• first.",
      add: "Scroll down and tap \"Add to Home Screen\".",
      confirm: "Keep \"Open as Web App\" on if you see it, then tap \"Add\".",
    },
    otherBrowser: {
      title: "Open this page in Safari",
      body: "To add the app to your Home Screen, use Safari. Copy the link and paste it into Safari, or use your app's menu to open it in Safari.",
      copy: "Copy link",
      copied: "Link copied",
    },
  },

  common: {
    loading: "Loading…",
    error: "Couldn't load this right now.",
    retry: "Try again",
    updated: "Updated",
    close: "Close",
  },

  // Quiet shortcut in the top bar of every screen. Numbers come from helpLines.ts.
  emergencyShortcut: {
    open: "Emergency calls: 119 or 112",
    title: "Emergency",
    titleKo: "긴급 전화",
    ambulanceNote: "Also 24h medical advice",
    policeNote: "English interpretation available",
    more: "What to say, nearest ER",
  },

  weather: {
    title: "Weather",
    titleKo: "날씨",
    umbrellaTip: {
      title: "Take an umbrella",
      body: "Rain chance today:",
    },
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
    titleKo: "미세먼지",
    // Shown when the overall grade is not Good.
    maskTip: {
      moderate: {
        title: "Sensitive to dust? Consider a KF94 mask",
        body: "Children, older adults and people with asthma feel it first.",
      },
      bad: {
        title: "Wear a KF94 mask outside",
        body: "Keep windows closed and cut down on hard exercise outdoors.",
      },
      veryBad: {
        title: "Wear a KF94 mask and stay inside if you can",
        body: "Keep windows closed and avoid exercise outdoors.",
      },
    },
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
    titleKo: "환율",
    convert: {
      title: "Quick convert",
      amount: "Amount",
      currency: "Currency",
      swap: "Swap direction",
      approx: "≈",
    },
    per: "per",
    note: "Daily reference rates. Banks and exchange shops will differ.",
    attribution: "Rates by Frankfurter (central bank data)",
    asOf: "As of",
  },

  slang: {
    title: "Slang of the day",
    titleKo: "오늘의 신조어",
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

  alerts: {
    title: "Alert translator",
    intro: "Got an emergency or safety text in Korean (재난문자)? Paste it here to see what it says and what to do.",
    label: "Paste the Korean alert text",
    placeholder: "Paste the alert here…",
    privacy: "Read on your phone only. The text is not sent, saved or logged.",
    translate: "Explain this alert",
    clear: "Clear",
    samples: "Sample alerts",
    samplesHint: "Try a sample (made up for practice, not a real alert):",
    learnLink: "Learn the alert types before an emergency",
    disclaimer: "Not official. Follow instructions from authorities and the original alert.",
    originalTitle: "Original alert (Korean)",
    typeTitle: "Alert type",
    unknownType: "Not recognized",
    alsoMentions: "Also mentions",
    category: "Category",
    categoryNotShown: "Not shown in the pasted text",
    sender: "Sent by",
    area: "Area (as written)",
    time: "Time (as written)",
    notFound: "Not found in the text",
    summaryTitle: "Plain-English summary",
    levelWarning: "Level: warning (경보), the higher level.",
    levelAdvisory: "Level: advisory (주의보), the lower level.",
    lifted: "The alert text says it has been lifted (해제). Other dangers may remain. Keep following local instructions.",
    drill: "The alert text says this is a drill (훈련). Follow the drill instructions.",
    mentions: "The alert mentions:",
    noSummary: "We couldn't recognize the type of this alert.",
    actionsTitle: "What to do",
    actionsIntro: "Always follow the original alert's own instructions first. Below is general official guidance for this type of alert.",
    actionsSource: "Source: official safety guidelines",
    glossaryTitle: "Key terms found",
    linesTitle: "Line by line",
    keyWords: "Key words:",
    notTranslated: "Not translated",
    notUnderstoodTitle: "I could not fully understand this alert.",
    notUnderstoodBody:
      "Follow what you see and hear around you, ask someone nearby, or call 119 / the verified help line.",
    call119: "Call 119",
    tooLong: "Only the first 2,000 characters are read.",
  },

  alertGuide: {
    title: "Learn the alert types",
    intro: "Korean phones get three kinds of government alert text (재난문자). Learn them now, before an emergency.",
    categoriesTitle: "The three alert categories",
    sound: "Sound",
    canTurnOff: "Can you turn it off?",
    yes: "Yes",
    no: "No. Every phone receives it.",
    screenTitle: "What it looks like",
    screenBody:
      "The alert pops up on your screen. Look for the category name (for example 긴급재난문자) and the sender in [brackets], such as [기상청] for the weather agency or your city office. The exact look depends on your phone.",
    englishTitle: "English in alerts",
    englishBody:
      "Since 2024, Emergency and Disaster Alerts with an alarm sound add English for the key facts, such as the disaster type and earthquake magnitude. The rest of the message stays in Korean.",
    earthquakeTitle: "Earthquake alerts",
    earthquakeBody:
      "Magnitude 6.0 or higher: Emergency Alert to the whole country. Magnitude 5.0–5.9: Disaster Alert to the whole country. Smaller quakes: Disaster Alert or Safety Notice, depending on how strong the shaking is expected to be where you are.",
    enableTitle: "Make sure alerts are on",
    iphoneTitle: "iPhone",
    iphoneSteps: [
      "Open Settings and tap Notifications.",
      "Scroll to the very bottom.",
      "Under Government Alerts, turn on the alert types.",
    ],
    androidTitle: "Android (Samsung Galaxy)",
    androidSteps: [
      "Open Settings and tap Safety and emergency.",
      "Tap Wireless emergency alerts.",
      "Turn on Allow alerts, and check the alert types below it.",
    ],
    otherAndroid:
      "Other Android phones: open the Messages app, go to Settings, and look for emergency alert settings. Menu names differ by phone and language.",
    appTitle: "Alerts in your language",
    appBody:
      "Install the government's Emergency Ready App (the foreign-language version of 안전디딤돌) to get disaster texts in English, Chinese, Vietnamese, Thai or Japanese. It also shows nearby shelters.",
    helpTitle: "Emergency and help numbers",
    sourcesTitle: "Sources",
    lastChecked: "Last checked",
    back: "Safety",
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
      travelHotline: {
        name: "1330 Korea Travel Helpline",
        detail: "Interpreting by phone or text in English, Chinese, Japanese and more. Run by the Korea Tourism Organization.",
      },
      kdca: {
        name: "Disease control hotline (KDCA)",
        detail: "Infectious disease questions. 24 hours, free, many languages.",
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
      screenOn: "Screen stays on while this is open.",
      screenMayDim: "Your screen may dim. Tap it now and then to keep it on.",
      blankHint: "Point to the ___ or say the word.",
      reviewNote: "Phrases not yet reviewed by a native speaker.",
    },
  },

  explore: {
    intro: "Short self-guided trips outside Seoul, mixing K-culture spots with local markets and food.",
    trailsTitle: "Trails",
    stopsCount: "stops",
    tags: {
      kpop: "K-pop",
      kdrama: "K-drama",
      film: "Film",
      food: "Food",
      nature: "Nature",
      culture: "Culture",
    },
    banner: "Places can close or change. Check hours before you go.",
    reportProblem: "Report a problem",
    reportSubject: "Problem with trail",
    back: "Explore",
    trail: {
      time: "Time",
      difficulty: "Difficulty",
      season: "Best season",
      gettingThere: "Getting there",
      respectTitle: "Respect the locals",
      stopsTitle: "Stops",
      progress: "visited",
      progressNote: "Visited ticks are saved only on this phone.",
      relatedTo: "Related to",
      hours: "Hours",
      cost: "Cost",
      notPublished: "Not published. Check before you go.",
      map: "Map",
      copyKorean: "Copy Korean name",
      copied: "Copied",
      markVisited: "Visited",
      source: "Source",
      lastChecked: "Last checked",
      needsReview: "Not yet reviewed.",
    },
    slang: {
      title: "Daily slang archive",
      hint: "Browse all the slang words",
      searchLabel: "Search slang",
      searchPlaceholder: "Word, romanization or meaning",
      toneLabel: "Tone",
      allTones: "All",
      count: "words",
      noResults: "No slang matches that.",
    },
  },

  privacy: {
    title: "Privacy",
    link: "Privacy: what stays on your phone",
    updated: "Last updated: 2026-10-02",
    intro: "Korea Survival Kit has no accounts, no ads and no tracking or analytics. Here is exactly what happens to your information.",
    sections: [
      {
        title: "Messages you paste",
        body: [
          "The scam checker and alert translator run entirely in your browser.",
          "What you paste is never sent to our server, never saved, and never logged. It is gone when you leave the page.",
          "Spellcheck and autofill are turned off in those text boxes so the text isn't shared with keyboard or spellcheck services.",
        ],
      },
      {
        title: "Saved on your phone only",
        body: [
          "Your chosen district and the trail stops you mark as visited are saved in your browser's storage on this device.",
          "Nothing else is saved. Health choices, checklist ticks and search words are kept in memory only and cleared when you leave the page.",
          "To delete saved data, clear this site's data in your browser settings.",
        ],
      },
      {
        title: "Your location",
        body: [
          "The app asks for your location only when you tap \"Find nearby\".",
          "It stays in your browser. It is rounded to about 100 m and added only to the Google Maps link if you open it. Naver and Kakao links don't include it.",
          "Your location is never sent to our server or stored.",
        ],
      },
      {
        title: "Weather, air quality and exchange rates",
        body: [
          "Our server fetches these from Open-Meteo and Frankfurter, using the center point of the district you picked, not your location.",
          "Results are cached and shared by everyone who picks the same district.",
        ],
      },
      {
        title: "Links to other services",
        body: [
          "Map apps, phone calls and government or tourism websites you open from this app are run by others, and their own privacy policies apply.",
        ],
      },
      {
        title: "Technical logs",
        body: [
          "Like any website, our hosting provider may keep standard request logs (such as IP address and the page requested) for security and reliability.",
          "Our own code only logs errors from the weather and exchange-rate services. It never logs anything you type or paste.",
        ],
      },
      {
        title: "Offline use",
        body: [
          "The app stores its own pages and files on your device so it can work offline. This contains no personal information.",
        ],
      },
    ],
    contact: "Questions about privacy?",
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
