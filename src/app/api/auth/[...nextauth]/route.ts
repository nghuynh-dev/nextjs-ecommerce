import { prisma } from "@/lib/db/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
// @ts-ignore
import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { env } from "@/lib/env";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }