import {hashPassword} from '@/lib/utils';
import {PrismaClient} from '@prisma/client';
import {NextAuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        name: {
          label: 'Username / Email',
          placeholder: 'example@example.com',
        },
        password: {label: 'Password', type: 'password'},
      },
      async authorize(credentials) {
        if (!credentials?.name || !credentials.password) {
          return null;
        }
        const prisma = new PrismaClient();
        const user = await prisma.user
          .findFirst({
            where: {OR: [{email: credentials.name}, {name: credentials.name}]},
            select: {id: true, name: true, email: true, password: true},
          })
          .then(user => user);

        if (user && user.password === hashPassword(credentials.password)) {
          return {id: user.id, name: user.name, email: user.email};
        }
        return null;
      },
    }),
  ],
  callbacks: {
    session: async ({session, token}) => {
      if (session?.user) {
        session.user.id = token.id;
      }
      return session;
    },
    jwt: async ({user, token}) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};
