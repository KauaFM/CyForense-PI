import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaBell, FaSearch, FaGraduationCap } from 'react-icons/fa';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';

const services = [
  {
    id: 1,
    icon: FaShieldAlt,
    title: "Vulnerability Analysis",
    description: "Comprehensive system analysis to identify and assess potential security vulnerabilities.",
    features: [
      "Network Security Assessment",
      "Application Security Testing",
      "Infrastructure Evaluation",
      "Risk Assessment Reports"
    ]
  },
  {
    id: 2,
    icon: FaBell,
    title: "Incident Response",
    description: "Rapid response and resolution for cybersecurity incidents and breaches.",
    features: [
      "24/7 Emergency Response",
      "Threat Containment",
      "Damage Assessment",
      "Recovery Planning"
    ]
  },
  {
    id: 3,
    icon: FaSearch,
    title: "Digital Forensics",
    description: "Expert analysis and investigation of digital evidence and security incidents.",
    features: [
      "Evidence Collection",
      "Data Recovery",
      "Incident Investigation",
      "Expert Testimony"
    ]
  },
  {
    id: 4,
    icon: FaGraduationCap,
    title: "Security Training",
    description: "Comprehensive security education programs for organizations and teams.",
    features: [
      "Security Awareness Training",
      "Phishing Prevention",
      "Best Practices Workshop",
      "Compliance Training"
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
          title="Our Security Services"
          subtitle="Comprehensive solutions to protect your digital assets"
          highlight="Security"
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
