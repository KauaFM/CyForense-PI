import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-purple-600/10" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Entre em Contato</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estamos prontos para ajudar a proteger seu ambiente digital. 
            Entre em contato conosco para uma consulta personalizada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center md:justify-end">
            <ContactForm />
          </div>
          <div className="flex justify-center md:justify-start">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;