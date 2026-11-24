import Image from "next/image";
import { Reveal } from "./reveal";

const DIRECTIONS = [
  {
    num: "01",
    title: "Чайная посуда",
    desc: "Чайники, пиалы, гайвани и чабани ручной лепки. Серии 50–150 позиций для чайных клубов и магазинов — с проверкой каждого чайника в работе: слив, струя, прилегание крышки.",
    img: "/images/tea-batch.jpg",
    alt: "Корзина с чайниками ручной лепки, готовыми к обжигу",
  },
  {
    num: "02",
    title: "Посуда для ресторанов",
    desc: "Тарелки, соусники, пиалы и чайные подачи под меню шефа. Работаем партиями с докупкой к сезонам — так заказывают KRASOTA и AYU из White Rabbit Family.",
    img: "/images/collection-1.jpg",
    alt: "Партия чайников в транспортировочном ящике перед отгрузкой",
  },
  {
    num: "03",
    title: "Мастер-классы",
    desc: "Программы на заводе и выездные: гончарный круг, лепка чайника, чайная церемония. Для команд чайных магазинов, ресторанов и частных групп.",
    img: "/images/master-wheel.jpg",
    alt: "Заготовка чайника на гончарном круге",
  },
  {
    num: "04",
    title: "Дровяной обжиг",
    desc: "Печь топится дровами от пяти-семи часов до двух недель: пламя и зола рисуют глазурь, которая не повторяется. Обжигаем и изделия сторонних мастерских.",
    img: "/images/kiln-wood.jpg",
    alt: "Огонь в топке дровяной печи на площадке завода",
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
              Четыре направления для чайных и ресторанов
            </h2>
          </div>
          <p className="max-w-[38ch] text-base leading-relaxed text-ink-muted">
            Полный цикл на одной площадке: масса, формовка, пролив-тесты,
            глазуровка и дровяной обжиг. Можно прийти с референсом — или
            начать с эскиза.
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
