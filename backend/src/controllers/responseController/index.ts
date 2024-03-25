import { PrismaClient } from "@prisma/client"

class ResponseController {
  private prisma: PrismaClient

  constructor (prisma: PrismaClient) {
    this.prisma = prisma
  }

  get (id: string) {
    return this.prisma.response.findUnique({ where: { id: id } })
  }

  post (userId:string, text: string) {
    return this.prisma.response.create({ data: { userId: userId, text: text } })
  }

  getAllToday () {
    return this.prisma.response.findMany({
      where: { createdAt: { gte: new Date(new Date().setHours(0, 0, 0, 0)) } }
    })
  }
}

export default ResponseController