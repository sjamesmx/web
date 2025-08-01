import { ClubButton } from '../../components/ui/ClubButton';
import { Logo } from '../../components/ui/Logo';
import MobileMenu from '../../components/MobileMenu';
import BackgroundAnimation from '../../components/BackgroundAnimation';
import { 
  CalendarIcon,
  ClockIcon,
  CheckIcon,
  ArrowRightIcon,
  HeadphonesIcon,
  TargetIcon,
  ChartBarIcon,
  UsersIcon,
  PlayIcon,
  StarIcon
} from '../../components/icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo Personalizada - Software Gestión Clubes Pádel',
  description: 'Agenda tu demo personalizada de 20 minutos. Ve exactamente cómo Padelyzer aumentará tus ingresos 25% garantizado. Sin compromiso.',
  keywords: 'demo padelyzer, demo software padel, presentacion gestion clubes, software padel demo',
  openGraph: {
    title: 'Agenda Demo Personalizada - Padelyzer Club',
    description: '20 minutos que transformarán tu club. Demo personalizada con ROI garantizado.',
    images: ['/og-demo.png'],
  },
};

export default function DemoPage() {
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
              <a href="/vs-playtomic" className="text-club-text-secondary hover:text-club-accent transition-colors">
                vs Playtomic
              </a>
              <a href="/demo" className="text-club-accent font-medium">
                Demo
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
              Agenda tu demo <span className="text-club-accent">personalizada</span>
            </h1>
            
            <p className="text-xl text-club-text-secondary mb-8 max-w-3xl mx-auto animate-slide-up">
              20 minutos que transformarán la manera en que gestionas tu club. 
              Demo en vivo con un experto que entiende tu negocio.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
              <div className="text-center animate-slide-up">
                <div className="w-16 h-16 bg-club-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ClockIcon className="w-8 h-8 text-club-accent" />
                </div>
                <h3 className="font-bold text-club-text-primary mb-1">20 minutos</h3>
                <p className="text-sm text-club-text-secondary">Demo enfocada y sin relleno</p>
              </div>
              <div className="text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
                <div className="w-16 h-16 bg-club-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HeadphonesIcon className="w-8 h-8 text-club-accent" />
                </div>
                <h3 className="font-bold text-club-text-primary mb-1">Personalizada</h3>
                <p className="text-sm text-club-text-secondary">Para tu tipo de club</p>
              </div>
              <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 bg-club-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TargetIcon className="w-8 h-8 text-club-accent" />
                </div>
                <h3 className="font-bold text-club-text-primary mb-1">ROI claro</h3>
                <p className="text-sm text-club-text-secondary">Verás números reales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Integration Section */}
      <section className="py-20 relative">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
                Elige el mejor momento <span className="text-club-accent">para ti</span>
              </h2>
              <p className="text-xl text-club-text-secondary mb-8">
                Nuestros expertos están disponibles de lunes a viernes. 
                Agenda en el horario que más te convenga.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <CheckIcon className="w-6 h-6 text-club-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-club-text-primary mb-1">Confirmación inmediata</h4>
                    <p className="text-club-text-secondary">Recibirás un email con todos los detalles</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckIcon className="w-6 h-6 text-club-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-club-text-primary mb-1">Recordatorios automáticos</h4>
                    <p className="text-club-text-secondary">No te perderás la demo por olvido</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckIcon className="w-6 h-6 text-club-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-club-text-primary mb-1">Reagenda si necesitas</h4>
                    <p className="text-club-text-secondary">Cambia la fecha sin complicaciones</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-club-glass-medium backdrop-blur-xl rounded-2xl p-8 border border-club-border shadow-glass">
              {/* Calendar Placeholder */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-club-text-primary mb-4">Selecciona fecha y hora</h3>
                <div className="bg-club-glass-light backdrop-blur-sm rounded-lg p-6 border border-club-border">
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    <div className="text-center text-xs text-club-text-secondary font-medium">Dom</div>
                    <div className="text-center text-xs text-club-text-secondary font-medium">Lun</div>
                    <div className="text-center text-xs text-club-text-secondary font-medium">Mar</div>
                    <div className="text-center text-xs text-club-text-secondary font-medium">Mié</div>
                    <div className="text-center text-xs text-club-text-secondary font-medium">Jue</div>
                    <div className="text-center text-xs text-club-text-secondary font-medium">Vie</div>
                    <div className="text-center text-xs text-club-text-secondary font-medium">Sáb</div>
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {[...Array(35)].map((_, i) => {
                      const day = i - 3; // Start from Thursday
                      const isWeekend = (i % 7 === 0) || (i % 7 === 6);
                      const isToday = day === 12;
                      const isAvailable = day > 0 && day <= 31 && !isWeekend;
                      
                      return (
                        <button
                          key={i}
                          className={`
                            aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all
                            ${day > 0 && day <= 31 ? 'visible' : 'invisible'}
                            ${isWeekend ? 'text-club-text-muted cursor-not-allowed' : ''}
                            ${isAvailable ? 'hover:bg-club-accent/20 hover:text-club-accent cursor-pointer' : ''}
                            ${isToday ? 'bg-club-accent text-white' : ''}
                          `}
                          disabled={!isAvailable}
                        >
                          {day > 0 && day <= 31 ? day : ''}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-club-text-primary mb-3">Horarios disponibles</h4>
                <div className="grid grid-cols-3 gap-2">
                  {['10:00', '11:00', '12:00', '15:00', '16:00', '17:00'].map((time) => (
                    <button
                      key={time}
                      className="p-2 bg-club-glass-light backdrop-blur-sm border border-club-border rounded-lg text-sm hover:bg-club-accent/20 hover:border-club-accent transition-all"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              
              <ClubButton className="w-full" size="lg">
                Confirmar demo
              </ClubButton>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-club-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
              Qué esperar de tu <span className="text-club-accent">demo personalizada</span>
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto">
              Una sesión estructurada y enfocada en resolver tus desafíos específicos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Análisis de tu club",
                description: "Entendemos tu operación actual, tamaño, desafíos y objetivos específicos.",
                duration: "5 min"
              },
              {
                step: "2",
                title: "Demo en vivo",
                description: "Te mostramos exactamente cómo Padelyzer resuelve tus problemas del día a día.",
                duration: "10 min"
              },
              {
                step: "3",
                title: "Cálculo de ROI",
                description: "Números reales de cuánto aumentarán tus ingresos y bajarán tus costos.",
                duration: "3 min"
              },
              {
                step: "4",
                title: "Próximos pasos",
                description: "Plan de implementación, garantías y respuestas a todas tus preguntas.",
                duration: "2 min"
              }
            ].map((step, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-club-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-club-text-primary mb-2">{step.title}</h3>
                <p className="text-club-text-secondary mb-3">{step.description}</p>
                <div className="text-sm text-club-accent font-medium">{step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Section */}
      <section className="py-20 relative">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-club-glass-medium backdrop-blur-xl rounded-2xl p-8 border border-club-border shadow-glass">
              <h2 className="text-3xl font-bold text-center mb-8 text-club-text-primary">
                Cómo prepararte para <span className="text-club-accent">aprovechar al máximo</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-club-accent mb-4">Ten a la mano:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-club-success flex-shrink-0 mt-0.5" />
                      <span className="text-club-text-secondary">Número de canchas y tipo de superficie</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-club-success flex-shrink-0 mt-0.5" />
                      <span className="text-club-text-secondary">Promedio de reservas mensuales</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-club-success flex-shrink-0 mt-0.5" />
                      <span className="text-club-text-secondary">Principales problemas operativos actuales</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-club-success flex-shrink-0 mt-0.5" />
                      <span className="text-club-text-secondary">Sistema actual (si usas alguno)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-club-accent mb-4">Prepara tus preguntas:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <ArrowRightIcon className="w-5 h-5 text-club-accent flex-shrink-0 mt-0.5" />
                      <span className="text-club-text-secondary">¿Cómo se integra con mi operación actual?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRightIcon className="w-5 h-5 text-club-accent flex-shrink-0 mt-0.5" />
                      <span className="text-club-text-secondary">¿Qué pasa con mis datos históricos?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRightIcon className="w-5 h-5 text-club-accent flex-shrink-0 mt-0.5" />
                      <span className="text-club-text-secondary">¿Cuánto tiempo toma la implementación?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRightIcon className="w-5 h-5 text-club-accent flex-shrink-0 mt-0.5" />
                      <span className="text-club-text-secondary">¿Qué garantías ofrecen?</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-club-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
              Lo que dicen otros <span className="text-club-accent">dueños de clubes</span>
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto">
              Testimonios reales de quienes ya transformaron su operación
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Miguel Hernández",
                role: "Director, Club Pádel México",
                location: "CDMX",
                quote: "La demo fue directa al grano. En 20 minutos vi exactamente cómo podía ahorrar 40 horas al mes en gestión. Implementamos en 24 horas y los resultados fueron inmediatos.",
                rating: 5,
                result: "+35% ingresos en 3 meses"
              },
              {
                name: "Laura Martínez",
                role: "Propietaria, Pádel Center GDL",
                location: "Guadalajara",
                quote: "Me sorprendió lo personalizada que fue la demo. Entendieron mis problemas específicos y me mostraron soluciones reales, no features genéricas. El ROI quedó clarísimo.",
                rating: 5,
                result: "ROI del 280% primer año"
              },
              {
                name: "Carlos Rodríguez",
                role: "Gerente, Club Raqueta Norte",
                location: "Monterrey",
                quote: "Venía de Playtomic y tenía miedo al cambio. La demo me mostró que la migración era simple y que ahorraría miles en comisiones. Mejor decisión del año.",
                rating: 5,
                result: "$220k ahorrados en comisiones"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-club-glass-medium backdrop-blur-xl rounded-2xl p-8 border border-club-border hover:shadow-subtle transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-club-text-secondary italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="mb-4">
                  <p className="font-bold text-club-text-primary">{testimonial.name}</p>
                  <p className="text-sm text-club-text-secondary">{testimonial.role}</p>
                  <p className="text-sm text-club-text-secondary">{testimonial.location}</p>
                </div>
                
                <div className="bg-club-success/20 backdrop-blur-sm rounded-lg p-3 text-center border border-club-success/30">
                  <p className="text-sm font-bold text-club-success">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 relative">
        <div className="container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
            ¿Prefieres ver una <span className="text-club-accent">demo grabada</span>?
          </h2>
          <p className="text-xl text-club-text-secondary mb-8 max-w-2xl mx-auto">
            Mira este video de 5 minutos para tener una idea general de la plataforma
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-club-glass-medium backdrop-blur-xl rounded-2xl p-8 border border-club-border shadow-glass">
              <div className="aspect-video bg-club-bg-secondary rounded-lg flex items-center justify-center">
                <button className="w-20 h-20 bg-club-accent hover:bg-club-accent-hover rounded-full flex items-center justify-center shadow-subtle hover:shadow-professional transition-all group">
                  <PlayIcon className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              <p className="text-sm text-club-text-secondary mt-4">
                Video demo de 5 minutos - Vista general de Padelyzer Club
              </p>
            </div>
          </div>
          
          <p className="text-club-text-secondary mt-8">
            Pero recuerda: una demo personalizada te mostrará exactamente cómo Padelyzer 
            resuelve TUS problemas específicos
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-club-bg-secondary to-club-bg-primary relative">
        <div className="container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
            20 minutos que pueden <span className="text-club-accent">cambiar tu negocio</span>
          </h2>
          <p className="text-xl text-club-text-secondary mb-8 max-w-2xl mx-auto">
            Sin compromiso. Sin presión de ventas. Solo soluciones reales para tu club.
          </p>
          
          <div className="bg-club-glass-medium backdrop-blur-xl rounded-2xl p-8 max-w-2xl mx-auto border border-club-border shadow-glass mb-8">
            <h3 className="text-2xl font-bold text-club-text-primary mb-6">Agenda tu demo ahora</h3>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full p-3 bg-club-glass-light backdrop-blur-sm border border-club-border rounded-lg focus:ring-2 focus:ring-club-accent focus:border-transparent text-club-text-primary placeholder-club-text-muted"
                />
                <input
                  type="text"
                  placeholder="Nombre del club"
                  className="w-full p-3 bg-club-glass-light backdrop-blur-sm border border-club-border rounded-lg focus:ring-2 focus:ring-club-accent focus:border-transparent text-club-text-primary placeholder-club-text-muted"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-club-glass-light backdrop-blur-sm border border-club-border rounded-lg focus:ring-2 focus:ring-club-accent focus:border-transparent text-club-text-primary placeholder-club-text-muted"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="w-full p-3 bg-club-glass-light backdrop-blur-sm border border-club-border rounded-lg focus:ring-2 focus:ring-club-accent focus:border-transparent text-club-text-primary placeholder-club-text-muted"
                />
              </div>
              <select className="w-full p-3 bg-club-glass-light backdrop-blur-sm border border-club-border rounded-lg focus:ring-2 focus:ring-club-accent focus:border-transparent text-club-text-primary">
                <option>Número de canchas</option>
                <option>2-4 canchas</option>
                <option>5-8 canchas</option>
                <option>9+ canchas</option>
              </select>
              
              <ClubButton size="lg" className="w-full text-lg shadow-subtle hover:shadow-professional">
                Agendar mi demo personalizada
              </ClubButton>
            </form>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-club-text-secondary">
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-club-success" />
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-club-success" />
              <span>100% personalizada</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-club-success" />
              <span>ROI garantizado</span>
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