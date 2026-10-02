import { Info, OctagonAlert, SearchCheck, TriangleAlert, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

/** Banner: a short message with an icon. Warning = be careful, info = neutral fact. */
export function Banner({ tone = "warning", children }: { tone?: "warning" | "info"; children: ReactNode }) {
  const Icon = tone === "warning" ? TriangleAlert : Info;
  const style = tone === "warning" ? "bg-warning-soft [&>svg]:text-warning" : "bg-info-soft [&>svg]:text-info";
  return (
    <div role="note" className={`flex items-start gap-2.5 rounded-2xl px-4 py-3.5 ${style}`}>
      <Icon aria-hidden="true" className="mt-0.5 size-[1.375rem] shrink-0" />
      <div className="min-w-0">{children}</div>
    </div>
  );
}

/** Disclaimer: visible but quiet. Placed right after the thing it relates to; never hidden. */
export function Disclaimer({ children }: { children: ReactNode }) {
  return (
    <p role="note" className="flex items-start gap-2 text-[0.9375rem] text-muted">
      <Info aria-hidden="true" className="mt-[0.2rem] size-[1.125rem] shrink-0" />
      <span>{children}</span>
    </p>
  );
}

export type StatusTone = "danger" | "warning" | "neutral";

const STATUS: Record<StatusTone, { icon: LucideIcon; box: string; head: string }> = {
  danger: { icon: OctagonAlert, box: "bg-danger-soft ring-2 ring-inset ring-danger", head: "text-danger" },
  warning: { icon: TriangleAlert, box: "bg-warning-soft ring-2 ring-inset ring-warning", head: "text-warning" },
  // Deliberately neutral (not green): used for "no obvious signs", never "safe".
  neutral: { icon: SearchCheck, box: "bg-surface ring-2 ring-inset ring-border-strong", head: "text-foreground" },
};

/** Result status: always icon + text label + color, never color alone. */
export function StatusCard({
  tone,
  label,
  children,
  headingRef,
}: {
  tone: StatusTone;
  label: ReactNode;
  children?: ReactNode;
  headingRef?: React.Ref<HTMLHeadingElement>;
}) {
  const { icon: Icon, box, head } = STATUS[tone];
  return (
    <div className={`rounded-card p-[1.125rem] ${box}`}>
      <h3
        ref={headingRef}
        tabIndex={-1}
        className={`flex items-center gap-2.5 text-[1.375rem] leading-tight font-extrabold focus:outline-none ${head}`}
      >
        <Icon aria-hidden="true" className="size-7 shrink-0" />
        <span>{label}</span>
      </h3>
      {children && <div className="mt-2 text-foreground">{children}</div>}
    </div>
  );
}
