import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { t } from "@/lib/strings";

export const metadata: Metadata = { title: t.tabs.safety };

export default function SafetyPage() {
  return <ComingSoon title={t.tabs.safety} icon="🛡️" />;
}
