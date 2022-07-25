
import { PrismaClient as PrismaClient1} from '../../prisma/clients/client1'

export const prisma = global.prisma ||
  new PrismaClient1({
    log: ['query'],
  })


if (process.env.NODE_ENV !== 'production') global.prisma = prisma