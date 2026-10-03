import type { LucideIcon } from "lucide-react";

export type Tone = "blue" | "jade" | "green" | "teal" | "amber" | "red" | "violet" | "neutral";

const TONES: Record<Tone, string> = {
  blue: "bg-accent text-primary",
  jade: "bg-jade-soft text-jade-icon",
  green: "bg-success-soft text-success",
  teal: "bg-info-soft text-info",
  amber: "bg-warning-soft text-warning",
  red: "bg-destructive-soft text-destructive",
  violet: "bg-tile-violet text-ink-violet",
  neutral: "bg-surface-2 text-foreground",
};

/** Rounded tinted square behind an icon. Decorative: meaning comes from the label next to it. */
export function IconTile({ icon: Icon, tone = "blue", size = "md" }: { icon: LucideIcon; tone?: Tone; size?: "md" | "lg" }) {
  const box = size === "lg" ? "size-14 rounded-[1.125rem]" : "size-11 rounded-[0.875rem]";
  return (
    <span aria-hidden="true" className={`grid shrink-0 place-items-center ${box} ${TONES[tone]}`}>
      <Icon className={size === "lg" ? "size-7" : "size-[1.375rem]"} strokeWidth={2} />
    </span>
  );
}
