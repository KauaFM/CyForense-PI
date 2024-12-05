import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'cyforense@gmail.com',
      href: 'mailto:contato@cyforense.com',
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 (61) 9 9842-5929',
      href: 'tel:+5511999999999',
    },
    {
      icon: MapPin,
      label: 'Endereço',
      value: 'Brasilia-DF',
      href: 'https://www.google.com/maps/place/Bras%C3%ADlia,+Brasilia+-+Federal+District/@-15.7215488,-47.9373578,11z/data=!3m1!4b1!4m6!3m5!1s0x935a3d18df9ae275:0x738470e469754a24!8m2!3d-15.7975154!4d-47.8918874!16zL20vMDFoeV8?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/company/cyforense',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/cyforense',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-8"
    >
      <div className="space-y-6">
        {contactDetails.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 text-gray-300 hover:text-cyan-500 transition-colors duration-200"
          >
            <contact.icon className="w-6 h-6" />
            <div>
              <p className="text-sm text-gray-400">{contact.label}</p>
              <p className="text-lg">{contact.value}</p>
            </div>
          </a>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Redes Sociais</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 rounded-lg text-gray-300 hover:text-cyan-500 hover:bg-gray-800 transition-all duration-200"
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;