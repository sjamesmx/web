import { PlayerButton } from '@padelyzer/ui';
import { Logo } from '@padelyzer/ui';

export default function HomePage() {
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
              <a href="/blog" className="text-player-text-secondary hover:text-player-accent transition-colors">
                Blog
              </a>
            </div>

            <div className="flex items-center gap-4">
              <PlayerButton variant="ghost" size="sm">
                Iniciar Sesión
              </PlayerButton>
              <PlayerButton size="sm">
                Descargar App
              </PlayerButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Nueva estructura optimizada */}
      <section className="min-h-screen bg-player-bg-primary relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-player-bg-primary via-player-bg-primary to-player-bg-secondary"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-player-accent/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-10 w-32 h-32 bg-player-accent/5 rounded-full animate-pulse delay-300"></div>
        
        <div className="relative z-10 container pt-24 pb-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Content */}
              <div>
                <div className="inline-block bg-player-accent text-black text-sm font-bold px-4 py-2 rounded-full mb-6">
                  🚀 APP JUGADORES #1 EN MÉXICO
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Tu juego <span className="text-player-accent">apesta</span>...
                  <br />y lo sabes
                </h1>
                
                <p className="text-xl md:text-2xl text-player-text-secondary mb-8 max-w-2xl leading-relaxed">
                  La única app con <strong className="text-white">IA que analiza tu pádel</strong> en tiempo real 
                  y te dice exactamente qué mejorar.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <PlayerButton size="lg" className="text-lg px-8 py-4">
                    <span className="flex items-center gap-2">
                      📱 Prueba 14 días gratis
                    </span>
                  </PlayerButton>
                  <PlayerButton variant="secondary" size="lg" className="text-lg px-8 py-4">
                    <span className="flex items-center gap-2">
                      ▶️ Ver demo 2 min
                    </span>
                  </PlayerButton>
                </div>

                {/* Trust indicators - mejorados */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2 text-player-text-secondary">
                    <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                    <span className="text-white font-medium">4.8/5</span>
                    <span>(2,341 reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 text-player-text-secondary">
                    <span className="text-player-accent">🎾</span>
                    <span className="text-white font-medium">60,000+</span>
                    <span>jugadores activos</span>
                  </div>
                  <div className="flex items-center gap-2 text-player-text-secondary">
                    <span className="text-green-400">📈</span>
                    <span className="text-white font-medium">87%</span>
                    <span>mejoran en 30 días</span>
                  </div>
                </div>
              </div>

              {/* Mockup/Visual */}
              <div className="relative lg:justify-self-end">
                <div className="relative w-80 h-80 mx-auto">
                  {/* Phone mockup placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-300">
                    <div className="absolute inset-4 bg-player-bg-primary rounded-[2rem] border border-player-border">
                      <div className="p-6 h-full flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 bg-player-accent rounded-full"></div>
                          <span className="text-white text-xs font-medium">Analizando...</span>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl mb-2">🎾</div>
                            <div className="text-player-accent font-bold text-lg">85% Precisión</div>
                            <div className="text-xs text-player-text-secondary">Mejora: Bandeja</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating stats */}
                  <div className="absolute -top-6 -left-6 bg-player-accent text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
                    +32% precisión
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce delay-300">
                    -45% errores
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Nueva estructura */}
      <section className="py-20 bg-player-bg-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Reconoces alguno de estos <span className="text-player-accent">problemas</span>?
          </h2>
          <p className="text-xl text-player-text-secondary text-center mb-16 max-w-3xl mx-auto">
            Si llevas más de 6 meses jugando pádel, probablemente vives alguna de estas frustraciones...
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Llevas años jugando igual",
                description: "Sin mejora visible. Mismos errores. La frustración crece cada partido.",
                pain: "Estancamiento total",
                icon: "😤",
                color: "from-red-500/20 to-red-600/10",
                borderColor: "border-red-500/30"
              },
              {
                title: "No sabes qué entrenar",
                description: "Practicas sin dirección. Pierdes tiempo en cosas que no necesitas mejorar.",
                pain: "Tiempo perdido",
                icon: "🤷",
                color: "from-orange-500/20 to-orange-600/10",
                borderColor: "border-orange-500/30"
              },
              {
                title: "Pierdes partidos 'ganados'",
                description: "Tu técnica te traiciona en momentos clave. La mente te juega malas pasadas.",
                pain: "Frustración máxima",
                icon: "🎾",
                color: "from-purple-500/20 to-purple-600/10",
                borderColor: "border-purple-500/30"
              }
            ].map((problem, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${problem.color} border ${problem.borderColor} rounded-2xl p-8 hover:border-player-accent/50 transition-all group hover:transform hover:scale-105 duration-300 backdrop-blur-sm`}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{problem.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{problem.title}</h3>
                <p className="text-player-text-secondary mb-6 leading-relaxed">{problem.description}</p>
                <div className="text-sm text-red-400 font-bold bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20">
                  💔 {problem.pain}
                </div>
              </div>
            ))}
          </div>

          {/* Call out */}
          <div className="text-center mt-16">
            <p className="text-2xl text-white font-bold mb-2">
              ¿Te sientes identificado?
            </p>
            <p className="text-player-text-secondary">
              No eres el único. <span className="text-player-accent font-medium">87% de jugadores</span> sufren estos mismos problemas.
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
                  <div className="text-player-accent text-3xl group-hover:scale-110 transition-transform">📊</div>
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
                  <div className="text-player-accent text-3xl group-hover:scale-110 transition-transform">🧠</div>
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
                  <div className="text-player-accent text-3xl group-hover:scale-110 transition-transform">🎯</div>
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
                        <div className="text-6xl mb-4">🎾</div>
                        <div className="text-player-accent font-bold text-2xl mb-1">Padel IQ: 847</div>
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
                <div className="absolute -top-8 -left-8 bg-player-accent text-black px-4 py-2 rounded-xl font-bold text-sm shadow-lg animate-pulse">
                  🎯 Análisis IA
                </div>
                <div className="absolute -bottom-6 -right-8 bg-green-500 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg animate-pulse delay-500">
                  ✓ Mejora detectada
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

      {/* Social Proof Section */}
      <section className="py-20 bg-player-bg-primary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Lo que dicen nuestros <span className="text-player-accent">jugadores</span>
            </h2>
            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-player-accent mb-1">4.8</div>
                <div className="text-yellow-400 text-lg mb-1">⭐⭐⭐⭐⭐</div>
                <div className="text-player-text-secondary text-sm">App Store</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-player-accent mb-1">60K+</div>
                <div className="text-player-text-secondary text-sm">Jugadores activos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-player-accent mb-1">87%</div>
                <div className="text-player-text-secondary text-sm">Mejoran en 30 días</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Carlos M.",
                location: "Guadalajara",
                quote: "Subí de categoría 5 a 7 en solo 3 meses. El análisis de video es increíble, detecta errores que ni mi entrenador veía.",
                rating: 5,
                improvement: "Categoría 5 → 7",
                timeframe: "3 meses"
              },
              {
                name: "Ana S.",
                location: "CDMX",
                quote: "Mi bandeja era un desastre. La app me dio ejercicios específicos y ahora es mi golpe más fuerte. Increíble progreso.",
                rating: 5,
                improvement: "+45% precisión",
                timeframe: "6 semanas"
              },
              {
                name: "Roberto L.",
                location: "Monterrey",
                quote: "Pensé que era muy caro pero se pagó solo. Ahora gano torneos que antes perdía. Mejor inversión que he hecho.",
                rating: 5,
                improvement: "3 torneos ganados",
                timeframe: "4 meses"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-player-bg-secondary border border-player-border rounded-2xl p-6 hover:border-player-accent/50 transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-player-text-secondary mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-player-border pt-4">
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-player-text-secondary mb-2">{testimonial.location}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-player-accent font-medium">{testimonial.improvement}</span>
                    <span className="text-player-text-secondary">{testimonial.timeframe}</span>
                  </div>
                </div>
              </div>
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
            Más de 60,000 jugadores ya están mejorando con datos reales. 
            Tu turno es ahora.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <PlayerButton size="lg" className="text-lg px-8 py-4">
              🚀 Empezar prueba gratis de 14 días
            </PlayerButton>
            <PlayerButton variant="secondary" size="lg" className="text-lg px-8 py-4">
              ▶️ Ver demo de 2 minutos
            </PlayerButton>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-player-text-secondary mb-8">
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

          <p className="text-player-text-secondary text-sm">
            Únete a los <span className="text-player-accent font-medium">60,000+ jugadores</span> que ya mejoraron su juego
          </p>
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