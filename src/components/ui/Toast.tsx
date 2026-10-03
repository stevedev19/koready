"use client";

import { CircleCheck } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

/** Short-lived message ("Copied"). Returns the current message and a function to show one. */
export function useToast(duration = 2000): [string | null, (message: string) => void] {
  const [message, setMessage] = useState<string | null>(null);
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => setMessage(null), duration);
    return () => clearTimeout(timer);
  }, [message, duration]);
  const show = useCallback((m: string) => setMessage(m), []);
  return [message, show];
}

/** Floats above the tab bar. The live region is always mounted so screen readers announce changes. */
export function Toast({ message }: { message: string | null }) {
  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-[calc(6.5rem+env(safe-area-inset-bottom))] z-40 flex justify-center px-4"
    >
      {message && (
        <p className="animate-[fade-in_150ms_ease-out] inline-flex items-center gap-2.5 rounded-full bg-foreground px-[1.125rem] py-3 font-bold text-card shadow-float">
          <CircleCheck aria-hidden="true" className="size-5" />
          {message}
        </p>
      )}
    </div>
  );
}
