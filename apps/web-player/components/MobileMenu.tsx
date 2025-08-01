'use client';

import { useState } from 'react';
import { EmailIcon, PhoneIcon } from './icons';

export const MenuIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CloseIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-player-text-secondary hover:text-player-accent transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu panel */}
          <div className="absolute right-0 top-0 h-full w-72 bg-player-bg-primary border-l border-player-border">
            <div className="p-4">
              {/* Close button */}
              <div className="flex justify-end mb-8">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-player-text-secondary hover:text-player-accent transition-colors"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Menu items */}
              <nav className="space-y-6">
                <a 
                  href="/" 
                  onClick={() => setIsOpen(false)}
                  className="block text-lg text-player-text-secondary hover:text-player-accent transition-colors"
                >
                  Inicio
                </a>
                <a 
                  href="/caracteristicas" 
                  onClick={() => setIsOpen(false)}
                  className="block text-lg text-player-text-secondary hover:text-player-accent transition-colors"
                >
                  Características
                </a>
                <a 
                  href="/precio" 
                  onClick={() => setIsOpen(false)}
                  className="block text-lg text-player-text-secondary hover:text-player-accent transition-colors"
                >
                  Precio
                </a>
                <a 
                  href="/descargar" 
                  onClick={() => setIsOpen(false)}
                  className="block text-lg text-player-text-secondary hover:text-player-accent transition-colors"
                >
                  Descargar
                </a>

                {/* Contact info */}
                <div className="pt-6 mt-6 border-t border-player-border space-y-4">
                  <a 
                    href="mailto:hola@padelyzer.com" 
                    className="flex items-center gap-3 text-player-text-secondary hover:text-player-accent transition-colors"
                  >
                    <EmailIcon className="w-5 h-5" />
                    <span>hola@padelyzer.com</span>
                  </a>
                  <a 
                    href="tel:+34600000000" 
                    className="flex items-center gap-3 text-player-text-secondary hover:text-player-accent transition-colors"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    <span>+34 600 000 000</span>
                  </a>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <a 
                    href="/descargar" 
                    className="block w-full bg-player-accent text-black font-bold py-3 px-6 rounded-lg text-center hover:bg-player-accent/90 transition-colors"
                  >
                    Descargar App
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}