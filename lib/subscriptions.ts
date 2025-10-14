import { prisma } from "@/lib/prisma"

export async function isActiveSubscriber(userId: string) {
  const sub = await prisma.subscription.findUnique({ where: { userId } })
  return !!sub && sub.status === "active"
}
