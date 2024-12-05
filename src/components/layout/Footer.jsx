import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-4">CyForense</h3>
            <p className="text-gray-400">
            Liderando o caminho em soluções de análise forense digital e segurança cibernética.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-cyan-400">Sobre nós</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-cyan-400">Serviços</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-cyan-400">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-cyan-400">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><Link to="/services/digital-forensics" className="text-gray-400 hover:text-cyan-400">Perícia Digital</Link></li>
              <li><Link to="/services/incident-response" className="text-gray-400 hover:text-cyan-400">Resposta a Incidentes</Link></li>
              <li><Link to="/services/security-audit" className="text-gray-400 hover:text-cyan-400">Auditoria de segurança</Link></li>
              <li><Link to="/services/training" className="text-gray-400 hover:text-cyan-400">Treinamento</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>cyforense@gmail.com</li>
              <li>+55 (61) 9 9842-5929</li>
              <li>Local Secreto</li>
              <li>Vale da Segurança</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CyForense. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;