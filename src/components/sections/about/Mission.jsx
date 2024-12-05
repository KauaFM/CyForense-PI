import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';

const Mission = () => {
  return (
    <section className="py-20 bg-gray-900">
      <Container>
        <SectionTitle
          title="Mission & Vision"
          subtitle="Our purpose and aspirations in the cybersecurity landscape"
          highlight="Vision"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Mission</h3>
            <p className="text-gray-400">
              "To protect data and guarantee digital integrity in an increasingly
              connected world, providing cutting-edge cybersecurity solutions and
              expert guidance to organizations of all sizes."
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Our Vision</h3>
            <p className="text-gray-400">
              "To be the global reference in cybersecurity, leading innovations
              and best practices in the sector while fostering a safer digital
              world for all."
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Mission;