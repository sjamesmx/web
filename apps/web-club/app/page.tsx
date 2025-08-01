import { ClubButton } from '@padelyzer/ui';
import { Logo } from '@padelyzer/ui';

export default function HomePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-club-border shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Logo variant="club" />
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/soluciones" className="text-club-text-secondary hover:text-club-accent transition-colors">
                Soluciones
              </a>
              <a href="/precios" className="text-club-text-secondary hover:text-club-accent transition-colors">
                Precios
              </a>
              <a href="/casos-de-exito" className="text-club-text-secondary hover:text-club-accent transition-colors">
                Casos de Éxito
              </a>
            </div>

            <div className="flex items-center gap-4">
              <ClubButton variant="ghost" size="sm">
                Iniciar Sesión
              </ClubButton>
              <ClubButton size="sm">
                Agenda Demo
              </ClubButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[600px] pt-16 flex items-center">
        <div className="container py-20">
          <div className="max-w-5xl">
            <div className="flex items-center gap-2 text-sm mb-6">
              <span className="bg-club-accent text-white px-3 py-1 rounded-full font-medium">APP CLUBES</span>
              <span className="bg-club-success text-white px-3 py-1 rounded-full font-medium">NUEVO</span>
              <span className="text-club-text-secondary">Primeros 100 clubes: 2 meses gratis</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-club-text-primary mb-6 leading-tight">
              Tu Club de Pádel Funcionando<br />
              Como <span className="text-club-accent">Negocio Profesional</span>
            </h1>
            
            <p className="text-xl text-club-text-secondary mb-8 max-w-3xl">
              El único sistema que GARANTIZA +30% más ingresos en 90 días. 
              Sin comisiones ocultas. Con soporte 24/7 en español.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <ClubButton size="lg" className="text-lg">
                Agenda Demo de 20 min
              </ClubButton>
              <ClubButton variant="secondary" size="lg" className="text-lg">
                Ver video de 5 min
              </ClubButton>
            </div>

            <div className="flex flex-wrap gap-8 text-sm text-club-text-secondary">
              <div className="flex items-center gap-2">
                <span className="text-club-success">✓</span>
                <span>400+ clubes activos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-club-success">✓</span>
                <span>60,000+ jugadores</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-club-success">✓</span>
                <span>#1 en México</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-club-text-primary">
            ¿Tu club está perdiendo dinero cada mes?
          </h2>
          <p className="text-xl text-club-text-secondary text-center mb-16 max-w-3xl mx-auto">
            Si tienes un club de pádel y estos problemas te suenan familiares, estás dejando escapar miles de pesos mensualmente...
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Canchas vacías en horarios premium",
                description: "Tus mejores horarios no se llenan porque los jugadores no saben cuándo hay disponibilidad.",
                pain: "Pérdida de $50,000+ al mes",
                icon: "📅"
              },
              {
                title: "Administración manual caótica",
                description: "WhatsApp, Excel, papelitos... Un desastre que genera errores y clientes molestos.",
                pain: "10+ horas semanales perdidas",
                icon: "📝"
              },
              {
                title: "No sabes qué está funcionando",
                description: "Sin datos claros sobre ingresos, ocupación o satisfacción de clientes.",
                pain: "Decisiones a ciegas = pérdidas",
                icon: "📊"
              }
            ].map((problem, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-red-200 rounded-2xl p-8 hover:border-red-300 transition-all shadow-sm"
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-red-600">{problem.title}</h3>
                <p className="text-club-text-secondary mb-4">{problem.description}</p>
                <div className="text-sm text-red-600 font-bold bg-red-50 px-3 py-2 rounded-lg">
                  💸 {problem.pain}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-club-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
              La solución que <span className="text-club-accent">aumenta tus ingresos</span> automáticamente
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto">
              Sistema completo de gestión que convierte tu club en una máquina de hacer dinero 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white border border-club-border rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-4 text-club-accent">¿Cómo funciona?</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Setup en 24 horas", desc: "Configuramos todo tu sistema sin interrumpir operaciones" },
                    { step: "2", title: "Los jugadores reservan online", desc: "App y web que funciona 24/7, sin llamadas ni WhatsApp" },
                    { step: "3", title: "IA optimiza precios", desc: "Algoritmo ajusta precios automáticamente por demanda" },
                    { step: "4", title: "Ingresos se disparan", desc: "Más ocupación + mejores precios = +30% ingresos" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-club-accent text-white font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm flex-shrink-0">
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
              <div className="bg-gradient-to-r from-club-success/20 to-transparent border border-club-success/30 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-2 text-club-success">+30% Más Ingresos</h4>
                <p className="text-club-text-secondary">Ocupación optimizada y precios dinámicos automáticos</p>
              </div>
              <div className="bg-gradient-to-r from-club-accent/20 to-transparent border border-club-accent/30 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-2 text-club-accent">-80% Menos Trabajo</h4>
                <p className="text-club-text-secondary">Automatización completa de reservas y pagos</p>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-transparent border border-blue-500/30 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-2 text-blue-600">100% Control</h4>
                <p className="text-club-text-secondary">Dashboard con métricas en tiempo real</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
              No es solo un <span className="text-club-accent">software</span>, es tu socio de crecimiento
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto">
              Todo lo que necesitas para convertir tu club en el negocio más rentable del sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Reservas Online 24/7",
                description: "App y web donde jugadores reservan sin molestarte. Pagos automáticos incluidos.",
                icon: "📱",
                highlight: "Ya no más WhatsApp"
              },
              {
                title: "Precios Dinámicos",
                description: "IA que ajusta precios según demanda, clima y horarios para maximizar ingresos.",
                icon: "💰",
                highlight: "Hasta +40% más ingresos"
              },
              {
                title: "Control de Acceso",
                description: "Códigos QR y control automático de entrada. Evita colados y conflictos.",
                icon: "🔐",
                highlight: "Seguridad garantizada"
              },
              {
                title: "Analytics Avanzados",
                description: "Dashboard con métricas de ocupación, ingresos y tendencias en tiempo real.",
                icon: "📊",
                highlight: "Decisiones basadas en datos"
              },
              {
                title: "Marketing Automático",
                description: "Campañas de email y SMS automáticas para llenar horas valle.",
                icon: "📧",
                highlight: "Marketing que funciona"
              },
              {
                title: "Soporte 24/7",
                description: "Equipo dedicado en español que resuelve cualquier problema al instante.",
                icon: "🎧",
                highlight: "Nunca estarás solo"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white border border-club-border rounded-2xl p-6 hover:border-club-accent/50 transition-all shadow-sm group hover:shadow-md"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-club-text-primary">{feature.title}</h3>
                <p className="text-club-text-secondary mb-4">{feature.description}</p>
                <div className="text-sm text-club-accent font-medium">
                  ✨ {feature.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-club-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
              Casos de <span className="text-club-success">éxito reales</span>
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto">
              Más de 400 clubes ya están generando más ingresos con menos trabajo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                club: "Padel Club Satelite",
                location: "Naucalpan, México",
                quote: "En 3 meses pasamos de $180,000 a $240,000 pesos mensuales. El sistema se paga solo y nos da más tiempo libre.",
                improvement: "+33% ingresos en 90 días",
                owner: "Carlos Ruiz, Propietario",
                rating: 5
              },
              {
                club: "Champions Padel",
                location: "Guadalajara, México", 
                quote: "Lo mejor es que ya no tengo que estar pendiente del teléfono. Los jugadores reservan solos y el dinero llega automáticamente.",
                improvement: "40 horas/mes ahorradas",
                owner: "Ana López, Directora",
                rating: 5
              },
              {
                club: "Elite Padel Center",
                location: "Monterrey, México",
                quote: "Pensé que era muy caro, pero se pagó en el primer mes. Ahora manejo 3 clubes con el mismo esfuerzo que antes uno.",
                improvement: "Expandió su negocio 3x",
                owner: "Roberto Hernández, CEO",
                rating: 5
              }
            ].map((story, index) => (
              <div 
                key={index}
                className="bg-white border border-club-border rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-club-text-secondary mb-6 italic">"{story.quote}"</p>
                <div className="border-t border-club-border pt-4">
                  <h4 className="font-bold text-club-text-primary">{story.club}</h4>
                  <p className="text-sm text-club-text-secondary">{story.location}</p>
                  <p className="text-sm text-club-text-secondary mt-1">{story.owner}</p>
                  <div className="text-sm text-club-success font-bold mt-2">
                    🎯 {story.improvement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
              Planes que se <span className="text-club-success">pagan solos</span>
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto">
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
                className={`rounded-3xl p-8 ${
                  plan.highlight 
                    ? 'bg-club-accent text-white border-2 border-club-accent relative' 
                    : 'bg-white border-2 border-club-border'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-club-success text-white text-sm font-bold px-4 py-2 rounded-full">
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
                        <span className="text-sm">✓</span>
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
            <div className="bg-club-bg-secondary border border-club-border rounded-2xl p-6 max-w-2xl mx-auto">
              <h4 className="text-xl font-bold mb-3 text-club-success">🎯 Garantía de ROI</h4>
              <p className="text-club-text-secondary">
                Si no aumentas tus ingresos en un 25% en los primeros 90 días, te devolvemos todo tu dinero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-club-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
              Preguntas <span className="text-club-accent">frecuentes</span>
            </h2>
            <p className="text-xl text-club-text-secondary max-w-3xl mx-auto">
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
                className="bg-white border border-club-border rounded-2xl p-6 group shadow-sm"
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

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-club-bg-secondary to-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-club-text-primary">
            Tu club puede estar <span className="text-club-success">generando +30% más</span> desde mañana
          </h2>
          <p className="text-xl text-club-text-secondary mb-8 max-w-2xl mx-auto">
            Más de 400 clubes ya lo están haciendo. 
            ¿Hasta cuándo vas a esperar para maximizar tus ingresos?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <ClubButton size="lg" className="text-lg">
              Agendar demo gratuita de 20 min
            </ClubButton>
            <ClubButton variant="secondary" size="lg" className="text-lg">
              Ver caso de éxito en video
            </ClubButton>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-club-text-secondary">
            <div className="flex items-center gap-2">
              <span className="text-club-success">✓</span>
              <span>Setup en 24 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-club-success">✓</span>
              <span>Garantía de ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-club-success">✓</span>
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
    </>
  );
}