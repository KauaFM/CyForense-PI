import React from 'react';
import { FaShieldAlt, FaLightbulb, FaHandshake } from 'react-icons/fa';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';
import Card from '../../ui/Card';

const values = [
  {
    title: "Security Commitment",
    description: "We are dedicated to maintaining the highest standards of security and protection for our clients' digital assets.",
    icon: FaShieldAlt
  },
  {
    title: "Constant Innovation",
    description: "We continuously evolve our methods and technologies to stay ahead of emerging cyber threats.",
    icon: FaLightbulb
  },
  {
    title: "Ethics & Transparency",
    description: "We operate with complete transparency and adhere to the highest ethical standards in all our practices.",
    icon: FaHandshake
  }
];

const Values = () => {
  return (
    <section className="py-20 bg-gray-800">
      <Container>
        <SectionTitle
          title="Our Core Values"
          subtitle="The principles that guide our work and relationships"
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