import { motion } from 'framer-motion'

const ADVISORS = [
  {
    name: 'Nikolai Vinces',
    role: 'Director de Ingeniería Mecatrónica',
    org: 'Universidad de Lima',
    initials: 'NV',
  },
  {
    name: 'Javier Barreda',
    role: 'Experto ESG',
    org: 'Young Leader of the Americas Initiative',
    initials: 'JB',
  },
]

export default function AdvisorsSection() {
  return (
    <section className="bg-[#05070A] py-28 md:py-36 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label justify-center">Red de Apoyo</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-instrument text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-[1.0]"
          >
            Asesores estratégicos
          </motion.h2>
        </div>

        {/* Advisor cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {ADVISORS.map((advisor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="liquid-glass rounded-3xl p-8 flex items-start gap-6 cursor-default"
            >
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-[rgba(57,255,20,0.06)] border border-[rgba(57,255,20,0.12)] flex items-center justify-center">
                  <span className="font-instrument text-2xl text-[rgba(57,255,20,0.6)]">{advisor.initials}</span>
                </div>
              </div>

              <div>
                <div className="text-white text-base font-semibold tracking-wide mb-1">{advisor.name}</div>
                <div className="text-[rgba(255,255,255,0.5)] text-sm leading-snug mb-2">{advisor.role}</div>
                <div className="text-[#39FF14] text-xs tracking-[0.15em] opacity-70">{advisor.org}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
