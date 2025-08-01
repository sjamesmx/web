import { ClubButton } from '../components/ui/ClubButton';
import { Logo } from '../components/ui/Logo';
import MobileMenu from '../components/MobileMenu';
import BackgroundAnimation from '../components/BackgroundAnimation';
import { 
  CalendarIcon, 
  DocumentIcon, 
  ChartBarIcon, 
  SmartphoneIcon, 
  DollarIcon, 
  LockIcon, 
  MailIcon, 
  HeadphonesIcon, 
  UsersIcon, 
  BuildingIcon, 
  StarIcon, 
  CheckIcon, 
  TrendingUpIcon,
  ShieldIcon,
  CreditCardIcon,
  GlobeIcon,
  ClockIcon,
  TargetIcon,
  RocketIcon
} from '../components/icons';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-club-bg-primary text-club-text-primary">
      {/* Background Animation */}
      <BackgroundAnimation />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-club-glass-medium backdrop-blur-xl border-b border-club-border shadow-glass">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Logo variant="club" />
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/soluciones" className="text-club-text-secondary hover:text-club-accent hover:shadow-glow transition-all duration-300">
                Soluciones
              </a>
              <a href="/precios" className="text-club-text-secondary hover:text-club-accent hover:shadow-glow transition-all duration-300">
                Precios
              </a>
              <a href="/prelanzamiento" className="text-club-text-secondary hover:text-club-accent hover:shadow-glow transition-all duration-300">
                Prelanzamiento
              </a>
            </div>

            <div className="flex items-center gap-4">
              <ClubButton variant="ghost" size="sm" className="hidden md:block hover:shadow-glow">
                Iniciar Sesión
              </ClubButton>
              <ClubButton size="sm" className="hidden md:block shadow-glow hover:shadow-glow-lg animate-pulse-glow">
                Agenda Demo
              </ClubButton>
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-16 flex items-center relative overflow-hidden">
        <div className="container py-20 relative z-10">
          <div className="max-w-5xl">
            <div className="flex items-center gap-2 text-sm mb-6 animate-slide-up">
              <span className="bg-club-accent/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium shadow-glow animate-pulse-glow">
                APP CLUBES
              </span>
              <span className="bg-club-success/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium shadow-glow animate-float">
                ACTUALIZADO
              </span>
              <span className="text-club-text-secondary">Primeros 50 clubes: 2 meses gratis</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-club-text-primary mb-8 leading-tight animate-slide-up">
              Tu Club de Pádel <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-club-accent via-club-accent-glow to-club-accent-light animate-pulse-glow">
                Negocio Profesional
              </span>
            </h1>
            
            <p className="text-xl text-club-text-secondary mb-10 max-w-3xl leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
              El único sistema que <span className="text-club-accent-light font-semibold">GARANTIZA +30% más ingresos</span> en 90 días. 
              Sin comisiones ocultas. Con soporte 24/7 en español.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <ClubButton size="lg" className="text-lg px-8 py-4 shadow-glow-lg hover:shadow-glow animate-pulse-glow">
                <span className="flex items-center gap-2">
                  <RocketIcon className="w-5 h-5" />
                  Agenda Demo de 20 min
                </span>
              </ClubButton>
              <ClubButton variant="secondary" size="lg" className="text-lg px-8 py-4 bg-club-glass-medium border-club-border-glow hover:shadow-glow">
                Ver video demo de 5 min
              </ClubButton>
            </div>

            <div className="flex flex-wrap gap-8 text-sm animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center gap-3 bg-club-glass-light backdrop-blur-sm px-4 py-2 rounded-full border border-club-border hover:shadow-glow transition-all duration-300">
                <CheckIcon className="w-4 h-4 text-club-success animate-pulse-glow" />
                <span className="text-club-text-secondary font-medium">400+ clubes activos</span>
              </div>
              <div className="flex items-center gap-3 bg-club-glass-light backdrop-blur-sm px-4 py-2 rounded-full border border-club-border hover:shadow-glow transition-all duration-300">
                <CheckIcon className="w-4 h-4 text-club-success animate-pulse-glow" />
                <span className="text-club-text-secondary font-medium">60,000+ jugadores</span>
              </div>
              <div className="flex items-center gap-3 bg-club-glass-light backdrop-blur-sm px-4 py-2 rounded-full border border-club-border hover:shadow-glow transition-all duration-300">
                <CheckIcon className="w-4 h-4 text-club-success animate-pulse-glow" />
                <span className="text-club-text-secondary font-medium">#1 en México</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 relative">
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-club-text-primary animate-slide-up">
            ¿Tu club está perdiendo dinero cada mes?
          </h2>
          <p className="text-xl text-club-text-secondary text-center mb-16 max-w-3xl mx-auto animate-slide-up">
            Si tienes un club de pádel y estos problemas te suenan familiares, estás dejando escapar miles de pesos mensualmente...
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Canchas vacías en horarios premium",
                description: "Tus mejores horarios no se llenan porque los jugadores no saben cuándo hay disponibilidad.",
                pain: "Pérdida de $50,000+ al mes",
                Icon: CalendarIcon
              },
              {
                title: "Administración manual caótica",
                description: "WhatsApp, Excel, papelitos... Un desastre que genera errores y clientes molestos.",
                pain: "10+ horas semanales perdidas",
                Icon: DocumentIcon
              },
              {
                title: "No sabes qué está funcionando",
                description: "Sin datos claros sobre ingresos, ocupación o satisfacción de clientes.",
                pain: "Decisiones a ciegas = pérdidas",
                Icon: ChartBarIcon
              }
            ].map((problem, index) => (
              <div 
                key={index}
                className="bg-club-glass-medium backdrop-blur-xl border border-red-400/30 rounded-2xl p-8 hover:border-red-400/60 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 animate-slide-up group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <problem.Icon className="w-12 h-12 mb-4 text-red-400 group-hover:text-red-300 transition-colors animate-pulse-glow" />
                <h3 className="text-xl font-bold mb-3 text-red-300">{problem.title}</h3>
                <p className="text-club-text-secondary mb-4">{problem.description}</p>
                <div className="text-sm text-red-300 font-bold bg-red-500/20 backdrop-blur-sm px-3 py-2 rounded-lg border border-red-400/30">
                  <span className="text-red-200">💸</span> {problem.pain}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-club-bg-secondary relative">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary animate-slide-up">
              La solución que <span className="text-transparent bg-clip-text bg-gradient-to-r from-club-accent via-club-accent-glow to-club-accent-light animate-pulse-glow">aumenta tus ingresos</span> automáticamente
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto animate-slide-up">
              Sistema completo de gestión que convierte tu club en una máquina de hacer dinero 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="bg-club-glass-medium backdrop-blur-xl border border-club-border-glow rounded-2xl p-8 shadow-glass-lg hover:shadow-glow transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-club-accent-light animate-pulse-glow">¿Cómo funciona?</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Setup en 24 horas", desc: "Configuramos todo tu sistema sin interrumpir operaciones" },
                    { step: "2", title: "Los jugadores reservan online", desc: "App y web que funciona 24/7, sin llamadas ni WhatsApp" },
                    { step: "3", title: "IA optimiza precios", desc: "Algoritmo ajusta precios automáticamente por demanda" },
                    { step: "4", title: "Ingresos se disparan", desc: "Más ocupación + mejores precios = +30% ingresos" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="bg-club-accent text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm flex-shrink-0 shadow-glow animate-pulse-glow">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-club-text-primary">{item.title}</h4>
                        <p className="text-club-text-secondary text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-club-success/20 to-transparent backdrop-blur-xl border border-club-success/30 rounded-2xl p-6 hover:shadow-glow transition-all duration-300 animate-slide-up group">
                <h4 className="text-xl font-bold mb-2 text-club-success group-hover:animate-pulse-glow">+30% Más Ingresos</h4>
                <p className="text-club-text-secondary">Ocupación optimizada y precios dinámicos automáticos</p>
              </div>
              <div className="bg-gradient-to-r from-club-accent/20 to-transparent backdrop-blur-xl border border-club-accent/30 rounded-2xl p-6 hover:shadow-glow transition-all duration-300 animate-slide-up group" style={{animationDelay: '0.1s'}}>
                <h4 className="text-xl font-bold mb-2 text-club-accent group-hover:animate-pulse-glow">-80% Menos Trabajo</h4>
                <p className="text-club-text-secondary">Automatización completa de reservas y pagos</p>
              </div>
              <div className="bg-gradient-to-r from-club-accent-light/20 to-transparent backdrop-blur-xl border border-club-accent-light/30 rounded-2xl p-6 hover:shadow-glow transition-all duration-300 animate-slide-up group" style={{animationDelay: '0.2s'}}>
                <h4 className="text-xl font-bold mb-2 text-club-accent-light group-hover:animate-pulse-glow">100% Control</h4>
                <p className="text-club-text-secondary">Dashboard con métricas en tiempo real</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary animate-slide-up">
              No es solo un <span className="text-transparent bg-clip-text bg-gradient-to-r from-club-accent via-club-accent-glow to-club-accent-light animate-pulse-glow">software</span>, es tu socio de crecimiento
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto animate-slide-up">
              Todo lo que necesitas para convertir tu club en el negocio más rentable del sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Reservas Online 24/7",
                description: "App y web donde jugadores reservan sin molestarte. Pagos automáticos incluidos.",
                Icon: SmartphoneIcon,
                highlight: "Ya no más WhatsApp"
              },
              {
                title: "Precios Dinámicos",
                description: "IA que ajusta precios según demanda, clima y horarios para maximizar ingresos.",
                Icon: DollarIcon,
                highlight: "Hasta +40% más ingresos"
              },
              {
                title: "Control de Acceso",
                description: "Códigos QR y control automático de entrada. Evita colados y conflictos.",
                Icon: LockIcon,
                highlight: "Seguridad garantizada"
              },
              {
                title: "Analytics Avanzados",
                description: "Dashboard con métricas de ocupación, ingresos y tendencias en tiempo real.",
                Icon: ChartBarIcon,
                highlight: "Decisiones basadas en datos"
              },
              {
                title: "Marketing Automático",
                description: "Campañas de email y SMS automáticas para llenar horas valle.",
                Icon: MailIcon,
                highlight: "Marketing que funciona"
              },
              {
                title: "Soporte 24/7",
                description: "Equipo dedicado en español que resuelve cualquier problema al instante.",
                Icon: HeadphonesIcon,
                highlight: "Nunca estarás solo"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-club-glass-medium backdrop-blur-xl border border-club-border hover:border-club-accent-glow/60 rounded-2xl p-6 transition-all duration-300 shadow-glass group hover:shadow-glow transform hover:-translate-y-2 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <feature.Icon className="w-8 h-8 mb-4 text-club-accent group-hover:text-club-accent-light group-hover:scale-110 group-hover:animate-pulse-glow transition-all" />
                <h3 className="text-xl font-bold mb-3 text-club-text-primary group-hover:text-club-accent-light transition-colors">{feature.title}</h3>
                <p className="text-club-text-secondary mb-4">{feature.description}</p>
                <div className="text-sm text-club-accent-light font-medium flex items-center gap-2 group-hover:animate-pulse-glow">
                  <StarIcon className="w-4 h-4" />
                  {feature.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-launch Section */}
      <section className="py-20 bg-club-bg-secondary relative">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary animate-slide-up">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-club-accent via-club-accent-glow to-club-accent-light animate-pulse-glow">Prelanzamiento</span> exclusivo
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto animate-slide-up">
              Únete a los primeros 50 clubes en probar la plataforma más avanzada para gestión de clubes de pádel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-club-glass-medium backdrop-blur-xl border border-club-border hover:border-club-accent-glow/60 rounded-2xl p-8 text-center shadow-glass hover:shadow-glow transition-all duration-300 animate-slide-up group">
              <div className="w-16 h-16 bg-club-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <RocketIcon className="w-8 h-8 text-club-accent group-hover:text-club-accent-light" />
              </div>
              <h3 className="text-xl font-bold text-club-text-primary mb-4">Acceso Prioritario</h3>
              <p className="text-club-text-secondary mb-6">
                Sé uno de los primeros 50 clubes en usar el sistema completo antes del lanzamiento oficial.
              </p>
              <div className="bg-club-accent/10 backdrop-blur-sm rounded-lg p-4 border border-club-accent/20">
                <div className="text-2xl font-bold text-club-accent mb-1 animate-pulse-glow">2 meses</div>
                <div className="text-sm text-club-text-secondary">gratis para beta testers</div>
              </div>
            </div>

            <div className="bg-club-glass-medium backdrop-blur-xl border border-club-border hover:border-club-success/60 rounded-2xl p-8 text-center shadow-glass hover:shadow-glow transition-all duration-300 animate-slide-up group" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-club-success/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <UsersIcon className="w-8 h-8 text-club-success group-hover:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-club-text-primary mb-4">Feedback Directo</h3>
              <p className="text-club-text-secondary mb-6">
                Tu opinión ayudará a moldear el producto final. Acceso directo al equipo de desarrollo.
              </p>
              <div className="bg-club-success/10 backdrop-blur-sm rounded-lg p-4 border border-club-success/20">
                <div className="text-2xl font-bold text-club-success mb-1 animate-pulse-glow">1 on 1</div>
                <div className="text-sm text-club-text-secondary">sesiones con fundadores</div>
              </div>
            </div>

            <div className="bg-club-glass-medium backdrop-blur-xl border border-club-border hover:border-purple-400/60 rounded-2xl p-8 text-center shadow-glass hover:shadow-glow transition-all duration-300 animate-slide-up group" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <ShieldIcon className="w-8 h-8 text-purple-400 group-hover:text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-club-text-primary mb-4">Precio Fundador</h3>
              <p className="text-club-text-secondary mb-6">
                Precio especial de lanzamiento que mantienes para siempre. Nunca pagarás el precio regular.
              </p>
              <div className="bg-purple-500/10 backdrop-blur-sm rounded-lg p-4 border border-purple-400/20">
                <div className="text-2xl font-bold text-purple-400 mb-1 animate-pulse-glow">50% OFF</div>
                <div className="text-sm text-club-text-secondary">precio de por vida</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-club-accent/10 to-club-success/10 backdrop-blur-xl border border-club-accent/30 rounded-2xl p-8 max-w-4xl mx-auto shadow-glass hover:shadow-glow transition-all duration-300 animate-slide-up">
              <h3 className="text-2xl font-bold text-club-text-primary mb-4">
                ¿Por qué elegir el prelanzamiento?
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 animate-slide-up" style={{animationDelay: '0.1s'}}>
                    <CheckIcon className="w-5 h-5 text-club-success flex-shrink-0 animate-pulse-glow" />
                    <span className="text-club-text-secondary">Setup personalizado y prioritario</span>
                  </div>
                  <div className="flex items-center gap-3 animate-slide-up" style={{animationDelay: '0.2s'}}>
                    <CheckIcon className="w-5 h-5 text-club-success flex-shrink-0 animate-pulse-glow" />
                    <span className="text-club-text-secondary">Capacitación 1-on-1 con fundadores</span>
                  </div>
                  <div className="flex items-center gap-3 animate-slide-up" style={{animationDelay: '0.3s'}}>
                    <CheckIcon className="w-5 h-5 text-club-success flex-shrink-0 animate-pulse-glow" />
                    <span className="text-club-text-secondary">Funcionalidades custom según tus necesidades</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 animate-slide-up" style={{animationDelay: '0.4s'}}>
                    <CheckIcon className="w-5 h-5 text-club-success flex-shrink-0 animate-pulse-glow" />
                    <span className="text-club-text-secondary">Soporte premium sin costo adicional</span>
                  </div>
                  <div className="flex items-center gap-3 animate-slide-up" style={{animationDelay: '0.5s'}}>
                    <CheckIcon className="w-5 h-5 text-club-success flex-shrink-0 animate-pulse-glow" />
                    <span className="text-club-text-secondary">Acceso anticipado a nuevas funcionalidades</span>
                  </div>
                  <div className="flex items-center gap-3 animate-slide-up" style={{animationDelay: '0.6s'}}>
                    <CheckIcon className="w-5 h-5 text-club-success flex-shrink-0 animate-pulse-glow" />
                    <span className="text-club-text-secondary">Garantía extendida de 6 meses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary animate-slide-up">
              Planes que se <span className="text-transparent bg-clip-text bg-gradient-to-r from-club-success to-emerald-400 animate-pulse-glow">pagan solos</span>
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto animate-slide-up">
              Elige el plan perfecto para tu club. Todos incluyen garantía de ROI o te devolvemos tu dinero.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$5,999",
                period: "/mes",
                description: "Perfecto para clubes de 2-4 canchas",
                features: [
                  "Hasta 4 canchas",
                  "Reservas online ilimitadas",
                  "Dashboard básico",
                  "Soporte por email",
                  "App móvil incluida"
                ],
                highlight: false,
                cta: "Empezar ahora"
              },
              {
                name: "Professional",
                price: "$12,999",
                period: "/mes",
                description: "La opción más popular para clubes medianos",
                features: [
                  "Hasta 8 canchas",
                  "Precios dinámicos con IA",
                  "Analytics avanzados",
                  "Marketing automático",
                  "Soporte prioritario 24/7",
                  "Control de acceso",
                  "Integración POS"
                ],
                highlight: true,
                cta: "Agendar demo"
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "Para cadenas y clubes grandes",
                features: [
                  "Canchas ilimitadas",
                  "Multi-sucursal",
                  "API personalizada",
                  "Onboarding dedicado",
                  "Account manager",
                  "SLA garantizado",
                  "Desarrollo a medida"
                ],
                highlight: false,
                cta: "Contactar ventas"
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className={`rounded-3xl p-8 transition-all duration-300 animate-slide-up ${
                  plan.highlight 
                    ? 'bg-gradient-to-br from-club-accent to-club-accent-hover text-white border-2 border-club-accent-glow relative shadow-glow hover:shadow-glow-lg' 
                    : 'bg-club-glass-medium backdrop-blur-xl border-2 border-club-border hover:border-club-accent-glow/60 shadow-glass hover:shadow-glow'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-club-success text-white text-sm font-bold px-4 py-2 rounded-full shadow-glow animate-pulse-glow">
                      MÁS POPULAR
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-club-text-primary'}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-club-text-primary'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${plan.highlight ? 'text-white/80' : 'text-club-text-secondary'}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`${plan.highlight ? 'text-white/80' : 'text-club-text-secondary'}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.highlight ? 'bg-white text-club-accent' : 'bg-club-success text-white'
                      }`}>
                        <CheckIcon className="w-3 h-3" />
                      </div>
                      <span className={plan.highlight ? 'text-white' : 'text-club-text-secondary'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <ClubButton 
                  size="lg" 
                  className={`w-full text-lg ${
                    plan.highlight 
                      ? 'bg-white text-club-accent hover:bg-gray-100' 
                      : ''
                  }`}
                  variant={plan.highlight ? 'secondary' : 'primary'}
                >
                  {plan.cta}
                </ClubButton>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-club-glass-medium backdrop-blur-xl border border-club-border-glow rounded-2xl p-6 max-w-2xl mx-auto shadow-glass hover:shadow-glow transition-all duration-300 animate-slide-up">
              <h4 className="text-xl font-bold mb-3 text-club-success flex items-center gap-2 justify-center animate-pulse-glow">
                <TargetIcon className="w-5 h-5" />
                Garantía de ROI
              </h4>
              <p className="text-club-text-secondary">
                Si no aumentas tus ingresos en un 25% en los primeros 90 días, te devolvemos todo tu dinero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-club-bg-secondary relative">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary animate-slide-up">
              Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-club-accent via-club-accent-glow to-club-accent-light animate-pulse-glow">frecuentes</span>
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto animate-slide-up">
              Respuestas a las dudas más comunes de propietarios de clubes
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "¿Cuánto tiempo toma la implementación?",
                answer: "Implementación completa en 24-48 horas sin interrumpir tus operaciones. Nuestro equipo se encarga de todo: configuración, migración de datos y capacitación de tu equipo."
              },
              {
                question: "¿Realmente garantizan el aumento de ingresos?",
                answer: "Sí. Garantizamos un aumento mínimo del 25% en tus ingresos en 90 días o te devolvemos todo tu dinero. Nuestros algoritmos de precios dinámicos y optimización han demostrado funcionar en más de 400 clubes."
              },
              {
                question: "¿Qué pasa con mis clientes actuales?",
                answer: "Todos tus clientes existentes se migran automáticamente al nuevo sistema. Además, la transición es tan fácil que la mayoría ni se da cuenta. Solo ven mejoras: reservas más fáciles y mejor experiencia."
              },
              {
                question: "¿Es complicado de usar para mi personal?",
                answer: "Para nada. El sistema es más fácil que WhatsApp. Incluimos capacitación completa y soporte 24/7 en español. Tu equipo estará operando al 100% desde el día 1."
              },
              {
                question: "¿Funciona en clubes pequeños o solo grandes?",
                answer: "Funciona en clubes de cualquier tamaño. Desde 2 canchas hasta complejos con 20+. El sistema se adapta automáticamente al tamaño y necesidades de tu negocio."
              },
              {
                question: "¿Qué incluye el soporte técnico?",
                answer: "Soporte 24/7 en español por chat, email y teléfono. Actualizaciones automáticas, monitoreo proactivo y un account manager dedicado para planes Professional y Enterprise."
              }
            ].map((faq, index) => (
              <details 
                key={index}
                className="bg-club-glass-medium backdrop-blur-xl border border-club-border hover:border-club-accent-glow/60 rounded-2xl p-6 group shadow-glass hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between text-club-text-primary group-hover:text-club-accent-light transition-colors">
                  <span>{faq.question}</span>
                  <span className="text-club-accent group-hover:text-club-accent-light group-open:rotate-45 transition-all animate-pulse-glow">+</span>
                </summary>
                <p className="text-club-text-secondary mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-club-bg-secondary to-club-bg-primary relative">
        <div className="container text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary animate-slide-up">
            Tu club puede estar <span className="text-transparent bg-clip-text bg-gradient-to-r from-club-success to-emerald-400 animate-pulse-glow">generando +30% más</span> desde mañana
          </h2>
          <p className="text-xl text-club-text-secondary mb-8 max-w-2xl mx-auto animate-slide-up">
            Más de 400 clubes ya lo están haciendo. 
            ¿Hasta cuándo vas a esperar para maximizar tus ingresos?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-slide-up">
            <ClubButton size="lg" className="text-lg shadow-glow hover:shadow-glow-lg animate-pulse-glow">
              Agendar demo gratuita de 20 min
            </ClubButton>
            <ClubButton variant="secondary" size="lg" className="text-lg bg-club-glass-medium border-club-border-glow hover:shadow-glow">
              Ver video demo de 5 min
            </ClubButton>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-club-text-secondary animate-slide-up">
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-club-success animate-pulse-glow" />
              <span>Setup en 24 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-club-success animate-pulse-glow" />
              <span>Garantía de ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-club-success animate-pulse-glow" />
              <span>Soporte 24/7</span>
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
              <a href="/privacidad" className="text-club-text-secondary hover:text-club-accent hover:shadow-glow transition-all duration-300">
                Privacidad
              </a>
              <a href="/terminos" className="text-club-text-secondary hover:text-club-accent hover:shadow-glow transition-all duration-300">
                Términos
              </a>
              <a href="https://padelyzer.com" className="text-club-text-secondary hover:text-club-accent hover:shadow-glow transition-all duration-300">
                App para jugadores
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}