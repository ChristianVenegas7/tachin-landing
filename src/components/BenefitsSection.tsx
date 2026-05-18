import { motion } from 'framer-motion'
import { BarChart2, ShieldCheck, Heart, FileText } from 'lucide-react'

const BENEFITS = [
  {
    icon: BarChart2,
    title: 'Evidencia ESG real',
    bullets: ['KPIs desde operación directa', 'Sin estimaciones ni encuestas', 'Datos auditables en tiempo real'],
    color: '#39FF14',
  },
  {
    icon: ShieldCheck,
    title: 'Reputación auditable',
    bullets: ['Informes exportables PDF/CSV', 'Compatibilidad GRI y CDP', 'Valor de marca cuantificable'],
    color: '#38E8FF',
  },
  {
    icon: Heart,
    title: 'Cultura corporativa',
    bullets: ['Participación de colaboradores', 'Rankings y gamificación', 'Engagement sostenido'],
    color: '#39FF14',
  },
  {
    icon: FileText,
    title: 'Reporte ejecutivo',
    bullets: ['Dashboard para directorios', 'Evidencia para stakeholders', 'Listo para auditoría externa'],
    color: '#38E8FF',
  },
]

export default function BenefitsSection() {
  return (
    <section className="bg-[#080E14] py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-2xl mb-14">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}>
            <span className="section-label">Beneficios para Empresas</span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-instrument text-[clamp(2.2rem,5vw,4.5rem)] text-white leading-[1.02] mb-4">
            No vendemos reciclaje.
            <br />
            <em className="text-[#39FF14]">Vendemos data y reputación.</em>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[rgba(255,255,255,0.45)] text-base leading-relaxed">
            El residuo es el punto de entrada. El valor real está en la trazabilidad y la evidencia ESG demostrable.
          </motion.p>
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, delay: 0.08 + i * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="liquid-glass rounded-3xl p-6 flex flex-col gap-5 cursor-default">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${b.color}10` }}>
                    <Icon className="w-5 h-5" style={{ color: b.color }} />
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: b.color, opacity: 0.5 }} />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm tracking-wide mb-3">{b.title}</div>
                  <ul className="space-y-2">
                    {b.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: b.color, opacity: 0.6 }} />
                        <span className="text-[rgba(255,255,255,0.45)] text-xs leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Corporate placeholder visual */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay: 0.3 }}
          className="liquid-glass rounded-3xl overflow-hidden relative h-40 md:h-52">
          <div className="absolute inset-0 bg-gradient-to-r from-[#060A0E] via-[#0A1018] to-[#040608]" />
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(56,232,255,0.15) 0%, transparent 55%), radial-gradient(circle at 20% 50%, rgba(57,255,20,0.08) 0%, transparent 50%)' }} />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

          <div className="relative z-10 h-full flex items-center justify-between px-8 md:px-12">
            <div>
              <div className="text-[rgba(255,255,255,0.3)] text-xs tracking-[0.25em] uppercase mb-2">Para corporativos y universidades</div>
              <div className="font-instrument text-2xl md:text-3xl text-white">
                ESG operativo, <em className="text-[#38E8FF]">no declarativo.</em>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Universidades', 'Corporativos', 'Malls', 'Coworkings'].map((tag, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                  viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.08 }}
                  className="text-[rgba(255,255,255,0.3)] text-xs tracking-wide border-b border-[rgba(255,255,255,0.1)] pb-1">
                  {tag}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
