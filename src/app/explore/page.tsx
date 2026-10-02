import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";
import { t } from "@/lib/strings";

export const metadata: Metadata = { title: t.tabs.explore };

export default function ExplorePage() {
  return <ComingSoon title={t.tabs.explore} icon="🧭" />;
}
