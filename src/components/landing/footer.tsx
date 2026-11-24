import { ArrowUp } from "lucide-react";
import { Reveal } from "./reveal";

const NAV = [
  { href: "#about", label: "О заводе" },
  { href: "#production", label: "Производство" },
  { href: "#collections", label: "Коллекции" },
  { href: "#process", label: "Процесс" },
  { href: "#gallery", label: "Галерея" },
  { href: "#classes", label: "Мастер-классы" },
  { href: "#contact", label: "Контакты" },
];

const SOCIALS = [
  { href: "https://t.me/akimov_ceramist", label: "Телеграм-канал Андрея Акимова" },
  { href: "mailto:hello@zavodtarusa.art", label: "Почта завода" },
];

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-50 pt-16 pb-8 mt-auto" aria-label="Подвал сайта">
      <div className="container-t">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8 border-b border-neutral-800 pb-12">
            <div>
              <p className="font-grotesk text-4xl sm:text-5xl font-semibold tracking-tight">
                Завод Таруса
              </p>
              <a
                href="https://zavodtarusa.art"
                className="mt-3 inline-block font-grotesk text-xl text-brand-400 link-underline"
              >
                zavodtarusa.art
              </a>
            </div>
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-5 py-3 text-[15px] font-semibold transition-colors hover:bg-brand-500 hover:border-brand-500 hover:text-ink"
            >
              Наверх
              <ArrowUp className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </Reveal>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label="Навигация в подвале" className="grid gap-3">
            <p className="t-overline text-neutral-50/50">Навигация</p>
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="w-fit text-[15px] text-neutral-50/80 link-underline hover:text-neutral-50"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="grid gap-3">
            <p className="t-overline text-neutral-50/50">Соцсети</p>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-[15px] text-neutral-50/80 link-underline hover:text-neutral-50"
              >
                {s.label}
              </a>
            ))}
          </div>

          <div className="grid gap-3">
            <p className="t-overline text-neutral-50/50">Связаться</p>
            <a
              href="mailto:hello@zavodtarusa.art"
              className="w-fit text-[15px] text-neutral-50/80 link-underline hover:text-neutral-50"
            >
              hello@zavodtarusa.art
            </a>
            <p className="text-[15px] text-neutral-50/80">Таруса, Калужская область</p>
            <p className="text-[15px] text-neutral-50/50">Пн–Сб, 9:00–18:00</p>
          </div>

          <div className="grid gap-3">
            <p className="t-overline text-neutral-50/50">Производство</p>
            <p className="text-[15px] leading-relaxed text-neutral-50/70 max-w-[30ch]">
              Мощность 1 000–1 500 изделий в месяц. Минимальный тираж — от
              одного изделия, срок заказа — от одного до трёх месяцев.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-800 pt-8">
          <p className="t-caption text-neutral-50/50">
            © {new Date().getFullYear()} Завод Таруса · Мануфактура «Тарусский художник»
          </p>
          <p className="t-caption text-neutral-50/50 font-grotesk">
            made on clay · zavodtarusa.art
          </p>
        </div>
      </div>
    </footer>
  );
}
