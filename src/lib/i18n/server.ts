import "server-only";
import { cookies, headers } from "next/headers";
import { cache } from "react";
import { en, type Strings } from "@/lib/strings";
import { bn } from "./bn";
import { isLocale, LOCALE_COOKIE, matchLocale, type Locale } from "./locales";
import { uz } from "./uz";
import { vi } from "./vi";
import { zh } from "./zh";

const DICTIONARIES: Record<Locale, Strings> = { en, uz, vi, bn, zh };

/** The Settings choice if there is one, else the phone's language, else English. Once per request. */
export const getLocale = cache(async (): Promise<Locale> => {
  const saved = (await cookies()).get(LOCALE_COOKIE)?.value;
  if (isLocale(saved)) return saved;
  return matchLocale((await headers()).get("accept-language"));
});

/** UI strings for this request, for Server Components and generateMetadata. */
export async function getT(): Promise<Strings> {
  return DICTIONARIES[await getLocale()];
}
