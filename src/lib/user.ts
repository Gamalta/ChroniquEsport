'use server';

import {getServerSession} from 'next-auth/next';

import {authOptions} from '@/lib/auth';
import {PrismaClient} from '@prisma/client';
import {hashPassword} from './utils';

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({
    where: {id: session?.user.id},
  });

  return user;
}

export async function Signup(user: string, email: string, password: string) {
  const prisma = new PrismaClient();
  const result = await prisma.user.create({
    data: {
      name: user,
      email,
      password: hashPassword(password),
    },
  });
}
