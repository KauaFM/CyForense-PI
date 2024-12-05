import React from 'react';
import { FaShieldAlt, FaBell, FaUserShield } from 'react-icons/fa';
import Card from '../ui/Card';
import Container from '../ui/Container';

const features = [
  {
    title: "Perícia Digital",
    description: "Análise especializada e recuperação de evidências digitais usando ferramentas e metodologias de última geração.",
    icon: FaShieldAlt
  },
  {
    title: "Resposta a Incidente",
    description: "Equipe de resposta a emergências 24 horas por dia, 7 dias por semana, pronta para lidar e mitigar incidentes de segurança cibernética.",
    icon: FaBell
  },
  {
    title: "Consultoria de Segurança",
    description: "Avaliações de segurança abrangentes e soluções personalizadas para sua organização.",
    icon: FaUserShield
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-900">
      <Container>
        <h2 className="text-4xl font-bold text-center text-white mb-12">
        Por que escolher <span className="text-cyan-400">CyForense</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              {...feature}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;