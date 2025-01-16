// data/posts.ts

import { Post } from '../types/blog';

export const posts: Post[] = [
  {
    id: '1',
    title: 'Understanding Modern Web Architecture',
    content: [
      {
        type: 'text',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        type: 'image',
        content: 'https://picsum.photos/800/400?random=1'
      },
      {
        type: 'text',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    ],
    author: {
      name: 'Sarah Chen',
      avatar: 'https://i.pravatar.cc/150?u=sarah'
    },
    publishedAt: '2024-03-15T09:00:00Z',
    tags: ['architecture', 'web-development', 'frontend'],
    readingTime: 5
  },
  {
    id: '2',
    title: 'The Future of JavaScript Frameworks',
    content: [
      {
      type: 'text',
      content: 'Duis aute irure dolor in reprehenderit in oluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        type: 'image',
        content: 'https://picsum.photos/800/400?random=2'
      },
      {
        type: 'text',
        content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est la borum.'
      }
    ],
    author: {
      name: 'Marcus Rodriguez',
      avatar: 'https://i.pravatar.cc/150?u=marcus'
    },
    publishedAt: '2024-03-14T10:30:00Z',
    tags: ['javascript', 'frameworks', 'frontend'],
    readingTime: 7
  },
  {
    id: '3',
    title: 'Building Scalable APIs',
    content: [
      {
        type: 'text',
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
      },
      {
        type: 'image',
        content: 'https://picsum.photos/800/400?random=3'
      },
      {
        type: 'text',
        content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magnidolores.'
      }
      ],
      author: {
      name: 'Alex Kim',
      avatar: 'https://i.pravatar.cc/150?u=alex'
      },
      publishedAt: '2024-03-13T14:20:00Z',
      tags: ['backend', 'api', 'scaling'],
      readingTime: 6
  }
];
