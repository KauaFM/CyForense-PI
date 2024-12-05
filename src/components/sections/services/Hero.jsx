import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../ui/Container'; // Verifique se o caminho está correto

const Hero = () => {
  return (
    <section className="relative py-32 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
      <div className="absolute inset-0 bg-black/50" />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions designed to protect your digital assets
            and maintain your security posture in an ever-evolving threat landscape.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero; // Exportação padrão
