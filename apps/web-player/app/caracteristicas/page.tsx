'use client';

import { PlayerButton } from '@padelyzer/ui';
import { Logo } from '@padelyzer/ui';
import MobileMenu from '../../components/MobileMenu';
import { 
  RocketIcon, 
  AnalyticsIcon, 
  TargetIcon, 
  VideoIcon, 
  ChartIcon, 
  CheckIcon,
  AIBrainIcon,
  TrendIcon,
  TrainingIcon,
  ProgressIcon,
  CommunityIcon,
  StarIcon
} from '../../components/icons';

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

      {/* Hero Section - Beta Coherence */}
      <section className="pt-24 pb-16 bg-player-bg-primary">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-6 animate-pulse">
              <RocketIcon className="w-4 h-4 inline-block mr-2" />
              BETA EXCLUSIVO - SOLO 27 LUGARES DISPONIBLES
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Los <span className="text-player-accent">superpoderes</span> que tendrás en la cancha
            </h1>
            <p className="text-xl text-player-text-secondary mb-8 max-w-2xl mx-auto">
              Acceso exclusivo a características revolucionarias que <strong className="text-white">solo 73 beta testers</strong> han probado hasta ahora.
            </p>
            <div className="flex justify-center gap-6 text-sm text-player-text-secondary mb-8">
              <span className="flex items-center gap-2">
                <RocketIcon className="w-4 h-4 text-player-accent" />
                <span>Beta exclusivo</span>
              </span>
              <span className="flex items-center gap-2">
                <ChartIcon className="w-4 h-4 text-player-accent" />
                <span>32 Puntos de Análisis IA</span>
              </span>
              <span className="flex items-center gap-2">
                <TrendIcon className="w-4 h-4 text-player-accent" />
                <span>Resultados inmediatos</span>
              </span>
            </div>
            
            {/* Beta urgency indicator */}
            <div className="bg-player-bg-secondary border-2 border-player-accent rounded-xl p-4 mb-6 max-w-md mx-auto">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="text-white font-bold text-sm flex items-center gap-2">
                    <TargetIcon className="w-4 h-4" />
                    Acceso Beta Limitado
                  </p>
                  <p className="text-player-text-secondary text-xs">Solo primeros 1000 jugadores</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-player-accent">927</p>
                  <p className="text-player-text-secondary text-xs">lugares restantes</p>
                </div>
              </div>
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
                <TargetIcon className="w-4 h-4" />
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
                  <AnalyticsIcon className="w-8 h-8 text-player-accent" />
                  <div>
                    <h3 className="font-bold text-white mb-2">Detección de 32 puntos corporales</h3>
                    <p className="text-player-text-secondary text-sm">Análisis completo desde los pies hasta la cabeza</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-player-bg-primary/50 rounded-xl border border-player-border">
                  <VideoIcon className="w-8 h-8 text-player-accent" />
                  <div>
                    <h3 className="font-bold text-white mb-2">Análisis frame por frame</h3>
                    <p className="text-player-text-secondary text-sm">Cada movimiento capturado y evaluado al detalle</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-player-bg-primary/50 rounded-xl border border-player-border">
                  <StarIcon className="w-8 h-8 text-player-accent" />
                  <div>
                    <h3 className="font-bold text-white mb-2">Comparación con jugadores pro</h3>
                    <p className="text-player-text-secondary text-sm">Tu técnica vs. los mejores del mundo</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-player-bg-primary/50 rounded-xl border border-player-border">
                  <AIBrainIcon className="w-8 h-8 text-player-accent" />
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
                        <div className="opacity-20">
                          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 2C12 2 8 6 8 12s4 10 4 10" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 2C12 2 16 6 16 12s-4 10-4 10" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </div>
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
                    <div className="text-6xl font-bold text-player-accent mb-2">84.7</div>
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
                <AIBrainIcon className="w-4 h-4" />
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
                  { dimension: "Técnica", Icon: VideoIcon },
                  { dimension: "Táctica", Icon: AIBrainIcon },
                  { dimension: "Físico", Icon: TrendIcon },
                  { dimension: "Mental", Icon: AIBrainIcon },
                  { dimension: "Consistencia", Icon: TargetIcon },
                  { dimension: "Potencia", Icon: TrendIcon },
                  { dimension: "Precisión", Icon: TargetIcon }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-player-bg-secondary/30 rounded-lg border border-player-border">
                    <item.Icon className="w-5 h-5 text-player-accent" />
                    <span className="text-white font-medium">{item.dimension}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 p-3 bg-player-accent/20 rounded-lg border border-player-accent">
                  <ChartIcon className="w-5 h-5 text-player-accent" />
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
                Icon: TrainingIcon,
                gradient: "from-blue-500/20 to-blue-600/10",
                borderColor: "border-blue-500/30"
              },
              {
                title: "Tracking de Progreso",
                description: "Ve tu mejora mes a mes con gráficos detallados. La motivación que necesitas basada en datos reales.",
                Icon: TrendIcon,
                gradient: "from-green-500/20 to-green-600/10",
                borderColor: "border-green-500/30"
              },
              {
                title: "Análisis de Rivales",
                description: "Identifica patrones y debilidades de tus oponentes habituales. Ventaja táctica garantizada.",
                Icon: AnalyticsIcon,
                gradient: "from-purple-500/20 to-purple-600/10",
                borderColor: "border-purple-500/30"
              },
              {
                title: "Comunidad y Torneos",
                description: "Conecta con jugadores de tu nivel. Participa en torneos y compite con rankings actualizados.",
                Icon: StarIcon,
                gradient: "from-yellow-500/20 to-yellow-600/10",
                borderColor: "border-yellow-500/30"
              },
              {
                title: "Coach Virtual",
                description: "IA que actúa como tu entrenador personal 24/7. Consejos específicos para cada situación de juego.",
                Icon: AIBrainIcon,
                gradient: "from-cyan-500/20 to-cyan-600/10",
                borderColor: "border-cyan-500/30"
              },
              {
                title: "Estadísticas Avanzadas",
                description: "Métricas que ni sabías que existían. Velocidad de pelota, spin, ángulos, patrones de movimiento.",
                Icon: ChartIcon,
                gradient: "from-red-500/20 to-red-600/10",
                borderColor: "border-red-500/30"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${feature.gradient} border ${feature.borderColor} rounded-2xl p-8 hover:border-player-accent/50 transition-all group hover:transform hover:scale-105 duration-300`}
              >
                <feature.Icon className="w-12 h-12 mb-6 text-player-accent group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-player-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Beta Focus */}
      <section className="py-20 bg-player-bg-primary">
        <div className="container text-center">
          <div className="inline-block bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-6 animate-pulse">
            <TrendIcon className="w-4 h-4 inline-block mr-2" />
            ÚLTIMAS HORAS - BETA LIMITADO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para tener los <span className="text-player-accent">superpoderes</span> antes que nadie?
          </h2>
          <p className="text-xl text-player-text-secondary mb-8 max-w-2xl mx-auto">
            Todas estas características ya están funcionando para 73 beta testers. <strong className="text-white">Solo quedan 927 lugares</strong> para el acceso exclusivo.
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
            Acceso inmediato • Gratis durante beta • Feedback directo con creadores
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