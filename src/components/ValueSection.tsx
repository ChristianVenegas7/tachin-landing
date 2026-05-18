import { motion } from 'framer-motion'
import { BarChart2, Star, Heart, FileText } from 'lucide-react'

const VALUES = [
  {
    icon: BarChart2,
    title: 'DATA',
    headline: 'KPIs ambientales desde operación real.',
    desc: 'No encuestas. No estimaciones. Datos directos de cada evento de depósito, medidos en origen, verificados por el sistema.',
    color: '#39FF14',
  },
  {
    icon: Star,
    title: 'REPUTACIÓN',
    headline: 'Impacto visible para marca y stakeholders.',
    desc: 'La sostenibilidad operativa se convierte en activo de reputación: reportable, auditable y comunicable hacia inversores, clientes y comunidad.',
    color: '#38E8FF',
  },
  {
    icon: Heart,
    title: 'CULTURA',
    headline: 'Participación sostenida de usuarios.',
    desc: 'Rankings, puntos y beneficios transforman el reciclaje en comportamiento institucional medible, generando engagement real y continuo.',
    color: '#39FF14',
  },
  {
    icon: FileText,
    title: 'REPORTE',
    headline: 'Evidencia exportable para ESG.',
    desc: 'Informes compatibles con estándares GRI, CDP y esquemas de reporte interno corporativo. Datos listos para auditoría en cualquier momento.',
    color: '#38E8FF',
  },
]

export default function ValueSection() {
  return (
    <section className="bg-black py-28 md:py-36 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Propuesta de Valor</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-instrument text-[clamp(2.5rem,5.5vw,5rem)] text-white leading-[1.0] mb-6"
          >
            No vendemos reciclaje.
            <br />
            <em className="text-[#39FF14]">Vendemos data y reputación.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[rgba(255,255,255,0.5)] text-lg leading-relaxed"
          >
            Para las empresas, el residuo es solo el punto de entrada. El valor real está en la trazabilidad, la evidencia ESG, la participación visible y la reputación corporativa que se puede demostrar.
          </motion.p>
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {VALUES.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="liquid-glass rounded-3xl p-8 flex flex-col gap-5 cursor-default"
              >
                <div className="flex items-start justify-between">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${v.color}10` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: v.color }} />
                  </div>
                  <div
                    className="text-[10px] tracking-[0.35em] font-bold border rounded-full px-3 py-1"
                    style={{ color: v.color, borderColor: `${v.color}30` }}
                  >
                    {v.title}
                  </div>
                </div>

                <div>
                  <div className="text-white font-semibold text-lg leading-snug mb-3">{v.headline}</div>
                  <div className="text-[rgba(255,255,255,0.45)] text-sm leading-relaxed">{v.desc}</div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Strategic thesis */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 liquid-glass rounded-3xl p-8 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center text-center md:text-left">
            {[
              { label: 'El residuo', sub: 'es el disparador' },
              { label: 'La data', sub: 'es el activo' },
              { label: 'La evidencia ESG', sub: 'es el producto' },
              { label: 'La reputación', sub: 'es el retorno' },
              { label: 'La infraestructura', sub: 'es el moat' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center md:items-start gap-1">
                {i > 0 && (
                  <div className="hidden md:block absolute" />
                )}
                <div className="text-[rgba(255,255,255,0.3)] text-xs tracking-[0.2em] uppercase">{item.label}</div>
                <div className="text-white text-sm font-semibold">{item.sub}</div>
                {i < 4 && (
                  <div className="block md:hidden w-px h-4 bg-[rgba(255,255,255,0.1)] mx-auto mt-2" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
