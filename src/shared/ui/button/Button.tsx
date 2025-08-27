import type { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import './Button.scss';


const buttonVariantClass = {
  filled: 'Button--filled',
  outlined: 'Button--outlined',
};

export type ButtonVariant = keyof typeof buttonVariantClass;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function Button({ 
  variant, 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {

  return (
    <button
      className={cn('Button', variant ? buttonVariantClass[variant] : '', className)}
      {...props}
    >
      {children}  
    </button>
  );
}
