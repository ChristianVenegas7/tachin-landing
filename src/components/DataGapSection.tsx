import { motion } from 'framer-motion'

const PHASES = [
  {
    id: '01',
    label: 'SE MEZCLA',
    desc: 'El PET se combina con residuos generales y pierde identidad material.',
    color: 'rgba(255,80,60,0.7)',
  },
  {
    id: '02',
    label: 'PIERDE TRAZABILIDAD',
    desc: 'Sin medición en origen, no existe registro de dónde, cuándo ni cuánto.',
    color: 'rgba(255,150,60,0.7)',
  },
  {
    id: '03',
    label: 'NO GENERA EVIDENCIA',
    desc: 'La acción ambiental ocurre pero nunca se convierte en dato corporativo.',
    color: 'rgba(255,200,60,0.5)',
  },
]

export default function DataGapSection() {
  return (
    <section className="bg-black py-28 md:py-36 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Data Gap</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: visual panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative"
          >
            <div className="liquid-glass rounded-3xl overflow-hidden aspect-[4/3] flex flex-col items-center justify-center relative">
              {/* Dark gradient background simulating waste imagery */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#080D10] to-[#040608]" />
              <div className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,80,40,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,140,40,0.10) 0%, transparent 50%)`,
                }}
              />

              {/* Abstract visual */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-4 p-8">
                <div className="w-16 h-16 rounded-full border border-[rgba(255,80,60,0.3)] flex items-center justify-center mb-2">
                  <div className="w-10 h-10 rounded-full border border-[rgba(255,80,60,0.5)] flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-[rgba(255,80,60,0.4)]" />
                  </div>
                </div>

                <div className="text-center">
                  <p className="font-instrument text-2xl text-[rgba(255,255,255,0.6)] italic mb-2">
                    "El plástico no desaparece."
                  </p>
                  <p className="text-[rgba(255,255,255,0.3)] text-sm tracking-wide">
                    Solo deja de ser visible.
                  </p>
                </div>

                {/* Scatter dots representing lost data */}
                <div className="flex gap-2 mt-4 flex-wrap justify-center max-w-[200px]">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: Math.random() * 0.6 + 0.1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.04 }}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor: `rgba(${Math.random() > 0.5 ? '255,80,60' : '255,160,60'},${Math.random() * 0.5 + 0.2})`,
                      }}
                    />
                  ))}
                </div>
                <p className="text-[rgba(255,255,255,0.2)] text-xs tracking-[0.2em] mt-2">
                  DATA ESG PERDIDA
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: timeline */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-instrument text-[clamp(2.2rem,4.5vw,4rem)] text-white leading-[1.05] mb-4"
            >
              Si no se mide,
              <br />
              <em className="text-[rgba(255,255,255,0.5)]">el impacto no existe.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-[rgba(255,255,255,0.45)] text-base leading-relaxed mb-10"
            >
              El nuevo desperdicio es la data ESG que se pierde.
            </motion.p>

            {/* Timeline */}
            <div className="relative pl-6">
              <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-[rgba(255,80,60,0.5)] via-[rgba(255,150,60,0.4)] to-[rgba(255,200,60,0.2)]" />

              {PHASES.map((phase, i) => (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                  className="relative mb-8 last:mb-0"
                >
                  <div
                    className="absolute -left-[1.375rem] top-2 w-2.5 h-2.5 rounded-full border border-current flex-shrink-0"
                    style={{ color: phase.color, backgroundColor: phase.color }}
                  />
                  <div className="text-[rgba(255,255,255,0.25)] text-[10px] tracking-[0.3em] mb-1">{phase.id}</div>
                  <div className="text-white text-sm font-bold tracking-[0.2em] mb-1">{phase.label}</div>
                  <div className="text-[rgba(255,255,255,0.4)] text-sm leading-relaxed">{phase.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Highlight card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="liquid-glass rounded-2xl p-6 mt-10 border-l-2 border-[rgba(255,80,60,0.4)]"
            >
              <div className="text-[rgba(255,255,255,0.3)] text-[10px] tracking-[0.3em] uppercase mb-2">Resultado</div>
              <div className="text-white font-bold text-lg tracking-wide mb-0.5">NUEVO DESPERDICIO</div>
              <div className="text-[rgba(255,255,255,0.55)] text-sm">
                La data ESG que no se captura no existe. No puede reportarse. No puede auditarse. No genera valor.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
