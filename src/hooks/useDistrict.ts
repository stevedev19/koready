"use client";

import { useCallback, useSyncExternalStore } from "react";
import { DEFAULT_DISTRICT_ID, getDistrict, type District } from "@/lib/districts";

const STORAGE_KEY = "ksk.district";
const CHANGE_EVENT = "ksk:district-change";

function readStored(): string {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? DEFAULT_DISTRICT_ID;
  } catch {
    return DEFAULT_DISTRICT_ID; // storage blocked (private mode etc.)
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

/** Selected district, remembered on this device only. */
export function useDistrict(): [District, (id: string) => void] {
  const id = useSyncExternalStore(subscribe, readStored, () => DEFAULT_DISTRICT_ID);
  const district = getDistrict(id) ?? getDistrict(DEFAULT_DISTRICT_ID)!;

  const setDistrict = useCallback((next: string) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore; selection just won't persist
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  return [district, setDistrict];
}
