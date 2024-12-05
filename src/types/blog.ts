export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    imageUrl: string;
    author: string;
    date: string;
    readTime: number;
  }
  
  export type Category = {
    id: string;
    name: string;
    slug: string;
  };