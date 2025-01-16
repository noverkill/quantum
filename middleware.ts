// app/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  // Get the token from the request
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Define the paths that require authentication
  const protectedPaths = ['/blog'];

  // Check if the request is for a protected path
  if (protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
    // If the user is not authenticated, redirect to the front page
    if (!token) {
      console.log('Redirecting to front page due to missing token');
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/blog/:path*'], // Apply middleware to the blog path
};
