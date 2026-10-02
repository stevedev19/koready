"use client";

import { useCallback, useSyncExternalStore } from "react";

// Visited stops are kept in this browser only (localStorage). Never sent anywhere.
const CHANGE_EVENT = "ksk:visited-change";
const keyFor = (trailId: string) => `ksk.visited.${trailId}`;
const EMPTY = "[]";

function readRaw(trailId: string): string {
  try {
    return localStorage.getItem(keyFor(trailId)) ?? EMPTY;
  } catch {
    return EMPTY; // storage blocked (private mode etc.)
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

/** Stop ids marked visited on this trail, plus a toggle. */
export function useVisited(trailId: string): [Set<string>, (stopId: string) => void] {
  // Subscribe to the raw string so the snapshot is stable between renders.
  const raw = useSyncExternalStore(subscribe, () => readRaw(trailId), () => EMPTY);
  const visited = new Set(parse(raw));

  const toggle = useCallback(
    (stopId: string) => {
      const next = new Set(parse(readRaw(trailId)));
      if (next.has(stopId)) next.delete(stopId);
      else next.add(stopId);
      try {
        localStorage.setItem(keyFor(trailId), JSON.stringify([...next]));
      } catch {
        // ignore; ticks just won't persist
      }
      window.dispatchEvent(new Event(CHANGE_EVENT));
    },
    [trailId],
  );

  return [visited, toggle];
}
