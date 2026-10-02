import { HELP_LINES, type HelpLineId } from "@/lib/helpLines";
import { t } from "@/lib/strings";
import { Card } from "./Card";

type HelpLinesProps = {
  ids: HelpLineId[];
  title?: string;
  footer?: string;
};

export function HelpLines({ ids, title = t.helpLines.title, footer }: HelpLinesProps) {
  return (
    <Card title={title} icon="📞" footer={footer}>
      <ul className="divide-y divide-border">
        {ids.map((id) => {
          const line = HELP_LINES[id];
          const s = t.helpLines.lines[id];
          return (
            <li key={id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{s.name}</p>
                <p className="text-sm text-muted">{s.detail}</p>
              </div>
              <a
                href={`tel:${line.number}`}
                aria-label={`${t.helpLines.call} ${s.name}, ${line.number.split("").join(" ")}`}
                className="inline-flex min-h-11 min-w-16 shrink-0 items-center justify-center rounded-lg bg-accent px-3 text-lg font-bold text-accent-contrast focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {line.number}
              </a>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
