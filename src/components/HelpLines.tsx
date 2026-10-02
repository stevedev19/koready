import { HELP_LINES } from "@/lib/helpLines";
import { t } from "@/lib/strings";
import { Card } from "./Card";

export function HelpLines() {
  return (
    <Card title={t.helpLines.title} icon="📞" footer={t.safety.disclaimer}>
      <ul className="divide-y divide-border">
        {HELP_LINES.map((line) => {
          const s = t.helpLines.lines[line.id];
          return (
            <li key={line.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
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
