import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";


// adapter
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
})


// global prisma 
const Globalprisma = globalThis as unknown as  {
    prisma?: PrismaClient
}

//prisma

export const prisma = 
    Globalprisma.prisma ?? new PrismaClient({adapter})

if (process.env.NODE_ENV !== "production") {
  Globalprisma.prisma = prisma
}


export default prisma