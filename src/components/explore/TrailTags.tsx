import { Clapperboard, Landmark, Leaf, Music, Tv, Utensils, type LucideIcon } from "lucide-react";
import { t } from "@/lib/strings";
import type { TrailTag } from "@/lib/trails";
import { Tag } from "../ui/Chips";

// Decorative colors; the tag text carries the meaning.
const TAG: Record<TrailTag, { icon: LucideIcon; style: string }> = {
  kpop: { icon: Music, style: "bg-tile-violet text-ink-violet" },
  kdrama: { icon: Tv, style: "bg-accent text-primary" },
  film: { icon: Clapperboard, style: "bg-info-soft text-info" },
  food: { icon: Utensils, style: "bg-warning-soft text-warning" },
  nature: { icon: Leaf, style: "bg-success-soft text-success" },
  culture: { icon: Landmark, style: "bg-surface-2 text-foreground" },
};

export function TrailTags({ tags }: { tags: TrailTag[] }) {
  return (
    <span className="flex flex-wrap gap-1.5">
      {tags.map((tag) => {
        const { icon: Icon, style } = TAG[tag];
        return (
          <Tag key={tag} className={style}>
            <Icon aria-hidden="true" className="size-[0.9375rem]" />
            {t.explore.tags[tag]}
          </Tag>
        );
      })}
    </span>
  );
}
