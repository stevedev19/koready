import type { Metadata, Viewport } from "next";
import { AuraBackground } from "@/components/AuraBackground";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import { TabBar } from "@/components/TabBar";
import { t } from "@/lib/strings";
// Self-hosted Pretendard; dynamic subsets load only the Korean glyphs a page uses.
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: t.app.name, template: `%s · ${t.app.name}` },
  description: t.app.description,
  applicationName: t.app.name,
  appleWebApp: { capable: true, title: t.app.shortName, statusBarStyle: "default" },
  icons: { apple: "/icons/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f2" },
    { media: "(prefers-color-scheme: dark)", color: "#101318" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <AuraBackground />
        <main className="relative z-[1] mx-auto flex w-full max-w-lg flex-1 flex-col px-4 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[calc(7.5rem+env(safe-area-inset-bottom))]">
          {children}
        </main>
        <TabBar />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
