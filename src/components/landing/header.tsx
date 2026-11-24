"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV = [
  { href: "#about", label: "О заводе" },
  { href: "#production", label: "Производство" },
  { href: "#collections", label: "Коллекции" },
  { href: "#process", label: "Процесс" },
  { href: "#gallery", label: "Галерея" },
  { href: "#events", label: "События" },
  { href: "#contact", label: "Контакты" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-50/90 backdrop-blur-md border-b border-line shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-t flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="Завод Таруса — на главную"
        >
          <img src="/logo.svg" alt="Логотип Завода Таруса" className="h-9 w-9" />
          <span className="leading-none">
            <span className="block font-grotesk text-[15px] font-semibold tracking-[0.08em] uppercase">
              Завод Таруса
            </span>
            <span className="block t-caption text-ink-muted mt-0.5 font-grotesk tracking-[0.14em]">
              zavodtarusa.art
            </span>
          </span>
        </Link>

        <nav aria-label="Основная навигация" className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-ink-soft link-underline hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-[15px] font-semibold text-neutral-50 transition-colors hover:bg-brand-500 hover:text-ink"
          >
            Обсудить проект
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-surface-card text-ink"
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-line bg-neutral-50 backdrop-blur-md">
          <nav aria-label="Мобильная навигация" className="container-t flex flex-col py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-3.5 text-lg font-medium border-b border-line last:border-b-0"
              >
                {item.label}
                <ArrowUpRight className="h-4 w-4 text-ink-muted" aria-hidden />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 mb-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-ink px-5 py-3.5 text-base font-semibold text-neutral-50"
            >
              Обсудить проект
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
