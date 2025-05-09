import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers:  [
    
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user }) {
      const isAllowedToSignIn = true
      const allowedEmail = process.env.ALLOWED_EMAIL;

      if (isAllowedToSignIn) {
        return user.email == allowedEmail;
      } else {
        // Return false to display a default error message
        return false
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    }
  }
}