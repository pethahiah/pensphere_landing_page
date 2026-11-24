"use client"

import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'type'> {
  // New props
  variant?: 'primary' | 'ptru' | 'pens' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  // Legacy props for backward compatibility
  label?: string;
  type?: 'button' | 'submit' | 'reset' | 'flat' | 'contained' | 'text' | 'containedBlack';
  btnActionType?: 'submit' | 'reset' | 'button';
  overrideStyle?: React.CSSProperties;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant,
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      label,
      type,
      btnActionType,
      overrideStyle,
      name,
      title,
      onClick,
      ...props
    },
    ref,
  ) => {
    // Map legacy 'type' string to new variants
    let actualVariant = variant || 'primary';
    if (type === 'flat') actualVariant = 'primary';
    if (type === 'contained') actualVariant = 'outline';
    if (type === 'text') actualVariant = 'ghost';

    // Extract actual button action type
    const actualType = btnActionType || (type === 'submit' || type === 'reset' ? type : 'button');

    const variants = {
      primary: 'bg-[#0898a0] text-white hover:bg-[#0898a0]/90 shadow-sm shadow-[#0898a0]/20 focus:ring-[#0898a0]/20 border border-transparent',
      ptru: 'bg-ptru text-white hover:bg-ptru/90 shadow-sm shadow-ptru/20 focus:ring-ptru/20 border border-transparent',
      pens: 'bg-pens text-white hover:bg-pens/90 shadow-sm shadow-pens/20 focus:ring-pens/20 border border-transparent',
      secondary: 'bg-neutral-800 text-white hover:bg-neutral-900 shadow-sm focus:ring-neutral-800/10 border border-transparent',
      outline: 'bg-transparent border border-[#0898a0] text-[#0898a0] hover:bg-[#0898a0]/5 hover:border-[#0898a0] focus:ring-[#0898a0]/20',
      ghost: 'bg-transparent text-[#0898a0] hover:bg-neutral-100 focus:ring-neutral-100 border border-transparent',
      danger: 'bg-red-500 text-white hover:bg-red-600 shadow-sm shadow-red-200 focus:ring-red-100 border border-transparent',
      success: 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-sm shadow-emerald-200 focus:ring-emerald-100 border border-transparent',
    };

    const sizes = {
      sm: 'h-8 px-3 py-2 text-xs',
      md: 'h-10 px-4 py-2 text-sm',
      lg: 'h-12 px-6 py-3 text-base',
      icon: 'h-9 w-10 p-2',
    };

    const baseStyles =
      'inline-flex items-center justify-center rounded-md font-bold transition-all duration-200 focus:outline-none focus:ring-4 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:grayscale-[0.5] overflow-hidden truncate whitespace-nowrap';

    const content = children || label;

    return (
      <button
        ref={ref}
        type={actualType}
        onClick={onClick}
        name={name}
        title={title}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${variants[actualVariant]} ${sizes[size]} ${className}`}
        style={overrideStyle}
        {...props}
      >
        {isLoading ? (
          <Loader2 className='w-5 h-5 animate-spin' />
        ) : (
          <div className='flex flex-row items-center gap-2'>
            {leftIcon && <span className='shrink-0'>{leftIcon}</span>}
            <span className='truncate'>{content}</span>
            {rightIcon && <span className='shrink-0'>{rightIcon}</span>}
          </div>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
