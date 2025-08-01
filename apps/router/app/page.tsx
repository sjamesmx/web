'use client';

import { useEffect } from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';

export default function RouterPage() {
  useEffect(() => {
    // Check if user already has a preference
    const userType = Cookies.get('padelyzer-user-type');
    
    if (userType === 'player') {
      window.location.href = '/';
    } else if (userType === 'club') {
      window.location.href = '/pro';
    }
  }, []);

  const handleSelection = (type: 'player' | 'club') => {
    // Save preference for 30 days
    Cookies.set('padelyzer-user-type', type, { expires: 30 });
    
    // Redirect based on selection
    if (type === 'player') {
      window.location.href = '/';
    } else {
      window.location.href = '/pro';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-900 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
            PADELYZER ROUTER
          </div>
          <div className="mb-8 flex justify-center">
            <Image
              src="/Padelyzer-Logo-Negro.png"
              alt="Padelyzer"
              width={240}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            ¿Eres <span className="text-blue-600">jugador</span> o tienes un <span className="text-green-600">club</span>?
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Tenemos la solución perfecta para cada perfil. Selecciona el tuyo para continuar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Player Card */}
          <button
            onClick={() => handleSelection('player')}
            className="group relative bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-3xl p-10 hover:border-blue-300 hover:shadow-xl transition-all duration-300 text-left transform hover:scale-105"
          >
            <div className="absolute top-6 right-6">
              <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                B2C
              </div>
            </div>
            <div className="text-7xl mb-6">🎾</div>
            <h2 className="text-3xl font-bold text-black mb-4">
              Soy jugador
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Quiero mejorar mi técnica y estrategia con análisis de IA personalizado
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-blue-700 text-sm">
                <span className="text-blue-500">✓</span>
                <span>Análisis de video con IA</span>
              </div>
              <div className="flex items-center gap-2 text-blue-700 text-sm">
                <span className="text-blue-500">✓</span>
                <span>Plan de entrenamiento personalizado</span>
              </div>
              <div className="flex items-center gap-2 text-blue-700 text-sm">
                <span className="text-blue-500">✓</span>
                <span>Desde $199 MXN/mes</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-blue-600 font-semibold">
              <span>Ir a app de jugadores</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Club Card */}
          <button
            onClick={() => handleSelection('club')}
            className="group relative bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-10 hover:border-green-300 hover:shadow-xl transition-all duration-300 text-left transform hover:scale-105"
          >
            <div className="absolute top-6 right-6">
              <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                B2B
              </div>
            </div>
            <div className="text-7xl mb-6">🏢</div>
            <h2 className="text-3xl font-bold text-black mb-4">
              Tengo un club
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Quiero digitalizar mi negocio y aumentar mis ingresos automáticamente
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-green-700 text-sm">
                <span className="text-green-500">✓</span>
                <span>Sistema de gestión completo</span>
              </div>
              <div className="flex items-center gap-2 text-green-700 text-sm">
                <span className="text-green-500">✓</span>
                <span>+30% más ingresos garantizado</span>
              </div>
              <div className="flex items-center gap-2 text-green-700 text-sm">
                <span className="text-green-500">✓</span>
                <span>Desde $5,999 MXN/mes</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-green-600 font-semibold">
              <span>Ir a app de clubes</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            Tu preferencia se guardará por 30 días • <span className="text-gray-700 font-medium">400+ clubes activos</span> • <span className="text-gray-700 font-medium">15,000+ jugadores</span>
          </p>
        </div>
      </div>
    </div>
  );
}