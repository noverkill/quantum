// app/blog/page.tsx
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import LogoutButton from '../components/LogoutButton';
import BlogPosts from '../components/BlogPosts';

export default async function Blog() {
  // Check if the user is authenticated
  const session = await getServerSession(authOptions);

  if (!session) {
    // Redirect to the front page if not authenticated
    redirect('/');
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <div className="flex justify-between items-center mb-4">
        <p className="my-4">Welcome {session.user?.name || ''}!</p>
        <LogoutButton />
      </div>
      <BlogPosts />
    </div>
  );
}
