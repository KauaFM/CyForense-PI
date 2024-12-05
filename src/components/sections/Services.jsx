import React from 'react';
import { FaShieldAlt, FaSearch, FaUserLock, FaGraduationCap } from 'react-icons/fa';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const services = [
  {
    id: 1,
    title: "Proteção contra ameaças",
    description: "Proteção avançada contra ameaças cibernéticas utilizando tecnologia de ponta e monitoramento proativo.",
    icon: FaShieldAlt
  },
  {
    id: 2,
    title: "Auditoria de segurança",
    description: "Avaliação abrangente da sua infraestrutura digital para identificar e resolver vulnerabilidades.",
    icon: FaSearch
  },
  {
    id: 3,
    title: "Consultoria de Segurança",
    description: "Orientação especializada sobre a implementação de medidas de segurança robustas e melhores práticas.",
    icon: FaUserLock
  },
  {
    id: 4,
    title: "Treinamento de segurança",
    description: "Programas educacionais para ajudar sua equipe a compreender e implementar as melhores práticas de segurança.",
    icon: FaGraduationCap
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-900">
      <Container>
        <SectionTitle
          title="Nossos serviços de segurança"
          subtitle="Soluções abrangentes de segurança cibernética adaptadas às suas necessidades"
          highlight="Segurança"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
