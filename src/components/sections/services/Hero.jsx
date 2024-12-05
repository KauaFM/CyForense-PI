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
            Nossos <span className="text-cyan-400">Serviços</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Soluções abrangentes de segurança cibernética projetadas para proteger seus ativos digitais
          e mantenha sua postura de segurança em um cenário de ameaças em constante evolução.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero; // Exportação padrão
