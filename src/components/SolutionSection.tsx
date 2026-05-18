import { motion } from 'framer-motion'
import { Bot, BarChart3, LayoutDashboard, Users, Award } from 'lucide-react'

const CARDS = [
  {
    icon: Bot,
    title: 'Robot inteligente',
    desc: 'Recibe PET, valida material y procesa el residuo en origen.',
    accent: '#39FF14',
  },
  {
    icon: BarChart3,
    title: 'Data ESG',
    desc: 'Captura peso, sede, fecha y evento de depósito en tiempo real.',
    accent: '#38E8FF',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard',
    desc: 'Convierte operación en KPIs visuales, exportables y auditables.',
    accent: '#39FF14',
  },
  {
    icon: Users,
    title: 'Engagement',
    desc: 'Activa participación mediante puntos, rankings y beneficios.',
    accent: '#38E8FF',
  },
  {
    icon: Award,
    title: 'Reputación',
    desc: 'Convierte sostenibilidad operativa en valor de marca demostrable.',
    accent: '#39FF14',
  },
]

export default function SolutionSection() {
  return (
    <section id="solucion" className="bg-[#080E14] py-28 md:py-36 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">La Solución</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-instrument text-[clamp(2.5rem,5.5vw,5rem)] text-white leading-[1.0] mb-6"
          >
            TACHÍN convierte
            <br />
            <em className="text-[#39FF14]">residuos en evidencia.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[rgba(255,255,255,0.5)] text-lg leading-relaxed"
          >
            TACHÍN es infraestructura ESG operativa que captura residuos en origen, valida cada depósito, genera data, activa participación y produce evidencia para reportes corporativos.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CARDS.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="liquid-glass rounded-2xl p-6 flex flex-col gap-4 cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${card.accent}12` }}
                >
                  <Icon className="w-5 h-5" style={{ color: card.accent }} />
                </div>
                <div>
                  <div className="text-white text-sm font-bold tracking-wide mb-2">{card.title}</div>
                  <div className="text-[rgba(255,255,255,0.45)] text-xs leading-relaxed">{card.desc}</div>
                </div>
                <div
                  className="mt-auto w-6 h-px"
                  style={{ backgroundColor: card.accent, opacity: 0.4 }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Footer phrase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 liquid-glass rounded-full px-8 py-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14]" />
            <span className="font-instrument text-xl text-white italic">
              Cada botella deja de ser residuo y se convierte en evidencia.
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
