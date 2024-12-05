import { BlogPost, Category } from '../types/blog';

export const categories: Category[] = [
  { id: '1', name: 'Dicas', slug: 'dicas' },
  { id: '2', name: 'Notícias', slug: 'noticias' },
  { id: '3', name: 'Tendências', slug: 'tendencias' },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Como proteger sua empresa contra ransomware',
    excerpt: 'Aprenda as melhores práticas para proteger sua organização contra ataques de ransomware.',
    content: 'Conteúdo completo do post...',
    category: 'dicas',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    author: 'Ana Silva',
    date: '2024-03-10',
    readTime: 5,
  },
  {
    id: '2',
    title: 'Inteligência Artificial na Segurança Cibernética',
    excerpt: 'Como a IA está revolucionando a detecção e prevenção de ameaças.',
    content: 'Conteúdo completo do post...',
    category: 'tendencias',
    imageUrl: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1',
    author: 'Pedro Santos',
    date: '2024-03-08',
    readTime: 7,
  },
  {
    id: '3',
    title: 'Nova vulnerabilidade crítica descoberta',
    excerpt: 'Pesquisadores identificam falha de segurança que afeta milhões de dispositivos.',
    content: 'Conteúdo completo do post...',
    category: 'noticias',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
    author: 'Carlos Mendes',
    date: '2024-03-05',
    readTime: 4,
  },
];