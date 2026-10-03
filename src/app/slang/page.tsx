import type { Metadata } from "next";
import { CardError } from "@/components/Card";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { SlangArchive } from "@/components/SlangArchive";
import { SlangBeta } from "@/components/SlangBeta";
import { SlangCard } from "@/components/SlangCard";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/PageHeader";
import { t } from "@/lib/strings";

export const metadata: Metadata = { title: t.tabs.slang };

export default function SlangPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        title={
          <>
            {t.tabs.slang}{" "}
            <span lang="ko" className="text-lg font-bold text-muted-foreground">
              {t.slangPage.titleKo}
            </span>
          </>
        }
        subtitle={t.slangPage.intro}
      />
      <SlangBeta />
      <ErrorBoundary
        fallback={
          <Card>
            <CardError />
          </Card>
        }
      >
        <SlangCard />
      </ErrorBoundary>
      <section aria-labelledby="slang-archive" className="space-y-3">
        <h2 id="slang-archive" className="px-1 text-xl font-extrabold">{t.slangPage.archive.title}</h2>
        <SlangArchive />
      </section>
    </div>
  );
}
