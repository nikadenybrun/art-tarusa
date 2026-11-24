import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const COLLECTIONS = [
  {
    name: "Чайник «Таруса»",
    year: "2025",
    tag: "Чайная посуда",
    desc: "Основная серия завода: плотный шамот, широкое горло, стабильный пролив. Дровяная печь даёт каждому чайнику свой оттенок глазури — одинаковых нет.",
    img: "/images/tea-1.jpg",
    alt: "Чайник дровяного обжига с бежево-зелёной глазурью на фоне мха",
    span: "lg:col-span-7",
    h: "h-[420px]",
  },
  {
    name: "Ресторанная партия",
    year: "2025",
    tag: "Тиражные изделия",
    desc: "Тарелки и соусники для завтраков и подачи — партия с контролем веса и диаметра.",
    img: "/images/collection-1.jpg",
    alt: "Набор кремово-золотых тарелок ручной работы",
    span: "lg:col-span-5",
    h: "h-[420px]",
  },
  {
    name: "Мини-чайники",
    year: "2024",
    tag: "Чайные магазины",
    desc: "Компактная серия для персональных чаепитий и подарочных наборов.",
    img: "/images/tea-6.jpg",
    alt: "Миниатюрный чайник дровяного обжига с песочной глазурью",
    span: "lg:col-span-5",
    h: "h-[380px]",
  },
  {
    name: "Глазури огня",
    year: "2024",
    tag: "Дровяной обжиг",
    desc: "Экспериментальная серия: цветочная глазурь налита слоями — у каждого предмета свой рисунок пламени.",
    img: "/images/gallery-4.jpg",
    alt: "Яркий оранжевый керамический цветок с глазурью",
    span: "lg:col-span-7",
    h: "h-[380px]",
  },
];

export function Collections() {
  return (
    <section id="collections" className="py-20 sm:py-28" aria-labelledby="collections-title">
      <div className="container-t">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="t-overline text-brand-700 flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-500" aria-hidden />
              Серии и партии
            </p>
            <h2 id="collections-title" className="t-heading-md mt-5 max-w-[22ch]">
              Что выходит из нашей печи
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-[15px] font-semibold transition-colors hover:bg-surface-moderate"
          >
            Запросить оптовый прайс
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {COLLECTIONS.map((c, i) => (
            <Reveal key={c.name} delay={0.05 * (i % 2)} className={`${c.span} h-full`}>
              <article className="group relative h-full overflow-hidden rounded-3xl">
                <Image
                  src={c.img}
                  alt={c.alt}
                  width={1200}
                  height={800}
                  className={`${c.h} w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]`}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-neutral-950/10 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-7 text-neutral-50">
                  <div className="flex items-center gap-3">
                    <span className="t-caption font-grotesk font-medium tracking-[0.14em] uppercase rounded-full bg-brand-500 px-3 py-1 text-ink">
                      {c.tag}
                    </span>
                    <span className="font-grotesk text-sm text-neutral-50/80">{c.year}</span>
                  </div>
                  <h3 className="t-heading-sm mt-3">{c.name}</h3>
                  <p className="mt-2 max-w-[44ch] text-[15px] leading-relaxed text-neutral-50/85">
                    {c.desc}
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
