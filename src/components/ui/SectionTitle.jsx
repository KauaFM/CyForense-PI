import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ 
  title, 
  subtitle,
  className = '',
  highlight = '',
  centered = true 
}) => {
  const titleWords = title.split(' ');
  const highlightedTitle = titleWords.map((word, index) => 
    word === highlight ? 
      <span key={index} className="text-cyan-400">{word}</span> : 
      <span key={index}>{word} </span>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 className="text-4xl font-bold text-white mb-4">
        {highlightedTitle}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;