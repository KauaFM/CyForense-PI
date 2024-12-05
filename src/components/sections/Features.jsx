import React from 'react';
import { FaShieldAlt, FaBell, FaUserShield } from 'react-icons/fa';
import Card from '../ui/Card';
import Container from '../ui/Container';

const features = [
  {
    title: "Digital Forensics",
    description: "Expert analysis and recovery of digital evidence using state-of-the-art tools and methodologies.",
    icon: FaShieldAlt
  },
  {
    title: "Incident Response",
    description: "24/7 emergency response team ready to handle and mitigate cyber security incidents.",
    icon: FaBell
  },
  {
    title: "Security Consulting",
    description: "Comprehensive security assessments and customized solutions for your organization.",
    icon: FaUserShield
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-900">
      <Container>
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Why Choose <span className="text-cyan-400">CyForense</span>
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