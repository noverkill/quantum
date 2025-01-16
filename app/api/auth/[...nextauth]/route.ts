// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
secret: process.env.NEXTAUTH_SECRET as string,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        if (credentials && credentials.email === 'demo@example.com' && credentials.password === 'demo123') {
          return { id: '1', name: 'Demo User', email: 'demo@example.com' };
        }
        return null;
      }
    })
  ],
  session: {
    strategy: 'jwt' as 'jwt',
  },
  pages: {
    signIn: '/',
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
