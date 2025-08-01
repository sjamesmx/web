import { PlayerButton } from '@padelyzer/ui';
import { Logo } from '@padelyzer/ui';

export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-player-bg-primary/80 backdrop-blur-md border-b border-player-border">
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
              <a href="/blog" className="text-player-text-secondary hover:text-player-accent transition-colors">
                Blog
              </a>
            </div>

            <div className="flex items-center gap-4">
              <PlayerButton variant="ghost" size="sm">
                Iniciar Sesión
              </PlayerButton>
              <PlayerButton size="sm">
                Descargar
              </PlayerButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-16 flex items-center">
        <div className="container py-20">
          <div className="max-w-5xl">
            <div className="inline-block bg-player-accent text-black text-sm font-bold px-3 py-1 rounded-full mb-4">
              APP JUGADORES
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Tu juego <span className="text-player-accent">apesta</span>...
              <br />y lo sabes
            </h1>
            
            <p className="text-xl md:text-2xl text-player-text-secondary mb-8 max-w-3xl">
              La IA que analiza tu pádel y te dice exactamente qué mejorar. 
              Mejora tu ranking en 30 días o te devolvemos tu dinero.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <PlayerButton size="lg" className="text-lg">
                Prueba 14 días gratis
              </PlayerButton>
              <PlayerButton variant="secondary" size="lg" className="text-lg">
                Ver demo 2 min
              </PlayerButton>
            </div>

            <div className="flex items-center gap-6 text-sm text-player-text-secondary">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-player-accent rounded-full animate-pulse"></div>
                <span>+15,000 jugadores activos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-player-accent rounded-full animate-pulse"></div>
                <span>4.8/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            ¿Te suena familiar?
          </h2>
          <p className="text-xl text-player-text-secondary text-center mb-16 max-w-3xl mx-auto">
            Si juegas pádel hace más de 6 meses, probablemente te identificas con estos problemas...
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Llevas 2 años jugando igual",
                description: "Sigues cometiendo los mismos errores una y otra vez sin saber cuáles son.",
                pain: "No mejoras aunque entrenes",
                icon: "📊"
              },
              {
                title: "No sabes qué entrenar",
                description: "Practicas sin dirección, perdiendo tiempo en cosas que no necesitas mejorar.",
                pain: "Entrenas sin plan específico",
                icon: "🎯"
              },
              {
                title: "Pierdes contra jugadores 'peores'",
                description: "Te ganan rivales que juegan peor técnicamente pero son más consistentes.",
                pain: "Frustrante y desmoralizante",
                icon: "😤"
              }
            ].map((problem, index) => (
              <div 
                key={index}
                className="bg-player-bg-secondary border border-player-border rounded-2xl p-8 hover:border-player-accent/50 transition-all group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{problem.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-player-accent">{problem.title}</h3>
                <p className="text-player-text-secondary mb-4">{problem.description}</p>
                <div className="text-sm text-red-400 font-medium bg-red-400/10 px-3 py-1 rounded-full">
                  {problem.pain}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-player-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              La IA que <span className="text-player-accent">analiza tu juego</span> en tiempo real
            </h2>
            <p className="text-xl text-player-text-secondary max-w-3xl mx-auto">
              No más entrenar a ciegas. Nuestra inteligencia artificial ve lo que tú no ves y te dice exactamente qué mejorar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-player-bg-primary border border-player-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-player-accent">¿Cómo funciona?</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Grabas tu partido", desc: "Con tu celular desde cualquier ángulo" },
                    { step: "2", title: "IA analiza cada jugada", desc: "Identifica errores técnicos y tácticos" },
                    { step: "3", title: "Recibes tu reporte", desc: "Plan personalizado de mejora" },
                    { step: "4", title: "Mejoras específicamente", desc: "Entrenas solo lo que necesitas" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-player-accent text-black font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className="text-player-text-secondary text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-player-accent/20 to-transparent border border-player-accent/30 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-2 text-player-accent">Análisis técnico</h4>
                <p className="text-player-text-secondary">Posicionamiento, timing, técnica de golpe, movimiento de pies</p>
              </div>
              <div className="bg-gradient-to-r from-player-accent/20 to-transparent border border-player-accent/30 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-2 text-player-accent">Análisis táctico</h4>
                <p className="text-player-text-secondary">Decisiones, colocación, estrategia, puntos débiles del rival</p>
              </div>
              <div className="bg-gradient-to-r from-player-accent/20 to-transparent border border-player-accent/30 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-2 text-player-accent">Plan personalizado</h4>
                <p className="text-player-text-secondary">Ejercicios específicos, prioridades, métricas de progreso</p>
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
                icon: "🎥",
                highlight: "Más preciso que un entrenador humano"
              },
              {
                title: "Métricas de rendimiento",
                description: "Velocidad de pelota, precisión de golpes, eficiencia de movimiento",
                icon: "📈",
                highlight: "Datos que nunca habías visto"
              },
              {
                title: "Plan de entrenamiento",
                description: "Rutinas personalizadas basadas en tus debilidades específicas",
                icon: "📋",
                highlight: "Entrena inteligente, no más"
              },
              {
                title: "Seguimiento de progreso",
                description: "Ve tu mejora mes a mes con gráficos y estadísticas detalladas",
                icon: "📊",
                highlight: "Motivación basada en datos"
              },
              {
                title: "Análisis de rivales",
                description: "Identifica patrones y debilidades de tus oponentes habituales",
                icon: "🎯",
                highlight: "Ventaja táctica garantizada"
              },
              {
                title: "Comunidad de jugadores",
                description: "Comparte análisis y aprende de jugadores de tu nivel",
                icon: "👥",
                highlight: "No estás solo en esto"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-player-bg-secondary border border-player-border rounded-2xl p-6 hover:border-player-accent/50 transition-all group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
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
              Un precio <span className="text-player-accent">ridículamente bajo</span> para lo que obtienes
            </h2>
            <p className="text-xl text-player-text-secondary max-w-3xl mx-auto">
              Menos de lo que gastas en pelotas al mes. Más efectivo que 10 clases particulares.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-b from-player-bg-secondary to-player-bg-primary border-2 border-player-accent rounded-3xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-player-accent text-black text-sm font-bold px-4 py-2 rounded-full">
                  MEJOR VALOR
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Plan Mensual</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold">$199</span>
                  <span className="text-xl text-player-text-secondary">/mes</span>
                </div>
                <p className="text-player-text-secondary">Cancela cuando quieras</p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Análisis ilimitados con IA",
                  "Plan de entrenamiento personalizado",
                  "Métricas de rendimiento detalladas",
                  "Análisis de rivales",
                  "Seguimiento de progreso",
                  "Acceso a la comunidad",
                  "Soporte prioritario"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-player-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black text-sm">✓</span>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <PlayerButton size="lg" className="w-full text-lg mb-4">
                Prueba 14 días gratis
              </PlayerButton>
              
              <p className="text-sm text-player-text-secondary text-center">
                Sin compromisos • Cancela en cualquier momento
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-player-bg-secondary border border-player-border rounded-2xl p-6 max-w-2xl mx-auto">
              <h4 className="text-xl font-bold mb-3 text-player-accent">🔒 Garantía de 30 días</h4>
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

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-player-bg-secondary to-player-bg-primary">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Deja de entrenar <span className="text-player-accent">a ciegas</span>
          </h2>
          <p className="text-xl text-player-text-secondary mb-8 max-w-2xl mx-auto">
            15,000+ jugadores ya están mejorando con datos reales. 
            Tu turno es ahora.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <PlayerButton size="lg" className="text-lg">
              Empieza tu prueba gratis de 14 días
            </PlayerButton>
            <PlayerButton variant="secondary" size="lg" className="text-lg">
              Ver demo de 2 minutos
            </PlayerButton>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-player-text-secondary">
            <div className="flex items-center gap-2">
              <span className="text-player-accent">✓</span>
              <span>Sin tarjeta de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-player-accent">✓</span>
              <span>Cancela cuando quieras</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-player-accent">✓</span>
              <span>Garantía 30 días</span>
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
    </>
  );
}