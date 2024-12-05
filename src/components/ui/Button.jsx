import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button'
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-200";
  const variants = {
    primary: "bg-cyan-500 hover:bg-cyan-600 text-white",
    secondary: "bg-purple-500 hover:bg-purple-600 text-white",
    outline: "border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white"
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;