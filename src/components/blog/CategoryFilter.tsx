import React from 'react';
import { Category } from '../../types/blog';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
          selectedCategory === null
            ? 'bg-cyan-500 text-black'
            : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
        }`}
      >
        Todos
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.slug)}
          className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
            selectedCategory === category.slug
              ? 'bg-cyan-500 text-black'
              : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;