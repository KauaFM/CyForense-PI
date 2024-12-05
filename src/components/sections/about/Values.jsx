import React from 'react';
import { FaShieldAlt, FaLightbulb, FaHandshake } from 'react-icons/fa';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';
import Card from '../../ui/Card';

const values = [
  {
    title: "Compromisso de Segurança",
    description: "Nos dedicamos a manter os mais altos padrões de segurança e proteção para os ativos digitais de nossos clientes.",
    icon: FaShieldAlt
  },
  {
    title: "Inovação Constante",
    description: "Evoluímos continuamente nossos métodos e tecnologias para nos mantermos à frente das ameaças cibernéticas emergentes.",
    icon: FaLightbulb
  },
  {
    title: "Ética e Transparência",
    description: "Operamos com total transparência e aderimos aos mais altos padrões éticos em todas as nossas práticas.",
    icon: FaHandshake
  }
];

const Values = () => {
  return (
    <section className="py-20 bg-gray-800">
      <Container>
        <SectionTitle
          title="Nossos Valores Fundamentais"
          subtitle="Os princípios que norteiam nosso trabalho e relacionamentos"
          highlight="Values"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              {...value}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Values;