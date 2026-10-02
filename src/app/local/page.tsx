import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { t } from "@/lib/strings";

export const metadata: Metadata = { title: t.tabs.local };

export default function LocalPage() {
  return <ComingSoon title={t.tabs.local} icon="📍" />;
}
