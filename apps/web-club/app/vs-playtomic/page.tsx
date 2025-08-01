import { ClubButton } from '../../components/ui/ClubButton';
import { Logo } from '../../components/ui/Logo';
import MobileMenu from '../../components/MobileMenu';
import BackgroundAnimation from '../../components/BackgroundAnimation';
import { 
  CheckIcon,
  DollarIcon,
  ClockIcon,
  ShieldIcon,
  ArrowRightIcon,
  TrendingUpIcon,
  GlobeIcon,
  HeadphonesIcon
} from '../../components/icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Padelyzer vs Playtomic - Comparación Completa',
  description: 'Comparación detallada Padelyzer vs Playtomic. Sin comisiones por reserva, ROI garantizado, migración gratuita en 24h. Descubre por qué +500 clubes cambiaron a Padelyzer.',
  keywords: 'padelyzer vs playtomic, alternativa playtomic, migrar de playtomic, comparacion software padel, sin comisiones padel',
  openGraph: {
    title: 'Padelyzer vs Playtomic: La Diferencia Clara',
    description: 'Sin comisiones ocultas. ROI garantizado. Migración gratuita en 24h. Ve por qué Padelyzer es la mejor alternativa a Playtomic.',
    images: ['/og-vs-playtomic.png'],
  },
};

export default function VsPlaytomicPage() {
  return (
    <div className="min-h-screen bg-club-bg-primary text-club-text-primary">
      {/* Background Animation */}
      <BackgroundAnimation />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-club-bg-primary/90 backdrop-blur-md border-b border-club-border">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Logo variant="club" />
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-club-text-secondary hover:text-club-accent transition-colors">
                Inicio
              </a>
              <a href="/soluciones" className="text-club-text-secondary hover:text-club-accent transition-colors">
                Soluciones
              </a>
              <a href="/precios" className="text-club-text-secondary hover:text-club-accent transition-colors">
                Precios
              </a>
              <a href="/vs-playtomic" className="text-club-accent font-medium">
                vs Playtomic
              </a>
            </div>

            <div className="flex items-center gap-4">
              <ClubButton variant="ghost" size="sm" className="hidden md:block">
                Iniciar Sesión
              </ClubButton>
              <ClubButton size="sm" className="hidden md:block">
                Agenda Demo
              </ClubButton>
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-club-bg-secondary to-club-bg-primary relative">
        <div className="container text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-club-text-primary animate-slide-up">
              Padelyzer vs Playtomic: <span className="text-club-accent">La diferencia clara</span>
            </h1>
            
            <p className="text-xl text-club-text-secondary mb-8 max-w-3xl mx-auto animate-slide-up">
              Sin comisiones ocultas, sin sorpresas. Software completo para gestionar tu club 
              con ROI garantizado. Migra en 24 horas sin perder datos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
              <ClubButton size="lg" className="text-lg shadow-subtle hover:shadow-professional">
                Migrar ahora (24h)
              </ClubButton>
              <ClubButton variant="secondary" size="lg" className="text-lg bg-club-glass-medium border-club-border hover:shadow-subtle">
                Ver comparación completa
              </ClubButton>
            </div>
          </div>
        </div>
      </section>

      {/* Main Comparison Table */}
      <section className="py-20 relative">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary animate-slide-up">
              Comparación <span className="text-club-accent">punto por punto</span>
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto animate-slide-up">
              Hemos analizado cada aspecto para que tomes la mejor decisión para tu club
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-club-glass-medium backdrop-blur-xl rounded-2xl shadow-glass">
              <thead>
                <tr className="border-b border-club-border">
                  <th className="text-left p-6 font-bold text-club-text-primary">Característica</th>
                  <th className="text-center p-6 bg-club-accent/10">
                    <div className="font-bold text-club-accent">Padelyzer Club</div>
                    <div className="text-sm text-club-text-secondary">Tu elección inteligente</div>
                  </th>
                  <th className="text-center p-6">
                    <div className="font-bold text-club-text-primary">Playtomic</div>
                    <div className="text-sm text-club-text-secondary">La competencia</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Comisión por reserva",
                    padelyzer: { value: "$0", highlight: true, extra: "Sin comisiones, nunca" },
                    playtomic: { value: "€0.25 - €0.50", highlight: false, extra: "Por cada reserva" }
                  },
                  {
                    feature: "Costo mensual real (6 canchas)",
                    padelyzer: { value: "$12,999/mes", highlight: false, extra: "Todo incluido" },
                    playtomic: { value: "€250 + €3,000+/mes", highlight: false, extra: "En comisiones" }
                  },
                  {
                    feature: "Módulo de finanzas",
                    padelyzer: { value: "✓ Completo", highlight: true, extra: "Dashboard tiempo real" },
                    playtomic: { value: "✗ No incluido", highlight: false, extra: "Solo reservas" }
                  },
                  {
                    feature: "Gestión de torneos/ligas",
                    padelyzer: { value: "✓ 500+ jugadores", highlight: true, extra: "Automatizado" },
                    playtomic: { value: "✓ Básico", highlight: false, extra: "Manual" }
                  },
                  {
                    feature: "Business Intelligence",
                    padelyzer: { value: "✓ IA incluida", highlight: true, extra: "Predicciones y alertas" },
                    playtomic: { value: "✗ No disponible", highlight: false, extra: "" }
                  },
                  {
                    feature: "Soporte",
                    padelyzer: { value: "24/7 en español", highlight: true, extra: "Teléfono + chat + email" },
                    playtomic: { value: "Horario oficina", highlight: false, extra: "Solo email" }
                  },
                  {
                    feature: "Setup y migración",
                    padelyzer: { value: "24 horas gratis", highlight: true, extra: "Incluye capacitación" },
                    playtomic: { value: "Variable", highlight: false, extra: "Costo adicional" }
                  },
                  {
                    feature: "Garantía ROI",
                    padelyzer: { value: "25% en 90 días", highlight: true, extra: "O te devolvemos todo" },
                    playtomic: { value: "Sin garantía", highlight: false, extra: "" }
                  },
                  {
                    feature: "Control de datos",
                    padelyzer: { value: "100% tuyos", highlight: true, extra: "Exporta cuando quieras" },
                    playtomic: { value: "En su plataforma", highlight: false, extra: "Limitado" }
                  },
                  {
                    feature: "Multi-sucursal",
                    padelyzer: { value: "✓ Ilimitado", highlight: true, extra: "Dashboard unificado" },
                    playtomic: { value: "✓ Con costo extra", highlight: false, extra: "" }
                  }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-club-border hover:bg-club-bg-secondary/30">
                    <td className="p-6 font-medium text-club-text-primary">{row.feature}</td>
                    <td className={`p-6 text-center ${row.padelyzer.highlight ? 'bg-club-accent/10' : 'bg-club-accent/5'}`}>
                      <div className={`font-bold ${row.padelyzer.highlight ? 'text-club-accent' : 'text-club-text-primary'}`}>
                        {row.padelyzer.value}
                      </div>
                      {row.padelyzer.extra && (
                        <div className="text-sm text-club-text-secondary mt-1">{row.padelyzer.extra}</div>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      <div className={`font-medium ${row.playtomic.highlight ? 'text-club-accent' : 'text-club-text-secondary'}`}>
                        {row.playtomic.value}
                      </div>
                      {row.playtomic.extra && (
                        <div className="text-sm text-club-text-secondary mt-1">{row.playtomic.extra}</div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Migration Testimonials */}
      <section className="py-20 bg-club-bg-secondary relative">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
              Clubes que migraron de <span className="text-club-accent">Playtomic a Padelyzer</span>
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto">
              Testimonios reales de clubes que hicieron el cambio inteligente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                club: "Club Deportivo Norte",
                location: "CDMX",
                size: "8 canchas",
                savings: "$185,000/año",
                quote: "Las comisiones de Playtomic nos estaban matando. Con Padelyzer ahorramos más de $15,000 al mes solo en comisiones. Además, el módulo de finanzas nos ayudó a encontrar fugas que no sabíamos que teníamos.",
                owner: "Carlos Mendoza"
              },
              {
                club: "Pádel Center Guadalajara",
                location: "Guadalajara",
                size: "6 canchas",
                savings: "$142,000/año",
                quote: "La migración fue increíblemente fácil. En 24 horas teníamos todo funcionando mejor que antes. El soporte 24/7 en español marca la diferencia. Con Playtomic esperábamos días por una respuesta.",
                owner: "Ana García"
              },
              {
                club: "Club Raqueta MTY",
                location: "Monterrey",
                size: "12 canchas",
                savings: "$267,000/año",
                quote: "El BI de Padelyzer nos mostró que estábamos perdiendo dinero en horarios que creíamos rentables. Ajustamos precios con su IA y aumentamos ingresos 35%. Playtomic solo te da reservas, nada más.",
                owner: "Roberto Silva"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-club-glass-medium backdrop-blur-xl rounded-2xl p-8 border border-club-border hover:shadow-subtle transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-club-text-primary">{testimonial.club}</h3>
                  <p className="text-club-text-secondary">{testimonial.location} • {testimonial.size}</p>
                </div>
                
                <div className="bg-club-success/20 backdrop-blur-sm rounded-lg p-4 mb-6 border border-club-success/30">
                  <div className="text-2xl font-bold text-club-success">{testimonial.savings}</div>
                  <div className="text-sm text-club-text-secondary">ahorrados en comisiones</div>
                </div>
                
                <blockquote className="text-club-text-secondary italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                
                <p className="text-sm text-club-text-primary font-semibold">
                  — {testimonial.owner}, Propietario
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 relative">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
              Migración en <span className="text-club-accent">24 horas</span>
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto">
              Proceso simple, sin interrupciones, con todo tu historial
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Exportamos tus datos",
                description: "Extraemos toda tu información de Playtomic: clientes, reservas, históricos, todo.",
                time: "2 horas"
              },
              {
                step: "2",
                title: "Configuramos tu sistema",
                description: "Personalizamos Padelyzer con tus canchas, precios, horarios y reglas específicas.",
                time: "4 horas"
              },
              {
                step: "3",
                title: "Importamos todo",
                description: "Todos tus datos migrados y verificados. Clientes mantienen sus cuentas y historiales.",
                time: "2 horas"
              },
              {
                step: "4",
                title: "Capacitación y launch",
                description: "Entrenamos a tu equipo y activamos. Listo para operar sin comisiones.",
                time: "4 horas"
              }
            ].map((step, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-club-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-club-text-primary mb-2">{step.title}</h3>
                <p className="text-club-text-secondary mb-3">{step.description}</p>
                <div className="text-sm text-club-accent font-medium">{step.time}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <ClubButton size="lg" className="text-lg shadow-subtle hover:shadow-professional">
              Iniciar migración gratuita
            </ClubButton>
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-20 bg-club-bg-secondary relative">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-club-glass-medium backdrop-blur-xl rounded-2xl p-8 shadow-glass">
              <h2 className="text-3xl font-bold text-center mb-8 text-club-text-primary">
                Calcula cuánto ahorrarás al <span className="text-club-accent">dejar Playtomic</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-4">Con Playtomic pagas:</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-club-text-secondary">Reservas mensuales (promedio):</span>
                      <span className="font-bold">2,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-club-text-secondary">Comisión por reserva:</span>
                      <span className="font-bold">€0.35</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-club-text-secondary">Comisiones mensuales:</span>
                      <span className="font-bold text-red-400">€700</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-club-text-secondary">Comisiones anuales:</span>
                      <span className="font-bold text-red-400">€8,400</span>
                    </div>
                    <div className="border-t border-club-border pt-3">
                      <div className="flex justify-between">
                        <span className="text-club-text-primary font-bold">Total anual (MXN):</span>
                        <span className="text-2xl font-bold text-red-400">$185,000+</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-club-success mb-4">Con Padelyzer pagas:</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-club-text-secondary">Plan Professional:</span>
                      <span className="font-bold">$12,999/mes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-club-text-secondary">Comisiones:</span>
                      <span className="font-bold text-club-success">$0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-club-text-secondary">Módulos incluidos:</span>
                      <span className="font-bold text-club-success">TODOS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-club-text-secondary">Soporte 24/7:</span>
                      <span className="font-bold text-club-success">Incluido</span>
                    </div>
                    <div className="border-t border-club-border pt-3">
                      <div className="flex justify-between">
                        <span className="text-club-text-primary font-bold">Total anual:</span>
                        <span className="text-2xl font-bold text-club-success">$155,988</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-club-success/20 backdrop-blur-sm rounded-lg p-6 text-center border border-club-success/30">
                <p className="text-lg text-club-text-secondary mb-2">Tu ahorro anual al cambiar a Padelyzer:</p>
                <p className="text-4xl font-bold text-club-success">$29,012+ MXN</p>
                <p className="text-sm text-club-text-secondary mt-2">Sin contar el aumento de ingresos por nuestros módulos de optimización</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative">
        <div className="container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
            Deja de pagar comisiones. <span className="text-club-accent">Empieza a ganar más.</span>
          </h2>
          <p className="text-xl text-club-text-secondary mb-8 max-w-2xl mx-auto">
            Migración gratuita en 24 horas. ROI garantizado del 25% en 90 días.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <ClubButton size="lg" className="text-lg shadow-subtle hover:shadow-professional">
              Migrar de Playtomic ahora
            </ClubButton>
            <ClubButton variant="secondary" size="lg" className="text-lg bg-club-glass-medium border-club-border hover:shadow-subtle">
              Hablar con un experto
            </ClubButton>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-club-text-secondary">
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-club-success" />
              <span>Migración gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-club-success" />
              <span>Sin interrupciones</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-club-success" />
              <span>Garantía total</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-club-border bg-club-bg-primary relative">
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Logo variant="club" />
            <div className="flex gap-6 text-sm">
              <a href="/privacidad" className="text-club-text-secondary hover:text-club-accent transition-colors">
                Privacidad
              </a>
              <a href="/terminos" className="text-club-text-secondary hover:text-club-accent transition-colors">
                Términos
              </a>
              <a href="https://padelyzer.com" className="text-club-text-secondary hover:text-club-accent transition-colors">
                App para jugadores
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}