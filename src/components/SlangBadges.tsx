import { Briefcase, CircleCheck, MessageCircle, Smile, TriangleAlert, Users, Zap, type LucideIcon } from "lucide-react";
import type { SlangEntry, SlangTone, SlangUsage } from "@/lib/slang";
import { useT } from "@/lib/i18n/client";
import { Badge, type BadgeVariant } from "./ui/badge";

// Icon + text on every badge, so meaning never depends on color alone.
const TONE_ICON: Record<SlangTone, LucideIcon> = { casual: MessageCircle, playful: Smile, rude: Zap, formal: Briefcase };
const USAGE: Record<SlangUsage, { icon: LucideIcon; variant: BadgeVariant }> = {
  safe: { icon: CircleCheck, variant: "success" },
  casual: { icon: Users, variant: "warning" },
  risky: { icon: TriangleAlert, variant: "destructive" },
};

/** Tone and usage-level badges for a slang entry. */
export function SlangBadges({ entry }: { entry: Pick<SlangEntry, "tone" | "usage_level"> }) {
  const t = useT();
  const ToneIcon = TONE_ICON[entry.tone];
  const { icon: UsageIcon, variant } = USAGE[entry.usage_level];
  return (
    <span className="flex flex-wrap gap-1.5">
      {/* Thin outline keeps the neutral badge visible on a pressed (surface-3) card. */}
      <Badge className="gap-1 ring-1 ring-border ring-inset">
        <ToneIcon aria-hidden="true" className="size-3.5" />
        {t.slang.tone[entry.tone]}
      </Badge>
      <Badge variant={variant} className="gap-1">
        <UsageIcon aria-hidden="true" className="size-3.5" />
        {t.slang.usage[entry.usage_level]}
      </Badge>
    </span>
  );
}
