'use client';

import { useState } from 'react';
import { ClubButton } from './ui/ClubButton';
import { MenuIcon, XIcon, HeadphonesIcon } from './icons';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg hover:bg-club-bg-secondary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <XIcon className="w-6 h-6 text-club-text-primary" />
        ) : (
          <MenuIcon className="w-6 h-6 text-club-text-primary" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile menu panel */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-xl font-bold text-club-text-primary">Menú</div>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-club-bg-secondary transition-colors"
            >
              <XIcon className="w-5 h-5 text-club-text-primary" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4 mb-8">
            <a 
              href="/" 
              className="block py-3 px-4 text-club-text-primary hover:bg-club-bg-secondary rounded-lg transition-colors font-medium"
              onClick={toggleMenu}
            >
              Inicio
            </a>
            <a 
              href="/soluciones" 
              className="block py-3 px-4 text-club-text-secondary hover:bg-club-bg-secondary hover:text-club-text-primary rounded-lg transition-colors"
              onClick={toggleMenu}
            >
              Soluciones
            </a>
            <a 
              href="/precios" 
              className="block py-3 px-4 text-club-text-secondary hover:bg-club-bg-secondary hover:text-club-text-primary rounded-lg transition-colors"
              onClick={toggleMenu}
            >
              Precios
            </a>
            <a 
              href="/casos-de-exito" 
              className="block py-3 px-4 text-club-text-secondary hover:bg-club-bg-secondary hover:text-club-text-primary rounded-lg transition-colors"
              onClick={toggleMenu}
            >
              Casos de Éxito
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="space-y-3">
            <ClubButton 
              variant="ghost" 
              className="w-full justify-center"
              onClick={toggleMenu}
            >
              Iniciar Sesión
            </ClubButton>
            <ClubButton 
              className="w-full justify-center"
              onClick={toggleMenu}
            >
              Agenda Demo
            </ClubButton>
          </div>

          {/* Footer info */}
          <div className="mt-8 pt-6 border-t border-club-border">
            <div className="text-center text-sm text-club-text-secondary">
              <p className="mb-2">¿Tienes preguntas?</p>
              <a 
                href="tel:+525555555555" 
                className="text-club-accent hover:text-club-accent/80 font-medium flex items-center gap-1 justify-center"
              >
                <HeadphonesIcon className="w-4 h-4" />
                (55) 5555-5555
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}