import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-cyan-400">Excelência</span>
            <br />
            em <span className="text-cyan-400"></span>
            <br />

            <span className="text-purple-400">CyberSegurança</span> <br />
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Líder do setor em soluções de análise forense digital e segurança cibernética.
          Proteja seus ativos digitais com tecnologia de ponta e análises especializadas.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <Button to="/services" variant="primary" aria-label="View Our Services">
            Nossos Serviços
            </Button>
            <Button to="/contact" variant="secondary" aria-label="Contact Us">
            Contate-nos
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
