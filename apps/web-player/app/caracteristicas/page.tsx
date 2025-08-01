import { PlayerButton } from '@padelyzer/ui';
import { Logo } from '@padelyzer/ui';

export default function CaracteristicasPage() {
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
              <a href="/caracteristicas" className="text-player-accent font-medium">
                Características
              </a>
              <a href="/precio" className="text-player-text-secondary hover:text-player-accent transition-colors">
                Precio
              </a>
              <a href="/descargar" className="text-player-text-secondary hover:text-player-accent transition-colors">
                Descargar
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-player-bg-primary">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Todo lo que necesitas para 
              <span className="text-player-accent block">dominar el pádel</span>
            </h1>
            <p className="text-xl text-player-text-secondary mb-8 max-w-2xl mx-auto">
              Tecnología avanzada + Metodología probada = Resultados reales en tiempo récord
            </p>
            <div className="flex justify-center gap-6 text-sm text-player-text-secondary">
              <span className="flex items-center gap-2">
                <span className="text-player-accent">🤖</span>
                <span>IA Avanzada</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-player-accent">📊</span>  
                <span>32 Puntos de Análisis</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-player-accent">🎯</span>
                <span>Resultados en 30 días</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Análisis Biomecánico Feature */}
      <section className="py-20 bg-player-bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 bg-player-accent/20 text-player-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>🎯</span>
                <span>ANÁLISIS BIOMECÁNICO</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                IA que ve lo que tú <span className="text-player-accent">no puedes ver</span>
              </h2>
              
              <p className="text-xl text-player-text-secondary mb-8 leading-relaxed">
                Nuestro sistema analiza <strong className="text-white">32 puntos corporales</strong> frame por frame, 
                detectando micro-movimientos que determinan la diferencia entre un golpe perfecto y uno mediocre.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-player-bg-primary/50 rounded-xl border border-player-border">
                  <div className="text-player-accent text-2xl">📐</div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Detección de 32 puntos corporales</h3>
                    <p className="text-player-text-secondary text-sm">Análisis completo desde los pies hasta la cabeza</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-player-bg-primary/50 rounded-xl border border-player-border">
                  <div className="text-player-accent text-2xl">🎬</div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Análisis frame por frame</h3>
                    <p className="text-player-text-secondary text-sm">Cada movimiento capturado y evaluado al detalle</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-player-bg-primary/50 rounded-xl border border-player-border">
                  <div className="text-player-accent text-2xl">🏆</div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Comparación con jugadores pro</h3>
                    <p className="text-player-text-secondary text-sm">Tu técnica vs. los mejores del mundo</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-player-bg-primary/50 rounded-xl border border-player-border">
                  <div className="text-player-accent text-2xl">💡</div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Recomendaciones específicas</h3>
                    <p className="text-player-text-secondary text-sm">Ejercicios personalizados para cada error detectado</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl">
                <div className="bg-player-bg-primary rounded-xl overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-medium">Análisis Biomecánico</span>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-player-accent rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-player-accent rounded-full animate-pulse delay-300"></div>
                        <div className="w-2 h-2 bg-player-accent rounded-full animate-pulse delay-700"></div>
                      </div>
                    </div>
                    
                    <div className="aspect-video bg-player-bg-secondary rounded-lg mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-20">🎾</div>
                      </div>
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        REC
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                        32 puntos detectados
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white text-sm">Precisión Bandeja</span>
                        <span className="text-red-400 font-bold text-sm">-23%</span>
                      </div>
                      <div className="w-full bg-player-border rounded-full h-2">
                        <div className="bg-red-400 h-2 rounded-full w-1/3"></div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-white text-sm">Posicionamiento</span>
                        <span className="text-player-accent font-bold text-sm">+12%</span>
                      </div>
                      <div className="w-full bg-player-border rounded-full h-2">
                        <div className="bg-player-accent h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-player-accent text-black px-3 py-1 rounded-full text-sm font-bold">
                IA Analizando
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Padel IQ Feature */}
      <section className="py-20 bg-player-bg-primary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Visual mockup - izquierda */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl">
                <div className="bg-player-bg-primary rounded-xl p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-white font-bold mb-2">Tu Padel IQ</h3>
                    <div className="text-6xl font-bold text-player-accent mb-2">847</div>
                    <div className="text-sm text-player-text-secondary">Nivel: Avanzado</div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { skill: "Técnica", score: 8.5, color: "bg-green-500" },
                      { skill: "Táctica", score: 7.2, color: "bg-blue-500" },  
                      { skill: "Físico", score: 6.8, color: "bg-yellow-500" },
                      { skill: "Mental", score: 9.1, color: "bg-purple-500" },
                      { skill: "Consistencia", score: 7.8, color: "bg-pink-500" },
                      { skill: "Potencia", score: 8.3, color: "bg-orange-500" },
                      { skill: "Precisión", score: 7.6, color: "bg-cyan-500" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-white text-sm">{item.skill}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-player-border rounded-full h-2">
                            <div 
                              className={`${item.color} h-2 rounded-full transition-all duration-1000`}
                              style={{ width: `${item.score * 10}%` }}
                            ></div>
                          </div>
                          <span className="text-player-accent font-bold text-sm w-8">{item.score}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-3 bg-player-bg-secondary rounded-lg">
                    <div className="text-center">
                      <div className="text-player-accent font-bold text-sm">Próximo objetivo</div>
                      <div className="text-white text-xs">Mejorar consistencia en volea</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                7 Dimensiones
              </div>
            </div>
            
            {/* Content - derecha */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>🧠</span>
                <span>PADEL IQ SCORE</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Tu nivel real en <span className="text-player-accent">un solo número</span>
              </h2>
              
              <p className="text-xl text-player-text-secondary mb-8 leading-relaxed">
                Olvídate de las categorías obsoletas. <strong className="text-white">Padel IQ</strong> es un score único y personalizado 
                que mide tu nivel real evaluando 7 dimensiones clave de tu juego.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { dimension: "Técnica", icon: "🎾" },
                  { dimension: "Táctica", icon: "🧩" },
                  { dimension: "Físico", icon: "💪" },
                  { dimension: "Mental", icon: "🧠" },
                  { dimension: "Consistencia", icon: "🎯" },
                  { dimension: "Potencia", icon: "⚡" },
                  { dimension: "Precisión", icon: "🔍" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-player-bg-secondary/30 rounded-lg border border-player-border">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-white font-medium">{item.dimension}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 p-3 bg-player-accent/20 rounded-lg border border-player-accent">
                  <span className="text-xl">📊</span>
                  <span className="text-player-accent font-bold">Score Global</span>
                </div>
              </div>
              
              <div className="bg-player-bg-secondary p-6 rounded-xl border border-player-border">
                <h3 className="text-white font-bold mb-3">¿Cómo funciona?</h3>
                <ul className="space-y-2 text-player-text-secondary text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-player-accent">•</span>
                    <span>Cada dimensión se evalúa de 0 a 10</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-player-accent">•</span>
                    <span>El algoritmo pondera según tu estilo de juego</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-player-accent">•</span>
                    <span>Tu score evoluciona con cada partido analizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-player-accent">•</span>
                    <span>Comparativa automática con jugadores de tu nivel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Más características en grid */}
      <section className="py-20 bg-player-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Y esto es solo el <span className="text-player-accent">comienzo</span>
            </h2>
            <p className="text-xl text-player-text-secondary max-w-3xl mx-auto">
              Cada característica diseñada para llevarte al siguiente nivel de forma inteligente y eficiente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Planes de Entrenamiento",
                description: "Rutinas personalizadas basadas en tus debilidades específicas. Cada ejercicio tiene un propósito.",
                icon: "📋",
                gradient: "from-blue-500/20 to-blue-600/10",
                borderColor: "border-blue-500/30"
              },
              {
                title: "Tracking de Progreso",
                description: "Ve tu mejora mes a mes con gráficos detallados. La motivación que necesitas basada en datos reales.",
                icon: "📈",
                gradient: "from-green-500/20 to-green-600/10",
                borderColor: "border-green-500/30"
              },
              {
                title: "Análisis de Rivales",
                description: "Identifica patrones y debilidades de tus oponentes habituales. Ventaja táctica garantizada.",
                icon: "🔍",
                gradient: "from-purple-500/20 to-purple-600/10",
                borderColor: "border-purple-500/30"
              },
              {
                title: "Comunidad y Torneos",
                description: "Conecta con jugadores de tu nivel. Participa en torneos y compite con rankings actualizados.",
                icon: "🏆",
                gradient: "from-yellow-500/20 to-yellow-600/10",
                borderColor: "border-yellow-500/30"
              },
              {
                title: "Coach Virtual",
                description: "IA que actúa como tu entrenador personal 24/7. Consejos específicos para cada situación de juego.",
                icon: "🤖",
                gradient: "from-cyan-500/20 to-cyan-600/10",
                borderColor: "border-cyan-500/30"
              },
              {
                title: "Estadísticas Avanzadas",
                description: "Métricas que ni sabías que existían. Velocidad de pelota, spin, ángulos, patrones de movimiento.",
                icon: "📊",
                gradient: "from-red-500/20 to-red-600/10",
                borderColor: "border-red-500/30"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${feature.gradient} border ${feature.borderColor} rounded-2xl p-8 hover:border-player-accent/50 transition-all group hover:transform hover:scale-105 duration-300`}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-player-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-player-bg-primary">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para <span className="text-player-accent">revolucionar</span> tu juego?
          </h2>
          <p className="text-xl text-player-text-secondary mb-8 max-w-2xl mx-auto">
            Todas estas características esperándote. Empieza tu transformación hoy mismo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <PlayerButton size="lg" className="text-lg px-8 py-4">
              🚀 Prueba gratis 14 días
            </PlayerButton>
            <PlayerButton variant="secondary" size="lg" className="text-lg px-8 py-4">
              💰 Ver precios
            </PlayerButton>
          </div>

          <p className="text-player-text-secondary text-sm">
            Sin tarjeta de crédito • Cancela cuando quieras • Garantía 30 días
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