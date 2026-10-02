import type { Metadata } from "next";
import { SlangArchive } from "@/components/explore/SlangArchive";
import { LocalScreen } from "@/components/local/LocalScreen";
import { t } from "@/lib/strings";

export const metadata: Metadata = { title: t.explore.slang.title };

export default function SlangArchivePage() {
  return (
    <LocalScreen title={t.explore.slang.title} backHref="/explore" backLabel={t.explore.back} notice={null}>
      <SlangArchive />
    </LocalScreen>
  );
}
