import { PrismaClient, User } from '@prisma/client'
import prisma from '.'

const db: User[] = [
  {
    username: 'John Doe',
    id: '12345',
    createdAt: new Date(),
    updatedAt: new Date(),
    today: '',
    memory: []
  }
]

const prismaMock: Partial<PrismaClient> = {
  ...prisma,
  user: {
    ...prisma.user,
    create: jest.fn().mockImplementation((args) => {
      const user = {
        username: args.data.username,
        id: '54321',
        createdAt: new Date(),
        updatedAt: new Date(),
        today: '',
        memory: []
      }
      db.push(user)
      return user
    }),
    findMany: jest.fn().mockResolvedValue(db),
    findUnique: jest.fn().mockImplementation((args) => {
      const user = db.find((user) => user.id === args.where.id)
      return user || null
    }),
    update: jest.fn().mockImplementation((args) => {
      const user = db.find((user) => user.id === args.where.id)
      if (user) {
        user.username = args.data.username
        return user
      }
      return null
    }),
    delete: jest.fn().mockImplementation((args) => {
      const index = db.findIndex((user) => user.id === args.where.id)
      if (index !== -1) {
        const user = db[index]
        db.splice(index, 1)
        return user
      }
      return null
    })
  }
}

export default prismaMock as PrismaClient