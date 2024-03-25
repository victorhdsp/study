import { PrismaClient } from "@prisma/client";

class UserController {
  prisma: PrismaClient

  constructor (prisma: PrismaClient) {
    this.prisma = prisma
  }

  async get (userId: string) {
    if (!userId) throw new Error('User ID is required');

    return this.prisma.user.findUnique({ where: { id: userId } })
  }

  async getAll () {
    return this.prisma.user.findMany()
  }

  async post (username: string) {
    if (!username) throw new Error('Username is required');

    const user = await this.prisma.user.create({ data: { username: username } })
    return user
  }

  async put (userId: string, username: string) {
    if (!userId) throw new Error('User ID is required');
    if (!username) throw new Error('Username is required');

    return this.prisma.user.update({
      where: { id: userId },
      data: { username: username }
    })
  }

  async delete (userId: string) {
    if (!userId) throw new Error('User ID is required');
    return this.prisma.user.delete({ where: { id: userId } })
  }
}

export default UserController