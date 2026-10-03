import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge our custom radius and type sizes so they override cleanly.
const twMerge = extendTailwindMerge({
  extend: {
    theme: { radius: ["chip", "btn", "card", "sheet"] },
  },
});

/** Merge class names; later Tailwind classes win over earlier conflicting ones. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
