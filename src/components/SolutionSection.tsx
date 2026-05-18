import { motion } from 'framer-motion'
import { Bot, BarChart3, LayoutDashboard, Users, Award, Zap } from 'lucide-react'

const CARDS = [
  { icon: Bot, title: 'Robot inteligente', desc: 'Recibe, valida y compacta PET en origen.', color: '#39FF14' },
  { icon: BarChart3, title: 'Data ESG', desc: 'Captura peso, sede y fecha de cada depósito.', color: '#38E8FF' },
  { icon: LayoutDashboard, title: 'Dashboard', desc: 'KPIs visuales, exportables y auditables.', color: '#39FF14' },
  { icon: Users, title: 'Engagement', desc: 'Puntos, rankings y beneficios para usuarios.', color: '#38E8FF' },
  { icon: Award, title: 'Reputación', desc: 'Sostenibilidad convertida en activo de marca.', color: '#39FF14' },
]

export default function SolutionSection() {
  return (
    <section id="solucion" className="bg-black py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-14">

          {/* Left: Robot visual placeholder */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.9, delay: 0.1 }}>
            <div className="liquid-glass rounded-3xl overflow-hidden aspect-[4/3] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#060A0E] via-[#080E14] to-[#040608]" />
              <div className="absolute inset-0 opacity-30"
                style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(57,255,20,0.15) 0%, transparent 65%)' }} />
              {/* Grid lines */}
              <div className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'linear-gradient(rgba(57,255,20,1) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />
              {/* Robot silhouette */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  {/* Head */}
                  <div className="w-16 h-12 rounded-xl border border-[rgba(57,255,20,0.4)] bg-[rgba(57,255,20,0.04)] flex items-center justify-center gap-2">
                    <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-[#39FF14]" />
                    <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                      className="w-2 h-2 rounded-full bg-[#39FF14]" />
                  </div>
                  {/* Body */}
                  <div className="w-24 h-20 rounded-2xl border border-[rgba(57,255,20,0.3)] bg-[rgba(57,255,20,0.03)] flex flex-col items-center justify-center gap-1.5 relative">
                    <Zap className="w-5 h-5 text-[rgba(57,255,20,0.6)]" />
                    <div className="flex gap-1">
                      {[0,1,2].map(i => (
                        <motion.div key={i} animate={{ scaleY: [0.4, 1, 0.4] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                          className="w-1 h-3 rounded-full bg-[rgba(57,255,20,0.5)]" />
                      ))}
                    </div>
                  </div>
                  {/* Base */}
                  <div className="w-28 h-6 rounded-xl border border-[rgba(57,255,20,0.2)] bg-[rgba(57,255,20,0.02)]" />
                </div>
              </div>
              {/* Label */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="liquid-glass rounded-full px-4 py-1.5 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
                  <span className="text-[#39FF14] text-[10px] tracking-[0.25em] uppercase">TACHÍN Unit — Activo</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: copy */}
          <div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}>
              <span className="section-label">La Solución</span>
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.1 }}
              className="font-instrument text-[clamp(2.2rem,5vw,4.5rem)] text-white leading-[1.02] mb-5">
              TACHÍN convierte
              <br />
              <em className="text-[#39FF14]">residuos en evidencia.</em>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[rgba(255,255,255,0.45)] text-base leading-relaxed mb-8">
              Infraestructura ESG operativa: captura residuos, genera data, activa participación y produce evidencia corporativa.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, delay: 0.25 }}
              className="inline-flex items-center gap-3 liquid-glass rounded-full px-5 py-3">
              <span className="text-[rgba(255,255,255,0.4)] text-xs">El residuo es el disparador</span>
              <span className="text-[rgba(255,255,255,0.2)]">·</span>
              <span className="text-[rgba(255,255,255,0.4)] text-xs">La data es el activo</span>
              <span className="text-[rgba(255,255,255,0.2)]">·</span>
              <span className="text-[#39FF14] text-xs font-semibold">La evidencia es el producto</span>
            </motion.div>
          </div>
        </div>

        {/* 5 capability cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {CARDS.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.05 + i * 0.07 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="liquid-glass rounded-2xl p-5 flex flex-col gap-3 cursor-default">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${card.color}10` }}>
                  <Icon className="w-4.5 h-4.5" style={{ color: card.color, width: 18, height: 18 }} />
                </div>
                <div>
                  <div className="text-white text-xs font-bold tracking-wide mb-1">{card.title}</div>
                  <div className="text-[rgba(255,255,255,0.4)] text-xs leading-relaxed">{card.desc}</div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
