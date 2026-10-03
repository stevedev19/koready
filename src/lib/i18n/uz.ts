import type { Strings } from "@/lib/strings";

// Uzbek (Latin script). Machine-assisted translation: not yet reviewed by a native speaker.
// Korean words, phone numbers and "119" stay as they are (some code relies on them).
export const uz: Strings = {
  app: {
    name: "KReady",
    shortName: "KReady",
    description: "Koreyada yashayotgan chet elliklar uchun kundalik zarur maʼlumotlar.",
  },

  tabs: {
    label: "Asosiy menyu",
    home: "Bosh sahifa",
    safety: "Xavfsizlik",
    local: "Salomatlik",
    slang: "Sleng",
  },

  comingSoon: {
    title: "Tez orada",
    body: "Bu boʻlim hali tayyorlanmoqda. Keyinroq qayting!",
    backHome: "Bosh sahifaga qaytish",
  },

  home: {
    todayIn: "Bugun:",
    pickDistrict: "Shaharni tanlang",
  },

  installHint: {
    title: "Bosh ekranga qoʻshish",
    dismiss: "Bu koʻrsatmalarni yashirish",
    why: "Ilova kabi bir bosishda, toʻliq ekranda oching.",
    safari: {
      share: "«Ulashish» tugmasini bosing (strelkali kvadrat). Koʻrinmasa, avval ••• ni bosing.",
      add: "Pastga tushing va «Add to Home Screen» (Bosh ekranga qoʻshish) ni bosing.",
      confirm: "«Open as Web App» koʻrinsa, uni yoqilgan holda qoldiring va «Add» ni bosing.",
    },
    otherBrowser: {
      title: "Bu sahifani Safari’da oching",
      body: "Ilovani bosh ekranga qoʻshish uchun Safari’dan foydalaning. Havolani nusxalab Safari’ga qoʻying yoki ilovangiz menyusi orqali Safari’da oching.",
      copy: "Havolani nusxalash",
      copied: "Havola nusxalandi",
    },
  },

  quickActions: {
    open: "Tezkor amallarni ochish",
    close: "Tezkor amallarni yopish",
    listLabel: "Tezkor amallar",
    weather: { label: "Ob-havo", ko: "날씨" },
    exchange: { label: "Valyuta kursi", ko: "환율" },
    recycling: { label: "Chiqindi saralash", ko: "분리배출" },
  },

  audience: {
    welcome: {
      title: "Koreyaga sayohatga kelganmisiz yoki shu yerda yashaysizmi?",
      body: "Eng foydali narsalarni birinchi koʻrsatamiz. Hech narsa yashirilmaydi, buni istalgan vaqtda Sozlamalarda oʻzgartirishingiz mumkin.",
      visitor: { label: "Sayohatdaman", hint: "Qisqa safarga kelganman" },
      resident: { label: "Shu yerda yashayman", hint: "Ishlayman, oʻqiyman yoki joylashganman" },
      skip: "Oʻtkazib yuborish",
      stored: "Faqat shu telefonda saqlanadi.",
    },
    settings: {
      title: "Sozlamalar",
      link: "Sozlamalar",
      imLabel: "Men…",
      hint: "«Sayohatdaman» yoki «Shu yerda yashayman» Bosh sahifaga mos «Siz uchun» kartalarini qoʻshadi. «Ikkalasi ham» hech birini koʻrsatmaydi. Boshqa hech narsa yashirilmaydi.",
      options: { visitor: "Sayohatdaman", resident: "Shu yerda yashayman", all: "Ikkalasi ham" },
    },
    forYou: {
      title: "Siz uchun",
      change: "Oʻzgartirish",
      changeLabel: "Sayohatdamisiz yoki shu yerda yashaysizmi — oʻzgartirish",
      cards: {
        exchange: { title: "Valyuta kursi", hint: "Vonni oʻz pulingizga" },
        pharmacy: { title: "Dorixona iboralari", hint: "Kerakli narsani soʻrang" },
        alerts: { title: "Favqulodda xabarlar", hint: "재난문자 ni tushuning" },
        trail: { title: "Eski Seul yoʻnalishi", hint: "Saroy, hanok va bozor" },
        weather: { title: "Ob-havo", hint: "Bugun va havo sifati" },
        recycling: { title: "Chiqindi saralash", hint: "Qaysi idish, qaysi kun" },
        slang: { title: "Kun slengi", hint: "Mahalliylardek gapiring" },
        doctor: { title: "Shifokorga borish", hint: "Qaysi klinikani tanlash" },
      },
    },
  },

  language: {
    label: "Til",
    hint: "Tugmalar, menyular va maslahatlar tili oʻzgaradi. Sleng maʼnolari, ogohlantirish tushuntirishlari va qoʻllanmalar hozircha ingliz tilida.",
  },

  common: {
    loading: "Yuklanmoqda…",
    error: "Hozir buni yuklab boʻlmadi.",
    retry: "Qayta urinish",
    updated: "Yangilandi",
    close: "Yopish",
  },

  emergencyShortcut: {
    open: "Favqulodda qoʻngʻiroqlar: 119 yoki 112",
    title: "Favqulodda holat",
    titleKo: "긴급 전화",
    ambulanceNote: "24 soat tibbiy maslahat ham beradi",
    policeNote: "Ingliz tiliga tarjima bor",
    more: "Nima deyish kerak, eng yaqin shoshilinch boʻlim",
  },

  weather: {
    title: "Ob-havo",
    titleKo: "날씨",
    tips: {
      storm: "Bugun momaqaldiroq. Momaqaldiroq eshitilsa, binoga kiring.",
      snow: "Bugun qor yoki muz. Sirpanmaydigan poyabzal kiying va yoʻlga koʻproq vaqt ajrating.",
      umbrella: "Soyabon oling.",
      cold: "Juda sovuq. Issiq palto, shapka va qoʻlqop kiying.",
      heat: "Juda issiq. Suv iching va soyada dam oling.",
      layers: "Bugun harorat keskin oʻzgaradi. Qatlam-qatlam kiying.",
      none: "Bugun alohida tayyorgarlik shart emas.",
    },
    tipLabel: "Maslahat",
    pageTitle: "Ob-havo",
    feelsLike: "Sezilishi",
    high: "Eng yuqori",
    low: "Eng past",
    rainChance: "Yomgʻir ehtimoli",
    humidity: "Namlik",
    wind: "Shamol",
    attribution: "Ob-havo maʼlumotlari: Open-Meteo.com (CC BY 4.0)",
    codes: {
      clear: "Ochiq",
      mostlyClear: "Asosan ochiq",
      partlyCloudy: "Qisman bulutli",
      overcast: "Bulutli",
      fog: "Tuman",
      drizzle: "Mayda yomgʻir",
      freezingDrizzle: "Muzlovchi mayda yomgʻir",
      rain: "Yomgʻir",
      freezingRain: "Muzlovchi yomgʻir",
      snow: "Qor",
      snowGrains: "Mayda qor donalari",
      showers: "Jala",
      snowShowers: "Qor boʻroni",
      thunderstorm: "Momaqaldiroq",
      thunderstormHail: "Doʻlli momaqaldiroq",
      unknown: "Nomaʼlum",
    },
  },

  air: {
    title: "Havo sifati",
    titleKo: "미세먼지",
    maskTip: {
      moderate: {
        title: "Changga sezgirmisiz? KF94 niqobini oʻylab koʻring",
        body: "Bolalar, keksalar va astmasi borlar buni birinchi sezadi.",
      },
      bad: {
        title: "Tashqarida KF94 niqobini taqing",
        body: "Derazalarni yopiq tuting va ochiq havoda ogʻir mashqlarni kamaytiring.",
      },
      veryBad: {
        title: "KF94 niqobini taqing va iloji boʻlsa, uyda qoling",
        body: "Derazalarni yopiq tuting va ochiq havoda mashq qilmang.",
      },
    },
    pm10: "Mayda chang (PM10)",
    pm25: "Oʻta mayda chang (PM2.5)",
    overall: "Umumiy",
    unit: "µg/m³",
    grades: {
      good: "Yaxshi",
      moderate: "Oʻrtacha",
      bad: "Yomon",
      veryBad: "Juda yomon",
    },
    advice: {
      good: "Tashqarida boʻlish uchun ajoyib kun.",
      moderate: "Koʻpchilik uchun yaxshi.",
      bad: "Tashqarida KF94 niqobini oʻylab koʻring.",
      veryBad: "KF94 niqobini taqing va tashqarida kamroq boʻling.",
    },
    note: "Koreya baholash tizimi asosidagi model hisobi. Stansiya koʻrsatkichlari farq qilishi mumkin.",
    attribution: "Havo sifati maʼlumotlari: Open-Meteo.com (CC BY 4.0)",
    goingOutside: "Tashqariga chiqyapsizmi?",
  },

  exchange: {
    title: "Valyuta kursi",
    titleKo: "환율",
    convert: {
      title: "Tez hisoblash",
      amount: "Miqdor",
      currency: "Valyuta",
      swap: "Yoʻnalishni almashtirish",
      approx: "≈",
    },
    per: "uchun",
    note: "Kunlik maʼlumot kurslari. Banklar va valyuta ayirboshlash joylarida farq qiladi.",
    attribution: "Kurslar: Frankfurter (markaziy bank maʼlumotlari)",
    asOf: "Holat:",
  },

  slang: {
    title: "Kun slengi",
    titleKo: "오늘의 신조어",
    meaning: "Maʼnosi",
    examples: "Misollar",
    tone: {
      casual: "Oddiy",
      playful: "Hazilomuz",
      rude: "Qoʻpol",
      formal: "Rasmiy",
    },
    usage: {
      safe: "Ishlatsa boʻladi",
      casual: "Faqat doʻstlar bilan",
      risky: "Xavfli: notanishlar bilan ishlatmang",
    },
  },

  slangPage: {
    titleKo: "신조어",
    intro: "Doʻstlardan, internetda va televizorda eshitadigan koreyscha sleng va uni qanchalik ishlatsa boʻlishi.",
    beta: "Beta: yozuvlar ona tili sohiblari tomonidan tekshirilmoqda.",
    hideBeta: "Bu xabarni yashirish",
    archive: {
      title: "Barcha sleng",
      searchLabel: "Sleng qidirish",
      searchPlaceholder: "Soʻz, lotin yozuvi yoki maʼnosi",
      filterLabel: "Slengni saralash",
      filters: { all: "Hammasi", saved: "Saqlangan", risky: "Xavfli" },
      noResults: "Mos sleng topilmadi.",
      noSaved: "Hali hech narsa saqlanmagan. Soʻzni shu yerda saqlash uchun yurakchani bosing.",
      listen: "Tinglash:",
      save: "Saqlash",
      examples: "Misollar",
      noVoice: "Bu qurilmada koreyscha ovoz mavjud emas.",
    },
  },

  safety: {
    intro: "Firibgarlikni aniqlashga yordam beruvchi vositalar. Bu yerga yozganingiz telefoningizdan chiqmaydi.",
    disclaimer: "Rasmiy maslahat emas. Ishonchingiz komil boʻlmasa, kompaniya yoki politsiyaga murojaat qiling.",
  },

  imageText: {
    upload: "Skrinshot yuklash",
    hint: "Yoki skrinshotni maydonga qoʻying. Rasm telefoningizda oʻqiladi, yuborilmaydi va saqlanmaydi.",
    loading: "Matn oʻquvchi tayyorlanmoqda…",
    loadingFirstTime: "Faqat birinchi marta: taxminan 8 MB yuklanadi.",
    reading: "Rasmdagi matn oʻqilmoqda…",
    done: "Rasmdagi matn maydonga qoʻyildi. Unda xatolar boʻlishi mumkin. Davom etishdan oldin tekshirib, notoʻgʻrisini tuzating.",
    errors: {
      not_image: "Bu fayl rasm emas. Skrinshot yoki surat tanlang.",
      too_big: "Rasm juda katta. Uning oʻrniga skrinshot sinab koʻring.",
      no_text: "Rasmda matn topilmadi. Aniqroq skrinshot sinang yoki xabarni yozing.",
      failed: "Rasmni oʻqib boʻlmadi. Internetni tekshiring (birinchi marta kerak) yoki xabarni yozing.",
    },
  },

  alerts: {
    title: "Ogohlantirish tarjimoni",
    intro: "Koreyscha favqulodda yoki xavfsizlik xabari (재난문자) keldimi? Nima deyilgani va nima qilish kerakligini bilish uchun uni qoʻying yoki skrinshot yuklang.",
    label: "Koreyscha ogohlantirish matnini qoʻying",
    placeholder: "Ogohlantirishni shu yerga qoʻying…",
    privacy: "Faqat telefoningizda oʻqiladi. Matn yuborilmaydi, saqlanmaydi va qayd etilmaydi.",
    translate: "Ogohlantirishni tushuntirish",
    clear: "Tozalash",
    samples: "Namuna ogohlantirishlar",
    samplesHint: "Namunani sinab koʻring (mashq uchun oʻylab topilgan, haqiqiy emas):",
    learnLink: "Favqulodda holatdan oldin ogohlantirish turlarini oʻrganing",
    disclaimer: "Rasmiy emas. Rasmiylar va asl ogohlantirishdagi koʻrsatmalarga amal qiling.",
    originalTitle: "Asl ogohlantirish (koreyscha)",
    typeTitle: "Ogohlantirish turi",
    unknownType: "Aniqlanmadi",
    alsoMentions: "Yana tilga olingan",
    category: "Toifa",
    categoryNotShown: "Qoʻyilgan matnda koʻrsatilmagan",
    sender: "Yuboruvchi",
    area: "Hudud (yozilganidek)",
    time: "Vaqt (yozilganidek)",
    notFound: "Matnda topilmadi",
    summaryTitle: "Qisqacha mazmun (ingliz tilida)",
    levelWarning: "Daraja: ogohlantirish (경보), yuqoriroq daraja.",
    levelAdvisory: "Daraja: eslatma (주의보), pastroq daraja.",
    lifted: "Ogohlantirish matnida u bekor qilingani (해제) aytilgan. Boshqa xavflar qolishi mumkin. Mahalliy koʻrsatmalarga amal qilishda davom eting.",
    drill: "Ogohlantirish matnida bu mashq (훈련) ekani aytilgan. Mashq koʻrsatmalariga amal qiling.",
    mentions: "Ogohlantirishda tilga olingan:",
    noSummary: "Bu ogohlantirish turini aniqlay olmadik.",
    actionsTitle: "Nima qilish kerak",
    actionsIntro: "Har doim avval asl ogohlantirishdagi koʻrsatmalarga amal qiling. Quyida bu turdagi ogohlantirishlar uchun umumiy rasmiy tavsiyalar (ingliz tilida).",
    actionsSource: "Manba: rasmiy xavfsizlik qoidalari",
    glossaryTitle: "Topilgan asosiy atamalar",
    linesTitle: "Satrma-satr",
    keyWords: "Asosiy soʻzlar:",
    notTranslated: "Tarjima qilinmadi",
    notUnderstoodTitle: "Bu ogohlantirishni toʻliq tushuna olmadim.",
    notUnderstoodBody:
      "Atrofingizda koʻrgan va eshitganingizga amal qiling, yoningizdagilardan soʻrang yoki 119 ga / tasdiqlangan yordam liniyasiga qoʻngʻiroq qiling.",
    call119: "119 ga qoʻngʻiroq",
    tooLong: "Faqat birinchi 2 000 belgi oʻqiladi.",
  },

  alertGuide: {
    title: "Ogohlantirish turlarini oʻrganing",
    intro: "Koreyadagi telefonlarga uch xil davlat ogohlantirish xabari (재난문자) keladi. Ularni favqulodda holatdan oldin, hozir oʻrganing.",
    categoriesTitle: "Uchta ogohlantirish toifasi",
    sound: "Ovoz",
    canTurnOff: "Oʻchirib qoʻysa boʻladimi?",
    yes: "Ha",
    no: "Yoʻq. Har bir telefon uni oladi.",
    screenTitle: "Qanday koʻrinadi",
    screenBody:
      "Ogohlantirish ekraningizda paydo boʻladi. Toifa nomini (masalan, 긴급재난문자) va [qavs] ichidagi yuboruvchini qidiring, masalan, ob-havo idorasi uchun [기상청] yoki shahar hokimligingiz. Aniq koʻrinishi telefoningizga bogʻliq.",
    englishTitle: "Ogohlantirishlarda ingliz tili",
    englishBody:
      "2024-yildan beri ovozli favqulodda va ofat ogohlantirishlarida asosiy faktlar, masalan, ofat turi va zilzila kuchi ingliz tilida ham yoziladi. Xabarning qolgan qismi koreyscha qoladi.",
    earthquakeTitle: "Zilzila ogohlantirishlari",
    earthquakeBody:
      "6.0 va undan yuqori magnituda: butun mamlakatga favqulodda ogohlantirish. 5.0–5.9 magnituda: butun mamlakatga ofat ogohlantirishi. Kichikroq zilzilalar: siz turgan joyda silkinish qanchalik kuchli kutilishiga qarab ofat ogohlantirishi yoki xavfsizlik xabari.",
    enableTitle: "Ogohlantirishlar yoqilganiga ishonch hosil qiling",
    iphoneTitle: "iPhone",
    iphoneSteps: [
      "Settings (Sozlamalar) ni oching va Notifications (Bildirishnomalar) ni bosing.",
      "Eng pastgacha tushing.",
      "Government Alerts boʻlimida ogohlantirish turlarini yoqing.",
    ],
    androidTitle: "Android (Samsung Galaxy)",
    androidSteps: [
      "Settings (Sozlamalar) ni oching va Safety and emergency ni bosing.",
      "Wireless emergency alerts ni bosing.",
      "Allow alerts ni yoqing va uning ostidagi ogohlantirish turlarini tekshiring.",
    ],
    otherAndroid:
      "Boshqa Android telefonlar: Xabarlar ilovasini oching, Sozlamalarga kiring va favqulodda ogohlantirish sozlamalarini qidiring. Menyu nomlari telefon va tilga qarab farq qiladi.",
    appTitle: "Oʻz tilingizda ogohlantirishlar",
    appBody:
      "Hukumatning Emergency Ready App ilovasini (안전디딤돌 ning chet tillardagi versiyasi) oʻrnating va ofat xabarlarini ingliz, xitoy, vyetnam, tay yoki yapon tillarida oling. U yaqin atrofdagi boshpanalarni ham koʻrsatadi.",
    helpTitle: "Favqulodda va yordam raqamlari",
    sourcesTitle: "Manbalar",
    lastChecked: "Oxirgi tekshiruv",
    back: "Xavfsizlik",
  },

  scam: {
    title: "Firibgarlik tekshiruvi",
    intro: "Shubhali SMS, KakaoTalk xabari yoki elektron xatni qoʻying yoki skrinshot yuklang.",
    placeholder: "Xabarni shu yerga qoʻying…",
    privacy: "Faqat telefoningizda tekshiriladi. Xabaringiz yuborilmaydi, saqlanmaydi va qayd etilmaydi.",
    check: "Xabarni tekshirish",
    clear: "Tozalash",
    tooLong: "Faqat birinchi 5 000 belgi tekshiriladi.",
    resultHeading: "Natija",
    verdicts: {
      likely_scam: "Ehtimol firibgarlik",
      unclear: "Aniq emas",
      no_obvious_signs: "Firibgarlikning aniq belgilari yoʻq, lekin rasmiy manba orqali tekshiring.",
    },
    advice: {
      likely_scam:
        "Hech qanday havolani bosmang, qayta qoʻngʻiroq qilmang, ilova oʻrnatmang, pul yoki kod yubormang. Xabarni oʻchiring yoki 1394 ga xabar bering.",
      unclear:
        "Biz aniqlay olmaymiz. Ehtiyot boʻling: yuboruvchi bilan oʻzingiz topgan rasmiy ilova, sayt yoki telefon raqami orqali bogʻlaning.",
      no_obvious_signs:
        "Qoidalarimiz har bir firibgarlikni ushlay olmaydi. Agar pul, kod yoki shaxsiy maʼlumot soʻralsa, kompaniyaning rasmiy ilovasi yoki raqami orqali tekshiring.",
    },
    reasons: {
      too_short: "Xabar baholash uchun juda qisqa.",
      odd_input: "Bu oddiy xabarga oʻxshamaydi, shuning uchun baholay olmaymiz.",
    },
    signalsTitle: "Topilgan ogohlantiruvchi belgilar",
    rulesNote: "Bu tekshiruvlar oddiy qoidalar boʻlib, hali ona tili sohiblari tomonidan koʻrib chiqilmoqda. Yangi firibgarlik usullari ulardan oʻtib ketishi mumkin.",
  },

  helpLines: {
    title: "Yordam olish",
    call: "Qoʻngʻiroq",
    lines: {
      emergency: {
        name: "Tez yordam va oʻt oʻchirish",
        detail: "Favqulodda holatlar. Shuningdek, 24/7 tibbiy maslahat beradi va qaysi kasalxona va dorixonalar ochiqligini aytadi.",
      },
      mentalHealthCrisis: {
        name: "Oʻz joniga qasd qilishning oldini olish va ruhiy salomatlik liniyasi",
        detail: "Qiynalayotgan boʻlsangiz yoki kimdir uchun xavotirda boʻlsangiz, 24/7 maslahat. Asosan koreys tilida.",
      },
      police: {
        name: "Politsiya",
        detail: "Favqulodda holatlar yoki pul yuborib qoʻygan boʻlsangiz yoxud xavf ostida boʻlsangiz. Ingliz tiliga tarjima bor.",
      },
      scamReport: {
        name: "Telefon firibgarligi va smishing haqida xabar berish",
        detail: "Politsiyaning 24/7 markazi: firibgar qoʻngʻiroq va xabarlar haqida xabar bering, toʻlovlarni toʻxtatishda yordam oling.",
      },
      fss: {
        name: "Moliyaviy nazorat xizmati (FSS)",
        detail: "Moliyaviy firibgarlik va noqonuniy kreditlar boʻyicha maslahat va arizalar. Qoʻngʻiroq pullik.",
      },
      kisa: {
        name: "KISA (spam va xakerlik)",
        detail: "Spam xabarlar, smishing havolalari va xakerlik haqida xabar bering.",
      },
      travelHotline: {
        name: "1330 Koreya sayohat yordam liniyasi",
        detail: "Telefon yoki xabar orqali ingliz, xitoy, yapon va boshqa tillarda tarjima. Koreya turizm tashkiloti tomonidan boshqariladi.",
      },
      kdca: {
        name: "Kasalliklarni nazorat qilish liniyasi (KDCA)",
        detail: "Yuqumli kasalliklar boʻyicha savollar. 24 soat, bepul, koʻp tillarda.",
      },
      immigration: {
        name: "Immigratsiya aloqa markazi",
        detail: "Viza yoki immigratsiya xabari haqiqiyligini tekshiring. Koʻp tillarda.",
      },
    },
  },

  local: {
    intro: "Yaqin atrofdan yordam toping.",
    hospital: {
      title: "Kasalxona va dorixona yordamchisi",
      question: "Sizga nima kerak?",
      options: {
        emergency: { label: "Favqulodda holat", hint: "Hozir 119 ga qoʻngʻiroq qiling" },
        doctor: { label: "Shifokorga borish", hint: "Favqulodda emas" },
        pharmacy: { label: "Dorixona topish", hint: "Dorilar va retseptlar" },
        dental: { label: "Stomatologiya", hint: "Tish ogʻrigʻi, tozalash" },
        mentalHealth: { label: "Ruhiy salomatlik", hint: "Stress, xavotir, kayfiyat tushishi" },
      },
    },
    disclaimer: "Tibbiy maslahat emas. Favqulodda holatda 119 ga qoʻngʻiroq qiling.",
    back: "Orqaga",
    emergency: {
      title: "Favqulodda holat",
      callTitle: "119 ga qoʻngʻiroq qiling",
      callBody: "Tez yordam yoki yongʻin uchun. 24 soat ishlaydi.",
      callButton: "119 ga qoʻngʻiroq",
      tellThem: "Ularga ayting:",
      tellList: [
        "Qayerdasiz (manzil yoki yaqin bino yoxud bekat)",
        "Nima boʻldi",
        "Telefon raqamingiz",
      ],
      notSureTitle: "Favqulodda holat ekaniga ishonchingiz komil emasmi?",
      notSureBody:
        "119 telefon orqali tibbiy maslahat ham beradi va kechasi hamda bayram kunlari qaysi kasalxona va dorixonalar ochiqligini aytadi.",
      egenLink: "Ochiq shoshilinch boʻlim va dorixonalarni topish (E-Gen, koreyscha)",
      findEr: "Yaqin shoshilinch boʻlimni topish",
    },
    doctor: {
      title: "Shifokorga borish",
      pickerTitle: "Nima bezovta qilyapti?",
      pickerHint: "Eng yaqin variantni tanlang. Bu faqat klinika turini taklif qiladi, tashxis emas.",
      clinicTitle: "Boriladigan klinika",
      also: "Yoki:",
      phrasesTitle: "Klinikada buni ayting",
      bringTitle: "Nima olib borish kerak",
      bringList: [
        "ARC (외국인등록증)",
        "Pasport",
        "Tibbiy sugʻurta kartasi, agar boʻlsa",
        "Qabul qiladigan dorilaringiz roʻyxati",
      ],
      bringNote: "Belgilar saqlanmaydi.",
    },
    pharmacy: {
      title: "Dorixona topish",
      phrasesTitle: "Dorixona iboralari",
      afterHours: "Kechasi yoki bayram kunlari ochiq dorixonani topish uchun 119 ga qoʻngʻiroq qiling yoki E-Gen’ni tekshiring.",
      egenLink: "E-Gen’ni ochish (koreyscha)",
    },
    dental: {
      title: "Stomatologiya",
      phrasesTitle: "Stomatologda buni ayting",
    },
    mentalHealth: {
      title: "Ruhiy salomatlik",
      crisisTitle: "Hozir gaplashish kerakmi?",
      centerTitle: "Yoki davlat markaziga murojaat qiling",
      crisisBody: "Agar oʻzingizga zarar yetkazishingiz mumkin boʻlsa yoki hozir xavf ostida boʻlsangiz, 119 ga qoʻngʻiroq qiling.",
      phrasesTitle: "Foydali iboralar",
      reassurance: "Stress, uyqu yoki kayfiyat muammolari bilan shifokorga borish odatiy hol, yordam soʻrash mutlaqo normal.",
    },
    clinic: {
      findNearby: "Yaqin atrofda topish:",
      locating: "Joylashuvingiz aniqlanmoqda…",
      openIn: "Qayerda ochish:",
      apps: { naver: "Naver Map", kakao: "Kakao Map", google: "Google Maps" },
      locationNote:
        "Joylashuvingiz telefoningizda qoladi. U faqat Google Maps havolasiga qoʻshiladi. Naver va Kakao oʻz joylashuv xizmatidan foydalanadi.",
      locationDenied: "Joylashuv oʻchirilgan. Xarita ilovasi siz deb hisoblagan joy atrofidan qidiradi.",
    },
    recycling: {
      title: "Chiqindi va saralash qoʻllanmasi",
      banner: "Qoidalar tumanga qarab farq qiladi. Binongizdagi eʼlonlar taxtasini yoki tuman idorasini tekshiring.",
      chooseDistrict: "Tumaningizni tanlang",
      onlyThese: "Hozircha faqat shu tumanlar uchun qoʻllanma bor.",
      searchLabel: "Buyum qidirish",
      searchPlaceholder: "m-n. pitsa qutisi, batareya, 페트병",
      browse: "Koʻrib chiqish",
      all: "Hammasi",
      noResults: "Bu buyum uchun mos narsa topilmadi.",
      whenTitle: "Chiqindini qachon chiqarish kerak",
      appliesTo: "Kimga tegishli:",
      time: "Vaqt:",
      place: "Qayerga:",
      binLabel: "Qayerga tashlash",
      prepLabel: "Tashlashdan oldin",
      dayLabel: "Olib ketish kunlari",
      noDay: "Tuman bu uchun kun eʼlon qilmagan.",
      inferred: "Nomi bilan koʻrsatilmagan. Tumanning umumiy qoidasiga asoslangan.",
      bookOnline: "Olib ketishni onlayn band qilish (koreyscha)",
      notSureTitle: "Ishonchingiz komil emasmi?",
      notSureBody:
        "Taxmin qilmang. Bino boshqaruvchisidan (관리실) soʻrang, binongizning chiqindi joyi yonidagi eʼlonlar taxtasini tekshiring yoki tumanning qayta ishlash idorasiga qoʻngʻiroq qiling.",
      call: "Qoʻngʻiroq",
      sourcesTitle: "Manba",
      lastChecked: "Oxirgi tekshiruv",
      published: "eʼlon qilingan",
      noDate: "sana koʻrsatilmagan",
      reviewNote: "Tumanning koreyscha sahifalaridan tarjima qilingan. Hali ona tili sohibi tomonidan tekshirilmagan.",
      backToItems: "Barcha buyumlar",
      days: { mon: "Du", tue: "Se", wed: "Ch", thu: "Pa", fri: "Ju", sat: "Sh", sun: "Ya" },
    },
    phrases: {
      copy: "Nusxalash",
      copied: "Nusxalandi",
      showLarge: "Koʻrsatish",
      close: "Yopish",
      showToStaff: "Buni xodimga koʻrsating",
      screenOn: "Bu ochiq turganda ekran yonib turadi.",
      screenMayDim: "Ekraningiz xiralashishi mumkin. Yonib turishi uchun vaqti-vaqti bilan unga teging.",
      blankHint: "___ ni koʻrsating yoki soʻzni ayting.",
      reviewNote: "Iboralar hali ona tili sohibi tomonidan tekshirilmagan.",
    },
  },

  trails: {
    title: "Yoʻnalishlar",
    intro: "Koreya boʻylab qisqa mustaqil sayohatlar: K-madaniyat joylari, mahalliy bozorlar va taomlar.",
    trailsTitle: "Yoʻnalishlar",
    stopsCount: "bekat",
    tags: {
      kpop: "K-pop",
      kdrama: "K-drama",
      film: "Kino",
      food: "Taom",
      nature: "Tabiat",
      culture: "Madaniyat",
    },
    banner: "Joylar yopilishi yoki oʻzgarishi mumkin. Borishdan oldin ish vaqtini tekshiring.",
    reportProblem: "Muammo haqida xabar berish",
    reportSubject: "Yoʻnalishdagi muammo",
    trail: {
      time: "Vaqt",
      difficulty: "Qiyinligi",
      season: "Eng yaxshi fasl",
      gettingThere: "Qanday borish mumkin",
      respectTitle: "Mahalliy aholini hurmat qiling",
      stopsTitle: "Bekatlar",
      progress: "borildi",
      progressNote: "Borilgan joylar belgisi faqat shu telefonda saqlanadi.",
      relatedTo: "Bogʻliq",
      hours: "Ish vaqti",
      cost: "Narxi",
      notPublished: "Eʼlon qilinmagan. Borishdan oldin tekshiring.",
      map: "Xarita",
      copyKorean: "Koreyscha nomni nusxalash",
      copied: "Nusxalandi",
      markVisited: "Borildi",
      source: "Manba",
      lastChecked: "Oxirgi tekshiruv",
      needsReview: "Hali tekshirilmagan.",
    },
  },

  privacy: {
    title: "Maxfiylik",
    link: "Maxfiylik: telefoningizda nima qoladi",
    updated: "Oxirgi yangilanish: 2026-10-03",
    intro: "KReady’da akkauntlar, reklama, kuzatuv yoki analitika yoʻq. Maʼlumotlaringiz bilan aynan nima sodir boʻlishi quyida.",
    sections: [
      {
        title: "Siz tekshiradigan xabarlar va skrinshotlar",
        body: [
          "Firibgarlik tekshiruvi va ogohlantirish tarjimoni toʻliq brauzeringizda ishlaydi.",
          "Qoʻygan matningiz hech qachon serverimizga yuborilmaydi, saqlanmaydi va qayd etilmaydi. Sahifadan chiqqaningizda u yoʻqoladi.",
          "Yuklagan yoki qoʻygan skrinshotlaringiz telefoningizda oʻqiladi. Rasm hech qachon yuklanmaydi, saqlanmaydi va qayd etilmaydi.",
          "Skrinshotni birinchi marta oʻqiganingizda ilova saytimizdan matn oʻquvchini (taxminan 8 MB) yuklaydi. Keyingi safar tezroq boʻlishi uchun brauzeringiz til fayllari nusxasini saqlaydi. Ularda sizning maʼlumotlaringiz yoʻq.",
          "Bu matn maydonlarida imlo tekshiruvi va avtomatik toʻldirish oʻchirilgan, shunda matn klaviatura yoki imlo xizmatlariga ulashilmaydi.",
          "Sleng sahifasidagi karnay tugmasi brauzeringizning ichki nutq funksiyasidan foydalanadi. U telefoningizdagi ovozni afzal koʻradi, lekin baʼzi qurilmalarda brauzer onlayn ovozdan foydalanishi mumkin. Faqat sleng soʻzi oʻqiladi, siz yozgan narsa hech qachon oʻqilmaydi.",
        ],
      },
      {
        title: "Faqat telefoningizda saqlanadi",
        body: [
          "Tanlagan tumaningiz va borilgan deb belgilagan bekatlaringiz shu qurilmadagi brauzer xotirasida saqlanadi.",
          "«Sayohatdaman» yoki «Shu yerda yashayman» tanlovingiz, shunda Bosh sahifa kerakli kartalarni birinchi koʻrsatadi. Istalgan vaqtda Sozlamalarda oʻzgartiring.",
          "Yurakcha bilan saqlagan sleng soʻzlaringiz.",
          "Til tanlovingiz kichik cookie faylida. Sahifalar sizning tilingizda yuklanishi uchun brauzeringiz uni har bir sahifa soʻrovi bilan yuboradi.",
          "Boshqa hech narsa saqlanmaydi. Salomatlik tanlovlari, roʻyxat belgilari va qidiruv soʻzlari faqat xotirada turadi va sahifadan chiqqaningizda oʻchadi.",
          "Saqlangan maʼlumotlarni oʻchirish uchun brauzer sozlamalarida shu sayt maʼlumotlarini tozalang.",
        ],
      },
      {
        title: "Joylashuvingiz",
        body: [
          "Ilova joylashuvingizni faqat «Yaqin atrofda topish» ni bosganingizda soʻraydi.",
          "U brauzeringizda qoladi. U taxminan 100 m gacha yaxlitlanadi va faqat Google Maps havolasini ochsangiz, unga qoʻshiladi. Naver va Kakao havolalarida u yoʻq.",
          "Joylashuvingiz hech qachon serverimizga yuborilmaydi va saqlanmaydi.",
        ],
      },
      {
        title: "Ob-havo, havo sifati va valyuta kurslari",
        body: [
          "Serverimiz ularni Open-Meteo va Frankfurter’dan sizning joylashuvingiz emas, siz tanlagan tumanning markaziy nuqtasi boʻyicha oladi.",
          "Natijalar keshlanadi va bir xil tumanni tanlagan hamma uchun umumiy boʻladi.",
        ],
      },
      {
        title: "Boshqa xizmatlarga havolalar",
        body: [
          "Ushbu ilovadan ochadigan xarita ilovalari, telefon qoʻngʻiroqlari va davlat yoki turizm saytlari boshqalar tomonidan boshqariladi va ularning oʻz maxfiylik siyosati amal qiladi.",
        ],
      },
      {
        title: "Texnik jurnallar",
        body: [
          "Har qanday sayt kabi, hosting provayderimiz xavfsizlik va ishonchlilik uchun standart soʻrov jurnallarini (masalan, IP manzil va soʻralgan sahifa) saqlashi mumkin.",
          "Bizning kodimiz faqat ob-havo va valyuta kursi xizmatlaridagi xatolarni qayd etadi. U siz yozgan yoki qoʻygan narsani hech qachon qayd etmaydi.",
        ],
      },
      {
        title: "Oflayn foydalanish",
        body: [
          "Ilova oflayn ishlashi uchun oʻz sahifalari va fayllarini qurilmangizda saqlaydi. Ularda shaxsiy maʼlumot yoʻq.",
        ],
      },
    ],
    contact: "Maxfiylik boʻyicha savollar bormi?",
  },

  licenses: {
    title: "Ochiq kodli litsenziyalar",
    link: "Ochiq kodli litsenziyalar",
    intro:
      "KReady bepul va ochiq kodli dasturlar hamda Pretendard shrifti asosida yaratilgan. Quyida u foydalanadigan paketlar, ularning mualliflik huquqi va litsenziyalari.",
    showText: "Litsenziya matnini koʻrsatish",
    packages: "paket",
  },

  offline: {
    title: "Siz oflaynsiz",
    body: "Internet aloqasini tekshirib, qayta urinib koʻring. Avval ochgan sahifalaringiz ishlashi mumkin.",
    retry: "Qayta urinish",
  },
};
