import React from 'react';
import { FaShieldAlt, FaSearch, FaUserLock, FaGraduationCap } from 'react-icons/fa';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const services = [
  {
    id: 1,
    title: "Threat Protection",
    description: "Advanced protection against cyber threats using cutting-edge technology and proactive monitoring.",
    icon: FaShieldAlt
  },
  {
    id: 2,
    title: "Security Auditing",
    description: "Comprehensive assessment of your digital infrastructure to identify and address vulnerabilities.",
    icon: FaSearch
  },
  {
    id: 3,
    title: "Security Consulting",
    description: "Expert guidance on implementing robust security measures and best practices.",
    icon: FaUserLock
  },
  {
    id: 4,
    title: "Security Training",
    description: "Educational programs to help your team understand and implement security best practices.",
    icon: FaGraduationCap
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-900">
      <Container>
        <SectionTitle
          title="Our Security Services"
          subtitle="Comprehensive cybersecurity solutions tailored to your needs"
          highlight="Security"
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
