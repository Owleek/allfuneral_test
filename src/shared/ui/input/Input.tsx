import type { InputHTMLAttributes } from 'react';
import cn from 'classnames';
import './Input.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export function Input({ 
  error, 
  label, 
  className = '', 
  id,
  ...props 
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={cn('Input', { 'Input--error': error }, className)}>
      {label && (
        <label htmlFor={inputId} className="Input__label">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className="Input__field"
        {...props}
      />
      {error && (
        <p className="Input__error">{error}</p>
      )}
    </div>
  );
}