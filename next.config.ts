import type { NextConfig } from "next";

// EXPORT_MODE=1 — статический экспорт для GitHub Pages (вывод в out/).
// NEXT_PUBLIC_BASE_PATH — под-путь репозитория, например /zavodtarusa.
const isExport = process.env.EXPORT_MODE === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = isExport
  ? {
      output: "export",
      basePath: basePath || undefined,
      images: {
        loader: "custom",
        loaderFile: "./image-loader.ts",
      },
      typescript: { ignoreBuildErrors: true },
      reactStrictMode: false,
    }
  : {
      output: "standalone",
      typescript: { ignoreBuildErrors: true },
      reactStrictMode: false,
    };

export default nextConfig;
