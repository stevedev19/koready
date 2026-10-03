"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { Audience } from "@/lib/audience";

export type { Audience };

// Saved on this device only (localStorage). Never sent anywhere, no tracking.
const STORAGE_KEY = "ksk.audience";
const CHANGE_EVENT = "ksk:audience-change";
const VALID: readonly string[] = ["all", "visitor", "resident"];

/** "unset" = never chosen (show the welcome screen); "pending" = server render, unknown yet. */
export type AudienceState = Audience | "unset" | "pending";

function read(): AudienceState {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v && VALID.includes(v) ? (v as Audience) : "unset";
  } catch {
    return "all"; // storage blocked: don't keep asking
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function useAudience(): [AudienceState, (next: Audience) => void] {
  const state = useSyncExternalStore(subscribe, read, () => "pending" as const);
  const set = useCallback((next: Audience) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore; the choice just won't persist
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);
  return [state, set];
}
