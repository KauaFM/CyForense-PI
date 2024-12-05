import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-900 to-purple-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Digital Assets?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a comprehensive security assessment and learn how we can protect your organization.
          </p>
          <div className="flex justify-center gap-4">
            <Button to="/contact" variant="primary">
              Get Started
            </Button>
            <Button to="/services" variant="outline">
              Learn More
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CallToAction;