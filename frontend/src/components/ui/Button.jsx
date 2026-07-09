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
    primary: 'btn-primary shadow-sm hover-lift',
    'outline-primary': 'btn-outline-primary hover-lift',
    'outline-adaptive': 'btn-outline-dark dark:btn-outline-light hover-lift', // Handled dynamically outside or with CSS
  };

  const variantClass = variants[variant] || '';
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';

  return (
    <Component
      className={`btn ${variantClass} ${sizeClass} rounded-pill px-4 hover-lift ${className}`}
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
