import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';

const Mission = () => {
  return (
    <section className="py-20 bg-gray-900">
      <Container>
        <SectionTitle
          title="Missão e Visão"
          subtitle="Nosso propósito e aspirações no cenário da segurança cibernética  "
          highlight="Vision"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Nossa Missão</h3>
            <p className="text-gray-400">
            “Para proteger os dados e garantir a integridade digital de uma forma cada vez mais
              mundo conectado, fornecendo soluções de segurança cibernética de ponta e
              orientação especializada para organizações de todos os tamanhos."
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Nossa Visão</h3>
            <p className="text-gray-400">
            “Ser referência global em segurança cibernética, liderando inovações
              e melhores práticas no setor, promovendo ao mesmo tempo um ambiente digital mais seguro
              mundo para todos."
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Mission;