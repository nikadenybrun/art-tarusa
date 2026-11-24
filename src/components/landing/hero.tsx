"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const reduce = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;
  const v = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease },
        };

  return (
    <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-20" aria-labelledby="hero-title">
      <div className="container-t">
        <motion.p
          {...v(0)}
          className="t-overline text-brand-700 flex items-center gap-3"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-brand-500" aria-hidden />
          Керамический арт-завод · Таруса
        </motion.p>

        <motion.h1
          {...v(0.08)}
          id="hero-title"
          className="t-display-lg mt-6 max-w-[20ch]"
        >
          Керамика
          <br />
          как <span className="text-brand-600">искусство</span>
        </motion.h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
          <motion.div {...v(0.16)} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-ink-muted max-w-[46ch]">
              Завод Таруса — производство авторской керамики полного цикла:
              от эскиза художника до обжига при 1280&nbsp;°C. Артефакты,
              скульптурные объекты и тиражные изделия для галерей,
              архитекторов и брендов.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#collections"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-base font-semibold text-neutral-50 transition-colors hover:bg-brand-500 hover:text-ink"
              >
                Смотреть коллекции
                <ArrowUpRight className="h-5 w-5" aria-hidden />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-surface-moderate"
              >
                О заводе
                <ArrowDown className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </motion.div>

          <motion.div {...v(0.24)} className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl shadow-lg bg-surface-subtle">
              <Image
                src="/images/hero-wide.jpg"
                alt="Тёмный керамический сосуд ручной работы на бежевом фоне"
                width={1920}
                height={980}
                priority
                className="h-auto w-full object-cover aspect-[1920/980]"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-neutral-50/90 backdrop-blur px-4 py-2">
                <span className="t-caption font-grotesk font-medium tracking-[0.12em] uppercase text-ink-soft">
                  Объект «Сосуд 04» · глазурованный шамот
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
