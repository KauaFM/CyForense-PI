import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';

const History = () => {
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
              title="Our Journey"
              centered={false}
              highlight="Journey"
            />
            <div className="space-y-6 text-gray-400">
              <p>
                Founded in 2015, CyForense emerged from a vision to revolutionize
                digital forensics and cybersecurity. Our founders, with decades of
                combined experience in cybersecurity, recognized the need for a more
                comprehensive and innovative approach to digital security.
              </p>
              <p>
                Over the years, we've grown from a small team of dedicated experts
                to a leading force in the cybersecurity industry, serving clients
                across the globe and protecting critical digital assets from
                ever-evolving threats.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-4 border-cyan-400 rounded-full animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default History;