'use client';

import { PlayerButton } from '@padelyzer/ui';
import { Logo } from '@padelyzer/ui';
import MobileMenu from '../../components/MobileMenu';
import { 
  RocketIcon, 
  TargetIcon, 
  CheckIcon, 
  TrendIcon,
  VideoIcon,
  ShieldIcon,
  SpeedIcon,
  HandshakeIcon
} from '../../components/icons';

export default function PrecioPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-player-bg-primary/90 backdrop-blur-md border-b border-player-border">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Logo variant="player" />
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-player-text-secondary hover:text-player-accent transition-colors">
                Inicio
              </a>
              <a href="/caracteristicas" className="text-player-text-secondary hover:text-player-accent transition-colors">
                Características
              </a>
              <a href="/precio" className="text-player-accent font-medium">
                Precio
              </a>
              <a href="/descargar" className="text-player-text-secondary hover:text-player-accent transition-colors">
                Descargar
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

      {/* Hero Section - Beta Exclusivo */}
      <section className="min-h-screen bg-player-bg-primary pt-16 flex items-center">
        <div className="container py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-8 animate-pulse">
              <RocketIcon className="w-4 h-4 inline-block mr-2" />
              BETA EXCLUSIVO - ACCESO GRATIS PARA PRIMEROS 1000
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Acceso <span className="text-player-accent">gratuito</span> durante el beta.
            </h1>
            <p className="text-xl text-player-text-secondary mb-8 max-w-2xl mx-auto">
              Los primeros 1000 jugadores obtienen acceso completo <strong className="text-white">sin costo</strong> mientras estamos en beta. 
              Solo quedan <span className="text-player-accent font-bold">927 lugares</span>.
            </p>
            
            {/* Beta urgency box */}
            <div className="bg-player-bg-secondary border-2 border-player-accent rounded-xl p-6 mb-12 max-w-lg mx-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="text-left">
                  <h3 className="text-white font-bold text-lg flex items-center gap-2">
                    <TargetIcon className="w-5 h-5" />
                    Acceso Beta Gratuito
                  </h3>
                  <p className="text-player-text-secondary text-sm">Solo primeros 1000 jugadores</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-player-accent">927</p>
                  <p className="text-player-text-secondary text-sm">lugares restantes</p>
                </div>
              </div>
              
              <div className="bg-player-bg-primary rounded-full h-4 overflow-hidden mb-2">
                <div className="bg-gradient-to-r from-red-500 to-player-accent h-full rounded-full transition-all duration-1000" style={{ width: '73%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-player-text-secondary">
                <span>73 confirmados</span>
                <span>927 disponibles</span>
              </div>
            </div>

            {/* Pricing Cards - Free and Premium */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Free Plan */}
              <div className="bg-gradient-to-br from-player-bg-secondary to-player-bg-primary border border-player-border rounded-3xl p-8 relative">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Plan Gratuito</h2>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-5xl font-bold text-white">$0</span>
                    <div className="text-left">
                      <div className="text-lg text-player-text-secondary">MXN</div>
                      <div className="text-sm text-player-text-secondary">/mes</div>
                    </div>
                  </div>
                  <p className="text-player-text-secondary text-sm">
                    Comienza a mejorar sin costo
                  </p>
                </div>

                {/* Free Plan Features */}
                <div className="space-y-3 mb-8">
                  {[
                    "Navega clubes cerca de ti",
                    "Reserva canchas sin comisión",
                    "Únete a ligas y torneos",
                    "Busca clases disponibles",
                    "Perfil de jugador básico",
                    "Acceso a la comunidad"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckIcon className="w-5 h-5 text-player-accent flex-shrink-0" />
                      <span className="text-player-text-secondary text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <PlayerButton size="lg" className="w-full text-sm mb-4" variant="secondary">
                  Empezar gratis
                </PlayerButton>
              </div>

              {/* Premium Plan */}
              <div className="bg-gradient-to-br from-player-bg-secondary to-player-bg-primary border-2 border-player-accent rounded-3xl p-8 md:p-12 relative shadow-2xl transform scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="bg-player-accent text-black px-6 py-2 rounded-full font-bold text-sm">
                    MEJOR VALOR DE MÉXICO
                  </span>
                </div>
                
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Plan Premium</h2>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <span className="text-7xl font-bold text-player-accent">$199</span>
                    <div className="text-left">
                      <div className="text-xl text-player-text-secondary">MXN</div>
                      <div className="text-lg text-player-text-secondary">/mes</div>
                    </div>
                  </div>
                  <p className="text-player-text-secondary">
                    Menos de lo que gastas en pelotas al mes
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {[
                    { feature: "Análisis ilimitados con IA", highlight: true },
                    { feature: "Padel IQ Score personalizado", highlight: true },
                    { feature: "32 puntos biomecánicos analizados", highlight: false },
                    { feature: "Planes de entrenamiento personalizados", highlight: false },
                    { feature: "Tracking de progreso detallado", highlight: false },
                    { feature: "Análisis de rivales", highlight: false },
                    { feature: "Coach virtual 24/7", highlight: false },
                    { feature: "Acceso a torneos y rankings", highlight: false },
                    { feature: "Comunidad de jugadores", highlight: false },
                    { feature: "Estadísticas avanzadas", highlight: false },
                    { feature: "Soporte prioritario", highlight: false },
                    { feature: "Actualizaciones automáticas", highlight: false }
                  ].map((item, index) => (
                    <div key={index} className={`flex items-center gap-3 ${item.highlight ? 'bg-player-accent/10 p-3 rounded-lg' : ''}`}>
                      <div className="w-5 h-5 bg-player-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckIcon className="w-3 h-3 text-black" />
                      </div>
                      <span className={`${item.highlight ? 'text-white font-medium' : 'text-player-text-secondary'}`}>
                        {item.feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Beta */}
                <PlayerButton size="lg" className="w-full text-lg mb-4 bg-player-accent hover:bg-player-accent/90 text-black font-bold relative animate-pulse">
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    BETA
                  </span>
                  <RocketIcon className="w-5 h-5 inline-block mr-2" />
                  Solicitar acceso beta GRATUITO
                </PlayerButton>
                <p className="text-center text-player-text-secondary text-sm">
                  Acceso inmediato • Gratis durante beta • Feedback directo con creadores
                </p>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-player-text-secondary">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-green-400" />
                <span>14 días gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-green-400" />
                <span>Sin tarjeta de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-green-400" />
                <span>Cancela cuando quieras</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-green-400" />
                <span>Garantía 30 días</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparación de valor */}
      <section className="py-20 bg-player-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Vale la pena <span className="text-player-accent">$199 al mes</span>?
            </h2>
            <p className="text-xl text-player-text-secondary max-w-3xl mx-auto">
              Comparemos con las alternativas tradicionales que no te dan resultados medibles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Entrenador Personal */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                TRADICIONAL
              </div>
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto text-red-400" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Entrenador Personal</h3>
              <div className="text-3xl font-bold text-red-400 mb-4">$800-1500</div>
              <div className="text-sm text-player-text-secondary mb-6">por sesión</div>
              <ul className="space-y-3 text-sm text-player-text-secondary text-left">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Solo cuando está disponible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Feedback subjetivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Sin análisis de datos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">•</span>
                  <span>Caro a largo plazo</span>
                </li>
              </ul>
            </div>

            {/* Padelyzer */}
            <div className="bg-gradient-to-br from-player-accent/20 to-player-accent/10 border-2 border-player-accent rounded-2xl p-8 text-center relative transform scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-player-accent text-black px-3 py-1 rounded-full text-sm font-bold">
                PADELYZER
              </div>
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto text-player-accent" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="16" r="1" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">IA + Coach Virtual</h3>
              <div className="text-3xl font-bold text-player-accent mb-4">$199</div>
              <div className="text-sm text-player-text-secondary mb-6">por mes</div>
              <ul className="space-y-3 text-sm text-left">
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-player-accent flex-shrink-0" />
                  <span className="text-white">Disponible 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-player-accent flex-shrink-0" />
                  <span className="text-white">Análisis objetivo con IA</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-player-accent flex-shrink-0" />
                  <span className="text-white">32 puntos de datos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-4 h-4 text-player-accent flex-shrink-0" />
                  <span className="text-white">ROI demostrable</span>
                </li>
              </ul>
            </div>

            {/* Academia */}
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                ACADEMIA
              </div>
              <div className="mb-4">
                <svg className="w-16 h-16 mx-auto text-orange-400" viewBox="0 0 24 24" fill="none">
                  <path d="M3 21h18" stroke="currentColor" strokeWidth="2"/>
                  <path d="M4 21V7l8-4v18" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 21V11l-8-4" stroke="currentColor" strokeWidth="2"/>
                  <rect x="9" y="9" width="4" height="4" stroke="currentColor" strokeWidth="2"/>
                  <rect x="14" y="14" width="4" height="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Academia de Pádel</h3>
              <div className="text-3xl font-bold text-orange-400 mb-4">$2000+</div>
              <div className="text-sm text-player-text-secondary mb-6">por mes</div>
              <ul className="space-y-3 text-sm text-player-text-secondary text-left">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Horarios fijos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Grupos grandes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Atención limitada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>Sin seguimiento individual</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-2xl text-white font-bold mb-4">
              Con Padelyzer ahorras hasta <span className="text-player-accent">$18,000 pesos al mes</span>
            </p>
            <p className="text-player-text-secondary">
              Y obtienes resultados medibles que las alternativas tradicionales no pueden ofrecer.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Pricing */}
      <section className="py-20 bg-player-bg-primary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Preguntas sobre <span className="text-player-accent">precios</span>
            </h2>
            <p className="text-xl text-player-text-secondary max-w-3xl mx-auto">
              Todas las dudas que puedas tener sobre nuestro precio único y transparente.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "¿Por qué solo hay un plan?",
                answer: "Creemos en la simplicidad. Un solo plan con todas las características asegura que cada usuario tenga acceso completo a la mejor tecnología de análisis de pádel. Sin restricciones, sin limitaciones."
              },
              {
                question: "¿Realmente es gratis por 14 días?",
                answer: "Sí, completamente gratis. No pedimos tarjeta de crédito, no hay cargos ocultos. 14 días completos para que pruebes todas las características y veas los resultados por ti mismo."
              },
              {
                question: "¿Qué pasa si no mejoro mi juego?",
                answer: "Garantizamos que verás mejoras en 30 días o te devolvemos todo tu dinero. Sin preguntas, sin complicaciones. Estamos tan seguros de nuestro producto que asumimos todo el riesgo."
              },
              {
                question: "¿Puedo cancelar en cualquier momento?",
                answer: "Por supuesto. Sin contratos, sin permanencias. Cancela con un clic desde la app y se detiene la facturación inmediatamente. Mantienes acceso hasta el final de tu periodo pagado."
              },
              {
                question: "¿Hay descuentos por pagos anuales?",
                answer: "Actualmente ofrecemos solo planes mensuales para mayor flexibilidad. Estamos evaluando opciones anuales con descuentos para el futuro."
              },
              {
                question: "¿El precio incluye actualizaciones?",
                answer: "Todas las actualizaciones, nuevas características y mejoras de IA están incluidas sin costo adicional. Tu suscripción te da acceso a la evolución constante de la plataforma."
              }
            ].map((faq, index) => (
              <details 
                key={index}
                className="bg-player-bg-secondary border border-player-border rounded-2xl p-6 group"
              >
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between text-white">
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

      {/* Garantía */}
      <section className="py-20 bg-player-bg-secondary">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <ShieldIcon className="w-16 h-16 mb-8 text-player-accent mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-player-accent">Garantía total</span> de 30 días
            </h2>
            <p className="text-xl text-player-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Si no mejoras tu ranking, precisión o consistencia en 30 días, 
              te devolvemos el <strong className="text-white">100% de tu dinero</strong>. Sin preguntas, sin complicaciones.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <svg className="w-12 h-12 mb-3 mx-auto text-player-accent" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 10h18" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 15h4" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <h3 className="font-bold text-white mb-2">100% Reembolso</h3>
                <p className="text-player-text-secondary text-sm">Dinero de vuelta completo</p>
              </div>
              <div className="text-center">
                <TrendIcon className="w-12 h-12 mb-3 mx-auto text-player-accent" />
                <h3 className="font-bold text-white mb-2">Proceso Rápido</h3>
                <p className="text-player-text-secondary text-sm">Reembolso en 24-48 horas</p>
              </div>
              <div className="text-center">
                <HandshakeIcon className="w-12 h-12 mb-3 mx-auto text-player-accent" />
                <h3 className="font-bold text-white mb-2">Sin Preguntas</h3>
                <p className="text-player-text-secondary text-sm">No pedimos explicaciones</p>
              </div>
            </div>

            <PlayerButton size="lg" className="text-lg px-8 py-4">
              <RocketIcon className="w-5 h-5 inline-block mr-2" />
              Empezar con garantía total
            </PlayerButton>
          </div>
        </div>
      </section>

      {/* Final CTA - Beta Focus */}
      <section className="py-20 bg-gradient-to-b from-player-bg-primary to-player-bg-secondary">
        <div className="container text-center">
          <div className="inline-block bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-6 animate-pulse">
            <TrendIcon className="w-4 h-4 inline-block mr-2" />
            ÚLTIMAS HORAS - BETA LIMITADO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para tener los <span className="text-player-accent">superpoderes</span> antes que nadie?
          </h2>
          <p className="text-xl text-player-text-secondary mb-8 max-w-2xl mx-auto">
            Solo 927 lugares restantes para acceso beta <strong className="text-white">completamente gratuito</strong>. 
            Una vez llenos, lista de espera hasta 2025.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <PlayerButton size="lg" className="text-lg px-8 py-4 relative animate-pulse">
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                BETA
              </span>
              <RocketIcon className="w-5 h-5 inline-block mr-2" />
              Solicitar acceso beta AHORA
            </PlayerButton>
            <PlayerButton variant="secondary" size="lg" className="text-lg px-8 py-4">
              <VideoIcon className="w-5 h-5 inline-block mr-2" />
              Ver demo del beta
            </PlayerButton>
          </div>

          <p className="text-player-text-secondary text-sm">
            73 beta testers activos • <span className="text-player-accent">89% mejoran en 2 semanas</span> • 927 lugares disponibles
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-player-border bg-player-bg-primary">
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
    </>
  );
}