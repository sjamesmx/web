'use client';

interface LogoProps {
  variant?: 'club' | 'player';
  className?: string;
}

export const Logo = ({ variant = 'club', className = '' }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/Padelyzer-Logo-Blanco.png" 
        alt="Padelyzer" 
        className="h-8 w-auto"
      />
    </div>
  );
};