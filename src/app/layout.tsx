import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL("https://zavodtarusa.art"),
  title: {
    default: "Завод Таруса — керамический арт-завод",
    template: "%s · Завод Таруса",
  },
  description:
    "Керамический арт-завод в Тарусе. Авторские артефакты, скульптурные объекты, тиражные изделия и обжиговые программы. Работаем с художниками, галереями, архитекторами и брендами.",
  keywords: [
    "керамика",
    "арт-завод",
    "Таруса",
    "керамические объекты",
    "авторская керамика",
    "скульптура из глины",
    "глазуровка",
    "обжиг",
  ],
  authors: [{ name: "Завод Таруса" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Завод Таруса — керамический арт-завод",
    description:
      "Авторская керамика, скульптурные объекты и тиражные изделия. Таруса, Калужская область.",
    url: "https://zavodtarusa.art",
    siteName: "Завод Таруса",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Завод Таруса — керамический арт-завод",
    description:
      "Авторская керамика, скульптурные объекты и тиражные изделия. Таруса, Калужская область.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
