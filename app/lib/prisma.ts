import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["error"], // Esto te ayudará a ver errores reales en los logs de Vercel
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;