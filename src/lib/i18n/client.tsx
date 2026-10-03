"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Strings } from "@/lib/strings";
import { LOCALE_COOKIE, type Locale } from "./locales";

type Value = { locale: Locale; strings: Strings };

const StringsContext = createContext<Value | null>(null);

/** Set once in the root layout with the request's language; only that dictionary reaches the browser. */
export function StringsProvider({ locale, strings, children }: Value & { children: ReactNode }) {
  return <StringsContext.Provider value={{ locale, strings }}>{children}</StringsContext.Provider>;
}

function useValue(): Value {
  const value = useContext(StringsContext);
  if (!value) throw new Error("useT must be used inside <StringsProvider>");
  return value;
}

/** UI strings in the user's language, for Client Components. */
export function useT(): Strings {
  return useValue().strings;
}

export function useLocale(): Locale {
  return useValue().locale;
}

/** Saves the choice for a year. Call router.refresh() afterwards to re-render in the new language. */
export function saveLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}
