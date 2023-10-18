'use server';

import {PrismaClient} from '@prisma/client';

export async function getNavigationItems() {
  const prisma = new PrismaClient();
  return await prisma.navigation.findMany();
}
