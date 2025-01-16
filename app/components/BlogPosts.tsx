// app/blog/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { Post } from '../../types/blog';

export default function BlogPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/blog');
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
      <ul>
        {posts.map((post) => (
            <li key={post.id} className="mb-4 flex items-center">
                <img src={post.author.avatar} alt={`${post.author.name}'s avatar`} className="w-10 h-10 rounded-full mr-4" />
                <div>
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-gray-600">by {post.author.name}</p>
                </div>
            </li>
        ))}
      </ul>
  );
}
