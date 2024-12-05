import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Container from '../../ui/Container';
import SectionTitle from '../../ui/SectionTitle';

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Executive Officer",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    bio: "With over 15 years in cybersecurity, Sarah leads our strategic vision and operations.",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "James Wilson",
    role: "Chief Technical Officer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    bio: "A pioneer in digital forensics with multiple patents in cybersecurity technology.",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Dr. Emily Chen",
    role: "Head of Research",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    bio: "Leading our research initiatives in advanced threat detection and prevention.",
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
          title="Meet Our Team"
          subtitle="The experts behind our cybersecurity solutions"
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