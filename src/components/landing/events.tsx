import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const EVENTS = [
  {
    date: "Скоро",
    badge: "Выставка",
    title: "«Посуда как скульптура»",
    desc: "Совместный проект завода и художников-резидентов: тиражные изделия, показанные как арт-объекты. Цех превращается в выставочный зал на один месяц.",
    place: "Завод Таруса, цех №2",
  },
  {
    date: "Открыт приём заявок",
    badge: "Резиденция",
    title: "Резиденция для керамистов",
    desc: "Четыре недели работы на заводе: доступ к печам, материалам и лаборатории глазурей, персональный мастер и финальная выставка.",
    place: "Таруса, Калужская область",
  },
  {
    date: "Каждый сезон",
    badge: "Событие",
    title: "Открытый обжиг",
    desc: "День открытых печей: экскурсия по производству, демонстрация глазуровки и распаковка обжига при 1280 °C. Вход свободный, по регистрации.",
    place: "Регистрация через телеграм-канал",
  },
];

export function Events() {
  return (
    <section id="events" className="py-20 sm:py-28 bg-surface-subtle border-y border-line" aria-labelledby="events-title">
      <div className="container-t">
        <Reveal>
          <p className="t-overline text-brand-700 flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-500" aria-hidden />
            События
          </p>
          <h2 id="events-title" className="t-heading-md mt-5 max-w-[24ch]">
            Что происходит на заводе
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {EVENTS.map((e, i) => (
            <Reveal key={e.title} delay={0.06 * i} className="h-full">
              <article className="flex h-full flex-col rounded-3xl bg-surface-card p-7 shadow-xs hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between gap-3">
                  <span className="t-caption font-grotesk font-medium tracking-[0.14em] uppercase rounded-full bg-brand-100 px-3 py-1.5 text-brand-900">
                    {e.badge}
                  </span>
                  <span className="t-caption text-ink-muted">{e.date}</span>
                </div>
                <h3 className="t-heading-sm mt-5">{e.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted flex-1">
                  {e.desc}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                  <span className="t-caption text-ink-muted max-w-[22ch]">{e.place}</span>
                  <a
                    href="#contact"
                    aria-label={`Подробнее: ${e.title}`}
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-strong transition-colors hover:bg-brand-500 hover:border-brand-500 hover:text-ink"
                  >
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
