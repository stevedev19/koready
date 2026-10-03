import Link from "next/link";
import { t } from "@/lib/strings";

export function ComingSoon({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
      <span className="text-6xl" aria-hidden="true">{icon}</span>
      <h1 className="mt-4 text-2xl font-bold">{title}</h1>
      <p className="mt-1 text-lg font-semibold text-primary">{t.comingSoon.title}</p>
      <p className="mt-2 text-muted-foreground">{t.comingSoon.body}</p>
      <Link
        href="/"
        className="mt-6 inline-flex min-h-11 items-center rounded-lg bg-primary px-5 font-semibold text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {t.comingSoon.backHome}
      </Link>
    </div>
  );
}
