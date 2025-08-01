import { ClubButton } from '../../components/ui/ClubButton';
import { Logo } from '../../components/ui/Logo';
import MobileMenu from '../../components/MobileMenu';
import { 
  ChartBarIcon, 
  CalendarIcon, 
  UsersIcon, 
  DollarIcon, 
  TrendingUpIcon,
  CheckIcon,
  ArrowRightIcon,
  TargetIcon,
  GlobeIcon,
  ClockIcon
} from '../../components/icons';

export default function SolucionesPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-club-border shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Logo variant="club" />
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-club-text-secondary hover:text-club-accent transition-colors">
                Inicio
              </a>
              <a href="/soluciones" className="text-club-accent font-medium">
                Soluciones
              </a>
              <a href="/precios" className="text-club-text-secondary hover:text-club-accent transition-colors">
                Precios
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
      <section className="pt-24 pb-16 bg-gradient-to-b from-club-bg-secondary to-white">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-club-accent/10 text-club-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <GlobeIcon className="w-4 h-4" />
              SOLUCIONES COMPLETAS
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-club-text-primary">
              Todo lo que necesitas para <span className="text-club-accent">gestionar tu club</span>
            </h1>
            
            <p className="text-xl text-club-text-secondary mb-8 max-w-3xl mx-auto">
              6 módulos integrados que automatizan cada aspecto de tu negocio. 
              Desde reservas hasta finanzas, todo en una sola plataforma.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <ClubButton size="lg" className="text-lg">
                Ver demo en vivo
              </ClubButton>
              <ClubButton variant="secondary" size="lg" className="text-lg">
                Agendar presentación
              </ClubButton>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos Overview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
              <span className="text-club-accent">6 módulos</span> que revolucionan tu operación
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto">
              Cada módulo diseñado específicamente para resolver los desafíos únicos de los clubes de pádel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                Icon: ChartBarIcon,
                title: "Dashboard en Tiempo Real",
                description: "Monitorea ocupación, ingresos y KPIs clave al instante",
                features: ["Métricas en vivo", "Alertas automáticas", "Vista 360°"],
                color: "from-blue-500/20 to-blue-600/10",
                border: "border-blue-500/30"
              },
              {
                Icon: CalendarIcon,
                title: "Reservas Inteligentes",
                description: "Sistema completo para reservas individuales y grupales",
                features: ["Reservas online 24/7", "Gestión de grupos", "Pagos automáticos"],
                color: "from-green-500/20 to-green-600/10",
                border: "border-green-500/30"
              },
              {
                Icon: UsersIcon,
                title: "Ligas Masivas",
                description: "Organiza ligas con más de 500 participantes fácilmente",
                features: ["500+ jugadores", "Fixtures automáticos", "Rankings en vivo"],
                color: "from-purple-500/20 to-purple-600/10",
                border: "border-purple-500/30"
              },
              {
                Icon: TargetIcon,
                title: "Torneos Profesionales",
                description: "Gestión completa de torneos grandes y complejos",
                features: ["500+ participantes", "Bracket automático", "Streaming integrado"],
                color: "from-orange-500/20 to-orange-600/10",
                border: "border-orange-500/30"
              },
              {
                Icon: DollarIcon,
                title: "Finanzas Completas",
                description: "Control total de ingresos, egresos y nómina",
                features: ["Flujo de caja", "Nómina automática", "Reportes fiscales"],
                color: "from-emerald-500/20 to-emerald-600/10",
                border: "border-emerald-500/30"
              },
              {
                Icon: TrendingUpIcon,
                title: "Business Intelligence",
                description: "Insights avanzados para optimizar tu operación",
                features: ["Análisis predictivo", "Reportes personalizados", "Tendencias de mercado"],
                color: "from-cyan-500/20 to-cyan-600/10",
                border: "border-cyan-500/30"
              }
            ].map((module, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${module.color} border ${module.border} rounded-2xl p-8 hover:border-club-accent/50 transition-all duration-300 group hover:shadow-xl transform hover:-translate-y-2`}
              >
                <module.Icon className="w-12 h-12 mb-6 text-club-accent group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-4 text-club-text-primary">{module.title}</h3>
                <p className="text-club-text-secondary mb-6">{module.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-club-text-secondary">
                      <CheckIcon className="w-4 h-4 text-club-success flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <ClubButton variant="secondary" size="sm" className="w-full group-hover:border-club-accent">
                  Ver detalles
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </ClubButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Módulo 1: Dashboard */}
      <section className="py-20 bg-club-bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <ChartBarIcon className="w-4 h-4" />
                MÓDULO 1
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
                Dashboard de <span className="text-club-accent">Información en Tiempo Real</span>
              </h2>
              
              <p className="text-xl text-club-text-secondary mb-8">
                Ve todo lo que sucede en tu club al instante. Métricas clave, alertas automáticas y 
                control total desde un solo lugar.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-club-border">
                  <h4 className="font-bold text-club-text-primary mb-2">Ocupación en Vivo</h4>
                  <p className="text-club-text-secondary text-sm">Ve qué canchas están ocupadas, reservadas o disponibles en tiempo real</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-club-border">
                  <h4 className="font-bold text-club-text-primary mb-2">Ingresos del Día</h4>
                  <p className="text-club-text-secondary text-sm">Monitorea ingresos por hora, comparativas y proyecciones automáticas</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-club-border">
                  <h4 className="font-bold text-club-text-primary mb-2">Alertas Inteligentes</h4>
                  <p className="text-club-text-secondary text-sm">Notificaciones automáticas de cancelaciones, pagos pendientes y más</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-club-border">
                  <h4 className="font-bold text-club-text-primary mb-2">KPIs Automáticos</h4>
                  <p className="text-club-text-secondary text-sm">Métricas clave calculadas automáticamente: ocupación, ingresos por cancha, etc.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="mb-4">
                  <h4 className="font-bold text-club-text-primary mb-2">Dashboard - Hoy</h4>
                  <div className="flex items-center gap-4 text-sm text-club-text-secondary">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Online
                    </span>
                    <span>Actualizado hace 2 seg</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-club-bg-secondary rounded-lg p-4">
                    <div className="text-2xl font-bold text-club-accent">85%</div>
                    <div className="text-sm text-club-text-secondary">Ocupación</div>
                  </div>
                  <div className="bg-club-bg-secondary rounded-lg p-4">
                    <div className="text-2xl font-bold text-club-success">$45,280</div>
                    <div className="text-sm text-club-text-secondary">Ingresos hoy</div>
                  </div>
                  <div className="bg-club-bg-secondary rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-500">127</div>
                    <div className="text-sm text-club-text-secondary">Reservas</div>
                  </div>
                  <div className="bg-club-bg-secondary rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-500">23</div>
                    <div className="text-sm text-club-text-secondary">Nuevos clientes</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Cancha 1</span>
                    <span className="text-green-500">Ocupada</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Cancha 2</span>
                    <span className="text-blue-500">Reservada 18:00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Cancha 3</span>
                    <span className="text-club-text-secondary">Disponible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo 2: Reservas */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="mb-4">
                  <h4 className="font-bold text-club-text-primary mb-2">Sistema de Reservas</h4>
                  <div className="text-sm text-club-text-secondary">Reservas individuales y grupales</div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-club-bg-secondary rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Liga Corporativa Pemex</span>
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Confirmada</span>
                    </div>
                    <div className="text-sm text-club-text-secondary">
                      8 jugadores • Canchas 1-2 • 18:00-20:00
                    </div>
                  </div>
                  
                  <div className="bg-club-bg-secondary rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Torneo Weekend</span>
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">En curso</span>
                    </div>
                    <div className="text-sm text-club-text-secondary">
                      32 jugadores • Todas las canchas • 09:00-18:00
                    </div>
                  </div>
                  
                  <div className="bg-club-bg-secondary rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Clase grupal principiantes</span>
                      <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">Recurrente</span>
                    </div>
                    <div className="text-sm text-club-text-secondary">
                      12 alumnos • Cancha 3 • Martes y Jueves 19:00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CalendarIcon className="w-4 h-4" />
                MÓDULO 2
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
                Reservas <span className="text-club-accent">Individuales y Grupales</span>
              </h2>
              
              <p className="text-xl text-club-text-secondary mb-8">
                Gestiona desde una reserva simple hasta eventos masivos con cientos de participantes. 
                Todo automatizado y sincronizado.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <CheckIcon className="w-6 h-6 text-club-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-club-text-primary mb-1">Reservas 24/7</h4>
                    <p className="text-club-text-secondary">Los jugadores reservan online sin molestarte, con pagos automáticos</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckIcon className="w-6 h-6 text-club-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-club-text-primary mb-1">Grupos Masivos</h4>
                    <p className="text-club-text-secondary">Organiza ligas, torneos y clases grupales con gestión automática de participantes</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckIcon className="w-6 h-6 text-club-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-club-text-primary mb-1">Pagos Integrados</h4>
                    <p className="text-club-text-secondary">Cobros automáticos, recordatorios de pago y facturación electrónica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos 3 y 4: Ligas y Torneos */}
      <section className="py-20 bg-club-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
              Eventos <span className="text-club-accent">Masivos Automatizados</span>
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto">
              Organiza ligas y torneos con más de 500 participantes. Todo el flujo automatizado desde inscripciones hasta premiación.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Ligas */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-club-border">
              <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <UsersIcon className="w-4 h-4" />
                MÓDULO 3
              </div>
              
              <h3 className="text-3xl font-bold mb-4 text-club-text-primary">Ligas Masivas</h3>
              <p className="text-club-text-secondary mb-6">
                Organiza ligas regulares con más de 500 participantes. Fixtures automáticos, rankings en tiempo real y gestión completa.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-club-bg-secondary rounded-lg">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">500+</div>
                  <span className="text-club-text-primary font-medium">Participantes por liga</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-club-bg-secondary rounded-lg">
                  <ClockIcon className="w-5 h-5 text-purple-500" />
                  <span className="text-club-text-primary font-medium">Fixtures automáticos</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-club-bg-secondary rounded-lg">
                  <TrendingUpIcon className="w-5 h-5 text-purple-500" />
                  <span className="text-club-text-primary font-medium">Rankings en vivo</span>
                </div>
              </div>
              
              <ClubButton variant="secondary" className="w-full">
                Ver demo de ligas
              </ClubButton>
            </div>

            {/* Torneos */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-club-border">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TargetIcon className="w-4 h-4" />
                MÓDULO 4
              </div>
              
              <h3 className="text-3xl font-bold mb-4 text-club-text-primary">Torneos Profesionales</h3>
              <p className="text-club-text-secondary mb-6">
                Gestión completa de torneos grandes y complejos. Brackets automáticos, streaming integrado y premiación automática.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-club-bg-secondary rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">500+</div>
                  <span className="text-club-text-primary font-medium">Participantes por torneo</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-club-bg-secondary rounded-lg">
                  <TargetIcon className="w-5 h-5 text-orange-500" />
                  <span className="text-club-text-primary font-medium">Bracket automático</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-club-bg-secondary rounded-lg">
                  <GlobeIcon className="w-5 h-5 text-orange-500" />
                  <span className="text-club-text-primary font-medium">Streaming integrado</span>
                </div>
              </div>
              
              <ClubButton variant="secondary" className="w-full">
                Ver demo de torneos
              </ClubButton>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos 5 y 6: Finanzas y BI */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <DollarIcon className="w-4 h-4" />
                MÓDULOS 5 & 6
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
                <span className="text-club-accent">Finanzas</span> y Business Intelligence
              </h2>
              
              <p className="text-xl text-club-text-secondary mb-8">
                Control financiero completo y análisis inteligente de tu operación. 
                Desde flujo de caja hasta insights predictivos.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-emerald-600 mb-3">MÓDULO FINANZAS</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-club-success" />
                      <span className="text-club-text-secondary text-sm">Flujo de caja en tiempo real</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-club-success" />
                      <span className="text-club-text-secondary text-sm">Nómina automatizada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-club-success" />
                      <span className="text-club-text-secondary text-sm">Reportes fiscales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-club-success" />
                      <span className="text-club-text-secondary text-sm">Control de gastos</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-cyan-600 mb-3">MÓDULO BI</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-club-success" />
                      <span className="text-club-text-secondary text-sm">Análisis predictivo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-club-success" />
                      <span className="text-club-text-secondary text-sm">Reportes personalizados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-club-success" />
                      <span className="text-club-text-secondary text-sm">Tendencias de mercado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-club-success" />
                      <span className="text-club-text-secondary text-sm">Insights automáticos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-emerald-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-600">$128,450</div>
                    <div className="text-sm text-emerald-600">Ingresos mes</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-red-600">$45,200</div>
                    <div className="text-sm text-red-600">Gastos mes</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-club-text-primary mb-3">Insights IA</h4>
                  <div className="space-y-2">
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                      <p className="text-sm text-blue-700">
                        <strong>Predicción:</strong> Incremento del 23% en reservas para el próximo fin de semana
                      </p>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                      <p className="text-sm text-yellow-700">
                        <strong>Oportunidad:</strong> Promociona horarios valle de 14:00-16:00
                      </p>
                    </div>
                  </div>
                </div>
                
                <ClubButton size="sm" className="w-full">
                  Ver reporte completo
                </ClubButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-b from-club-bg-secondary to-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
            ¿Listo para <span className="text-club-accent">automatizar tu club</span>?
          </h2>
          <p className="text-xl text-club-text-secondary mb-8 max-w-2xl mx-auto">
            6 módulos integrados que trabajan juntos para maximizar tus ingresos y minimizar tu trabajo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <ClubButton size="lg" className="text-lg">
              Ver demo completa de 20 min
            </ClubButton>
            <ClubButton variant="secondary" size="lg" className="text-lg">
              Descargar brochure técnico
            </ClubButton>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-club-text-secondary">
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-club-success" />
              <span>Setup en 24 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-club-success" />
              <span>Soporte 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-club-success" />
              <span>Garantía de ROI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-club-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Logo variant="club" />
            <div className="flex gap-6 text-sm">
              <a href="/privacidad" className="text-club-text-secondary hover:text-club-accent">
                Privacidad
              </a>
              <a href="/terminos" className="text-club-text-secondary hover:text-club-accent">
                Términos
              </a>
              <a href="https://padelyzer.com" className="text-club-text-secondary hover:text-club-accent">
                App para jugadores
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}