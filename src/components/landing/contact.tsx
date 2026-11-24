"use client";

import { useState } from "react";
import { ArrowUpRight, Loader2, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Reveal } from "./reveal";

type Status = "idle" | "loading" | "success" | "error";

const TOPICS = [
  "Оптовый заказ — чайные магазины",
  "Посуда для ресторана",
  "Мастер-класс",
  "Интерьерная керамика",
  "Другое",
];

export function Contact() {
  const { toast } = useToast();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          topic: data.get("topic"),
          message: data.get("message"),
        }),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Не удалось отправить заявку");
      }
      setStatus("success");
      form.reset();
      toast({
        title: "Заявка отправлена",
        description: "Мастер свяжется с вами в течение двух рабочих дней.",
      });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Что-то пошло не так");
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-surface-subtle border-t border-line" aria-labelledby="contact-title">
      <div className="container-t grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="t-overline text-brand-700 flex items-center gap-3">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-500" aria-hidden />
              Контакты
            </p>
            <h2 id="contact-title" className="t-heading-md mt-5 max-w-[18ch]">
              Обсудим ваш проект?
            </h2>
            <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-ink-muted">
              Расскажите о задаче — оптовая партия для магазина, посуда под
              меню ресторана, мастер-класс или интерьерный объект. Ответим
              в течение двух рабочих дней.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-card border border-line">
                  <Mail className="h-5 w-5 text-brand-600" aria-hidden />
                </span>
                <div>
                  <p className="t-caption text-ink-muted uppercase tracking-[0.12em]">Почта</p>
                  <a
                    href="mailto:hello@zavodtarusa.art"
                    className="mt-1 block text-lg font-semibold font-grotesk link-underline w-fit"
                  >
                    hello@zavodtarusa.art
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-card border border-line">
                  <Send className="h-5 w-5 text-brand-600" aria-hidden />
                </span>
                <div>
                  <p className="t-caption text-ink-muted uppercase tracking-[0.12em]">Телеграм</p>
                  <a
                    href="https://t.me/akimov_ceramist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-lg font-semibold font-grotesk link-underline w-fit"
                  >
                    @akimov_ceramist
                  </a>
                  <p className="mt-1 t-caption text-ink-muted">канал керамиста Андрея Акимова</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-card border border-line">
                  <MapPin className="h-5 w-5 text-brand-600" aria-hidden />
                </span>
                <div>
                  <p className="t-caption text-ink-muted uppercase tracking-[0.12em]">Адрес</p>
                  <p className="mt-1 text-lg font-semibold font-grotesk">
                    Таруса, Калужская область
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-line-strong bg-surface-card px-5 py-3">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-500" aria-hidden />
              <span className="font-grotesk text-sm font-medium tracking-[0.06em]">
                zavodtarusa.art
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="lg:col-span-7">
          <div className="rounded-3xl bg-surface-card p-7 sm:p-10 shadow-lg">
            {status === "success" ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-100">
                  <ArrowUpRight className="h-7 w-7 text-brand-700" aria-hidden />
                </span>
                <h3 className="t-heading-md mt-6">Заявка получена</h3>
                <p className="mt-3 max-w-[40ch] text-base leading-relaxed text-ink-muted">
                  Спасибо! Мастер завода свяжется с вами в течение двух
                  рабочих дней. Срочно? Пишите на{" "}
                  <a href="mailto:hello@zavodtarusa.art" className="font-semibold text-brand-700">
                    hello@zavodtarusa.art
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-[15px] font-semibold transition-colors hover:bg-surface-moderate"
                >
                  Отправить ещё одну
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-6" noValidate={false}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="t-caption font-medium uppercase tracking-[0.12em] text-ink-muted">
                      Имя *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      maxLength={120}
                      placeholder="Как к вам обращаться"
                      className="h-12 rounded-xl border border-input bg-background px-4 text-base outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 placeholder:text-ink-disabled"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="t-caption font-medium uppercase tracking-[0.12em] text-ink-muted">
                      Почта *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={160}
                      placeholder="you@example.com"
                      className="h-12 rounded-xl border border-input bg-background px-4 text-base outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 placeholder:text-ink-disabled"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <label htmlFor="topic" className="t-caption font-medium uppercase tracking-[0.12em] text-ink-muted">
                    Тема запроса
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    defaultValue={TOPICS[0]}
                    className="h-12 rounded-xl border border-input bg-background px-4 text-base outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
                  >
                    {TOPICS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-2">
                  <label htmlFor="message" className="t-caption font-medium uppercase tracking-[0.12em] text-ink-muted">
                    О проекте *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={2000}
                    rows={6}
                    placeholder="Что хотите сделать: партия чайников для магазина, посуда под меню ресторана или мастер-класс для команды? Есть ли референсы и сроки?"
                    className="rounded-xl border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 placeholder:text-ink-disabled resize-y"
                  />
                </div>

                {status === "error" && error && (
                  <p role="alert" className="rounded-xl bg-danger-surface border border-danger-border px-4 py-3 text-[15px] text-neutral-950">
                    {error} Попробуйте ещё раз или напишите на{" "}
                    <a href="mailto:hello@zavodtarusa.art" className="font-semibold underline">
                      hello@zavodtarusa.art
                    </a>
                    .
                  </p>
                )}

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="t-caption text-ink-muted max-w-[36ch]">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-semibold text-neutral-50 transition-colors hover:bg-brand-500 hover:text-ink disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {status === "loading" ? (
                      <>
                        Отправляем
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                      </>
                    ) : (
                      <>
                        Отправить заявку
                        <ArrowUpRight className="h-5 w-5" aria-hidden />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
