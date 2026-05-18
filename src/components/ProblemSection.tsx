import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, EyeOff, FileX } from 'lucide-react'

const PROBLEMS = [
  { icon: EyeOff, text: 'El PET sale de la vista, pero no del planeta' },
  { icon: TrendingDown, text: 'Sin medición en origen, no hay evidencia ESG' },
  { icon: AlertTriangle, text: 'Los reportes de sostenibilidad se basan en estimaciones' },
  { icon: FileX, text: 'El valor ambiental se pierde sin trazabilidad' },
]

export default function ProblemSection() {
  return (
    <section id="problema" className="bg-[#05070A] py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: copy */}
          <div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}>
              <span className="section-label">El Problema</span>
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.1 }}
              className="font-instrument text-[clamp(2.2rem,5vw,4.5rem)] text-white leading-[1.02] mb-8">
              El plástico no desaparece.
              <br />
              <em className="text-[rgba(255,255,255,0.4)]">Solo sale de nuestra vista.</em>
            </motion.h2>

            <div className="space-y-3">
              {PROBLEMS.map((p, i) => {
                const Icon = p.icon
                return (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-4 liquid-glass rounded-2xl px-5 py-4">
                    <div className="w-8 h-8 rounded-xl bg-[rgba(255,80,60,0.08)] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[rgba(255,100,70,0.8)]" />
                    </div>
                    <span className="text-[rgba(255,255,255,0.7)] text-sm leading-snug">{p.text}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right: visual placeholder */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.9, delay: 0.15 }}>
            <div className="liquid-glass rounded-3xl overflow-hidden aspect-[4/3] relative">
              {/* Dark base */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0C] via-[#080D12] to-[#040608]" />
              {/* Glow */}
              <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255,80,40,0.3) 0%, transparent 60%)' }} />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 gap-6">
                <div className="text-center mb-2">
                  <div className="text-[rgba(255,255,255,0.15)] text-xs tracking-[0.3em] uppercase mb-4">Sin infraestructura ESG</div>
                  {/* Waste scatter animation */}
                  <div className="flex flex-wrap justify-center gap-2 max-w-[220px] mx-auto mb-6">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <motion.div key={i}
                        animate={{ opacity: [0.1, 0.6, 0.1] }}
                        transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                        className="w-2 h-2 rounded-sm"
                        style={{ backgroundColor: `rgba(255,${60 + Math.floor(Math.random() * 80)},40,0.6)` }} />
                    ))}
                  </div>
                  <div className="font-instrument text-2xl text-[rgba(255,255,255,0.4)] italic">
                    Data ESG no capturada
                  </div>
                </div>
                {/* Stats */}
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="font-instrument text-3xl text-[rgba(255,100,60,0.9)]">&lt;10%</div>
                    <div className="text-[rgba(255,255,255,0.35)] text-xs mt-1">plástico reciclado</div>
                  </div>
                  <div className="w-px bg-[rgba(255,255,255,0.06)]" />
                  <div className="text-center">
                    <div className="font-instrument text-3xl text-[rgba(255,150,60,0.9)]">8M+</div>
                    <div className="text-[rgba(255,255,255,0.35)] text-xs mt-1">ton al océano/año</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom callout */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 liquid-glass rounded-2xl px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-instrument text-lg text-white italic">
            "El nuevo desperdicio es la data ESG que se pierde."
          </p>
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14]" />
            <span className="text-[#39FF14] text-xs tracking-[0.2em] uppercase">TACHÍN lo resuelve</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
