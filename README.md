# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## How to use
npm run build OR next build : Create production build
npm run dev OR next dev : Create development build

## Tools Being Used: 
NextJS, TailwindCSS, Prisma 

# Prisma
npx prisma : View Prisma CLI functionality
npx prisma db pull : Pull the latest schema from the database
npx prisma generate : Generate Prisma Client based on MYSQL database schema. Necessary before using new Model.
npx prisma db pull --schema prisma/schema1.prisma : Pull the latest schema from the database to ORM. 