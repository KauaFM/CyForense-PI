import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';

const steps = [
  {
    number: "01",
    title: "Initial Assessment",
    description: "We begin with a thorough evaluation of your current security posture."
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Creating a customized security plan tailored to your needs."
  },
  {
    number: "03",
    title: "Implementation",
    description: "Executing security measures with minimal disruption to your operations."
  },
  {
    number: "04",
    title: "Continuous Monitoring",
    description: "Ongoing surveillance and updates to maintain optimal security."
  }
];

const Process = () => {
  return (
    <section className="py-20 bg-gray-900">
      <Container>
        <SectionTitle
          title="Our Process"
          subtitle="How we implement our security solutions"
          highlight="Process"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-800 p-6 rounded-lg">
                <span className="text-4xl font-bold text-cyan-400/20 absolute top-4 right-4">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-cyan-400/20" />
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;  // Aqui é importante a exportação como 'default'
