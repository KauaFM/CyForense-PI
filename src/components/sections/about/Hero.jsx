import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../ui/Container';

const Hero = () => {
  return (
    <section className="relative py-32 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
      <div className="absolute inset-0 bg-black/50" />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-cyan-400">CyForense</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Leading the way in digital forensics and cybersecurity with expertise,
            innovation, and unwavering commitment to your security.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;