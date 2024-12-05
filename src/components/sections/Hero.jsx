import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-cyan-400">Cyber</span> Security
            <br />
            <span className="text-purple-400">Excellence</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Leading the industry in digital forensics and cybersecurity solutions.
            Protect your digital assets with cutting-edge technology and expert analysis.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <Button to="/services" variant="primary" aria-label="View Our Services">
              Our Services
            </Button>
            <Button to="/contact" variant="secondary" aria-label="Contact Us">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
