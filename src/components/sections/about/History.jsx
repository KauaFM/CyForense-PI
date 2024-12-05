import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';

const History = () => {
  return (
    <section className="py-20 bg-gray-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              title="Nossa jornada"
              centered={false}
              highlight="Journey"
            />
            <div className="space-y-6 text-gray-400">
              <p>
              Fundada em 2015, a CyForense surgiu de uma visão para revolucionar
                análise forense digital e segurança cibernética. Nossos fundadores, com décadas de
                experiência combinada em segurança cibernética, reconheceu a necessidade de uma abordagem mais
                abordagem abrangente e inovadora à segurança digital.
              </p>
              <p>
              Ao longo dos anos, crescemos a partir de uma pequena equipe de especialistas dedicados
                para uma força líder no setor de segurança cibernética, atendendo clientes
                em todo o mundo e protegendo ativos digitais críticos de
                ameaças em constante evolução.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-4 border-cyan-400 rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default History;