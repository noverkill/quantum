// pages/api/posts.ts

import { NextResponse } from 'next/server';
import { posts } from "@/data/posts";
export async function GET() {
    const response = NextResponse.json(posts);
    response.headers.set('Cache-Control', 'no-store');
    return response;
}
