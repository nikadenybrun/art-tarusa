import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Ленивая инициализация: клиент создаётся при первом запросе, а не при импорте
// модуля. Так сборка проекта не падает, даже если DATABASE_URL ещё не задан.
export function getDb(): PrismaClient {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({
      log: ['query'],
    })
  }
  return globalForPrisma.prisma
}
