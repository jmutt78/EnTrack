import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      email: 'alice@example.com',
      role: Role.USER,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'bob@example.com',
      role: Role.SUPERUSER,
    },
  });

  const user3 = await prisma.user.create({
    data: {
      email: 'dave@example.com',
      role: Role.USER,
    },
  });

  console.log({ user1, user2, user3 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
