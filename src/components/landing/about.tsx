import Image from "next/image";
import { Reveal } from "./reveal";

const STATS = [
  { value: "70", suffix: "%", label: "выручки даёт чайная посуда — основное направление завода" },
  { value: "1 500", suffix: "шт", label: "изделий в месяц — производственная мощность цеха" },
  { value: "от 1", suffix: "шт", label: "минимальный тираж: от единичного изделия до крупных партий" },
  { value: "1–3", suffix: "мес", label: "срок исполнения заказа от эскиза до готовой партии" },
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
              Мануфактура, где чайник рождается из огня
            </h2>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/images/teapots-green.jpg"
                alt="Чайник ручной лепки дровяного обжига на фоне мха в мастерской"
                width={600}
                height={800}
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
                Мануфактура «Тарусский художник» выросла из чайной
                компании: после пожара на Электрозаводе мастерская
                переехала из Москвы в Тарусу и уже полтора года занимает
                400 м² на заводе «Тарусская керамика». Производство ведёт
                керамист Андрей Акимов — более десяти лет за гончарным
                кругом.
              </p>
              <p>
                В 2023–2025 годах завод отгружал от 1 000 до 5 000 изделий
                ежемесячно, а годовой розничный оборот достигал 20 млн
                рублей. Среди постоянных заказчиков — чайные клубы CHABU и
                рестораны White Rabbit Family. Мы проверяем чайники в
                работе до того, как они покидают завод: слив, струя,
                прилегание крышки.
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
