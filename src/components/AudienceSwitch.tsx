"use client";

import { useAudience } from "@/hooks/useAudience";
import type { Audience } from "@/lib/audience";
import { useT } from "@/lib/i18n/client";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

const OPTIONS: Audience[] = ["visitor", "resident", "all"];

export function AudienceSwitch() {
  const t = useT();
  const s = t.audience.settings;
  const [audience, setAudience] = useAudience();
  const value = audience === "visitor" || audience === "resident" ? audience : "all";
  return (
    <div className="space-y-2.5">
      <p id="audience-label" className="font-bold">{s.imLabel}</p>
      <ToggleGroup
        type="single"
        aria-labelledby="audience-label"
        value={value}
        onValueChange={(v) => v && setAudience(v as Audience)}
      >
        {OPTIONS.map((o) => (
          <ToggleGroupItem key={o} value={o}>
            {s.options[o]}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <p className="text-[0.9375rem] text-muted-foreground">{s.hint}</p>
    </div>
  );
}
