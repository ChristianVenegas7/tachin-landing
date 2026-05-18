import { motion } from 'framer-motion'
import { Bot, BarChart2, Building2, Check, ArrowRight } from 'lucide-react'

const PLANS = [
  {
    icon: Bot,
    tag: 'Infraestructura física',
    title: 'Alquiler de Robot',
    subtitle: 'Para empresas que necesitan captura de PET en su sede.',
    features: [
      'Instalación del robot en sede',
      'Validación de botellas PET',
      'Compactación y trituración',
      'Mantenimiento básico incluido',
      'Soporte operativo',
    ],
    cta: 'Solicitar cotización',
    ctaStyle: 'outline' as const,
    featured: false,
    accentColor: '#38E8FF',
  },
  {
    icon: BarChart2,
    tag: 'Plataforma digital',
    title: 'SaaS ESG',
    subtitle: 'Para equipos de sostenibilidad con necesidad de trazabilidad.',
    features: [
      'Dashboard ESG en tiempo real',
      'KPIs ambientales trazables',
      'Evidencia de reciclaje verificada',
      'Reportes mensuales automáticos',
      'Métricas para auditoría',
    ],
    cta: 'Agendar demo',
    ctaStyle: 'outline' as const,
    featured: false,
    accentColor: '#39FF14',
  },
  {
    icon: Building2,
    tag: 'Recomendado',
    title: 'Plan Corporativo',
    subtitle: 'Solución integral para medianas y grandes organizaciones.',
    features: [
      'Robot ESG + Dashboard completo',
      'Reportes ejecutivos personalizados',
      'Personalización de marca',
      'Campañas internas de engagement',
      'Soporte premium dedicado',
      'Métricas para reportes ESG externos',
      'Onboarding y capacitación',
    ],
    cta: 'Hablar con ventas',
    ctaStyle: 'filled' as const,
    featured: true,
    accentColor: '#39FF14',
  },
]

export default function PricingSection() {
  return (
    <section id="tarifas" className="bg-[#05070A] py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-2xl mb-14">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}>
            <span className="section-label">Nuestras Tarifas</span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-instrument text-[clamp(2.2rem,5vw,4.5rem)] text-white leading-[1.02] mb-4">
            Elige el modelo
            <br />
            <em className="text-[rgba(255,255,255,0.4)]">que se adapta a tu organización.</em>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[rgba(255,255,255,0.45)] text-base leading-relaxed">
            Precios personalizados según sede, volumen y necesidades de reporte. Contáctanos para una propuesta a medida.
          </motion.p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {PLANS.map((plan, i) => {
            const Icon = plan.icon
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`relative rounded-3xl flex flex-col overflow-hidden cursor-default ${
                  plan.featured
                    ? 'bg-[#060C10] border border-[rgba(57,255,20,0.25)]'
                    : 'liquid-glass'
                }`}
                style={plan.featured ? { boxShadow: '0 0 60px rgba(57,255,20,0.07)' } : {}}>

                {/* Featured glow */}
                {plan.featured && (
                  <div className="absolute inset-0 pointer-events-none opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(57,255,20,0.4) 0%, transparent 60%)' }} />
                )}

                {/* Top accent line */}
                <div className="h-[2px] w-full flex-shrink-0"
                  style={{ background: plan.featured ? '#39FF14' : `${plan.accentColor}40` }} />

                <div className="flex flex-col flex-1 p-7">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${plan.accentColor}10` }}>
                      <Icon className="w-5 h-5" style={{ color: plan.accentColor }} />
                    </div>
                    <div className={`text-[10px] tracking-[0.25em] font-bold border rounded-full px-3 py-1 ${
                      plan.featured
                        ? 'text-[#39FF14] border-[rgba(57,255,20,0.4)] bg-[rgba(57,255,20,0.06)]'
                        : 'text-[rgba(255,255,255,0.4)] border-[rgba(255,255,255,0.1)]'
                    }`}>
                      {plan.tag}
                    </div>
                  </div>

                  <div className="mb-5">
                    <div className="text-white font-bold text-xl tracking-wide mb-2">{plan.title}</div>
                    <div className="text-[rgba(255,255,255,0.4)] text-sm leading-relaxed">{plan.subtitle}</div>
                  </div>

                  {/* Dashed separator */}
                  <div className="w-full border-t border-dashed border-[rgba(255,255,255,0.08)] mb-5" />

                  {/* Features */}
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature, j) => (
                      <motion.li key={j} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.25 + j * 0.05 }}
                        className="flex items-start gap-3">
                        <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: plan.accentColor, opacity: 0.8 }} />
                        <span className="text-[rgba(255,255,255,0.6)] text-sm leading-snug">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Dashed separator */}
                  <div className="w-full border-t border-dashed border-[rgba(255,255,255,0.08)] my-5" />

                  {/* No price note */}
                  <div className="text-[rgba(255,255,255,0.25)] text-xs text-center mb-4 tracking-wide">
                    Precio según sede y volumen
                  </div>

                  {/* CTA */}
                  <motion.a href="#contacto" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className={`w-full py-3.5 rounded-2xl text-sm font-bold tracking-wide flex items-center justify-center gap-2 transition-all ${
                      plan.ctaStyle === 'filled'
                        ? 'bg-[#39FF14] text-black'
                        : 'border border-[rgba(255,255,255,0.15)] text-white hover:border-[rgba(255,255,255,0.3)]'
                    }`}
                    style={plan.ctaStyle === 'filled' ? { boxShadow: '0 0 30px rgba(57,255,20,0.2)' } : {}}>
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Footer note */}
        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-[rgba(255,255,255,0.25)] text-sm mt-8">
          Todos los planes incluyen onboarding inicial. Para volúmenes mayores o múltiples sedes, contáctanos directamente.
        </motion.p>
      </div>
    </section>
  )
}
