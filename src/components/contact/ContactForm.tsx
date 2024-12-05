import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { validateForm } from '../../utils/validation';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors extends Partial<FormData> {
  server?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);  // Para gerenciar o estado de envio
  const [successMessage, setSuccessMessage] = useState('');  // Para mensagem de sucesso

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length === 0) {
      // Exibe carregamento
      setLoading(true);

      try {
        const response = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setSuccessMessage('Formulário enviado com sucesso!');
          setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
          setErrors({});
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            server: data.error || 'Erro desconhecido',
          }));
        }
      } catch (error) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          server: 'Erro ao enviar o formulário. Tente novamente mais tarde.',
        }));
      } finally {
        setLoading(false);  // Desativa o carregamento
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpa o erro quando o usuário começa a digitar
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-md"
    >
      {/* Nome */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md bg-gray-900 border ${
            errors.name ? 'border-red-500' : 'border-gray-700'
          } px-4 py-2 text-gray-100 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500`}
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md bg-gray-900 border ${
            errors.email ? 'border-red-500' : 'border-gray-700'
          } px-4 py-2 text-gray-100 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md bg-gray-900 border ${
            errors.message ? 'border-red-500' : 'border-gray-700'
          } px-4 py-2 text-gray-100 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500`}
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      {/* Mensagem de erro do servidor */}
      {errors.server && <p className="mt-1 text-sm text-red-500">{errors.server}</p>}

      {/* Mensagem de sucesso */}
      {successMessage && <p className="mt-1 text-sm text-green-500">{successMessage}</p>}

      {/* Botão de envio */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-200 shadow-lg shadow-cyan-500/25"
      >
        {loading ? 'Enviando...' : <><Send className="w-5 h-5 mr-2" /> Enviar Mensagem</>}
      </button>
    </motion.form>
  );
};

export default ContactForm;
