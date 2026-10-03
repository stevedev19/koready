import { Clapperboard, Landmark, Leaf, Music, Tv, Utensils, type LucideIcon } from "lucide-react";
import { getT } from "@/lib/i18n/server";
import type { TrailTag } from "@/lib/trails";
import { Badge, type BadgeVariant } from "../ui/badge";

// Decorative colors; the tag text carries the meaning.
const TAG: Record<TrailTag, { icon: LucideIcon; variant: BadgeVariant }> = {
  kpop: { icon: Music, variant: "violet" },
  kdrama: { icon: Tv, variant: "primary" },
  film: { icon: Clapperboard, variant: "info" },
  food: { icon: Utensils, variant: "warning" },
  nature: { icon: Leaf, variant: "success" },
  culture: { icon: Landmark, variant: "neutral" },
};

export async function TrailTags({ tags }: { tags: TrailTag[] }) {
  const t = await getT();
  return (
    <span className="flex flex-wrap gap-1.5">
      {tags.map((tag) => {
        const { icon: Icon, variant } = TAG[tag];
        return (
          <Badge key={tag} variant={variant}>
            <Icon aria-hidden="true" className="size-[0.9375rem]" />
            {t.trails.tags[tag]}
          </Badge>
        );
      })}
    </span>
  );
}
