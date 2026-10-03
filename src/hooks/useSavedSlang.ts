"use client";

import { useCallback, useSyncExternalStore } from "react";

// Saved slang ids, kept in this browser only (localStorage). Never sent anywhere.
const STORAGE_KEY = "ksk.slang.saved";
const CHANGE_EVENT = "ksk:slang-saved-change";
const EMPTY = "[]";

function readRaw(): string {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? EMPTY;
  } catch {
    return EMPTY;
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

function parse(raw: string): string[] {
  try {
    const value: unknown = JSON.parse(raw);
    return Array.isArray(value) ? value.filter((v): v is string => typeof v === "string") : [];
  } catch {
    return [];
  }
}

export function useSavedSlang(): [Set<string>, (id: string) => void] {
  const raw = useSyncExternalStore(subscribe, readRaw, () => EMPTY);
  const saved = new Set(parse(raw));
  const toggle = useCallback((id: string) => {
    const next = new Set(parse(readRaw()));
    if (next.has(id)) next.delete(id);
    else next.add(id);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
    } catch {
      // ignore; the heart just won't persist
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);
  return [saved, toggle];
}
