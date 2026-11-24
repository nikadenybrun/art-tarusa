import Image from "next/image";
import { Reveal } from "./reveal";

const STATS = [
  { value: "500", suffix: "+", label: "чайников и пиал в год выпускает завод" },
  { value: "20", suffix: "+", label: "чайных магазинов и ресторанов — партнёры" },
  { value: "150", suffix: "+", label: "мастер-классов проводим за год" },
  { value: "24", suffix: " ч", label: "длится топка дровяной печи" },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28" aria-labelledby="about-title">
      <div className="container-t grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal className="lg:sticky lg:top-28">
            <p className="t-overline text-brand-700 flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-500" aria-hidden />
              О заводе
            </p>
            <h2 id="about-title" className="t-heading-md mt-5 max-w-[16ch]">
              Завод, где чайник рождается из огня
            </h2>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/images/teapots-green.jpg"
                alt="Корзина с чайниками ручной лепки перед обжигом в мастерской"
                width={960}
                height={1280}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-8 lg:pl-8">
          <Reveal>
            <p className="text-2xl sm:text-[28px] leading-snug font-medium max-w-[34ch] sm:max-w-none">
              Мы делаем посуду, которая живёт в чайных магазинах и
              ресторанах: чайники, пиалы, тарелки и соусники — с черепком
              ручной лепки и глазурями, которые рисует дровяной огонь.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 grid gap-6 max-w-[62ch] text-base leading-relaxed text-ink-muted sm:text-lg">
              <p>
                Завод стоит в Тарусе — городе на Оке, куда гончары
                приезжают работать ещё с начала XX века. Производство ведёт
                керамист Андрей Акимов: чайная посуда дровяного обжига и
                ресторанный тираж делаются здесь на одном цикле — от замеса
                шамота до 24-часовой топки печи.
              </p>
              <p>
                Каждый чайник перед обжигом проходит пролив-тест: струя,
                слив, крышка — как в настоящей чайной церемонии. Поэтому
                наши партии можно ставить на полку и на стол без
                браковочных сюрпризов: магазин получает заведомо рабочую
                посуду.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.06 * i} className="bg-surface-card">
                <div className="flex h-full flex-col justify-between gap-6 p-6">
                  <div className="font-grotesk text-4xl font-semibold tracking-tight text-ink">
                    {s.value}
                    <span className="text-brand-600">{s.suffix}</span>
                  </div>
                  <p className="t-caption text-ink-muted max-w-[18ch]">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
