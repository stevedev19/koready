import { Scale } from "lucide-react";
import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import notices from "@/lib/licenses.generated.json";
import { getT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t.licenses.title };
}

// Static page built from src/lib/licenses.generated.json (npm run notices).
export default async function LicensesPage() {
  const t = await getT();
  const s = t.licenses;
  return (
    <div className="space-y-4">
      <PageHeader title={s.title} back={{ href: "/privacy", label: t.privacy.title }} />
      <p className="px-1 text-lg">{s.intro}</p>
      {notices.groups.map((group, i) => (
        <Card
          key={i}
          title={group.license}
          icon={Scale}
          meta={`${group.packages.length} ${s.packages}`}
        >
          <ul className="space-y-2">
            {group.packages.map((p) => (
              <li key={p.name}>
                <span className="font-bold">{p.name}</span> <span className="text-muted-foreground">{p.version}</span>
                {p.copyright.map((line) => (
                  <span key={line} className="block text-[0.9375rem] text-muted-foreground">
                    {line}
                  </span>
                ))}
              </li>
            ))}
          </ul>
          <details className="mt-3">
            <summary className="inline-flex min-h-12 cursor-pointer items-center font-bold text-primary">{s.showText}</summary>
            <pre className="mt-2 overflow-x-auto rounded-xl bg-surface-2 p-3.5 text-[0.9375rem] leading-relaxed whitespace-pre-wrap break-words">
              {group.text}
            </pre>
          </details>
        </Card>
      ))}
      <p className="px-1 text-[0.9375rem] text-muted-foreground">{notices.note}</p>
    </div>
  );
}
