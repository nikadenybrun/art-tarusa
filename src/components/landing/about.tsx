import Image from "next/image";
import { Reveal } from "./reveal";

const STATS = [
  { value: "9", suffix: " лет", label: "непрерывного производства" },
  { value: "120", suffix: "+", label: "реализованных проектов" },
  { value: "14", suffix: "", label: "художников-резидентов в год" },
  { value: "1280", suffix: " °C", label: "температура обжига шамота" },
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
              Завод, который работает как мастерская художника
            </h2>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/images/workshop.jpg"
                alt="Полки мастерской с готовыми керамическими изделиями и печь для обжига"
                width={1350}
                height={1258}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-8 lg:pl-8">
          <Reveal>
            <p className="text-2xl sm:text-[28px] leading-snug font-medium max-w-[34ch] sm:max-w-none">
              Мы соединяем промышленные возможности и ручной труд: три
              обжиговые печи, собственный шамотный цех, глазуровочная
              лаборатория — и руки людей, для которых глина — язык, а не
              материал.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 grid gap-6 max-w-[62ch] text-base leading-relaxed text-ink-muted sm:text-lg">
              <p>
                Завод находится в Тарусе — городе на Оке, куда художники
                приезжают работать ещё с начала XX века. Здесь глина
                становится и посудой, и скульптурой, и архитектурным
                элементом: мы принимаем в производстве любые идеи — от
                единичного арт-объекта до тиража в несколько тысяч изделий.
              </p>
              <p>
                Каждый проект ведёт персональный мастер: он подбирает массы и
                глазури, ставит тестовые обжиги и доводит поверхность до
                нужного тона. Поэтому наши изделия узнаются по плотному,
                «тёплому» шамоту и глубоким, приглушённым глазуриям.
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
