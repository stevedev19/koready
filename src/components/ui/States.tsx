import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { IconTile, type Tone } from "./IconTile";

// Loading and error states (they need the UI language) are in LoadStates.tsx.

export function EmptyState({
  icon,
  tone = "blue",
  title,
  children,
}: {
  icon: LucideIcon;
  tone?: Tone;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center px-5 py-7 text-center">
      <IconTile icon={icon} tone={tone} size="lg" />
      <p className="mt-3 font-extrabold">{title}</p>
      {children && <div className="mt-1 text-muted-foreground">{children}</div>}
    </div>
  );
}
