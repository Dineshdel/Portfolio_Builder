import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding templates...');

  const templates = [
    {
      name: 'Minimalist Developer',
      slug: 'minimalist-developer',
      category: 'Developer',
      description: 'A clean, typography-driven portfolio for developers who want their code to speak for itself.',
      isPremium: false,
      isActive: true,
    },
    {
      name: 'Creative Agency',
      slug: 'creative-agency',
      category: 'Designer',
      description: 'Bold colors and dynamic animations for creative professionals and agencies.',
      isPremium: true,
      isActive: true,
    },
    {
      name: 'Executive Professional',
      slug: 'executive-professional',
      category: 'Business',
      description: 'A traditional, structured layout perfect for executives and consultants.',
      isPremium: false,
      isActive: true,
    },
  ];

  for (const t of templates) {
    await prisma.template.upsert({
      where: { slug: t.slug },
      update: {},
      create: t,
    });
  }

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
