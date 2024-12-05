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
              Leading the way in digital forensics and cybersecurity solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-cyan-400">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-cyan-400">Services</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-cyan-400">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-cyan-400">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/digital-forensics" className="text-gray-400 hover:text-cyan-400">Digital Forensics</Link></li>
              <li><Link to="/services/incident-response" className="text-gray-400 hover:text-cyan-400">Incident Response</Link></li>
              <li><Link to="/services/security-audit" className="text-gray-400 hover:text-cyan-400">Security Audit</Link></li>
              <li><Link to="/services/training" className="text-gray-400 hover:text-cyan-400">Training</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contact@cyforense.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Cyber Street</li>
              <li>Security Valley, CV 12345</li>
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