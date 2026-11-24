import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const COLLECTIONS = [
  {
    name: "Пепел и молоко",
    year: "2025",
    tag: "Тираж + артефакты",
    desc: "Молочные глазури поверх тёмного шамота: посуда, которая выглядит как найденная на берегу Оки.",
    img: "/images/collection-3.jpg",
    alt: "Минималистичные белые керамические сосуды на бежевом фоне",
    span: "lg:col-span-7",
    h: "h-[420px]",
  },
  {
    name: "Орех и зола",
    year: "2025",
    tag: "Тиражные изделия",
    desc: "Плотные коричневые глазури для ресторанных сетей.",
    img: "/images/collection-4.jpg",
    alt: "Коричневые глазурованные тарелки на деревянном столе",
    span: "lg:col-span-5",
    h: "h-[420px]",
  },
  {
    name: "Форма и воздух",
    year: "2024",
    tag: "Скульптурные объекты",
    desc: "Ажурные сосуды с кольцевыми вырезами — серия для интерьера.",
    img: "/images/hero-square.jpg",
    alt: "Белые керамические сосуды с кольцевыми вырезами и сухоцветами",
    span: "lg:col-span-5",
    h: "h-[380px]",
  },
  {
    name: "Сад",
    year: "2024",
    tag: "Артефакты",
    desc: "Цветочная глазурь налита слоями — у каждого объекта свой рисунок.",
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
              Коллекции
            </p>
            <h2 id="collections-title" className="t-heading-md mt-5 max-w-[22ch]">
              Серии, выпущенные заводом
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-[15px] font-semibold transition-colors hover:bg-surface-moderate"
          >
            Запросить каталог
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
