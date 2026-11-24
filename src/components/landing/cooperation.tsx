import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const AUDIENCES = [
  {
    title: "Художникам",
    desc: "Резиденции, техническое сопровождение проекта, доступ к печам и лаборатории глазурей. Помогаем довести эскиз до объекта.",
  },
  {
    title: "Галереям и музеям",
    desc: "Производство экспозиционных объектов и серий, упаковка и логистика, реставрация исторической керамики.",
  },
  {
    title: "Архитекторам и дизайнерам",
    desc: "Архитектурная керамика: облицовка, панно, объёмные элементы фасадов и интерьеров по проектным чертежам.",
  },
  {
    title: "Брендам",
    desc: "Тиражные коллекции под собственной торговой маркой: от мастер-модели до коробки с вашим логотипом.",
  },
];

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
      </div>
    </section>
  );
}
