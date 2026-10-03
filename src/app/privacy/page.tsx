import { Scale } from "lucide-react";
import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { ListGroup, ListRow } from "@/components/ui/List";
import { PageHeader } from "@/components/ui/PageHeader";
import { REPORT_EMAIL } from "@/lib/config";
import { getT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t.privacy.title };
}

export default async function PrivacyPage() {
  const t = await getT();
  const s = t.privacy;
  return (
    <div className="space-y-4">
      <PageHeader title={s.title} subtitle={s.updated} back={{ href: "/", label: t.tabs.home }} />
      <p className="px-1 text-lg">{s.intro}</p>
      {s.sections.map((section) => (
        <Card key={section.title} title={section.title}>
          <ul className="list-disc space-y-1.5 pl-5">
            {section.body.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </Card>
      ))}
      <ListGroup>
        <ListRow href="/licenses" icon={Scale} tone="neutral" title={t.licenses.link} />
      </ListGroup>
      {REPORT_EMAIL && (
        <p className="px-1">
          {s.contact}{" "}
          <a href={`mailto:${REPORT_EMAIL}`} className="inline-flex min-h-12 items-center font-bold text-primary underline underline-offset-2">
            {REPORT_EMAIL}
          </a>
        </p>
      )}
    </div>
  );
}
