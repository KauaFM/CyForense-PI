import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  title, 
  description, 
  icon: Icon,
  className = '' 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow ${className}`}
    >
      {Icon && (
        <div className="text-cyan-400 mb-4">
          <Icon size={24} />
        </div>
      )}
      <h3 className="text-xl font-semibold text-cyan-400 mb-4">
        {title}
      </h3>
      <p className="text-gray-400">
        {description}
      </p>
    </motion.div>
  );
};

export default Card;