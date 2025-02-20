import React from 'react';
import PropTypes from 'prop-types';

const VARIANTS = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-500 text-white',
    success: 'bg-green-500 text-white',
    danger: 'bg-red-500 text-white',
};

const SIZES = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
};

const Button = ({ children, onClick, className, ariaLabel, variant, size }) => {
    const variantClass = VARIANTS[variant] || VARIANTS.primary;
    const sizeClass = SIZES[size] || SIZES.medium;

    return (
        <button
            onClick={onClick}
            className={`rounded ${variantClass} ${sizeClass} ${className} hover:opacity-75 cursor-pointer`}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    ariaLabel: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
    onClick: () => {},
    className: '',
    variant: 'primary',
    size: 'medium',
};
Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    ariaLabel: PropTypes.string.isRequired,
};

export default Button;