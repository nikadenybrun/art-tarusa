import Image from "next/image";
import { Reveal } from "./reveal";

const STEPS = [
  {
    num: "01",
    title: "Масса",
    desc: "Собственный шамотный замес: плотный черепок, который держит тепло и не боится профессиональной кухни. Подбираем массу под задачу — от тонкой пиалы до массивной доски подачи.",
  },
  {
    num: "02",
    title: "Формовка",
    desc: "Чайники и пиалы лепятся вручную, ресторанный тираж — в гипсовых формах. Каждая крышка подгоняется к своему чайнику, носик и ручка выверяются по руке.",
  },
  {
    num: "03",
    title: "Глазуровка",
    desc: "Глазури наносим слоями, часть партий оставляем в сыром черепке: зола дровяной печи сама наплывает на изделие и превращается в глазурь.",
  },
  {
    num: "04",
    title: "Дровяной обжиг",
    desc: "Печь топится дровами от пяти-семи часов до двух недель. Даже два одинаковых чайника выходят разными: разница в десять сантиметров по высоте меняет цвет глазури.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-neutral-950 text-neutral-50 py-20 sm:py-28" aria-labelledby="process-title">
      <div className="container-t">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="t-overline text-brand-400 flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-500" aria-hidden />
              Процесс
            </p>
            <h2 id="process-title" className="t-heading-md mt-5 max-w-[20ch]">
              От куска глины до чайной церемонии
            </h2>
          </div>
          <p className="lg:col-span-5 text-base leading-relaxed text-neutral-50/70 max-w-[44ch]">
            Прозрачное производство: вы видите сроки по каждому этапу и
            получаете фотоотчёты — от лепки до распаковки печи.
          </p>
        </Reveal>

        <Reveal className="mt-12 grid gap-6 lg:grid-cols-2" delay={0.05}>
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/wheel-1.jpg"
              alt="Чайник сразу после дровяного обжига на кирпичах печи"
              width={1200}
              height={800}
              className="h-full w-full object-cover min-h-[320px]"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/images/kiln-chamber.jpg"
                alt="Печь загружена чайниками и пиалами перед дровяным обжигом"
                width={1200}
                height={800}
                className="h-full w-full object-cover min-h-[240px]"
              />
            </div>
            <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between">
              <span className="font-grotesk text-5xl font-semibold text-brand-500">5–7ч</span>
              <p className="t-caption text-neutral-50/70 max-w-[20ch]">
                минимальный дровяной обжиг — большие печи топят до двух недель
              </p>
            </div>
            <div className="col-span-2 rounded-3xl bg-neutral-900 border border-neutral-800 p-6">
              <p className="text-[15px] leading-relaxed text-neutral-50/70 max-w-[52ch]">
                Заказ занимает от одного до трёх месяцев — от эскиза до
                готовой партии. Смета фиксируется по этапам: масса,
                формовка, глазуровка, обжиг — цена не меняется в процессе.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 divide-y divide-neutral-800 border-y border-neutral-800">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={0.04 * i}>
              <div className="grid gap-4 py-7 sm:grid-cols-12 sm:items-baseline">
                <span className="font-grotesk text-sm font-semibold text-brand-500 sm:col-span-1">
                  {s.num}
                </span>
                <h3 className="t-heading-sm sm:col-span-3">{s.title}</h3>
                <p className="text-base leading-relaxed text-neutral-50/70 sm:col-span-8 max-w-[62ch]">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
