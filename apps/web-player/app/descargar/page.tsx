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

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-player-bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-player-accent/20 text-player-accent px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span>📱</span>
              <span>DESCARGA GRATUITA</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Descarga <span className="text-player-accent">Padelyzer</span>
            </h1>
            <p className="text-xl text-player-text-secondary mb-12 max-w-2xl mx-auto">
              La app gratuita que revoluciona tu pádel. Disponible para iOS y Android.
            </p>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              {/* App Store */}
              <a 
                href="#"
                className="group bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center gap-4 min-w-[200px]"
              >
                <div className="text-3xl">🍎</div>
                <div className="text-left">
                  <div className="text-xs opacity-80">Descargar en</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </a>

              {/* Google Play */}
              <a 
                href="#"
                className="group bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center gap-4 min-w-[200px]"
              >
                <div className="text-3xl">🤖</div>
                <div className="text-left">
                  <div className="text-xs opacity-80">Conseguir en</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </a>
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

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-player-text-secondary">
              <div className="text-center">
                <div className="text-2xl font-bold text-player-accent mb-1">4.8⭐</div>
                <div>Rating promedio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-player-accent mb-1">100K+</div>
                <div>Descargas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-player-accent mb-1">60K+</div>
                <div>Usuarios activos</div>
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-player-bg-primary to-player-bg-secondary">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para <span className="text-player-accent">revolucionar</span> tu pádel?
          </h2>
          <p className="text-xl text-player-text-secondary mb-8 max-w-2xl mx-auto">
            Descarga Padelyzer gratis y comienza a analizar tu juego hoy mismo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            {/* App Store */}
            <a 
              href="#"
              className="group bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center gap-4 min-w-[200px]"
            >
              <div className="text-3xl">🍎</div>
              <div className="text-left">
                <div className="text-xs opacity-80">Descargar en</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </a>

            {/* Google Play */}
            <a 
              href="#"
              className="group bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center gap-4 min-w-[200px]"
            >
              <div className="text-3xl">🤖</div>
              <div className="text-left">
                <div className="text-xs opacity-80">Conseguir en</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </a>
          </div>

          <p className="text-player-text-secondary text-sm">
            Gratis para descargar • 14 días de premium gratis • Sin tarjeta de crédito
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