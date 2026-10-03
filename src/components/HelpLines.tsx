import { Phone } from "lucide-react";
import { HELP_LINES, type HelpLineId } from "@/lib/helpLines";
import { getT } from "@/lib/i18n/server";
import { ListGroup, ListRow } from "./ui/List";

type HelpLinesProps = {
  ids: HelpLineId[];
  title?: string;
  footer?: string;
};

/** Verified help numbers. The whole row is the call link (large target). */
export async function HelpLines({ ids, title, footer }: HelpLinesProps) {
  const t = await getT();
  title ??= t.helpLines.title;
  return (
    <section className="space-y-2.5" aria-label={title}>
      <h2 className="px-1 text-lg font-extrabold">{title}</h2>
      <ListGroup>
        {ids.map((id) => {
          const line = HELP_LINES[id];
          const s = t.helpLines.lines[id];
          return (
            <ListRow
              key={id}
              href={`tel:${line.number}`}
              ariaLabel={`${t.helpLines.call} ${s.name}, ${line.number.split("").join(" ")}`}
              icon={Phone}
              tone={id === "emergency" ? "red" : "blue"}
              title={s.name}
              subtitle={s.detail}
              trailing={
                <span
                  className={`shrink-0 rounded-full px-3.5 py-2 text-lg font-extrabold tabular-nums ${
                    id === "emergency" ? "bg-emergency text-emergency-contrast" : "bg-primary text-primary-foreground"
                  }`}
                >
                  {line.number}
                </span>
              }
            />
          );
        })}
      </ListGroup>
      {footer && <p className="px-1 text-[0.9375rem] text-muted-foreground">{footer}</p>}
    </section>
  );
}
