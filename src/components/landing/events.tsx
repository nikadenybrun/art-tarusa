import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const CLASSES = [
  {
    date: "Индивидуально и в группах",
    badge: "Мастер-класс",
    title: "«За гончарным кругом»",
    desc: "Первое касание глины и практика для продолжающих: центровка, формовка чашки, лепка чайника. Готовые изделия забираете после обжига.",
    place: "Таруса, завод «Тарусская керамика»",
  },
  {
    date: "По запросу",
    badge: "Для команд",
    title: "Командный формат",
    desc: "Программы для команд чайных магазинов и ресторанов: лепка, чайная церемония и день у печи. Тимбилдинг, который заканчивается готовой партией посуды.",
    place: "На заводе или выезд к вам",
  },
  {
    date: "По записи",
    badge: "Чай",
    title: "Чайная церемония на заводе",
    desc: "Мы делаем чайную посуду для себя и любим чай: приводим группы на церемонию в цехе — на посуде, которую только что вынули из дровяной печи.",
    place: "Регистрация через телеграм-канал",
  },
];

export function Events() {
  return (
    <section id="classes" className="py-20 sm:py-28 bg-surface-subtle border-y border-line" aria-labelledby="classes-title">
      <div className="container-t">
        <Reveal>
          <p className="t-overline text-brand-700 flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-500" aria-hidden />
            Обучение и события
          </p>
          <h2 id="classes-title" className="t-heading-md mt-5 max-w-[24ch]">
            Мастер-классы на заводе
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CLASSES.map((e, i) => (
            <Reveal key={e.title} delay={0.06 * i} className="h-full">
              <article className="flex h-full flex-col rounded-3xl bg-surface-card p-7 shadow-xs hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between gap-3">
                  <span className="t-caption font-grotesk font-medium tracking-[0.14em] uppercase rounded-full bg-brand-100 px-3 py-1.5 text-brand-900">
                    {e.badge}
                  </span>
                  <span className="t-caption text-ink-muted text-right">{e.date}</span>
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
