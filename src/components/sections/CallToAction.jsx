import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-900 to-purple-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
          Pronto para proteger seus ativos digitais?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Contate-nos hoje para uma avaliação de segurança abrangente e saiba como podemos proteger sua organização.
          </p>
          <div className="flex justify-center gap-4">
            <Button to="/contact" variant="primary">
            Comece
            </Button>
            <Button to="/services" variant="outline">
            Saber mais
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CallToAction;