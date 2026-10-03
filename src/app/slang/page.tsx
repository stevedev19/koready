import type { Metadata } from "next";
import { CardError } from "@/components/Card";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { SlangArchive } from "@/components/SlangArchive";
import { SlangBeta } from "@/components/SlangBeta";
import { SlangCard } from "@/components/SlangCard";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/PageHeader";
import { getT } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT();
  return { title: t.tabs.slang };
}

export default async function SlangPage() {
  const t = await getT();
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
      <SlangArchive />
    </div>
  );
}
