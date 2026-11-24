import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

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

    const saved = await db.contactRequest.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        topic: parsed.data.topic,
        message: parsed.data.message,
      },
    });

    return NextResponse.json({ ok: true, id: saved.id }, { status: 201 });
  } catch (error) {
    console.error("POST /api/contact failed:", error);
    return NextResponse.json(
      { ok: false, error: "Сервер не отвечает. Попробуйте позже." },
      { status: 500 }
    );
  }
}
