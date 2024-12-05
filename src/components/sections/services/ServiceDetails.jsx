import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';

const serviceDetails = [
  {
    id: 1,
    title: "Equipe de especialistas",
    description: "Nossos profissionais certificados trazem décadas de experiência combinada em segurança cibernética."
  },
  {
    id: 2,
    title: "Tecnologia Avançada",
    description: "Utilizamos ferramentas e metodologias de ponta para garantir proteção abrangente."
  },
  {
    id: 3,
    title: "Suporte 24h por dia",
    description: "Monitoramento e suporte 24 horas por dia para responder a incidentes de segurança."
  }
];

const DetailCard = ({ title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="bg-gray-900 p-6 rounded-lg"
  >
    <h3 className="text-xl font-bold text-cyan-400 mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const ServiceDetails = () => {
  return (
    <section className="py-20 bg-gray-800">
      <Container>
        <SectionTitle
          title="Por que escolher nossos serviços"
          subtitle="Soluções especializadas apoiadas por anos de experiência"
          highlight="Services"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceDetails.map((item, index) => (
            <DetailCard
              key={item.id}
              title={item.title}
              description={item.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServiceDetails;
