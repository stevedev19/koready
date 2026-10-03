"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { saveLocale, useLocale, useT } from "@/lib/i18n/client";
import { HTML_LANG, isLocale, LOCALE_NAMES, LOCALES } from "@/lib/i18n/locales";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

export function LanguageSwitch() {
  const t = useT();
  const locale = useLocale();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  return (
    <div className="space-y-2.5">
      <p id="language-label" className="font-bold">{t.language.label}</p>
      <ToggleGroup
        type="single"
        aria-labelledby="language-label"
        aria-busy={pending}
        value={locale}
        onValueChange={(v) => {
          if (!isLocale(v) || v === locale) return;
          saveLocale(v);
          // Server components render the text, so fetch the page again in the new language.
          startTransition(() => router.refresh());
        }}
      >
        {LOCALES.map((l) => (
          <ToggleGroupItem key={l} value={l} lang={HTML_LANG[l]}>
            {LOCALE_NAMES[l]}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <p className="text-[0.9375rem] text-muted-foreground">{t.language.hint}</p>
    </div>
  );
}
