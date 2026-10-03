import { ChevronRight, ExternalLink, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Pressable } from "../pressable";
import { Card } from "./card";
import { IconTile, type Tone } from "./IconTile";

/** Grouped list: rows share one rounded card with dividers. */
export function ListGroup({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <Card asChild className="divide-y divide-border overflow-hidden p-0">
      <ul aria-label={label}>{children}</ul>
    </Card>
  );
}

type RowProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  icon?: LucideIcon;
  tone?: Tone;
  trailing?: ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  lang?: string;
};

const rowClass =
  "flex min-h-[4.25rem] w-full items-center gap-3.5 px-4 py-3 text-left text-foreground focus-visible:-outline-offset-4";

function RowBody({ title, subtitle, icon, tone, trailing, href, external, onClick, lang }: RowProps) {
  const chevron = external ? ExternalLink : ChevronRight;
  const Trail = (href && !/^(tel|mailto):/.test(href)) || onClick ? chevron : null;
  return (
    <>
      {icon && <IconTile icon={icon} tone={tone} />}
      <span className="min-w-0 flex-1">
        <span lang={lang} className="block leading-snug font-bold">{title}</span>
        {subtitle && <span className="block text-[0.9375rem] leading-snug text-muted-foreground">{subtitle}</span>}
      </span>
      {trailing}
      {Trail && <Trail aria-hidden="true" className="size-5 shrink-0 text-placeholder" />}
    </>
  );
}

/** One row: a link, an external link, a button, or static content. */
export function ListRow(props: RowProps) {
  const { href, external, onClick, ariaLabel } = props;
  return (
    <li>
      {href ? (
        <Pressable href={href} external={external} aria-label={ariaLabel} className={rowClass}>
          <RowBody {...props} />
        </Pressable>
      ) : onClick ? (
        <Pressable onClick={onClick} aria-label={ariaLabel} className={rowClass}>
          <RowBody {...props} />
        </Pressable>
      ) : (
        <div className={rowClass}>
          <RowBody {...props} />
        </div>
      )}
    </li>
  );
}
