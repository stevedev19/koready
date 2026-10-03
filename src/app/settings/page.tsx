import { Lock } from "lucide-react";
import type { Metadata } from "next";
import { AudienceSwitch } from "@/components/AudienceSwitch";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Card } from "@/components/ui/card";
import { ListGroup, ListRow } from "@/components/ui/List";
import { PageHeader } from "@/components/ui/PageHeader";
import { getT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t.audience.settings.title };
}

export default async function SettingsPage() {
  const t = await getT();
  return (
    <div className="space-y-4">
      <PageHeader title={t.audience.settings.title} back={{ href: "/", label: t.tabs.home }} />
      <Card>
        <LanguageSwitch />
      </Card>
      <Card>
        <AudienceSwitch />
      </Card>
      <ListGroup>
        <ListRow href="/privacy" icon={Lock} tone="neutral" title={t.privacy.link} />
      </ListGroup>
    </div>
  );
}
