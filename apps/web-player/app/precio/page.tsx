'use client';

import { PlayerButton } from '@padelyzer/ui';
import { Logo } from '@padelyzer/ui';
import MobileMenu from '../../components/MobileMenu';

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
              🚀 BETA EXCLUSIVO - ACCESO GRATIS PARA PRIMEROS 100
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Acceso <span className="text-player-accent">gratuito</span> durante el beta.
            </h1>
            <p className="text-xl text-player-text-secondary mb-8 max-w-2xl mx-auto">
              Los primeros 100 jugadores obtienen acceso completo <strong className="text-white">sin costo</strong> mientras estamos en beta. 
              Solo quedan <span className="text-player-accent font-bold">27 lugares</span>.
            </p>
            
            {/* Beta urgency box */}
            <div className="bg-player-bg-secondary border-2 border-player-accent rounded-xl p-6 mb-12 max-w-lg mx-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="text-left">
                  <h3 className="text-white font-bold text-lg">🎯 Acceso Beta Gratuito</h3>
                  <p className="text-player-text-secondary text-sm">Solo primeros 100 jugadores</p>
                </div>
                <div className="text-right">
                  <p className="text-5xl font-bold text-player-accent">27</p>
                  <p className="text-player-text-secondary text-sm">lugares restantes</p>
                </div>
              </div>
              
              <div className="bg-player-bg-primary rounded-full h-4 overflow-hidden mb-2">
                <div className="bg-gradient-to-r from-red-500 to-player-accent h-full rounded-full transition-all duration-1000" style={{ width: '73%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-player-text-secondary">
                <span>73 confirmados</span>
                <span>27 disponibles</span>
              </div>
            </div>

            {/* Main Pricing Card */}
            <div className="max-w-lg mx-auto bg-gradient-to-br from-player-bg-secondary to-player-bg-primary border-2 border-player-accent rounded-3xl p-8 md:p-12 relative shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
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
                      <span className="text-black text-sm font-bold">✓</span>
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
                🚀 Solicitar acceso beta GRATUITO
              </PlayerButton>
              <p className="text-center text-player-text-secondary text-sm">
                Acceso inmediato • Gratis durante beta • Feedback directo con creadores
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-player-text-secondary">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>14 días gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Sin tarjeta de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Cancela cuando quieras</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
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
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-bold text-white mb-4">Entrenador Personal</h3>
              <div className="text-3xl font-bold text-red-400 mb-4">$800-1500</div>
              <div className="text-sm text-player-text-secondary mb-6">por sesión</div>
              <ul className="space-y-3 text-sm text-player-text-secondary text-left">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">×</span>
                  <span>Solo cuando está disponible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">×</span>
                  <span>Feedback subjetivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">×</span>
                  <span>Sin análisis de datos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">×</span>
                  <span>Caro a largo plazo</span>
                </li>
              </ul>
            </div>

            {/* Padelyzer */}
            <div className="bg-gradient-to-br from-player-accent/20 to-player-accent/10 border-2 border-player-accent rounded-2xl p-8 text-center relative transform scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-player-accent text-black px-3 py-1 rounded-full text-sm font-bold">
                PADELYZER
              </div>
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-4">IA + Coach Virtual</h3>
              <div className="text-3xl font-bold text-player-accent mb-4">$199</div>
              <div className="text-sm text-player-text-secondary mb-6">por mes</div>
              <ul className="space-y-3 text-sm text-left">
                <li className="flex items-start gap-2">
                  <span className="text-player-accent">✓</span>
                  <span className="text-white">Disponible 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-player-accent">✓</span>
                  <span className="text-white">Análisis objetivo con IA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-player-accent">✓</span>
                  <span className="text-white">32 puntos de datos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-player-accent">✓</span>
                  <span className="text-white">ROI demostrable</span>
                </li>
              </ul>
            </div>

            {/* Academia */}
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                ACADEMIA
              </div>
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-xl font-bold text-white mb-4">Academia de Pádel</h3>
              <div className="text-3xl font-bold text-orange-400 mb-4">$2000+</div>
              <div className="text-sm text-player-text-secondary mb-6">por mes</div>
              <ul className="space-y-3 text-sm text-player-text-secondary text-left">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">×</span>
                  <span>Horarios fijos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">×</span>
                  <span>Grupos grandes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">×</span>
                  <span>Atención limitada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">×</span>
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
            <div className="text-6xl mb-8">🛡️</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-player-accent">Garantía total</span> de 30 días
            </h2>
            <p className="text-xl text-player-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Si no mejoras tu ranking, precisión o consistencia en 30 días, 
              te devolvemos el <strong className="text-white">100% de tu dinero</strong>. Sin preguntas, sin complicaciones.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl mb-3">💵</div>
                <h3 className="font-bold text-white mb-2">100% Reembolso</h3>
                <p className="text-player-text-secondary text-sm">Dinero de vuelta completo</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-white mb-2">Proceso Rápido</h3>
                <p className="text-player-text-secondary text-sm">Reembolso en 24-48 horas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-bold text-white mb-2">Sin Preguntas</h3>
                <p className="text-player-text-secondary text-sm">No pedimos explicaciones</p>
              </div>
            </div>

            <PlayerButton size="lg" className="text-lg px-8 py-4">
              🚀 Empezar con garantía total
            </PlayerButton>
          </div>
        </div>
      </section>

      {/* Final CTA - Beta Focus */}
      <section className="py-20 bg-gradient-to-b from-player-bg-primary to-player-bg-secondary">
        <div className="container text-center">
          <div className="inline-block bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-6 animate-pulse">
            ⚡ ÚLTIMAS HORAS - BETA LIMITADO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para tener los <span className="text-player-accent">superpoderes</span> antes que nadie?
          </h2>
          <p className="text-xl text-player-text-secondary mb-8 max-w-2xl mx-auto">
            Solo 27 lugares restantes para acceso beta <strong className="text-white">completamente gratuito</strong>. 
            Una vez llenos, lista de espera hasta 2025.
          </p>
          
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

          <p className="text-player-text-secondary text-sm">
            73 beta testers activos • <span className="text-player-accent">89% mejoran en 2 semanas</span> • 27 lugares disponibles
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