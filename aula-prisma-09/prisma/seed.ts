import prisma from "../src/database";


async function checkOrCreateDefaultUser() {
  return await prisma.customer.upsert({
    create: {
      firstName: "Joao",
      lastName: "Da Silva",
      document: "12345678" 
    },
    update: {},
    where: {
      document: "12345678"
    }
  })
}


async function main() {
  return checkOrCreateDefaultUser();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })