import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the project root (a stray lockfile in a parent folder confuses detection).
  outputFileTracingRoot: path.resolve(__dirname),
  turbopack: { root: path.resolve(__dirname) },
  // Let phones on the same Wi-Fi load the dev server (private LAN addresses only).
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.*.*.*"],
  // Old URLs from before the navigation change, so saved links and bookmarks keep working.
  async redirects() {
    return [{ source: "/explore/trails/:id", destination: "/trails/:id", permanent: true }];
  },
  async headers() {
    return [
      {
        // The service worker must never be cached, or updates won't reach users.
        source: "/sw.js",
        headers: [
          { key: "Content-Type", value: "application/javascript; charset=utf-8" },
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
