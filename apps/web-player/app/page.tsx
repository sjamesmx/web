'use client';

import { PlayerButton } from '@padelyzer/ui';
import { Logo } from '@padelyzer/ui';
import { useState, useEffect } from 'react';
import PadelBallsGrid3D from '../components/PadelBallsGrid3D';
import MobileMenu from '../components/MobileMenu';
import { 
  AnalyticsIcon, 
  AIBrainIcon, 
  TargetIcon, 
  VideoIcon, 
  ChartIcon, 
  TrainingIcon, 
  ProgressIcon, 
  RivalIcon, 
  CommunityIcon,
  RocketIcon,
  CheckIcon,
  StarIcon,
  EmailIcon,
  PhoneIcon,
  ClipboardIcon,
  TrendIcon,
  ShieldIcon
} from '../components/icons';

export default function HomePage() {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(true), 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-player-bg-primary/90 backdrop-blur-md border-b border-player-border">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Logo variant="player" />
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/caracteristicas" className="text-player-text-secondary hover:text-player-accent transition-colors">
                Características
              </a>
              <a href="/precio" className="text-player-text-secondary hover:text-player-accent transition-colors">
                Precio
              </a>
              <a href="/descargar" className="text-player-text-secondary hover:text-player-accent transition-colors">
                Descargar
              </a>
              <a href="/torneos" className="text-player-text-secondary hover:text-player-accent transition-colors">
                Torneos
              </a>
            </div>

            <div className="flex items-center gap-4">
              <PlayerButton size="sm" className="hidden md:block">
                Descargar App
              </PlayerButton>
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Nueva estructura optimizada */}
      <section className="min-h-screen bg-player-bg-primary relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-player-bg-primary via-player-bg-primary to-player-bg-secondary"></div>
        
        {/* 3D Padel Balls Background Animation */}
        <PadelBallsGrid3D />
        
        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-player-accent/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-10 w-32 h-32 bg-player-accent/5 rounded-full animate-pulse delay-300"></div>
        
        <div className="relative z-10 container pt-24 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Content */}
              <div>
                <div className="inline-block bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-6 animate-pulse">
                  <RocketIcon className="w-4 h-4 inline mr-2" />
                  BETA EXCLUSIVO - ACCESO LIMITADO
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Tu mejor versión en el pádel
                  <span className="text-[#B8FF00]"> está a un clic</span>
                </h1>
                <p className="text-xl text-[#94A3B8] mb-8">
                  La tecnología que los pros usan, ahora en tu bolsillo.
                  Únete al beta exclusivo antes que nadie.
                </p>

                {/* Beta urgency box */}
                <div className="relative bg-player-bg-secondary/50 backdrop-blur-md border border-player-accent/30 rounded-2xl p-6 mb-8 max-w-md overflow-hidden group hover:border-player-accent/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-player-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-white font-bold text-lg flex items-center gap-2">
                          <RocketIcon className="w-5 h-5 text-player-accent" />
                          Acceso Beta Limitado
                        </h3>
                        <p className="text-player-text-secondary text-sm">
                          Solo para los primeros 1000 jugadores
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-4xl font-bold text-player-accent">927</p>
                        <p className="text-player-text-secondary text-sm">lugares disponibles</p>
                      </div>
                    </div>
                    
                    <div className="bg-player-bg-primary/50 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-red-500 to-player-accent h-full rounded-full transition-all duration-1000" style={{width: '73%'}}></div>
                    </div>
                    <p className="text-player-text-secondary text-xs mt-2">73% completado</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <PlayerButton size="lg" className="text-lg px-8 py-4 relative group overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-player-accent/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      BETA
                    </span>
                    <span className="relative flex items-center gap-2">
                      <RocketIcon className="w-5 h-5" /> Solicitar acceso exclusivo
                    </span>
                  </PlayerButton>
                  <PlayerButton variant="secondary" size="lg" className="text-lg px-8 py-4">
                    <span className="flex items-center gap-2">
                      <VideoIcon className="w-5 h-5" /> Ver demo del beta
                    </span>
                  </PlayerButton>
                </div>

                {/* Trust indicators BETA */}
                <div className="flex flex-wrap gap-6 text-sm text-player-text-secondary">
                  <span className="flex items-center gap-2">
                    <RocketIcon className="w-4 h-4" /> <span className="text-white">Beta exclusivo</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <CommunityIcon className="w-4 h-4" /> <span className="text-white">73</span> beta testers activos
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-player-accent" /> Quedan <span className="text-player-accent font-bold">27 lugares</span>
                  </span>
                </div>
              </div>

              {/* Floating Stats Section */}
              <div className="relative lg:justify-self-end">
                <div className="relative w-full h-[500px] mx-auto flex items-center justify-center">
                  
                  {/* Central visual focus */}
                  <div className="w-80 h-80 rounded-full border-2 border-player-accent/20 flex items-center justify-center">
                    <div className="w-60 h-60 rounded-full border border-player-accent/30 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-player-accent mb-2">AI</div>
                        <div className="text-white text-lg">Powered</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating stats with glassmorphism */}
                  <div className="absolute top-10 left-10 bg-player-bg-primary/80 backdrop-blur-md border border-player-accent/30 px-4 py-3 rounded-xl shadow-lg animate-float">
                    <div className="flex items-center gap-3">
                      <ChartIcon className="w-5 h-5 text-player-accent" />
                      <div>
                        <p className="text-xs text-player-text-secondary">Precisión</p>
                        <p className="text-lg font-bold text-white">+32%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-10 right-10 bg-player-bg-primary/80 backdrop-blur-md border border-player-accent/30 px-4 py-3 rounded-xl shadow-lg animate-float-delayed">
                    <div className="flex items-center gap-3">
                      <TargetIcon className="w-5 h-5 text-player-accent" />
                      <div>
                        <p className="text-xs text-player-text-secondary">Errores</p>
                        <p className="text-lg font-bold text-white">-45%</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-32 right-16 bg-player-bg-primary/80 backdrop-blur-md border border-player-accent/30 px-4 py-3 rounded-xl shadow-lg animate-float">
                    <div className="flex items-center gap-3">
                      <AIBrainIcon className="w-5 h-5 text-player-accent" />
                      <div>
                        <p className="text-xs text-player-text-secondary">IQ Score</p>
                        <p className="text-lg font-bold text-white">84.7</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-32 left-16 bg-player-bg-primary/80 backdrop-blur-md border border-player-accent/30 px-4 py-3 rounded-xl shadow-lg animate-float-delayed">
                    <div className="flex items-center gap-3">
                      <RocketIcon className="w-5 h-5 text-player-accent" />
                      <div>
                        <p className="text-xs text-player-text-secondary">Progreso</p>
                        <p className="text-lg font-bold text-white">+67%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Section - Transformación positiva */}
      <section className="py-20 bg-player-bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            ¿Listo para el <span className="text-player-accent">siguiente nivel</span>?
          </h2>
          <p className="text-xl text-player-text-secondary text-center mb-16 max-w-3xl mx-auto">
            La mayoría de jugadores se estancan aquí. <strong className="text-white">Tú puedes ser diferente</strong>.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Del estancamiento al progreso",
                description: "Transforma esos años de experiencia en mejora real y medible. Cada sesión cuenta hacia tu evolución.",
                benefit: "Progreso garantizado",
                Icon: ProgressIcon,
                color: "from-green-500/20 to-green-600/10",
                borderColor: "border-green-500/30"
              },
              {
                title: "De la confusión a la claridad",
                description: "Sabe exactamente qué entrenar y por qué. Cada ejercicio tiene un propósito específico.",
                benefit: "Entrenamientos inteligentes",
                Icon: TargetIcon,
                color: "from-blue-500/20 to-blue-600/10",
                borderColor: "border-blue-500/30"
              },
              {
                title: "De casi ganar a dominar",
                description: "Cierra esos partidos importantes. Tu técnica + tu mente + datos reales = victoria consistente.",
                benefit: "Dominio total",
                Icon: AIBrainIcon,
                color: "from-yellow-500/20 to-yellow-600/10",
                borderColor: "border-yellow-500/30"
              }
            ].map((opportunity, index) => (
              <div 
                key={index}
                className={`relative bg-gradient-to-br ${opportunity.color} border ${opportunity.borderColor} rounded-2xl p-8 hover:border-player-accent/50 transition-all group hover:transform hover:scale-105 duration-300 backdrop-blur-md overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-player-bg-primary/50 to-transparent" />
                <div className="relative z-10">
                  <div className="mb-6 group-hover:scale-110 transition-transform">
                    <opportunity.Icon className="w-12 h-12 text-player-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{opportunity.title}</h3>
                  <p className="text-player-text-secondary mb-6 leading-relaxed">{opportunity.description}</p>
                  <div className="text-sm text-player-accent font-bold bg-player-accent/10 px-4 py-2 rounded-lg border border-player-accent/20 backdrop-blur-sm">
                    <CheckIcon className="w-4 h-4 inline mr-2" />
                    {opportunity.benefit}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call out positivo */}
          <div className="text-center mt-16">
            <p className="text-2xl text-white font-bold mb-2">
              Tu potencial siempre estuvo ahí
            </p>
            <p className="text-player-text-secondary">
              Ahora puedes desbloquearlo. <span className="text-player-accent font-medium">73 beta testers</span> ya lo están haciendo.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section - Nueva estructura revolucionaria */}
      <section className="py-20 bg-player-bg-primary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                La IA que revoluciona
                <span className="text-player-accent block">tu pádel</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="group-hover:scale-110 transition-transform">
                    <AnalyticsIcon className="w-12 h-12 text-player-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Análisis Biomecánico en Tiempo Real
                    </h3>
                    <p className="text-player-text-secondary leading-relaxed">
                      Graba tu juego y recibe feedback instantáneo sobre tu técnica, 
                      postura y movimientos. <span className="text-player-accent font-medium">32 puntos corporales analizados</span> frame por frame.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 group">
                  <div className="group-hover:scale-110 transition-transform">
                    <AIBrainIcon className="w-12 h-12 text-player-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Padel IQ Personalizado
                    </h3>
                    <p className="text-player-text-secondary leading-relaxed">
                      Un score único que mide tu nivel real y evoluciona contigo partido a partido. 
                      <span className="text-player-accent font-medium">7 dimensiones evaluadas</span> para un análisis completo.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6 group">
                  <div className="group-hover:scale-110 transition-transform">
                    <TargetIcon className="w-12 h-12 text-player-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Plan de Mejora Específico
                    </h3>
                    <p className="text-player-text-secondary leading-relaxed">
                      Ejercicios personalizados basados en tus puntos débiles. 
                      No más entrenar a ciegas. <span className="text-player-accent font-medium">Resultados en 30 días</span> o tu dinero de vuelta.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <PlayerButton size="lg" className="text-lg px-8 py-4">
                  Ver todas las características →
                </PlayerButton>
              </div>
            </div>
            
            {/* Visual/Mockup mejorado */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Main phone mockup */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-4 shadow-2xl">
                  <div className="bg-player-bg-primary rounded-[2rem] border border-player-border overflow-hidden">
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-6 py-3 bg-player-bg-secondary/50">
                      <span className="text-white text-sm font-medium">Padelyzer</span>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-player-accent rounded-full"></div>
                        <div className="w-1 h-1 bg-player-accent rounded-full"></div>
                        <div className="w-1 h-1 bg-player-accent rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* App content */}
                    <div className="p-6">
                      <div className="text-center mb-6">
                        <div className="mb-4">
                          <ChartIcon className="w-16 h-16 mx-auto text-player-accent" />
                        </div>
                        <div className="text-player-accent font-bold text-2xl mb-1">Padel IQ: 84.7</div>
                        <div className="text-sm text-player-text-secondary">Nivel: Avanzado</div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-player-bg-secondary rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-white text-sm">Precisión Bandeja</span>
                            <span className="text-player-accent font-bold">+12%</span>
                          </div>
                          <div className="w-full bg-player-border rounded-full h-2 mt-2">
                            <div className="bg-player-accent h-2 rounded-full w-3/4"></div>
                          </div>
                        </div>
                        
                        <div className="bg-player-bg-secondary rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-white text-sm">Posicionamiento</span>
                            <span className="text-player-accent font-bold">+8%</span>
                          </div>
                          <div className="w-full bg-player-border rounded-full h-2 mt-2">
                            <div className="bg-player-accent h-2 rounded-full w-2/3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-8 -left-8 bg-player-accent text-black px-4 py-2 rounded-xl font-bold text-sm shadow-lg animate-pulse flex items-center gap-2">
                  <TargetIcon className="w-4 h-4" />
                  Análisis IA
                </div>
                <div className="absolute -bottom-6 -right-8 bg-green-500 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg animate-pulse delay-500 flex items-center gap-2">
                  <CheckIcon className="w-4 h-4" />
                  Mejora detectada
                </div>
                <div className="absolute top-1/2 -left-12 bg-blue-500 text-white px-3 py-1 rounded-lg text-xs font-medium shadow-lg animate-bounce delay-1000">
                  32 puntos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              No es solo <span className="text-player-accent">análisis</span>, es tu entrenador personal
            </h2>
            <p className="text-xl text-player-text-secondary max-w-3xl mx-auto">
              Todas las herramientas que necesitas para mejorar tu juego de forma inteligente y eficiente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Análisis de video con IA",
                description: "Sube tu video y recibe análisis detallado en menos de 5 minutos",
                Icon: VideoIcon,
                highlight: "Más preciso que un entrenador humano"
              },
              {
                title: "Métricas de rendimiento",
                description: "Velocidad de pelota, precisión de golpes, eficiencia de movimiento",
                Icon: TrendIcon,
                highlight: "Datos que nunca habías visto"
              },
              {
                title: "Plan de entrenamiento",
                description: "Rutinas personalizadas basadas en tus debilidades específicas",
                Icon: ClipboardIcon,
                highlight: "Entrena inteligente, no más"
              },
              {
                title: "Seguimiento de progreso",
                description: "Ve tu mejora mes a mes con gráficos y estadísticas detalladas",
                Icon: ChartIcon,
                highlight: "Motivación basada en datos"
              },
              {
                title: "Análisis de rivales",
                description: "Identifica patrones y debilidades de tus oponentes habituales",
                Icon: RivalIcon,
                highlight: "Ventaja táctica garantizada"
              },
              {
                title: "Comunidad de jugadores",
                description: "Comparte análisis y aprende de jugadores de tu nivel",
                Icon: CommunityIcon,
                highlight: "No estás solo en esto"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-player-bg-secondary border border-player-border rounded-2xl p-6 hover:border-player-accent/50 transition-all group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  <feature.Icon className="w-12 h-12 text-player-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-player-text-secondary mb-4">{feature.description}</p>
                <div className="text-sm text-player-accent font-medium">
                  {feature.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-player-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Lo que dicen nuestros <span className="text-player-accent">jugadores</span>
            </h2>
            <p className="text-xl text-player-text-secondary max-w-3xl mx-auto">
              Más de 15,000 jugadores ya están mejorando su juego con Padelyzer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Mendoza",
                level: "Nivel intermedio → Avanzado",
                quote: "En 2 meses subí de 4.0 a 5.2. La IA detectó que mi bandeja era inconsistente y me dio ejercicios específicos. Increíble.",
                rating: 5,
                improvement: "+30% efectividad en bandeja"
              },
              {
                name: "Ana García",
                level: "Principiante → Intermedio",
                quote: "Pensé que tendría que entrenar años para mejorar. Con Padelyzer encontré mis errores en semanas y los corregí rápido.",
                rating: 5,
                improvement: "+2.1 puntos de ranking"
              },
              {
                name: "Roberto Silva",
                level: "Jugador competitivo",
                quote: "Llevo 5 años jugando y nunca había visto análisis tan detallado. Ahora entreno con propósito, no por rutina.",
                rating: 5,
                improvement: "Ganó su primer torneo"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-player-bg-primary border border-player-border rounded-2xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-player-accent">⭐</span>
                  ))}
                </div>
                <p className="text-player-text-secondary mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-player-border pt-4">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-player-text-secondary">{testimonial.level}</p>
                  <div className="text-sm text-player-accent font-medium mt-2">
                    {testimonial.improvement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Elige tu plan. <span className="text-player-accent">Empieza gratis.</span>
            </h2>
            <p className="text-xl text-player-text-secondary max-w-3xl mx-auto">
              Comienza con el plan gratuito o desbloquea todo el potencial con Premium.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Plan Gratuito */}
            <div className="relative bg-player-bg-secondary/50 backdrop-blur-md border border-player-border rounded-3xl p-8 hover:border-player-accent/30 transition-all">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Plan Gratuito</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold">$0</span>
                  <span className="text-xl text-player-text-secondary">/mes</span>
                </div>
                <p className="text-player-text-secondary">Para siempre gratis</p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  { text: "Buscar clubes cerca de ti", included: true },
                  { text: "Reservar canchas sin comisión", included: true },
                  { text: "Unirse a ligas y torneos", included: true },
                  { text: "Buscar clases disponibles", included: true },
                  { text: "Análisis con IA", included: false },
                  { text: "Plan de entrenamiento", included: false },
                  { text: "Métricas avanzadas", included: false }
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    {feature.included ? (
                      <CheckIcon className="w-5 h-5 text-player-accent flex-shrink-0" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-player-border flex-shrink-0" />
                    )}
                    <span className={feature.included ? "" : "text-player-text-secondary opacity-50"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <PlayerButton variant="secondary" size="lg" className="w-full text-lg">
                Empezar gratis
              </PlayerButton>
            </div>

            {/* Plan Premium */}
            <div className="relative bg-gradient-to-b from-player-bg-secondary to-player-bg-primary border-2 border-player-accent rounded-3xl p-8 transform hover:scale-105 transition-all">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-player-accent text-black text-sm font-bold px-4 py-2 rounded-full">
                  RECOMENDADO
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Plan Premium</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-player-accent">$199</span>
                  <span className="text-xl text-player-text-secondary">MXN/mes</span>
                </div>
                <p className="text-player-text-secondary">Cancela cuando quieras</p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Todo lo del plan gratuito",
                  "Análisis ilimitados con IA",
                  "Plan de entrenamiento personalizado",
                  "Métricas de rendimiento detalladas",
                  "Análisis de rivales",
                  "Seguimiento de progreso",
                  "Acceso a la comunidad Pro",
                  "Soporte prioritario 24/7"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-player-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <PlayerButton size="lg" className="w-full text-lg mb-4 group overflow-hidden relative">
                <span className="absolute inset-0 bg-gradient-to-r from-player-accent/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Prueba 14 días gratis</span>
              </PlayerButton>
              
              <p className="text-sm text-player-text-secondary text-center">
                Sin compromisos • Cancela en cualquier momento
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-player-bg-secondary border border-player-border rounded-2xl p-6 max-w-2xl mx-auto">
              <h4 className="text-xl font-bold mb-3 text-player-accent flex items-center justify-center gap-2">
                <ShieldIcon className="w-6 h-6" />
                Garantía de 30 días
              </h4>
              <p className="text-player-text-secondary">
                Si no mejoras tu ranking en 30 días, te devolvemos todo tu dinero. Sin preguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-player-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Preguntas <span className="text-player-accent">frecuentes</span>
            </h2>
            <p className="text-xl text-player-text-secondary max-w-3xl mx-auto">
              Todo lo que necesitas saber sobre Padelyzer
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "¿Realmente funciona con cualquier calidad de video?",
                answer: "Sí. Nuestra IA funciona con videos grabados desde cualquier ángulo con un celular básico. Incluso con videos de baja calidad, puede identificar patrones de juego y errores técnicos."
              },
              {
                question: "¿Cuánto tiempo toma recibir el análisis?",
                answer: "Menos de 5 minutos. Subes tu video, nuestra IA lo procesa automáticamente y recibes un reporte detallado con métricas, errores identificados y plan de mejora personalizado."
              },
              {
                question: "¿Qué pasa si no mejoro en 30 días?",
                answer: "Te devolvemos el 100% de tu dinero, sin preguntas. Estamos tan seguros de que vas a mejorar que asumimos todo el riesgo."
              },
              {
                question: "¿Necesito experiencia técnica para usar la app?",
                answer: "Para nada. Solo graba tu partido con el celular, súbelo a la app y listo. El resto lo hace la IA. Es más fácil que usar Instagram."
              },
              {
                question: "¿Funciona para todos los niveles?",
                answer: "Sí, desde principiantes hasta jugadores avanzados. La IA se adapta a tu nivel y te da recomendaciones específicas para tu etapa de juego."
              },
              {
                question: "¿Puedo cancelar en cualquier momento?",
                answer: "Por supuesto. No hay contratos ni permanencias. Cancelas con un clic desde la app y se detiene la facturación inmediatamente."
              }
            ].map((faq, index) => (
              <details 
                key={index}
                className="bg-player-bg-primary border border-player-border rounded-2xl p-6 group"
              >
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-player-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-player-text-secondary mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-20 bg-player-bg-secondary">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Un precio. <span className="text-player-accent">Todo incluido.</span>
          </h2>
          <p className="text-xl text-player-text-secondary mb-12 max-w-2xl mx-auto">
            Sin sorpresas. Sin planes confusos. Solo resultados garantizados.
          </p>
          
          <div className="max-w-md mx-auto bg-gradient-to-br from-player-bg-primary to-player-bg-secondary border-2 border-player-accent rounded-3xl p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-player-accent text-black px-6 py-2 rounded-full font-bold text-sm">
                MEJOR VALOR
              </span>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Plan Premium</h3>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-bold text-player-accent">$199</span>
                <span className="text-xl text-player-text-secondary">MXN/mes</span>
              </div>
              <p className="text-player-text-secondary text-sm">
                Menos de lo que gastas en pelotas al mes
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
              {[
                "Análisis ilimitados",
                "Padel IQ personalizado", 
                "Plan de entrenamiento",
                "Tracking de progreso",
                "Análisis biomecánico",
                "Soporte prioritario"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-player-accent">✓</span>
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>
            
            <PlayerButton size="lg" className="w-full text-lg mb-4">
              Empezar prueba de 14 días
            </PlayerButton>
            <p className="text-player-text-secondary text-sm">
              Sin tarjeta de crédito • Cancela cuando quieras
            </p>
          </div>
          
          <div className="mt-8">
            <a href="/precio">
              <PlayerButton variant="ghost">
                Ver detalles completos del precio →
              </PlayerButton>
            </a>
          </div>
        </div>
      </section>

      {/* Beta Testers Social Proof */}
      <section className="py-20 bg-player-bg-primary">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block bg-player-accent text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
              BETA TESTERS REALES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Lo que dicen los <span className="text-player-accent">primeros usuarios</span>
            </h2>
            <p className="text-xl text-player-text-secondary max-w-3xl mx-auto">
              73 jugadores seleccionados están probando el futuro del pádel. Sus resultados hablan por sí solos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Miguel R.",
                location: "Beta tester #12",
                quote: "En 3 semanas mejoré mi revés un 40%. Los videos con IA son adictivos. Nunca había visto algo así.",
                improvement: "+40% precisión revés",
                timeframe: "3 semanas",
                avatar: "🏆"
              },
              {
                name: "Ana P.",
                location: "Beta tester #28",
                quote: "Por fin entiendo qué estaba haciendo mal. Es como tener un coach 24/7 que nunca se cansa de ayudarte.",
                improvement: "Errores técnicos -60%",
                timeframe: "2 semanas",
                avatar: "🎾"
              },
              {
                name: "Carlos M.",
                location: "Beta tester #5",
                quote: "Subí de categoría después de 2 meses. Esto es el futuro del pádel. Me siento privilegiado de ser beta tester.",
                improvement: "Subió 1 categoría",
                timeframe: "2 meses",
                avatar: "🚀"
              }
            ].map((tester, index) => (
              <div 
                key={index}
                className="bg-player-bg-secondary border-2 border-player-accent/30 rounded-2xl p-6 hover:border-player-accent transition-all relative"
              >
                <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                  BETA
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-player-accent to-player-accent/70 rounded-full flex items-center justify-center text-2xl">
                    {tester.avatar}
                  </div>
                  <div>
                    <p className="text-white font-bold">{tester.name}</p>
                    <p className="text-player-accent text-sm font-medium">{tester.location}</p>
                  </div>
                </div>
                
                <p className="text-white mb-6 leading-relaxed">
                  "{tester.quote}"
                </p>
                
                <div className="border-t border-player-border pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-player-accent font-bold">{tester.improvement}</span>
                    <span className="text-player-text-secondary">{tester.timeframe}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Beta stats */}
          <div className="flex justify-center items-center gap-12 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-player-accent mb-1">73</div>
              <div className="text-player-text-secondary text-sm">Beta testers activos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-player-accent mb-1">89%</div>
              <div className="text-player-text-secondary text-sm">Mejoran en 2 semanas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-player-accent mb-1">27</div>
              <div className="text-player-text-secondary text-sm">Lugares disponibles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section con urgencia BETA */}
      <section className="py-20 bg-gradient-to-b from-player-bg-secondary to-player-bg-primary relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🚀</div>
          <div className="absolute bottom-10 right-10 text-9xl">⚡</div>
        </div>
        
        <div className="container text-center relative z-10">
          <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ ÚLTIMAS HORAS - BETA LIMITADO
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Gana la ventaja injusta que <span className="text-player-accent">todos querrán tener</span>
          </h2>
          <p className="text-xl text-player-text-secondary mb-8 max-w-2xl mx-auto">
            Solo quedan 27 lugares para el acceso beta exclusivo. 
            <strong className="text-white">Una vez llenos, lista de espera hasta 2025</strong>.
          </p>

          {/* Urgency counter */}
          <div className="bg-player-bg-secondary border-2 border-red-500 rounded-2xl p-6 mb-8 max-w-lg mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="text-left">
                <h3 className="text-white font-bold text-lg">🎯 Acceso Beta Exclusivo</h3>
                <p className="text-red-400 text-sm font-medium">Se cierra cuando llegue a 100</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-bold text-red-500">27</p>
                <p className="text-player-text-secondary text-sm">lugares restantes</p>
              </div>
            </div>
            
            <div className="bg-player-bg-primary rounded-full h-4 overflow-hidden mb-2">
              <div className="bg-gradient-to-r from-red-500 to-player-accent h-full rounded-full transition-all duration-1000" style={{width: '73%'}}></div>
            </div>
            <div className="flex justify-between text-xs text-player-text-secondary">
              <span>73 confirmados</span>
              <span>27 disponibles</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <PlayerButton size="lg" className="text-lg px-8 py-4 relative animate-pulse">
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                BETA
              </span>
              🚀 Solicitar acceso beta AHORA
            </PlayerButton>
            <PlayerButton variant="secondary" size="lg" className="text-lg px-8 py-4">
              ▶️ Ver demo del beta
            </PlayerButton>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-player-text-secondary mb-8">
            <div className="flex items-center gap-2">
              <span className="text-player-accent">✓</span>
              <span>Acceso inmediato</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-player-accent">✓</span>
              <span>Gratis durante beta</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-player-accent">✓</span>
              <span>Feedback directo con creadores</span>
            </div>
          </div>

          <div className="bg-player-bg-secondary/50 border border-player-accent/30 rounded-xl p-4 max-w-md mx-auto">
            <p className="text-white text-sm font-bold mb-1">
              🎉 Miguel acaba de unirse al beta
            </p>
            <p className="text-player-text-secondary text-xs">
              Hace 2 minutos • Quedan 26 lugares
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-player-bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Tienes preguntas? <span className="text-player-accent">Hablemos.</span>
              </h2>
              <p className="text-xl text-player-text-secondary">
                Estamos aquí para ayudarte a mejorar tu juego.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-player-bg-primary/50 backdrop-blur-md border border-player-accent/30 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <EmailIcon className="w-6 h-6 text-player-accent mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-2">Email</h3>
                      <a href="mailto:hola@padelyzer.com" className="text-player-text-secondary hover:text-player-accent transition-colors">
                        hola@padelyzer.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-player-bg-primary/50 backdrop-blur-md border border-player-accent/30 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <PhoneIcon className="w-6 h-6 text-player-accent mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-2">Teléfono</h3>
                      <a href="tel:+525512345678" className="text-player-text-secondary hover:text-player-accent transition-colors">
                        +52 55 1234 5678
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-player-bg-primary/50 backdrop-blur-md border border-player-accent/30 rounded-xl p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-player-bg-primary border border-player-border rounded-lg focus:border-player-accent focus:outline-none transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-player-bg-primary border border-player-border rounded-lg focus:border-player-accent focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-player-bg-primary border border-player-border rounded-lg focus:border-player-accent focus:outline-none transition-colors resize-none"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </div>

                  <PlayerButton type="submit" className="w-full">
                    Enviar mensaje
                  </PlayerButton>
                </form>
              </div>
            </div>

            <div className="text-center">
              <p className="text-player-text-secondary">
                Respuesta garantizada en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-player-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Logo variant="player" />
            <div className="flex gap-6 text-sm">
              <a href="/privacidad" className="text-player-text-secondary hover:text-player-accent">
                Privacidad
              </a>
              <a href="/terminos" className="text-player-text-secondary hover:text-player-accent">
                Términos
              </a>
              <a href="https://pro.padelyzer.com" className="text-player-text-secondary hover:text-player-accent">
                ¿Tienes un club?
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Beta Notification */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-player-accent text-black p-4 rounded-lg shadow-2xl max-w-sm animate-bounce z-50">
          <button 
            onClick={() => setShowNotification(false)}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center hover:bg-red-600"
          >
            ×
          </button>
          <p className="font-bold mb-1">¡Ana acaba de unirse al beta!</p>
          <p className="text-sm opacity-80">Hace 1 minuto • Quedan 26 lugares</p>
        </div>
      )}
    </>
  );
}