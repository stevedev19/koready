"use client";

import { House, Lock, Luggage } from "lucide-react";
import { useAudience } from "@/hooks/useAudience";
import type { Audience } from "@/lib/audience";
import { t } from "@/lib/strings";
import { Pressable } from "./pressable";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { IconTile } from "./ui/IconTile";

const s = t.audience.welcome;

/**
 * First launch, on Home only: one skippable question. Never shown on Safety or Health
 * pages, so an emergency link opened on day one isn't blocked. Closing it counts as Skip.
 */
export function AudienceWelcome() {
  const [audience, setAudience] = useAudience();
  const choose = (a: Audience) => setAudience(a);

  return (
    <Dialog open={audience === "unset"} onOpenChange={(open) => !open && choose("all")}>
      <DialogContent aria-describedby="audience-welcome-body" className="space-y-4">
        <DialogTitle className="text-2xl leading-tight">{s.title}</DialogTitle>
        <p id="audience-welcome-body" className="text-muted-foreground">{s.body}</p>
        <div className="grid gap-2.5">
          {(
            [
              ["visitor", Luggage, s.visitor],
              ["resident", House, s.resident],
            ] as const
          ).map(([value, icon, copy]) => (
            <Pressable
              key={value}
              onClick={() => choose(value)}
              className="min-h-[4.5rem] gap-3.5 rounded-2xl px-4 py-3 ring-[1.5px] ring-input ring-inset"
            >
              <IconTile icon={icon} tone={value === "visitor" ? "teal" : "blue"} />
              <span>
                <span className="block text-lg font-extrabold">{copy.label}</span>
                <span className="block text-[0.9375rem] text-muted-foreground">{copy.hint}</span>
              </span>
            </Pressable>
          ))}
        </div>
        <Button variant="link" onClick={() => choose("all")} className="w-full">
          {s.skip}
        </Button>
        <p className="flex items-center justify-center gap-1.5 text-[0.9375rem] text-muted-foreground">
          <Lock aria-hidden="true" className="size-4" />
          {s.stored}
        </p>
      </DialogContent>
    </Dialog>
  );
}
