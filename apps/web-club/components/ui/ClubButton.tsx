'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface ClubButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const ClubButton = forwardRef<HTMLButtonElement, ClubButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          // Base styles
          'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          
          // Variants
          {
            'bg-club-accent text-white hover:bg-club-accent-hover focus-visible:ring-club-accent': variant === 'primary',
            'bg-club-glass-medium backdrop-blur-sm text-white border border-club-border hover:bg-club-glass-light hover:border-club-accent focus-visible:ring-club-accent': variant === 'secondary',
            'text-club-text-secondary hover:text-club-text-primary hover:bg-club-glass-light focus-visible:ring-club-accent': variant === 'ghost',
          },
          
          // Sizes
          {
            'px-3 py-2 text-sm': size === 'sm',
            'px-4 py-2.5 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ClubButton.displayName = 'ClubButton';