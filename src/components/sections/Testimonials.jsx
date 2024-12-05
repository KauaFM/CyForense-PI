import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const testimonials = [
  {
    name: "John Smith",
    role: "CTO, TechCorp",
    content: "A experiência da CyForense em análise forense digital nos ajudou a identificar e resolver uma violação crítica de segurança. O profissionalismo da equipe e o rápido tempo de resposta foram excelentes.",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Sarah Johnson",
    role: "Diretor de Segurança, DataSafe",
    content: "Trabalhar com a CyForense melhorou significativamente nossa postura de segurança. Seus programas de treinamento são abrangentes e seu apoio é incomparável.",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Michael Chen",
    role: "CEO, SecureNet",
    content: "Os serviços de consultoria de segurança da CyForense têm sido inestimáveis ​​para a nossa organização. Eles fornecem soluções práticas que se alinham aos nossos objetivos de negócios.",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-800">
      <Container>
        <SectionTitle
          title="Depoimentos de clientes"
          subtitle="O que nossos clientes dizem sobre nossos serviços de segurança cibernética"
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