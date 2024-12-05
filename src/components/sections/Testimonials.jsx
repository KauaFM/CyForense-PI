import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const testimonials = [
  {
    name: "John Smith",
    role: "CTO, TechCorp",
    content: "CyForense's expertise in digital forensics helped us identify and resolve a critical security breach. Their team's professionalism and quick response time were outstanding.",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Sarah Johnson",
    role: "Security Director, DataSafe",
    content: "Working with CyForense has significantly improved our security posture. Their training programs are comprehensive and their support is unmatched.",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Michael Chen",
    role: "CEO, SecureNet",
    content: "CyForense's security consulting services have been invaluable to our organization. They provide practical solutions that align with our business goals.",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-800">
      <Container>
        <SectionTitle
          title="Client Testimonials"
          subtitle="What our clients say about our cybersecurity services"
          highlight="Testimonials"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;