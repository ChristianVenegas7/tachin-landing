import { motion } from 'framer-motion'
import { CheckCircle2, Circle, Clock } from 'lucide-react'

const MILESTONES = [
  { date: 'Ene 2026', label: 'Estructuración', status: 'done' },
  { date: 'Feb 2026', label: 'Cierre de estructura de negocio', status: 'done' },
  { date: 'Mar 2026', label: 'Inicio de modelo del robot', status: 'done' },
  { date: 'Abr 2026', label: 'Cierre de tecnología, presupuesto y modelo financiero', status: 'done' },
  { date: 'May 2026', label: 'Cierre del modelo del robot', status: 'current' },
  { date: 'Ago 2026', label: 'Inicio de construcción', status: 'upcoming' },
  { date: 'Sep 2026', label: 'Cierre de construcción', status: 'upcoming' },
  { date: 'Oct 2026', label: 'Inicio de piloto', status: 'upcoming' },
]

const STATUS_CARDS = [
  { label: 'Modelo de negocio cerrado', done: true },
  { label: 'Modelo financiero cerrado', done: true },
  { label: 'Intención de compra', done: true },
  { label: 'Próximo hito: construcción', done: false },
]

export default function ProgressSection() {
  return (
    <section className="bg-[#080E14] py-28 md:py-36 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Etapa Actual</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-instrument text-[clamp(2.5rem,5.5vw,5rem)] text-white leading-[1.0] mb-6"
          >
            Etapa actual:
            <br />
            <em className="text-[#39FF14]">idea validada.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[rgba(255,255,255,0.5)] text-lg leading-relaxed"
          >
            TACHÍN se encuentra en etapa de idea validada, con modelo de negocio cerrado, diseño funcional del robot, modelo financiero cerrado e intención de compra. El siguiente hito es la construcción del prototipo funcional para validación piloto.
          </motion.p>
        </div>

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="liquid-glass rounded-2xl px-6 py-4 mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="flex-shrink-0">
            <div className="text-[rgba(255,255,255,0.4)] text-xs tracking-[0.2em] uppercase mb-1">Avance actual</div>
            <div className="font-instrument text-3xl text-[#39FF14]">60%</div>
          </div>
          <div className="flex-1 w-full">
            <div className="h-2 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #39FF14 0%, rgba(57,255,20,0.6) 100%)',
                  boxShadow: '0 0 12px rgba(57,255,20,0.4)',
                }}
              />
            </div>
          </div>
          <div className="text-[rgba(255,255,255,0.35)] text-xs whitespace-nowrap">Mayo 2026</div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="liquid-glass rounded-3xl p-6 md:p-8 mb-10 overflow-x-auto"
        >
          <div className="relative min-w-[600px]">
            {/* Connector line */}
            <div className="absolute top-5 left-5 right-5 h-px bg-[rgba(255,255,255,0.06)]" />
            <motion.div
              className="absolute top-5 left-5 h-px"
              style={{ background: 'linear-gradient(90deg, #39FF14, rgba(57,255,20,0.3))' }}
              initial={{ width: 0 }}
              whileInView={{ width: `${(5 / 8) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.5, ease: 'easeOut' }}
            />

            {/* Milestones */}
            <div className="flex justify-between relative">
              {MILESTONES.map((m, i) => (
                <div key={i} className="flex flex-col items-center gap-3 flex-1 px-1">
                  {/* Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                    className="relative z-10 flex-shrink-0"
                  >
                    {m.status === 'done' && (
                      <CheckCircle2 className="w-10 h-10 text-[#39FF14]" />
                    )}
                    {m.status === 'current' && (
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-[#39FF14] opacity-20 pulse-ring" />
                        <div className="w-10 h-10 rounded-full border-2 border-[#39FF14] bg-[rgba(57,255,20,0.1)] flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-[#39FF14]" />
                        </div>
                      </div>
                    )}
                    {m.status === 'upcoming' && (
                      <Circle className="w-10 h-10 text-[rgba(255,255,255,0.15)]" />
                    )}
                  </motion.div>

                  {/* Labels */}
                  <div className="text-center">
                    <div
                      className={`text-[10px] font-bold tracking-wide mb-1 ${
                        m.status === 'current' ? 'text-[#39FF14]' : m.status === 'done' ? 'text-[rgba(57,255,20,0.7)]' : 'text-[rgba(255,255,255,0.2)]'
                      }`}
                    >
                      {m.date}
                    </div>
                    <div
                      className={`text-[10px] leading-tight max-w-[80px] ${
                        m.status === 'current' ? 'text-white' : m.status === 'done' ? 'text-[rgba(255,255,255,0.55)]' : 'text-[rgba(255,255,255,0.2)]'
                      }`}
                    >
                      {m.label}
                    </div>
                    {m.status === 'current' && (
                      <div className="mt-1 text-[#39FF14] text-[9px] tracking-[0.15em] uppercase">← ahora</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Status cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {STATUS_CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.07 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="liquid-glass rounded-2xl p-5 cursor-default"
            >
              <div className="flex items-center gap-2 mb-3">
                {card.done ? (
                  <CheckCircle2 className="w-4 h-4 text-[#39FF14] flex-shrink-0" />
                ) : (
                  <Clock className="w-4 h-4 text-[rgba(255,255,255,0.3)] flex-shrink-0" />
                )}
                <div
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${card.done ? 'bg-[#39FF14]' : 'bg-[rgba(255,255,255,0.2)]'}`}
                />
              </div>
              <div
                className={`text-sm font-medium leading-snug ${card.done ? 'text-white' : 'text-[rgba(255,255,255,0.5)]'}`}
              >
                {card.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
