// Кастомный загрузчик next/image для статического экспорта (GitHub Pages):
// подставляет NEXT_PUBLIC_BASE_PATH к локальным путям, чтобы картинки
// загружались с под-пути вида username.github.io/<repo>/images/...
export default function imageLoader({
  src,
}: {
  src: string;
  width?: number;
  quality?: number;
}): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (src.startsWith("/") && !src.startsWith("/_next")) {
    return `${base}${src}`;
  }
  return src;
}
