import { Info, OctagonAlert, SearchCheck, TriangleAlert, type LucideIcon } from "lucide-react";
import type { ReactNode, Ref } from "react";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "./alert";

/** Banner: a short message with an icon. Warning = be careful, info = neutral fact. */
export function Banner({ tone = "warning", children }: { tone?: "warning" | "info"; children: ReactNode }) {
  const Icon = tone === "warning" ? TriangleAlert : Info;
  return (
    <Alert role="note" kind="banner" tone={tone}>
      <Icon aria-hidden="true" className="mt-0.5 size-[1.375rem] shrink-0" />
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}

/** Disclaimer: visible but quiet. Placed right after the thing it relates to; never hidden. */
export function Disclaimer({ children }: { children: ReactNode }) {
  return (
    <p role="note" className="flex items-start gap-2 text-[0.9375rem] text-muted-foreground">
      <Info aria-hidden="true" className="mt-[0.2rem] size-[1.125rem] shrink-0" />
      <span>{children}</span>
    </p>
  );
}

export type ResultTone = "danger" | "warning" | "neutral";

const RESULT: Record<ResultTone, { icon: LucideIcon; head: string }> = {
  danger: { icon: OctagonAlert, head: "text-destructive" },
  warning: { icon: TriangleAlert, head: "text-warning" },
  // Deliberately neutral (not green): used for "no obvious signs", never "safe".
  neutral: { icon: SearchCheck, head: "text-foreground" },
};

/** Checker result: always icon + text label + color, never color alone. */
export function ResultCard({
  tone,
  label,
  children,
  headingRef,
}: {
  tone: ResultTone;
  label: ReactNode;
  children?: ReactNode;
  headingRef?: Ref<HTMLHeadingElement>;
}) {
  const { icon: Icon, head } = RESULT[tone];
  return (
    <Alert tone={tone} kind="result">
      <AlertTitle asChild className={cn("focus:outline-none", head)}>
        <h3 ref={headingRef} tabIndex={-1}>
          <Icon aria-hidden="true" className="size-7 shrink-0" />
          <span>{label}</span>
        </h3>
      </AlertTitle>
      {children && <AlertDescription className="mt-2 text-foreground">{children}</AlertDescription>}
    </Alert>
  );
}
