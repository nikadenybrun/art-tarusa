import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const AUDIENCES = [
  {
    title: "Чайным магазинам и клубам",
    desc: "Оптовые партии чайников, пиал и гайваней под полку и чайные церемонии. Серии от 50 до 150 позиций с новой поставкой каждые два-три месяца — от одного изделия в пробной партии.",
  },
  {
    title: "Ресторанам и отелям",
    desc: "Посуда под меню шефа: тарелки, соусники, пиалы и чайные станции. Тиражи с докупкой к сезонам — так работают KRASOTA и AYU из White Rabbit Family.",
  },
  {
    title: "Мастер-классам и школам",
    desc: "Готовые программы для студий и частных групп: гончарный круг, лепка чайника, чайная церемония. Проводим на заводе или выездом — с материалами и инструментами.",
  },
  {
    title: "Интерьерным проектам",
    desc: "Интерьерная керамика: вазы, сосуды и объекты для пространств магазинов, кафе и частных интерьеров — от эскиза до дровяного обжига.",
  },
];

const CLIENTS = ["Чайные клубы CHABU", "White Rabbit Family", "KRASOTA", "AYU"];

export function Cooperation() {
  return (
    <section id="cooperation" className="py-20 sm:py-28" aria-labelledby="cooperation-title">
      <div className="container-t">
        <Reveal>
          <p className="t-overline text-brand-700 flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-500" aria-hidden />
            Сотрудничество
          </p>
          <h2 id="cooperation-title" className="t-heading-md mt-5 max-w-[26ch]">
            С кем мы работаем
          </h2>
        </Reveal>

        <div className="mt-12 border-t border-line">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.title} delay={0.04 * i}>
              <a
                href="#contact"
                className="group grid gap-3 border-b border-line py-8 transition-colors hover:bg-surface-card sm:grid-cols-12 sm:items-center sm:gap-6 sm:px-4 rounded-lg"
              >
                <span className="font-grotesk text-sm font-semibold text-brand-600 sm:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="t-heading-sm sm:col-span-4 transition-transform duration-300 group-hover:translate-x-2">
                  {a.title}
                </h3>
                <p className="text-base leading-relaxed text-ink-muted sm:col-span-6 max-w-[56ch]">
                  {a.desc}
                </p>
                <span className="hidden sm:flex sm:col-span-1 justify-end">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line-strong transition-all duration-300 group-hover:bg-brand-500 group-hover:border-brand-500 group-hover:text-ink">
                    <ArrowUpRight className="h-5 w-5" aria-hidden />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-10 rounded-3xl bg-surface-card border border-line p-7 sm:p-8">
            <p className="t-caption font-grotesk font-medium tracking-[0.14em] uppercase text-ink-muted">
              Часть постоянных заказчиков
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {CLIENTS.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-full border border-line-strong bg-surface-subtle px-5 py-2.5 font-grotesk text-[15px] font-medium text-ink"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
