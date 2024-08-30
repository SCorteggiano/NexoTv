import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "select_account", // Fuerza la selección de cuenta
        },
      },
    }),
  ],
  pages: {
    error: "/auth/error",
    signIn: "/auth/signin"
  },
});
