import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-[#3A4A3E] text-stone-100 hover:bg-[#2A3A2E]',
    outline: 'border border-[#3A4A3E] text-[#3A4A3E] hover:bg-[#3A4A3E] hover:text-stone-100',
  };
  
  return (
    <button 
      className={`px-8 py-3 font-medium transition-all duration-300 rounded-full ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
