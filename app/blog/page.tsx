// app/blog/page.tsx
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import LogoutButton from '../components/LogoutButton';

type Post = {
    id: number;
    title: string;
    body: string;
}

export default async function Blog() {
  // Check if the user is authenticated
  const session = await getServerSession(authOptions);

  if (!session) {
    // Redirect to the front page if not authenticated
    redirect('/');
  }

  console.log("session", session);

  // Fetch blog posts
  const res = await fetch('https://dev.to/api/articles');
  const posts = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <p className="my-4">Welcome {session.user?.name || ''}!</p>
      <LogoutButton />
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id} className="mb-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
