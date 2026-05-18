import { motion } from 'framer-motion'

const FOUNDERS = [
  {
    name: 'Christian Venegas',
    role: 'CEO',
    initials: 'CV',
    gradient: 'from-[#39FF14] to-[#22CC0E]',
  },
  {
    name: 'Nikol Borja',
    role: 'CFO',
    initials: 'NB',
    gradient: 'from-[#38E8FF] to-[#22AACC]',
  },
  {
    name: 'Gonzalo Huarcaya',
    role: 'CTO',
    initials: 'GH',
    gradient: 'from-[#39FF14] to-[#38E8FF]',
  },
]

export default function TeamSection() {
  return (
    <section id="equipo" className="bg-black py-28 md:py-36 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label justify-center">Equipo</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-instrument text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-[1.0]"
          >
            Equipo fundador
          </motion.h2>
        </div>

        {/* Founder cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {FOUNDERS.map((founder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="liquid-glass rounded-3xl p-8 flex flex-col items-center text-center cursor-default"
            >
              {/* Photo placeholder */}
              <div className="relative mb-6">
                <div
                  className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${founder.gradient} flex items-center justify-center flex-shrink-0`}
                  style={{ opacity: 0.15 }}
                />
                <div className={`absolute inset-0 w-28 h-28 rounded-2xl bg-gradient-to-br ${founder.gradient} opacity-10`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-instrument text-4xl text-white opacity-80">{founder.initials}</span>
                </div>
              </div>

              <div className="text-white text-lg font-semibold tracking-wide mb-1">{founder.name}</div>
              <div className="text-[rgba(255,255,255,0.4)] text-xs tracking-[0.25em] uppercase">{founder.role}</div>

              <div className="mt-5 w-8 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
