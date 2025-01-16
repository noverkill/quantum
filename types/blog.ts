// types/blog.ts

export interface ContentBlock {
  type: 'text' | 'image';
  content: string;
}

export interface Post {
  id: string;
  title: string;
  content: ContentBlock[];
  author: {
    name: string;
    avatar: string;
  }
  publishedAt: string,
  tags: string[],
  readingTime: number
}
