// Supported UI languages. Shared by server and client; no dictionaries here so the
// client bundle never ships every language.

export const LOCALES = ["en", "uz", "vi", "bn", "zh"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Cookie holding the user's choice. Not set until they pick a language in Settings. */
export const LOCALE_COOKIE = "lang";

/** Each language's name in its own script, so people can find theirs. */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  uz: "Oʻzbekcha",
  vi: "Tiếng Việt",
  bn: "বাংলা",
  zh: "简体中文",
};

/** "Language" in every supported language, so the Settings row on Home is findable in any of them. */
export const LANGUAGE_WORD: Record<Locale, string> = {
  en: "Language",
  uz: "Til",
  vi: "Ngôn ngữ",
  bn: "ভাষা",
  zh: "语言",
};

/** Value for <html lang>, so browsers pick the right fonts and screen readers the right voice. */
export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  uz: "uz-Latn",
  vi: "vi",
  bn: "bn",
  zh: "zh-Hans",
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/** Map one language tag to a supported locale, or null. */
function fromTag(tag: string): Locale | null {
  const [lang, ...rest] = tag.toLowerCase().split("-");
  if (lang === "zh") {
    // Only Simplified Chinese for now; Traditional readers fall through to their next choice.
    const traditional = rest.some((p) => p === "hant" || p === "tw" || p === "hk" || p === "mo");
    return traditional ? null : "zh";
  }
  if (lang === "uz") return rest.includes("cyrl") || rest.includes("arab") ? null : "uz";
  return isLocale(lang) ? lang : null;
}

/** Best supported locale from an Accept-Language header (e.g. "uz-UZ,uz;q=0.9,ru;q=0.8"). */
export function matchLocale(acceptLanguage: string | null | undefined): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;
  const ranked = acceptLanguage
    .split(",")
    .map((part, i) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      return { tag: tag.trim(), q: q ? Number(q.slice(2)) || 0 : 1, i };
    })
    .filter((x) => x.tag && x.q > 0)
    .sort((a, b) => b.q - a.q || a.i - b.i);
  for (const { tag } of ranked) {
    const locale = fromTag(tag);
    if (locale) return locale;
  }
  return DEFAULT_LOCALE;
}
