"use client";

import { Banknote, CloudSun, Map, Megaphone, MessagesSquare, Pill, Recycle, Stethoscope, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { useAudience } from "@/hooks/useAudience";
import { FOR_YOU, FOR_YOU_HREF, type ForYouCard } from "@/lib/forYou";
import { useT } from "@/lib/i18n/client";
import { Pressable } from "./pressable";
import { IconTile, type Tone } from "./ui/IconTile";
import { Card } from "./ui/card";

const LOOK: Record<ForYouCard, { icon: LucideIcon; tone: Tone }> = {
  exchange: { icon: Banknote, tone: "green" },
  pharmacy: { icon: Pill, tone: "teal" },
  alerts: { icon: Megaphone, tone: "amber" },
  trail: { icon: Map, tone: "violet" },
  weather: { icon: CloudSun, tone: "blue" },
  recycling: { icon: Recycle, tone: "amber" },
  slang: { icon: MessagesSquare, tone: "violet" },
  doctor: { icon: Stethoscope, tone: "blue" },
};

/** "For you": 4 featured cards for Visiting or Living here. Not shown for Skip / Mix of both. */
export function ForYou() {
  const t = useT();
  const s = t.audience.forYou;
  const [audience] = useAudience();
  if (audience !== "visitor" && audience !== "resident") return null;
  const cards = FOR_YOU[audience];

  return (
    <section aria-labelledby="for-you" className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h2 id="for-you" className="text-[1.75rem] leading-tight font-extrabold tracking-[-0.025em]">{s.title}</h2>
        <Link href="/settings" aria-label={s.changeLabel} className="inline-flex min-h-12 items-center px-2 font-bold text-primary">
          {s.change}
        </Link>
      </div>
      <ul className="grid grid-cols-2 gap-3">
        {cards.map((id) => (
          <li key={id}>
            <Card asChild className="h-full p-4">
              <Pressable href={FOR_YOU_HREF[id]} className="flex-col items-start gap-2.5">
                <IconTile icon={LOOK[id].icon} tone={LOOK[id].tone} />
                <span>
                  <span className="block leading-snug font-extrabold">{s.cards[id].title}</span>
                  <span className="mt-0.5 block text-[0.9375rem] leading-snug text-muted-foreground">{s.cards[id].hint}</span>
                </span>
              </Pressable>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
