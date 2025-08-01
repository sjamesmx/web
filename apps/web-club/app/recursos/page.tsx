import { ClubButton } from '../../components/ui/ClubButton';
import { Logo } from '../../components/ui/Logo';
import MobileMenu from '../../components/MobileMenu';
import BackgroundAnimation from '../../components/BackgroundAnimation';
import { 
  DownloadIcon,
  BookIcon,
  TrendingUpIcon,
  FileTextIcon,
  PlayIcon,
  CalendarIcon,
  DollarIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckIcon,
  ClockIcon
} from '../../components/icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recursos Gratuitos - Guías ROI y Calculadoras',
  description: 'Recursos gratuitos para clubes de pádel: Calculadora ROI, guías para aumentar ocupación 40%, casos de éxito, webinars. Todo gratis.',
  keywords: 'recursos clubes padel, calculadora roi padel, guias gestion padel, aumentar ocupacion padel, casos exito clubes',
  openGraph: {
    title: 'Recursos Gratuitos para Clubes de Pádel',
    description: 'Calculadora ROI, guías prácticas, casos de éxito. Todo lo que necesitas para hacer crecer tu club.',
    images: ['/og-recursos.png'],
  },
};

export default function RecursosPage() {
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
              <a href="/recursos" className="text-club-accent font-medium">
                Recursos
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
              Recursos para <span className="text-club-accent">maximizar tu éxito</span>
            </h1>
            
            <p className="text-xl text-club-text-secondary mb-8 max-w-3xl mx-auto animate-slide-up">
              Guías prácticas, calculadoras ROI y contenido exclusivo para dueños 
              de clubes que quieren crecer de manera inteligente.
            </p>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 relative">
        <div className="container relative z-10">
          <div className="bg-gradient-to-br from-club-accent/20 to-club-accent/10 backdrop-blur-xl rounded-3xl p-12 border-2 border-club-accent shadow-subtle">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-club-accent/20 text-club-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <DollarIcon className="w-4 h-4" />
                  HERRAMIENTA DESTACADA
                </div>
                
                <h2 className="text-4xl font-bold mb-6 text-club-text-primary">
                  Calculadora ROI <span className="text-club-accent">para Clubes de Pádel</span>
                </h2>
                
                <p className="text-xl text-club-text-secondary mb-8">
                  Descubre exactamente cuánto puedes aumentar tus ingresos 
                  con Padelyzer. Basada en datos reales de +500 clubes.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-club-success flex-shrink-0" />
                    <span className="text-club-text-secondary">Calcula aumento de ocupación</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-club-success flex-shrink-0" />
                    <span className="text-club-text-secondary">Proyecta ingresos adicionales</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-club-success flex-shrink-0" />
                    <span className="text-club-text-secondary">Compara con tu situación actual</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-club-success flex-shrink-0" />
                    <span className="text-club-text-secondary">Recibe reporte personalizado PDF</span>
                  </li>
                </ul>
                
                <ClubButton size="lg" className="shadow-subtle hover:shadow-professional">
                  <span className="flex items-center gap-2">
                    <ChartBarIcon className="w-5 h-5" />
                    Calcular mi ROI ahora
                  </span>
                </ClubButton>
              </div>
              
              <div className="bg-club-glass-medium backdrop-blur-xl rounded-2xl p-8 border border-club-border shadow-glass">
                <h3 className="text-2xl font-bold text-club-text-primary mb-6 text-center">Calculadora Rápida</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-club-text-secondary mb-2">
                      Número de canchas
                    </label>
                    <input
                      type="number"
                      placeholder="6"
                      className="w-full p-3 bg-club-glass-light backdrop-blur-sm border border-club-border rounded-lg focus:ring-2 focus:ring-club-accent focus:border-transparent text-club-text-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-club-text-secondary mb-2">
                      Precio promedio por hora
                    </label>
                    <input
                      type="number"
                      placeholder="$600"
                      className="w-full p-3 bg-club-glass-light backdrop-blur-sm border border-club-border rounded-lg focus:ring-2 focus:ring-club-accent focus:border-transparent text-club-text-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-club-text-secondary mb-2">
                      Ocupación actual (%)
                    </label>
                    <input
                      type="number"
                      placeholder="65"
                      className="w-full p-3 bg-club-glass-light backdrop-blur-sm border border-club-border rounded-lg focus:ring-2 focus:ring-club-accent focus:border-transparent text-club-text-primary"
                    />
                  </div>
                  
                  <div className="bg-club-success/20 backdrop-blur-sm rounded-lg p-4 text-center border border-club-success/30 mt-6">
                    <p className="text-sm text-club-text-secondary mb-1">Aumento proyectado de ingresos:</p>
                    <p className="text-3xl font-bold text-club-success">+$45,280/mes</p>
                    <p className="text-sm text-club-text-secondary mt-1">+31% sobre tu ingreso actual</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-20 bg-club-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
              Guías para <span className="text-club-accent">dueños exitosos</span>
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto">
              Contenido práctico y accionable basado en la experiencia de los clubes más rentables
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookIcon,
                title: "Guía Completa: Aumentar Ocupación 40%",
                description: "Las 7 estrategias probadas que usan los clubes más exitosos para llenar horarios valle.",
                pages: "32 páginas",
                downloadCount: "2,341 descargas",
                tag: "Más popular"
              },
              {
                icon: DollarIcon,
                title: "Manual de Precios Dinámicos",
                description: "Cómo implementar precios inteligentes que maximicen ingresos sin perder clientes.",
                pages: "28 páginas",
                downloadCount: "1,892 descargas",
                tag: "Nuevo"
              },
              {
                icon: TrendingUpIcon,
                title: "ROI en 90 Días: Plan de Acción",
                description: "Roadmap exacto para aumentar ingresos 25% en tu primer trimestre con Padelyzer.",
                pages: "24 páginas",
                downloadCount: "1,567 descargas",
                tag: "Recomendado"
              },
              {
                icon: CalendarIcon,
                title: "Organización de Ligas Rentables",
                description: "Cómo crear y gestionar ligas que generen ingresos recurrentes garantizados.",
                pages: "36 páginas",
                downloadCount: "987 descargas",
                tag: null
              },
              {
                icon: ChartBarIcon,
                title: "KPIs Esenciales para Clubes",
                description: "Las 15 métricas que debes monitorear para tomar decisiones inteligentes.",
                pages: "20 páginas",
                downloadCount: "1,234 descargas",
                tag: null
              },
              {
                icon: FileTextIcon,
                title: "Template: Plan de Negocio Pádel",
                description: "Plantilla completa para crear o actualizar tu plan de negocio con proyecciones reales.",
                pages: "45 páginas",
                downloadCount: "789 descargas",
                tag: null
              }
            ].map((guide, index) => (
              <div key={index} className="bg-club-glass-medium backdrop-blur-xl rounded-2xl p-8 border border-club-border hover:shadow-subtle transition-all duration-300 group">
                {guide.tag && (
                  <div className="inline-flex items-center gap-1 bg-club-accent/20 text-club-accent px-3 py-1 rounded-full text-xs font-medium mb-4">
                    {guide.tag}
                  </div>
                )}
                
                <guide.icon className="w-12 h-12 text-club-accent mb-4 group-hover:scale-110 transition-transform" />
                
                <h3 className="text-xl font-bold text-club-text-primary mb-3">{guide.title}</h3>
                <p className="text-club-text-secondary mb-4">{guide.description}</p>
                
                <div className="flex items-center justify-between text-sm text-club-text-muted mb-6">
                  <span>{guide.pages}</span>
                  <span>{guide.downloadCount}</span>
                </div>
                
                <ClubButton variant="secondary" size="sm" className="w-full bg-club-glass-light border-club-border hover:shadow-subtle">
                  <span className="flex items-center justify-center gap-2">
                    <DownloadIcon className="w-4 h-4" />
                    Descargar gratis
                  </span>
                </ClubButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 relative">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
              Casos de éxito <span className="text-club-accent">documentados</span>
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto">
              Estudios detallados de cómo clubes reales transformaron su operación
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                club: "Club Deportivo Valle",
                location: "CDMX",
                increase: "+42%",
                metric: "aumento en ingresos",
                story: "De club tradicional a líder digital: Cómo automatizaron su operación y duplicaron su base de clientes en 6 meses.",
                results: ["Ocupación del 87%", "$2.3M MXN extra/año", "500+ jugadores activos"]
              },
              {
                club: "Pádel Center Premium",
                location: "Guadalajara",
                increase: "+215%",
                metric: "ROI primer año",
                story: "Cómo un club nuevo logró rentabilidad en 3 meses usando estrategias basadas en datos.",
                results: ["Break-even en mes 3", "95% retención clientes", "4 expansiones en 2 años"]
              },
              {
                club: "Raqueta Club Norte",
                location: "Monterrey",
                increase: "-65%",
                metric: "reducción costos operativos",
                story: "La transformación completa: De pérdidas mensuales a ser el club más rentable de la zona.",
                results: ["0 horas extras staff", "$180k ahorro anual", "NPS de 92"]
              }
            ].map((study, index) => (
              <div key={index} className="bg-club-glass-medium backdrop-blur-xl rounded-2xl overflow-hidden border border-club-border hover:shadow-subtle transition-all duration-300">
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-club-text-primary">{study.club}</h3>
                    <p className="text-club-text-secondary">{study.location}</p>
                  </div>
                  
                  <div className="bg-club-accent/20 backdrop-blur-sm rounded-lg p-4 mb-6 text-center border border-club-accent/30">
                    <div className="text-3xl font-bold text-club-accent">{study.increase}</div>
                    <div className="text-sm text-club-text-secondary">{study.metric}</div>
                  </div>
                  
                  <p className="text-club-text-secondary mb-6">{study.story}</p>
                  
                  <div className="space-y-2 mb-6">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckIcon className="w-4 h-4 text-club-success flex-shrink-0" />
                        <span className="text-sm text-club-text-secondary">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <ClubButton variant="secondary" size="sm" className="w-full bg-club-glass-light border-club-border hover:shadow-subtle">
                    Leer caso completo
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </ClubButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-20 bg-club-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
              Webinars y <span className="text-club-accent">masterclasses</span>
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto">
              Sesiones en vivo con expertos de la industria y dueños exitosos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-club-accent/20 to-club-accent/10 backdrop-blur-xl rounded-2xl p-8 border-2 border-club-accent shadow-subtle">
              <div className="flex items-center gap-2 text-sm text-club-accent font-medium mb-4">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                PRÓXIMO EVENTO EN VIVO
              </div>
              
              <h3 className="text-2xl font-bold text-club-text-primary mb-3">
                Cómo Triplicar Ingresos con Ligas Corporativas
              </h3>
              
              <p className="text-club-text-secondary mb-6">
                Estrategias probadas para crear y monetizar ligas empresariales 
                que generen $100k+ MXN mensuales recurrentes.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <CalendarIcon className="w-5 h-5 text-club-accent" />
                  <span className="text-club-text-secondary">Miércoles 28 Feb, 7:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <ClockIcon className="w-5 h-5 text-club-accent" />
                  <span className="text-club-text-secondary">Duración: 45 min + Q&A</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-club-accent rounded-full flex items-center justify-center text-white text-xs font-bold">CM</div>
                  <span className="text-club-text-secondary">Con Carlos Mendoza, Club Norte</span>
                </div>
              </div>
              
              <ClubButton className="w-full shadow-subtle hover:shadow-professional">
                Reservar mi lugar gratis
              </ClubButton>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-club-text-primary mb-4">Grabaciones disponibles</h3>
              
              {[
                {
                  title: "Automatización Total: 0 a 100 en 30 días",
                  date: "15 Feb 2024",
                  duration: "52 min",
                  views: "1,234 vistas"
                },
                {
                  title: "Precios Dinámicos que Funcionan",
                  date: "8 Feb 2024",
                  duration: "38 min",
                  views: "987 vistas"
                },
                {
                  title: "Marketing Digital para Clubes",
                  date: "1 Feb 2024",
                  duration: "45 min",
                  views: "756 vistas"
                },
                {
                  title: "Retención de Clientes: De 50% a 95%",
                  date: "25 Ene 2024",
                  duration: "41 min",
                  views: "892 vistas"
                }
              ].map((webinar, index) => (
                <div key={index} className="bg-club-glass-medium backdrop-blur-xl rounded-lg p-4 border border-club-border hover:shadow-subtle transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-club-text-primary group-hover:text-club-accent transition-colors">
                        {webinar.title}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-club-text-muted mt-1">
                        <span>{webinar.date}</span>
                        <span>{webinar.duration}</span>
                        <span>{webinar.views}</span>
                      </div>
                    </div>
                    <PlayIcon className="w-8 h-8 text-club-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative">
        <div className="container relative z-10">
          <div className="bg-gradient-to-br from-club-success/20 to-club-success/10 backdrop-blur-xl rounded-3xl p-12 text-center border-2 border-club-success/30">
            <h2 className="text-4xl font-bold mb-6 text-club-text-primary">
              Newsletter exclusivo para <span className="text-club-success">dueños inteligentes</span>
            </h2>
            <p className="text-xl text-club-text-secondary mb-8 max-w-2xl mx-auto">
              Estrategias probadas, casos de éxito y tips prácticos. 
              Directo a tu inbox cada semana.
            </p>
            
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 p-3 bg-club-glass-light backdrop-blur-sm border border-club-border rounded-lg focus:ring-2 focus:ring-club-success focus:border-transparent text-club-text-primary placeholder-club-text-muted"
              />
              <ClubButton className="bg-club-success hover:bg-green-600 shadow-subtle hover:shadow-professional">
                Suscribirme
              </ClubButton>
            </form>
            
            <p className="text-sm text-club-text-secondary mt-4">
              🔒 Tu información está segura. Cero spam, solo valor.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-club-bg-secondary to-club-bg-primary relative">
        <div className="container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
            ¿Listo para <span className="text-club-accent">transformar tu club</span>?
          </h2>
          <p className="text-xl text-club-text-secondary mb-8 max-w-2xl mx-auto">
            Agenda una demo personalizada y descubre cómo aumentar tus ingresos 25% garantizado
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <ClubButton size="lg" className="text-lg shadow-subtle hover:shadow-professional">
              Agendar demo personalizada
            </ClubButton>
            <ClubButton variant="secondary" size="lg" className="text-lg bg-club-glass-medium border-club-border hover:shadow-subtle">
              Calcular mi ROI
            </ClubButton>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-club-text-secondary">
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-club-success" />
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-club-success" />
              <span>Resultados garantizados</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-club-success" />
              <span>Setup en 24h</span>
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