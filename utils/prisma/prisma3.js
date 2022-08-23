
import {PrismaClient as PrismaClient3} from '../../prisma/clients/client3'

  export const prisma3 = global.prisma3 ||
  new PrismaClient3({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') global.prisma3 = prisma3