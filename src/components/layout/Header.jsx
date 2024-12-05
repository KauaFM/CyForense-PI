import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-black/90 backdrop-blur-sm text-white z-50"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-cyan-400">
            CyForense
          </Link>
          
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="hover:text-cyan-400 transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-cyan-400 transition-colors">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-cyan-400 transition-colors">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-cyan-400 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-cyan-400 transition-colors">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;