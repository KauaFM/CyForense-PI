import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaBell, FaSearch, FaGraduationCap } from 'react-icons/fa';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';

const services = [
  {
    id: 1,
    icon: FaShieldAlt,
    title: "Análise de Vulnerabilidade",
    description: "Análise abrangente do sistema para identificar e avaliar possíveis vulnerabilidades de segurança.",
    features: [
      "Avaliação de segurança de rede",
      "Teste de segurança de aplicativos",
      "Avaliação de infraestrutura",
      "Relatórios de avaliação de risco"
    ]
  },
  {
    id: 2,
    icon: FaBell,
    title: "Resposta a Incidentes",
    description: "Resposta e resolução rápidas para incidentes e violações de segurança cibernética.",
    features: [
     "Resposta de emergência 24 horas por dia, 7 dias por semana",
      "Contenção de ameaças",
      "Avaliação de danos",
      "Planejamento de Recuperação"
    ]
  },
  {
    id: 3,
    icon: FaSearch,
    title: "Perícia Digital",
    description: "Análise especializada e investigação de evidências digitais e incidentes de segurança.",
    features: [
      "Coleta de evidências",
      "Recuperação de dados",
      "Investigação de Incidentes",
      "Testemunho de Especialista"
    ]
  },
  {
    id: 4,
    icon: FaGraduationCap,
    title: "Treinamento de segurança",
    description: "Programas abrangentes de educação em segurança para organizações e equipes.",
    features: [
      "Treinamento de Conscientização sobre Segurança",
      "Prevenção de Phishing",
      "Workshop de Melhores Práticas",
      "Treinamento de Conformidade"
    ]
  }
];

const ServiceCard = ({ icon: Icon, title, description, features, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
  >
    <div className="flex items-center mb-4">
      <div className="p-3 bg-cyan-500/10 rounded-lg mr-4">
        <Icon className="text-cyan-400 text-2xl" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-400 mb-6">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-300">
          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2" />
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

const ServicesList = () => {
  return (
    <section className="py-20 bg-gray-900">
      <Container>
        <SectionTitle
          title="Nossos serviços de segurança"
          subtitle="Soluções abrangentes para proteger seus ativos digitais"
          highlight="Segurança"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesList;
