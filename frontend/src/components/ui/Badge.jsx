import React from 'react';
import PropTypes from 'prop-types';

export default function Badge({ children, variant = 'primary-soft', pill = true, size = 'md', className = '', ...props }) {
  // Define standard variant styles
  const variants = {
    'primary-soft': 'bg-primary bg-opacity-10 text-primary',
    'body-tertiary': 'bg-body-tertiary text-body border',
  };

  const variantClass = variants[variant] || variants['primary-soft'];
  const shapeClass = pill ? 'rounded-pill' : 'rounded-2';
  const sizeClass = size === 'sm' ? 'px-2 py-1 fs-7' : 'px-3 py-2 fs-6';

  return (
    <span
      className={`badge ${variantClass} ${shapeClass} fw-normal ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary-soft', 'body-tertiary']),
  pill: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md']),
  className: PropTypes.string,
};
