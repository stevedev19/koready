"use client";

import { FlaskConical, X } from "lucide-react";
import { useSyncExternalStore } from "react";
import { t } from "@/lib/strings";

// Hidden for this browser session only (sessionStorage); it returns on the next visit.
const KEY = "ksk.slang.betaHidden";
const EVENT = "ksk:slang-beta";

const read = () => {
  try {
    return sessionStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
};
const subscribe = (cb: () => void) => {
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
};

/** One notice for the whole Slang page instead of a review line on every entry. */
export function SlangBeta() {
  const hidden = useSyncExternalStore(subscribe, read, () => false);
  if (hidden) return null;
  return (
    <div role="note" className="flex items-center gap-2.5 rounded-card bg-info-soft py-1.5 pr-1.5 pl-4 text-info">
      <FlaskConical aria-hidden="true" className="size-[1.375rem] shrink-0" />
      <p className="flex-1 py-2 font-semibold">{t.slangPage.beta}</p>
      <button
        type="button"
        aria-label={t.slangPage.hideBeta}
        onClick={() => {
          try {
            sessionStorage.setItem(KEY, "1");
          } catch {
            // ignore; it just hides until reload
          }
          window.dispatchEvent(new Event(EVENT));
        }}
        className="grid size-12 shrink-0 place-items-center rounded-full [-webkit-tap-highlight-color:transparent] hover:bg-black/5 active:bg-black/10 dark:hover:bg-white/10 dark:active:bg-white/15"
      >
        <X aria-hidden="true" className="size-5" />
      </button>
    </div>
  );
}
