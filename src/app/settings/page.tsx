import { Lock } from "lucide-react";
import type { Metadata } from "next";
import { AudienceSwitch } from "@/components/AudienceSwitch";
import { Card } from "@/components/ui/card";
import { ListGroup, ListRow } from "@/components/ui/List";
import { PageHeader } from "@/components/ui/PageHeader";
import { t } from "@/lib/strings";

export const metadata: Metadata = { title: t.audience.settings.title };

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <PageHeader title={t.audience.settings.title} back={{ href: "/", label: t.tabs.home }} />
      <Card>
        <AudienceSwitch />
      </Card>
      <ListGroup>
        <ListRow href="/privacy" icon={Lock} tone="neutral" title={t.privacy.link} />
      </ListGroup>
    </div>
  );
}
