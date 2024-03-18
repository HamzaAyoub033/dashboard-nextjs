const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    // Check if the Prisma Client is connected to the database
    await prisma.$connect();
    console.log('Connection with the database established.');

    // Query the User table
    // const users = await prisma.user.findMany();
    // console.log('Users:', users);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Disconnect Prisma Client
    await prisma.$disconnect();
  }
}

main();
