import { ClubButton } from '../../components/ui/ClubButton';
import { Logo } from '../../components/ui/Logo';
import MobileMenu from '../../components/MobileMenu';
import BackgroundAnimation from '../../components/BackgroundAnimation';
import { 
  CheckIcon, 
  DollarIcon, 
  TargetIcon, 
  ShieldIcon,
  TrendingUpIcon,
  ChartBarIcon,
  CalendarIcon,
  UsersIcon,
  GlobeIcon,
  ClockIcon
} from '../../components/icons';

export default function PreciosPage() {
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
              <a href="/precios" className="text-club-accent font-medium">
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
      <section className="pt-24 pb-16 bg-gradient-to-b from-club-bg-secondary to-club-bg-primary relative">
        <div className="container text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-glow animate-pulse-glow">
              <DollarIcon className="w-4 h-4" />
              PRECIOS TRANSPARENTES
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-club-text-primary animate-slide-up">
              Planes que se <span className="text-transparent bg-clip-text bg-gradient-to-r from-club-success to-emerald-400 animate-pulse-glow">pagan solos</span>
            </h1>
            
            <p className="text-xl text-club-text-secondary mb-8 max-w-3xl mx-auto animate-slide-up">
              3 planes diseñados para clubes de cualquier tamaño. Todos incluyen los 6 módulos completos 
              y garantía de ROI del 25% en 90 días.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
              <ClubButton size="lg" className="text-lg shadow-glow hover:shadow-glow-lg animate-pulse-glow">
                Calcular mi ROI
              </ClubButton>
              <ClubButton variant="secondary" size="lg" className="text-lg bg-club-glass-medium border-club-border-glow hover:shadow-glow">
                Comparar planes
              </ClubButton>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 relative">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-club-glass-medium backdrop-blur-xl border-2 border-club-border hover:border-club-accent-glow/60 rounded-3xl p-8 hover:shadow-glow transition-all duration-300 animate-slide-up">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-club-text-primary mb-2">Starter</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-club-text-primary">$5,999</span>
                  <span className="text-lg text-club-text-secondary">/mes</span>
                </div>
                <p className="text-club-text-secondary">
                  Perfecto para clubes de 2-4 canchas
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-club-text-primary border-b border-club-border pb-2">
                  Características incluidas:
                </h4>
                
                {[
                  "Hasta 4 canchas",
                  "Dashboard en tiempo real",
                  "Reservas online ilimitadas",
                  "Módulo de finanzas básico",
                  "App móvil incluida",
                  "Soporte por email",
                  "Setup e instalación",
                  "Capacitación básica"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-club-success flex-shrink-0" />
                    <span className="text-club-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-club-border pt-6 mb-8">
                <h4 className="font-bold text-club-text-primary mb-3">Módulos incluidos:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <ChartBarIcon className="w-4 h-4 text-club-accent" />
                    <span>Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-club-accent" />
                    <span>Reservas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarIcon className="w-4 h-4 text-club-accent" />
                    <span>Finanzas</span>
                  </div>
                  <div className="flex items-center gap-2 text-club-text-secondary">
                    <span className="text-xs">✗</span>
                    <span>Ligas</span>
                  </div>
                  <div className="flex items-center gap-2 text-club-text-secondary">
                    <span className="text-xs">✗</span>
                    <span>Torneos</span>
                  </div>
                  <div className="flex items-center gap-2 text-club-text-secondary">
                    <span className="text-xs">✗</span>
                    <span>BI Avanzado</span>
                  </div>
                </div>
              </div>

              <ClubButton className="w-full text-lg mb-4 shadow-subtle hover:shadow-professional text-white">
                Empezar ahora
              </ClubButton>
              <p className="text-center text-club-text-secondary text-sm">
                Setup en 24 horas
              </p>
            </div>

            {/* Professional Plan - DESTACADO */}
            <div className="bg-gradient-to-br from-club-accent/20 to-club-accent/10 backdrop-blur-xl border-2 border-club-accent-glow rounded-3xl p-8 md:p-12 relative shadow-glow hover:shadow-glow-lg transform scale-105 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-club-success text-white px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap shadow-glow animate-pulse-glow">
                  MÁS POPULAR
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-club-text-primary mb-2">Professional</h3>
                <div className="mb-4">
                  <span className="text-6xl font-bold text-club-accent">$12,999</span>
                  <span className="text-xl text-club-text-secondary">/mes</span>
                </div>
                <p className="text-club-text-secondary">
                  La opción más popular para clubes medianos
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-club-text-primary border-b border-club-accent/30 pb-2">
                  Todo lo de Starter, más:
                </h4>
                
                {[
                  "Hasta 8 canchas",
                  "Módulo de ligas (500+ jugadores)",
                  "Módulo de torneos (500+ jugadores)",
                  "BI y analytics avanzados",
                  "Precios dinámicos con IA",
                  "Marketing automático",
                  "Control de acceso",
                  "Integración POS",
                  "Soporte prioritario 24/7",
                  "Account manager dedicado",
                  "Capacitación completa"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-club-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-club-text-primary font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-club-accent/30 pt-6 mb-8">
                <h4 className="font-bold text-club-text-primary mb-3">Todos los módulos incluidos:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    { icon: ChartBarIcon, name: "Dashboard" },
                    { icon: CalendarIcon, name: "Reservas" },
                    { icon: UsersIcon, name: "Ligas" },
                    { icon: TargetIcon, name: "Torneos" },
                    { icon: DollarIcon, name: "Finanzas" },
                    { icon: TrendingUpIcon, name: "BI Avanzado" }
                  ].map((module, index) => (
                    <div key={index} className="flex items-center gap-2 text-club-accent font-medium">
                      <module.icon className="w-4 h-4" />
                      <span>{module.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <ClubButton size="lg" className="w-full text-lg mb-4 bg-club-accent hover:bg-club-accent-hover shadow-professional hover:shadow-glass text-white">
                Agendar demo
              </ClubButton>
              <p className="text-center text-club-text-secondary text-sm">
                ROI garantizado en 90 días
              </p>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-club-glass-medium backdrop-blur-xl border-2 border-club-border hover:border-club-accent-glow/60 rounded-3xl p-8 hover:shadow-glow transition-all duration-300 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-club-text-primary mb-2">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-club-text-primary">Custom</span>
                </div>
                <p className="text-club-text-secondary">
                  Para cadenas y clubes grandes
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-bold text-club-text-primary border-b border-club-border pb-2">
                  Todo lo de Professional, más:
                </h4>
                
                {[
                  "Canchas ilimitadas",
                  "Multi-sucursal",
                  "API personalizada",
                  "Integraciones custom",
                  "White label opcional",
                  "Onboarding dedicado",
                  "SLA garantizado",
                  "Desarrollo a medida",
                  "Soporte premium",
                  "Consultoría estratégica"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-club-success flex-shrink-0" />
                    <span className="text-club-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-club-border pt-6 mb-8">
                <h4 className="font-bold text-club-text-primary mb-3">Perfecto para:</h4>
                <div className="space-y-2 text-sm text-club-text-secondary">
                  <div>• Cadenas de clubes</div>
                  <div>• Clubes con +10 canchas</div>
                  <div>• Necesidades específicas</div>
                  <div>• Integraciones complejas</div>
                </div>
              </div>

              <ClubButton variant="secondary" className="w-full text-lg mb-4 bg-club-glass-light border-club-border hover:shadow-subtle text-white">
                Contactar ventas
              </ClubButton>
              <p className="text-center text-club-text-secondary text-sm">
                Cotización personalizada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-club-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
              Calcula tu <span className="text-club-success">retorno de inversión</span>
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto">
              Ve exactamente cuánto dinero ganarás con Padelyzer Club en tu primer año
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="bg-club-glass-medium backdrop-blur-xl rounded-2xl p-8 shadow-glass border border-club-border">
              <h3 className="text-2xl font-bold mb-6 text-club-text-primary">Calculadora ROI</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-club-text-secondary mb-2">
                    Número de canchas
                  </label>
                  <select className="w-full p-3 bg-club-glass-light backdrop-blur-sm border border-club-border rounded-lg focus:ring-2 focus:ring-club-accent focus:border-transparent text-club-text-primary">
                    <option>2-4 canchas</option>
                    <option>5-8 canchas</option>
                    <option>9+ canchas</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-club-text-secondary mb-2">
                    Ingresos mensuales actuales
                  </label>
                  <select className="w-full p-3 bg-club-glass-light backdrop-blur-sm border border-club-border rounded-lg focus:ring-2 focus:ring-club-accent focus:border-transparent text-club-text-primary">
                    <option>$50,000 - $100,000</option>
                    <option>$100,000 - $200,000</option>
                    <option>$200,000 - $500,000</option>
                    <option>$500,000+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-club-text-secondary mb-2">
                    Ocupación promedio actual
                  </label>
                  <select className="w-full p-3 bg-club-glass-light backdrop-blur-sm border border-club-border rounded-lg focus:ring-2 focus:ring-club-accent focus:border-transparent text-club-text-primary">
                    <option>40-60%</option>
                    <option>60-80%</option>
                    <option>80%+</option>
                  </select>
                </div>
                
                <ClubButton className="w-full text-white">
                  Calcular mi ROI
                </ClubButton>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-club-success/20 to-club-success/10 backdrop-blur-xl rounded-2xl p-8 border border-club-success/30">
                <h4 className="text-2xl font-bold text-club-success mb-6">Ejemplo: Club medio (6 canchas)</h4>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-club-glass-light backdrop-blur-sm rounded-lg p-4 text-center border border-club-border">
                      <div className="text-2xl font-bold text-club-text-primary">$150,000</div>
                      <div className="text-sm text-club-text-secondary">Ingresos actuales/mes</div>
                    </div>
                    <div className="bg-club-glass-light backdrop-blur-sm rounded-lg p-4 text-center border border-club-success/50">
                      <div className="text-2xl font-bold text-club-success">$195,000</div>
                      <div className="text-sm text-club-text-secondary">Con Padelyzer/mes</div>
                    </div>
                  </div>
                  
                  <div className="bg-club-glass-light backdrop-blur-sm rounded-lg p-6 border border-club-border">
                    <h5 className="font-bold text-club-text-primary mb-4">Incremento anual:</h5>
                    <div className="text-3xl font-bold text-club-success mb-2">+$540,000</div>
                    <div className="text-lg text-club-success">+30% más ingresos</div>
                  </div>
                  
                  <div className="bg-club-glass-light backdrop-blur-sm rounded-lg p-6 border border-club-border">
                    <h5 className="font-bold text-club-text-primary mb-4">Inversión vs Retorno:</h5>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-club-text-secondary">Inversión anual:</span>
                      <span className="font-bold text-club-text-primary">$155,988</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-club-text-secondary">Retorno adicional:</span>
                      <span className="font-bold text-club-success">$540,000</span>
                    </div>
                    <div className="border-t border-club-border pt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-club-text-primary">ROI:</span>
                        <span className="text-2xl font-bold text-club-success">346%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
              Comparación <span className="text-club-accent">detallada</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg">
              <thead>
                <tr className="border-b border-club-border">
                  <th className="text-left p-6 font-bold text-club-text-primary">Características</th>
                  <th className="text-center p-6 font-bold text-club-text-primary">Starter</th>
                  <th className="text-center p-6 font-bold text-club-accent bg-club-accent/5">Professional</th>
                  <th className="text-center p-6 font-bold text-club-text-primary">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Número de canchas", starter: "Hasta 4", professional: "Hasta 8", enterprise: "Ilimitadas" },
                  { feature: "Dashboard tiempo real", starter: "✓", professional: "✓", enterprise: "✓" },
                  { feature: "Reservas online", starter: "✓", professional: "✓", enterprise: "✓" },
                  { feature: "Módulo finanzas", starter: "Básico", professional: "Completo", enterprise: "Avanzado" },
                  { feature: "Ligas masivas", starter: "✗", professional: "500+ jugadores", enterprise: "Ilimitados" },
                  { feature: "Torneos", starter: "✗", professional: "500+ jugadores", enterprise: "Ilimitados" },
                  { feature: "BI & Analytics", starter: "✗", professional: "✓", enterprise: "Avanzado" },
                  { feature: "Precios dinámicos IA", starter: "✗", professional: "✓", enterprise: "✓" },
                  { feature: "Multi-sucursal", starter: "✗", professional: "✗", enterprise: "✓" },
                  { feature: "API personalizada", starter: "✗", professional: "✗", enterprise: "✓" },
                  { feature: "Soporte", starter: "Email", professional: "24/7", enterprise: "Premium" },
                  { feature: "Setup", starter: "24 horas", professional: "24 horas", enterprise: "Personalizado" }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-club-border hover:bg-club-bg-secondary/30">
                    <td className="p-6 font-medium text-club-text-primary">{row.feature}</td>
                    <td className="p-6 text-center text-club-text-secondary">{row.starter}</td>
                    <td className="p-6 text-center text-club-accent font-medium bg-club-accent/5">{row.professional}</td>
                    <td className="p-6 text-center text-club-text-secondary">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-club-bg-secondary">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto">
            <ShieldIcon className="w-16 h-16 mb-8 text-club-success mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
              <span className="text-club-success">Garantía total</span> de ROI
            </h2>
            <p className="text-xl text-club-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
              Si no aumentas tus ingresos en un <strong className="text-club-text-primary">25% en 90 días</strong>, 
              te devolvemos el 100% de tu dinero.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-club-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarIcon className="w-8 h-8 text-club-success" />
                </div>
                <h3 className="font-bold text-club-text-primary mb-2">100% Reembolso</h3>
                <p className="text-club-text-secondary text-sm">Dinero de vuelta completo si no cumplimos</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-club-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="w-8 h-8 text-club-success" />
                </div>
                <h3 className="font-bold text-club-text-primary mb-2">90 Días</h3>
                <p className="text-club-text-secondary text-sm">Tiempo suficiente para ver resultados reales</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-club-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldIcon className="w-8 h-8 text-club-success" />
                </div>
                <h3 className="font-bold text-club-text-primary mb-2">Sin Preguntas</h3>
                <p className="text-club-text-secondary text-sm">No pedimos explicaciones ni justificaciones</p>
              </div>
            </div>

            <ClubButton size="lg" className="text-lg px-8 py-4">
              Empezar con garantía total
            </ClubButton>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
              Preguntas sobre <span className="text-club-accent">precios</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "¿Por qué los precios son tan transparentes?",
                answer: "Creemos en la honestidad total. Sin sorpresas, sin costos ocultos. El precio que ves es el precio final que pagas. Incluye todo: software, soporte, actualizaciones y garantías."
              },
              {
                question: "¿Qué incluye exactamente cada plan?",
                answer: "Todos los planes incluyen los módulos básicos (Dashboard, Reservas, Finanzas). Professional añade Ligas, Torneos y BI. Enterprise incluye todo personalizado para grandes operaciones."
              },
              {
                question: "¿Hay costos de setup o implementación?",
                answer: "No. El setup, instalación, migración de datos y capacitación están incluidos en todos los planes. Empiezas a usar el sistema en 24 horas sin costos adicionales."
              },
              {
                question: "¿Qué pasa si necesito cambiar de plan?",
                answer: "Puedes subir o bajar de plan en cualquier momento. Los cambios se reflejan en tu próxima facturación, sin penalizaciones ni costos de cambio."
              },
              {
                question: "¿Cómo funciona la garantía de ROI?",
                answer: "Si después de 90 días no has aumentado tus ingresos en al menos 25%, te devolvemos todo tu dinero. Simple y sin complicaciones."
              },
              {
                question: "¿Hay descuentos por pago anual?",
                answer: "Sí, ofrecemos 2 meses gratis por pago anual anticipado. También hay descuentos especiales para cadenas de clubes y asociaciones."
              }
            ].map((faq, index) => (
              <details 
                key={index}
                className="bg-white/90 backdrop-blur-sm border border-club-border rounded-2xl p-6 group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <summary className="font-bold text-lg cursor-pointer list-none flex items-center justify-between text-club-text-primary">
                  <span>{faq.question}</span>
                  <span className="text-club-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-club-text-secondary mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-club-bg-secondary to-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
            ¿Listo para <span className="text-club-success">multiplicar tus ingresos</span>?
          </h2>
          <p className="text-xl text-club-text-secondary mb-8 max-w-2xl mx-auto">
            Únete a los clubes más exitosos de México. Garantía de ROI del 25% en 90 días.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <ClubButton size="lg" className="text-lg">
              Agendar demo personalizada
            </ClubButton>
            <ClubButton variant="secondary" size="lg" className="text-lg">
              Descargar calculadora ROI
            </ClubButton>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-club-text-secondary">
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-club-success" />
              <span>Setup en 24 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-club-success" />
              <span>Garantía de ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-club-success" />
              <span>Soporte 24/7</span>
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
    </div>
  );
}