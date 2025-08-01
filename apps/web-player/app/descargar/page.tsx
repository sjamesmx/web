import { PlayerButton } from '@padelyzer/ui';
import { Logo } from '@padelyzer/ui';

export default function DescargarPage() {
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
              <a href="/precio" className="text-player-text-secondary hover:text-player-accent transition-colors">
                Precio
              </a>
              <a href="/descargar" className="text-player-accent font-medium">
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

      {/* Hero Section - Beta Exclusivo */}
      <section className="pt-24 pb-16 bg-player-bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full mb-8 animate-pulse">
              🚀 ACCESO BETA EXCLUSIVO - SOLO 27 LUGARES DISPONIBLES
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Solicita acceso al <span className="text-player-accent">beta exclusivo</span>
            </h1>
            <p className="text-xl text-player-text-secondary mb-8 max-w-2xl mx-auto">
              Únete a los <strong className="text-white">73 beta testers</strong> que ya tienen superpoderes en la cancha. 
              <strong className="text-player-accent">Solo quedan 27 lugares</strong> para el acceso gratuito.
            </p>
            
            {/* Beta urgency indicator */}
            <div className="bg-player-bg-secondary border-2 border-player-accent rounded-xl p-6 mb-12 max-w-lg mx-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="text-left">
                  <h3 className="text-white font-bold text-lg">🎯 Acceso Beta Limitado</h3>
                  <p className="text-player-text-secondary text-sm">Solo primeros 100 jugadores</p>
                </div>
                <div className="text-right">
                  <p className="text-5xl font-bold text-player-accent">27</p>
                  <p className="text-player-text-secondary text-sm">lugares restantes</p>
                </div>
              </div>
              
              <div className="bg-player-bg-primary rounded-full h-4 overflow-hidden mb-2">
                <div className="bg-gradient-to-r from-red-500 to-player-accent h-full rounded-full transition-all duration-1000" style="width: 73%"></div>
              </div>
              <div className="flex justify-between text-xs text-player-text-secondary">
                <span>73 confirmados</span>
                <span>27 disponibles</span>
              </div>
            </div>

            {/* Beta Access buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              {/* Beta Access CTA */}
              <PlayerButton size="lg" className="text-lg px-8 py-4 relative animate-pulse min-w-[300px]">
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  BETA
                </span>
                🚀 Solicitar acceso beta AHORA
              </PlayerButton>
              
              {/* Demo button */}
              <PlayerButton variant="secondary" size="lg" className="text-lg px-8 py-4 min-w-[250px]">
                ▶️ Ver demo del beta
              </PlayerButton>
            </div>

            {/* QR Codes */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="text-4xl">📱</div>
                </div>
                <p className="text-player-text-secondary text-sm">
                  <span className="text-white font-medium">iOS</span> - Escanea con tu iPhone
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="text-4xl">🤖</div>
                </div>
                <p className="text-player-text-secondary text-sm">
                  <span className="text-white font-medium">Android</span> - Escanea con tu cámara
                </p>
              </div>
            </div>

            {/* Beta Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-player-text-secondary">
              <div className="text-center">
                <div className="text-2xl font-bold text-player-accent mb-1">73</div>
                <div>Beta testers activos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-player-accent mb-1">89%</div>
                <div>Mejoran en 2 semanas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-player-accent mb-1">27</div>
                <div>Lugares disponibles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requisitos del Sistema */}
      <section className="py-20 bg-player-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Tu dispositivo es <span className="text-player-accent">compatible</span>?
            </h2>
            <p className="text-xl text-player-text-secondary max-w-3xl mx-auto">
              Padelyzer funciona en la mayoría de dispositivos modernos. Revisa los requisitos mínimos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* iOS Requirements */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-3xl p-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🍎</div>
                <h3 className="text-3xl font-bold text-white mb-2">iOS</h3>
                <p className="text-player-text-secondary">iPhone y iPad</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold mb-3">Requisitos mínimos:</h4>
                  <ul className="space-y-2 text-player-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-player-accent">•</span>
                      <span>iOS 13.0 o superior</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-player-accent">•</span>
                      <span>iPhone 8 / iPad (6ta gen) o superior</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-player-accent">•</span>
                      <span>2 GB de RAM mínimo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-player-accent">•</span>
                      <span>1 GB de almacenamiento disponible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-player-accent">•</span>
                      <span>Conexión a internet estable</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-3">Recomendado:</h4>
                  <ul className="space-y-2 text-player-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>iPhone 12 o superior</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>4 GB de RAM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Procesador A12 Bionic+</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Android Requirements */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-3xl p-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🤖</div>
                <h3 className="text-3xl font-bold text-white mb-2">Android</h3>
                <p className="text-player-text-secondary">Teléfonos y tablets</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold mb-3">Requisitos mínimos:</h4>
                  <ul className="space-y-2 text-player-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-player-accent">•</span>
                      <span>Android 8.0 (API level 26) o superior</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-player-accent">•</span>
                      <span>3 GB de RAM mínimo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-player-accent">•</span>
                      <span>1.5 GB de almacenamiento disponible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-player-accent">•</span>
                      <span>Procesador ARM64</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-player-accent">•</span>
                      <span>Conexión a internet estable</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-3">Recomendado:</h4>
                  <ul className="space-y-2 text-player-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Android 11 o superior</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>6 GB de RAM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Snapdragon 750G+ / Exynos 990+</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-player-text-secondary mb-4">
              ¿No estás seguro si tu dispositivo es compatible?
            </p>
            <PlayerButton variant="secondary">
              Verificar compatibilidad
            </PlayerButton>
          </div>
        </div>
      </section>

      {/* Video Tutorial */}
      <section className="py-20 bg-player-bg-primary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Primeros pasos con <span className="text-player-accent">Padelyzer</span>
            </h2>
            <p className="text-xl text-player-text-secondary max-w-3xl mx-auto">
              Tutorial de 3 minutos para empezar a analizar tu juego desde el primer día.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-player-bg-secondary rounded-3xl border-2 border-player-border overflow-hidden relative group cursor-pointer hover:border-player-accent transition-all">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-player-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-black text-3xl">▶️</span>
                  </div>
                  <p className="text-white font-bold text-xl">Tutorial: Primeros pasos</p>
                  <p className="text-player-text-secondary">3:24 minutos</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
                HD 1080p
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-player-bg-secondary rounded-2xl border border-player-border">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-bold text-white mb-2">1. Descarga</h3>
                <p className="text-player-text-secondary text-sm">Instala la app desde tu tienda preferida</p>
              </div>
              <div className="text-center p-6 bg-player-bg-secondary rounded-2xl border border-player-border">
                <div className="text-3xl mb-3">🎥</div>
                <h3 className="font-bold text-white mb-2">2. Graba</h3>
                <p className="text-player-text-secondary text-sm">Filma tu partido desde cualquier ángulo</p>
              </div>
              <div className="text-center p-6 bg-player-bg-secondary rounded-2xl border border-player-border">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-bold text-white mb-2">3. Analiza</h3>
                <p className="text-player-text-secondary text-sm">Recibe tu reporte personalizado al instante</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Técnico */}
      <section className="py-20 bg-player-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Preguntas <span className="text-player-accent">técnicas</span>
            </h2>
            <p className="text-xl text-player-text-secondary max-w-3xl mx-auto">
              Dudas comunes sobre la instalación y uso de la aplicación.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "¿La app funciona sin conexión a internet?",
                answer: "Puedes grabar videos sin conexión, pero necesitas internet para el análisis con IA y para sincronizar tus datos. La app almacena los videos localmente hasta que tengas conexión."
              },
              {
                question: "¿Cuánto espacio ocupa la aplicación?",
                answer: "La app base ocupa aproximadamente 150 MB. Los videos analizados se almacenan en la nube, pero puedes descargarlos localmente si prefieres (cada video ~50-100 MB)."
              },
              {
                question: "¿Funciona en tablets?",
                answer: "Sí, Padelyzer está optimizada tanto para teléfonos como tablets iOS y Android. La interfaz se adapta automáticamente al tamaño de pantalla."
              },
              {
                question: "¿Qué calidad de video necesito?",
                answer: "Mínimo 720p HD. Para mejores resultados recomendamos 1080p. El análisis funciona incluso con videos grabados desde lejos o con poca luz."
              },
              {
                question: "¿Puedo usar videos grabados con otras apps?",
                answer: "Sí, puedes importar videos desde tu galería. La app acepta formatos MP4, MOV y otros formatos comunes de video."
              },
              {
                question: "¿Hay límite de videos por mes?",
                answer: "En el plan premium no hay límites. Puedes analizar tantos videos como quieras. En la versión gratuita tienes 3 análisis por mes."
              }
            ].map((faq, index) => (
              <details 
                key={index}
                className="bg-player-bg-primary border border-player-border rounded-2xl p-6 group"
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