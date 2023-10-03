import { prisma } from "@/lib/db/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
// @ts-ignore
import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { env } from "@/lib/env";
import { mergeAnonymousCart } from "@/lib/db/cart";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    session({ session, user}) {
      session.user.id = user.id
      return session
    }
  },
  events: {
    async signIn({ user }) {
      await mergeAnonymousCart(user.id);
    }
  }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }