import Image from "next/image";
import { Reveal } from "./reveal";

const SHOTS = [
  { img: "/images/gallery-2.jpg", alt: "Юноми с сизо-голубой глазурью на подставке с мхом", cap: "Юноми, дровяной обжиг" },
  { img: "/images/gallery-5.jpg", alt: "Сосуд с песочной глазурью и следами золы", cap: "Черепок и зола" },
  { img: "/images/process-detail.jpg", alt: "Тёмно-синий сосуд на кирпичах дровяной печи", cap: "Восстановительный обжиг" },
  { img: "/images/gallery-3.jpg", alt: "Керамический талисман ручной лепки на подставке со мхом", cap: "Талисманы ручной лепки" },
  { img: "/images/collection-2.jpg", alt: "Бутыли с тёмной глазурью после распаковки печи", cap: "Распаковка печи" },
  { img: "/images/hero-wide.jpg", alt: "Рыба-талисман дровяного обжига", cap: "Талисман-рыба, 2025" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28" aria-labelledby="gallery-title">
      <div className="container-t">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="t-overline text-brand-700 flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-500" aria-hidden />
              Галерея
            </p>
            <h2 id="gallery-title" className="t-heading-md mt-5 max-w-[22ch]">
              Завод в кадре
            </h2>
          </div>
          <p className="max-w-[40ch] text-base leading-relaxed text-ink-muted">
            Чайники, пиалы, сосуды и талисманы — то, что выходит из наших
            печей, и сам завод: печь, поленница, цех.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 flex gap-5 overflow-x-auto gallery-scroll snap-x snap-mandatory px-5 pb-4 sm:px-8 lg:px-12">
          {SHOTS.map((s, i) => (
            <figure
              key={i}
              className="group relative shrink-0 snap-center overflow-hidden rounded-3xl w-[78vw] sm:w-[420px]"
            >
              <Image
                src={s.img}
                alt={s.alt}
                width={800}
                height={1000}
                className="h-[440px] sm:h-[500px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-neutral-50/90 backdrop-blur px-4 py-2 t-caption font-medium text-ink-soft">
                {s.cap}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
