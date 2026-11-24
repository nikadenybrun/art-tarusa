import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/db";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(120, "Слишком длинное имя"),
  email: z
    .string()
    .trim()
    .email("Укажите корректную почту")
    .max(160, "Слишком длинный адрес"),
  topic: z
    .string()
    .trim()
    .min(1)
    .max(80, "Слишком длинная тема")
    .optional()
    .default("Сотрудничество"),
  message: z
    .string()
    .trim()
    .min(10, "Расскажите о проекте чуть подробнее (минимум 10 символов)")
    .max(2000, "Сообщение слишком длинное"),
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Отправка заявки в Telegram владельцу. Включается автоматически, если заданы
// переменные окружения TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID (прод-хостинг).
async function sendToTelegram(data: {
  name: string;
  email: string;
  topic: string;
  message: string;
}): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;

  const text = [
    "<b>Новая заявка · zavodtarusa.art</b>",
    "",
    `<b>Тема:</b> ${escapeHtml(data.topic)}`,
    `<b>Имя:</b> ${escapeHtml(data.name)}`,
    `<b>Почта:</b> ${escapeHtml(data.email)}`,
    "",
    escapeHtml(data.message),
  ].join("\n");

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error("Telegram API error:", res.status);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Telegram sendMessage failed:", error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const first = parsed.error.issues[0];
      return NextResponse.json(
        { ok: false, error: first?.message ?? "Проверьте поля формы" },
        { status: 400 }
      );
    }

    // 1) Telegram-уведомление (прод). Не заданы переменные — шаг пропускается.
    const notified = await sendToTelegram(parsed.data);

    // 2) Запись в SQLite (локальный запуск). На хостинге запись в файл
    //    недоступна — это не считается ошибкой, заявка уже ушла в Telegram.
    let savedId: string | null = null;
    try {
      const saved = await getDb().contactRequest.create({
        data: {
          name: parsed.data.name,
          email: parsed.data.email,
          topic: parsed.data.topic,
          message: parsed.data.message,
        },
      });
      savedId = saved.id;
    } catch (dbError) {
      console.error("DB save skipped (expected on hosting):", dbError);
    }

    if (!notified && !savedId) {
      return NextResponse.json(
        { ok: false, error: "Сервер не отвечает. Попробуйте позже." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { ok: true, id: savedId ?? "telegram" },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/contact failed:", error);
    return NextResponse.json(
      { ok: false, error: "Сервер не отвечает. Попробуйте позже." },
      { status: 500 }
    );
  }
}
