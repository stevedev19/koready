"use client";

import { useSyncExternalStore } from "react";
import { kstDayNumber } from "@/lib/slang";

const noopSubscribe = () => () => {};

/** Today's KST day number on the client; null during server render. */
export function useKstDay(): number | null {
  return useSyncExternalStore(noopSubscribe, () => kstDayNumber(), () => null);
}
