import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const Introduction = () => {
  return (
    <section className="py-20 bg-gray-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              title="Protecting Your Digital Future"
              centered={false}
            />
            <p className="text-gray-400 mb-6">
              At CyForense, we understand that in today's digital landscape, security is not just an option – it's a necessity. Our team of expert analysts and security professionals work tirelessly to protect your digital assets and maintain your cybersecurity posture.
            </p>
            <Button to="/about" variant="outline">
              Learn More About Us
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 border-4 border-cyan-400 rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Introduction;