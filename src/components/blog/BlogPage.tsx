import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';
import { blogPosts, categories } from '../../data/blogPosts';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter((post) => {
        const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
        const matchesSearch =
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-purple-600/10" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Fique por dentro das últimas novidades e aprenda mais sobre segurança cibernética
          </p>
        </motion.div>

        <div className="mb-8 space-y-6">
          <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredPosts.map((post, index) => (
    <BlogCard key={post.id} post={post} index={index} />
  ))}
</div>


        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">Nenhum artigo encontrado.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
