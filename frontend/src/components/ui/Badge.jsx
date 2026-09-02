import React from 'react';
import PropTypes from 'prop-types';

export default function Badge({ children, variant = 'primary-soft', pill = true, size = 'md', className = '', ...props }) {
  // Define standard variant styles
  const variants = {
    'primary-soft': 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',
    'body-tertiary': 'bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
  };

  const variantClass = variants[variant] || variants['primary-soft'];
  const shapeClass = pill ? 'rounded-full' : 'rounded-md';
  const sizeClass = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3.5 py-1.5 text-sm';

  return (
    <span
      className={`inline-block font-medium ${variantClass} ${shapeClass} ${sizeClass} ${className}`}
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
