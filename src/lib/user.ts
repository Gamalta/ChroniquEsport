import {getServerSession} from 'next-auth/next';

import {authOptions} from '@/lib/auth';
import {PrismaClient} from '@prisma/client';

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({
    where: {id: session?.user.id},
  });

  return user;
}
