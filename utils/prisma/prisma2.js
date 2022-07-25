
import {PrismaClient as PrismaClient2} from '../../prisma/clients/client2'

  export const prisma2 = global.prisma2 ||
  new PrismaClient2({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') global.prisma2 = prisma2