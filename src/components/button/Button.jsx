/* eslint-disable react/prop-types */
import  { useState } from 'react';
// import './style.css'; // Assuming this contains the ripple effect CSS

const colorClasses = {
  primary: 'text-white bg-primary-red border-primary shadow-md shadow-primary/50 hover:bg-primary-black disabled:bg-gray-300 disabled:border-gray-400 disabled:text-gray-400 disabled:shadow-none',
  secondary: 'text-white bg-secondary border-secondary shadow-md shadow-secondary/50 hover:bg-secondary-dark disabled:bg-gray-300 disabled:border-gray-400 disabled:text-gray-400 disabled:shadow-none',
  error: 'text-white bg-error border-error shadow-md shadow-error/50 hover:bg-error-dark disabled:bg-gray-300 disabled:border-gray-400 disabled:text-gray-400 disabled:shadow-none',
  success: 'text-white bg-success border-success shadow-md shadow-success/50 hover:bg-success-dark disabled:bg-gray-300 disabled:border-gray-400 disabled:text-gray-400 disabled:shadow-none',
  info: 'text-white bg-info border-info shadow-md shadow-info/50 hover:bg-info-dark disabled:bg-gray-300 disabled:border-gray-400 disabled:text-gray-400 disabled:shadow-none',
};

const variantClasses = {
  filled: 'border-transparent',
  ghost: 'bg-transparent hover:bg-opacity-10 disabled:bg-transparent disabled:text-gray-400',
  default: 'bg-opacity-0 disabled:bg-transparent disabled:text-gray-400',
  outline: 'bg-transparent border hover:border-gray-500 disabled:border-gray-400 disabled:text-gray-400',
};

function Button({
  children,
  color = 'primary',
  variant = 'filled',
  disabled = false,
  className = '',
  ...props
}) {


  
  const baseClasses = 'px-4 py-1.5 rounded-md transition-all duration-150 ease-in-out relative overflow-hidden text-center font-semibold';

  return (
    <button
      type="button"
      className={`‍‍‍${baseClasses} ${className} ${colorClasses[color]} ${variantClasses[variant]}‍‍‍‍‍` }
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;