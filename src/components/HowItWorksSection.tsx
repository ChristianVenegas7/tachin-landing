import { motion } from 'framer-motion'
import { Hand, GlassWater, ScanLine, Cog, Database, FileCheck } from 'lucide-react'

const STEPS = [
  { icon: Hand, num: '01', label: 'Acercar', desc: 'Usuario lleva la botella al punto TACHÍN.' },
  { icon: GlassWater, num: '02', label: 'Insertar', desc: 'Introduce el PET en la compuerta.' },
  { icon: ScanLine, num: '03', label: 'Validar', desc: 'Sistema verifica material y registra evento.' },
  { icon: Cog, num: '04', label: 'Procesar', desc: 'Robot compacta el residuo en origen.' },
  { icon: Database, num: '05', label: 'Almacenar', desc: 'Peso, sede y fecha quedan en el sistema.' },
  { icon: FileCheck, num: '06', label: 'Reportar', desc: 'Data fluye al dashboard ESG en tiempo real.' },
]

export default function HowItWorksSection() {
  return (
    <section className="bg-[#05070A] py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-xl mb-14">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}>
            <span className="section-label">Cómo Funciona</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-instrument text-[clamp(2.2rem,5vw,4.5rem)] text-white leading-[1.02]">
            Del depósito
            <br />
            <em className="text-[rgba(255,255,255,0.4)]">al dato.</em>
          </motion.h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.05 + i * 0.07 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="liquid-glass rounded-2xl p-5 flex flex-col gap-3 cursor-default">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-[rgba(57,255,20,0.06)] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#39FF14]" />
                  </div>
                  <span className="text-[rgba(255,255,255,0.15)] text-[10px] font-mono">{step.num}</span>
                </div>
                <div>
                  <div className="text-white text-xs font-bold tracking-[0.12em] uppercase mb-1.5">{step.label}</div>
                  <div className="text-[rgba(255,255,255,0.4)] text-xs leading-relaxed">{step.desc}</div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Flow visual + output */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Process flow visual */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay: 0.3 }}
            className="liquid-glass rounded-3xl p-6 overflow-hidden relative aspect-[16/7]">
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
                backgroundSize: '32px 32px'
              }} />
            <div className="relative z-10 h-full flex items-center justify-between px-4">
              {STEPS.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={i} className="flex items-center">
                    <div className="flex flex-col items-center gap-2">
                      <motion.div animate={{ boxShadow: ['0 0 0px rgba(57,255,20,0)', '0 0 10px rgba(57,255,20,0.4)', '0 0 0px rgba(57,255,20,0)'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.35 }}
                        className="w-10 h-10 rounded-xl bg-[rgba(57,255,20,0.06)] border border-[rgba(57,255,20,0.15)] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[rgba(57,255,20,0.7)]" />
                      </motion.div>
                      <span className="text-[rgba(255,255,255,0.3)] text-[9px] tracking-wide hidden md:block">{step.label}</span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="w-4 md:w-6 mx-1 h-px bg-gradient-to-r from-[rgba(57,255,20,0.3)] to-[rgba(57,255,20,0.1)]" />
                    )}
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Output card */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay: 0.4 }}
            className="liquid-glass rounded-3xl p-7 flex flex-col justify-between">
            <div>
              <div className="text-[#39FF14] text-[10px] tracking-[0.3em] uppercase mb-3">Output</div>
              <div className="font-instrument text-2xl text-white mb-3">
                Cada botella se convierte en
                <em className="text-[#39FF14]"> trazabilidad y evidencia.</em>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Peso registrado', 'Sede identificada', 'Usuario activo', 'Reporte generado'].map(tag => (
                <div key={tag} className="flex items-center gap-1.5 bg-[rgba(57,255,20,0.05)] border border-[rgba(57,255,20,0.12)] rounded-full px-3 py-1.5">
                  <div className="w-1 h-1 rounded-full bg-[#39FF14]" />
                  <span className="text-[rgba(255,255,255,0.6)] text-xs">{tag}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
