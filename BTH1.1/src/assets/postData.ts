// postsData.ts
export interface Post {
  id: number;
  userName: string;
  avatar: string;
  content: string;
  image: string;
  likes: number;
  comments: number;
  shares: number;
}

export const posts: Post[] = [
  {
    id: 1,
    userName: 'John Doe',
    avatar: 'https://i.pravatar.cc/300?img=1',
    content: 'This is a post content!',
    image: 'https://picsum.photos/1080/720?random=1',
    likes: 10,
    comments: 2,
    shares: 1,
  },
  {
    id: 2,
    userName: 'Jane Smith',
    avatar: 'https://i.pravatar.cc/300?img=2',
    content: 'Loving this app!',
    image: 'https://picsum.photos/1080/720?random=2',
    likes: 15,
    comments: 5,
    shares: 3,
  },
  {
    id: 3,
    userName: 'Chris Johnson',
    avatar: 'https://i.pravatar.cc/300?img=3',
    content: 'Enjoying the sunshine!',
    image: 'https://picsum.photos/1080/720?random=3',
    likes: 25,
    comments: 8,
    shares: 4,
  },
  {
    id: 4,
    userName: 'Emily Davis',
    avatar: 'https://i.pravatar.cc/300?img=4',
    content: 'Had a great workout session today!',
    image: 'https://picsum.photos/1080/720?random=4',
    likes: 30,
    comments: 10,
    shares: 5,
  },
  {
    id: 5,
    userName: 'Michael Brown',
    avatar: 'https://i.pravatar.cc/300?img=5',
    content: 'Feeling productive!',
    image: 'https://picsum.photos/1080/720?random=5',
    likes: 40,
    comments: 12,
    shares: 6,
  },
  {
    id: 6,
    userName: 'Jessica Wilson',
    avatar: 'https://i.pravatar.cc/300?img=6',
    content: 'Lovely day for a walk!',
    image: 'https://picsum.photos/1080/720?random=6',
    likes: 20,
    comments: 6,
    shares: 3,
  },
  {
    id: 7,
    userName: 'David Moore',
    avatar: 'https://i.pravatar.cc/300?img=7',
    content: 'Trying out new recipes!',
    image: 'https://picsum.photos/1080/720?random=7',
    likes: 35,
    comments: 9,
    shares: 7,
  },
  {
    id: 8,
    userName: 'Sarah Miller',
    avatar: 'https://i.pravatar.cc/300?img=8',
    content: 'Having fun with friends!',
    image: 'https://picsum.photos/1080/720?random=8',
    likes: 50,
    comments: 20,
    shares: 8,
  },
  {
    id: 9,
    userName: 'Robert Taylor',
    avatar: 'https://i.pravatar.cc/300?img=9',
    content: 'Reading a great book!',
    image: 'https://picsum.photos/1080/720?random=9',
    likes: 18,
    comments: 4,
    shares: 2,
  },
  {
    id: 10,
    userName: 'Megan Anderson',
    avatar: 'https://i.pravatar.cc/300?img=10',
    content: 'Excited for the weekend!',
    image: 'https://picsum.photos/1080/720?random=10',
    likes: 60,
    comments: 25,
    shares: 12,
  },
];

