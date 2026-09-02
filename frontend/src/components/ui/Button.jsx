import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  children,
  variant = 'primary',
  size = 'lg',
  className = '',
  component: Component = 'button',
  ...props
}) {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg btn-glow',
    'outline-primary': 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:shadow-lg',
    'outline-adaptive': 'border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-slate-900 hover:-translate-y-1 hover:shadow-lg',
  };

  const variantClass = variants[variant] || '';
  const sizeClass = size === 'sm' ? 'text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2' : size === 'lg' ? 'text-base sm:text-lg px-6 py-2.5 sm:px-8 sm:py-3' : 'text-sm sm:text-base px-5 py-2 sm:px-6 sm:py-2.5';

  return (
    <Component
      className={`inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 shadow-sm ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'outline-primary', 'outline-adaptive', 'custom']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  component: PropTypes.elementType,
};
