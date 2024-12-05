interface FormData {
    name: string;
    email: string;
    message: string;
  }
  
  export const validateForm = (data: FormData): Partial<FormData> => {
    const errors: Partial<FormData> = {};
  
    if (!data.name.trim()) {
      errors.name = 'Nome é obrigatório';
    }
  
    if (!data.email.trim()) {
      errors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Email inválido';
    }
  
    if (!data.message.trim()) {
      errors.message = 'Mensagem é obrigatória';
    } else if (data.message.length < 10) {
      errors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }
  
    return errors;
  };