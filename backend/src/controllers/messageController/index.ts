import { PrismaClient } from "@prisma/client"

class MessageController {
  private prisma: PrismaClient

  constructor(prisma: PrismaClient) {
    this.prisma = prisma
  }

  async get (userId: string) {
    const user = await this.prisma.user.findFirst({ where: { id: userId } })
    if (!user) throw new Error('User not found')

    return user.today
  }

  async select (userId:string, text: string) {
    const user = await this.prisma.user.findFirst({ where: { id: userId } })
    if (!user) throw new Error('User not found')

    return this.prisma.user.update({
      where: { id: userId },
      data: { today: text }
    })
  }

  async post (userId: string, text: string) {
    const user = await this.prisma.user.findFirst({ where: { id: userId } })
    if (!user) throw new Error('User not found')

    await this.prisma.user.update({ where: { id: userId }, data: { memory: [...user.memory, text] } })

    return user
  }
}

export default MessageController