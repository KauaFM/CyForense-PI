import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import { BlogPost } from '../../types/blog';  // Certifique-se de que a interface BlogPost esteja definida em types/blog
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  // Função para formatar a data
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
    >
      <Link to={`/blog/${post.id}`}>
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-500 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center text-gray-400 text-sm">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime} min
            </div>
          </div>

          <h2 className="text-xl font-semibold text-white mb-2 hover:text-cyan-500 transition-colors">
            {post.title}
          </h2>

          <p className="text-gray-400 mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {post.author}
            </div>
            <time>{formatDate(post.date)}</time>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
