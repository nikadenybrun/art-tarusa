import Image from "next/image";
import { Reveal } from "./reveal";

const DIRECTIONS = [
  {
    num: "01",
    title: "Артефакты",
    desc: "Единичные авторские объекты, созданные совместно с художником: от эскиза и тестовых глазурей до финального обжига и подписи.",
    img: "/images/collection-2.jpg",
    alt: "Зелёно-розовый керамический арт-объект на деревянном подиуме",
  },
  {
    num: "02",
    title: "Скульптурные объекты",
    desc: "Крупноформатная пластика для интерьеров и общественных пространств: массивы до 120 см, сборные формы, усиленный крепёж.",
    img: "/images/gallery-1.jpg",
    alt: "Высокие терракотовые скульптуры в мастерской рядом с художником",
  },
  {
    num: "03",
    title: "Тиражные изделия",
    desc: "Посуда и предметы для брендов, ресторанов и магазинов: гипсовые формы, стабильный тираж, контроль партии от 100 штук.",
    img: "/images/collection-1.jpg",
    alt: "Набор кремово-золотых тарелок ручной работы",
  },
  {
    num: "04",
    title: "Обжиговые программы",
    desc: "Печи до 1280 °C и камеры сушки: обжигаем чужие изделия, подбираем режимы и восстанавливаем исторические глазури.",
    img: "/images/kiln.jpg",
    alt: "Современная керамическая печь в цехе завода",
  },
];

export function Production() {
  return (
    <section id="production" className="py-20 sm:py-28 bg-surface-subtle border-y border-line" aria-labelledby="production-title">
      <div className="container-t">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="t-overline text-brand-700 flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-500" aria-hidden />
              Производство
            </p>
            <h2 id="production-title" className="t-heading-md mt-5 max-w-[22ch]">
              Четыре направления работы с глиной
            </h2>
          </div>
          <p className="max-w-[38ch] text-base leading-relaxed text-ink-muted">
            Полный цикл на одной площадке: масса, формовка, глазуровка,
            обжиг. Можно прийти с готовым проектом — или начать с эскиза на
            салфетке.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {DIRECTIONS.map((d, i) => (
            <Reveal key={d.num} delay={0.06 * (i % 2)}>
              <article className="group h-full overflow-hidden rounded-3xl bg-surface-card shadow-xs hover:shadow-xl transition-shadow duration-300">
                <div className="overflow-hidden">
                  <Image
                    src={d.img}
                    alt={d.alt}
                    width={1200}
                    height={800}
                    className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-baseline gap-4">
                    <span className="font-grotesk text-sm font-semibold text-brand-600">
                      {d.num}
                    </span>
                    <h3 className="t-heading-sm">{d.title}</h3>
                  </div>
                  <p className="mt-3.5 text-base leading-relaxed text-ink-muted">
                    {d.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
