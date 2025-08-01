'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function RouterPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSelection = (type: 'player' | 'club') => {
    // Redirect based on selection
    if (type === 'player') {
      window.location.href = 'https://padelyzer.com';
    } else {
      window.location.href = 'https://clubes.padelyzer.com';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 50px,
            rgba(255,255,255,0.03) 50px,
            rgba(255,255,255,0.03) 51px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 50px,
            rgba(255,255,255,0.03) 50px,
            rgba(255,255,255,0.03) 51px
          )
        `
      }}></div>

      <div className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Logo */}
        <div className="text-center mb-12">
          <Image 
            src="/Padelyzer-Logo-Blanco.png" 
            alt="Padelyzer" 
            width={200}
            height={50}
            className="h-16 w-auto mx-auto mb-6"
            priority
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Bienvenido a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Padelyzer</span>
          </h1>
          <p className="text-xl text-gray-300">
            La plataforma definitiva para el pádel en México
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Players Card */}
          <div
            className={`group bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 hover:border-[#C6FF00]/50 hover:shadow-2xl hover:shadow-[#C6FF00]/20 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} 
            style={{transitionDelay: '200ms'}}>
            {/* Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-[#C6FF00] to-[#B8E600] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
              <Image 
                src="/Padelyzer-Isotipo-Blanco.png" 
                alt="Padelyzer" 
                width={50}
                height={50}
                className="w-12 h-12"
              />
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-[#C6FF00] transition-colors">
              Soy Jugador
            </h2>
            
            <p className="text-gray-300 mb-6 text-lg">
              Encuentra canchas, organiza partidos, únete a torneos y mejora tu juego con nuestra app.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 bg-[#C6FF00]/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#C6FF00]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Reserva canchas al instante</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 bg-[#C6FF00]/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#C6FF00]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Conecta con otros jugadores</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 bg-[#C6FF00]/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#C6FF00]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Participa en torneos y ligas</span>
              </li>
            </ul>

            <div className="flex-grow"></div>

            <div className="flex items-center justify-between mt-6">
              <button
                onClick={() => handleSelection('player')}
                className="bg-[#C6FF00] hover:bg-[#B8E600] text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#C6FF00]/50"
              >
                Ir a la app
              </button>
              <div className="text-sm text-gray-400">
                +50,000 jugadores activos
              </div>
            </div>
          </div>

          {/* Clubs Card */}
          <div
            className={`group bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} 
            style={{transitionDelay: '400ms'}}>
            {/* Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
              <Image 
                src="/Padelyzer-Isotipo-Blanco.png" 
                alt="Padelyzer" 
                width={50}
                height={50}
                className="w-12 h-12"
              />
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
              Tengo un Club
            </h2>
            
            <p className="text-gray-300 mb-6 text-lg">
              Software completo para gestionar tu club, aumentar ingresos y automatizar operaciones.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Gestión completa del club</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Aumenta ingresos +30%</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Automatiza reservas 24/7</span>
              </li>
            </ul>

            <div className="flex-grow"></div>

            <div className="flex items-center justify-between mt-6">
              <button
                onClick={() => handleSelection('club')}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
              >
                Ver soluciones
              </button>
              <div className="text-sm text-gray-400">
                Garantía ROI 25%
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-12 text-gray-400 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{transitionDelay: '600ms'}}>
          <p>
            ¿Necesitas ayuda? Contáctanos en{' '}
            <a href="mailto:info@padelyzer.com" className="text-white hover:text-[#C6FF00] transition-colors">
              info@padelyzer.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}