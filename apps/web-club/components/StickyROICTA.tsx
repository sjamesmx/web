'use client';

import { useState, useEffect } from 'react';
import { ClubButton } from './ui/ClubButton';
import { DollarIcon, ArrowRightIcon } from './icons';

export default function StickyROICTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling 50% of viewport height
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-club-accent to-club-accent-hover p-4 shadow-professional transform transition-transform duration-300">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <DollarIcon className="w-6 h-6 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-bold text-white">
                Aumenta tus ingresos 25% garantizado
              </p>
              <p className="text-sm text-blue-100">
                O te devolvemos el 100% de tu inversión
              </p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <a href="/recursos">
              <ClubButton 
                size="sm" 
                className="bg-white text-club-accent hover:bg-blue-50 shadow-subtle font-semibold"
                style={{ color: '#3B82F6' }}
              >
                Calcular ROI
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </ClubButton>
            </a>
            <a href="/demo">
              <ClubButton 
                size="sm" 
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                Agenda Demo
              </ClubButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}