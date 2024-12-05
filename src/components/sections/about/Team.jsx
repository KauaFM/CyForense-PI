import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Diretor Executivo",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    bio: "Com mais de 15 anos em segurança cibernética, Sarah lidera nossa visão estratégica e operações.",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "James Wilson",
    role: "Diretor Técnico",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    bio: "Pioneira em análise forense digital com múltiplas patentes em tecnologia de segurança cibernética.",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Dr. Emily Chen",
    role: "Chefe de Pesquisa",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    bio: "Liderando nossas iniciativas de pesquisa em detecção e prevenção avançada de ameaças.",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-gray-900">
      <Container>
        <SectionTitle
          title="Conheça nossa equipe"
          subtitle="Os especialistas por trás de nossas soluções de segurança cibernética"
          highlight="Team"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 text-sm mb-4">{member.role}</p>
                <p className="text-gray-400 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;