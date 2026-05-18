import { motion } from 'framer-motion'
import { Hand, GlassWater, ScanLine, Cog, Database, FileCheck } from 'lucide-react'

const STEPS = [
  { icon: Hand, num: '01', label: 'Acercar', desc: 'El usuario lleva la botella al punto TACHÍN.' },
  { icon: GlassWater, num: '02', label: 'Insertar', desc: 'Introduce la botella PET en la compuerta de ingreso.' },
  { icon: ScanLine, num: '03', label: 'Validar', desc: 'El sistema verifica el material y registra el evento.' },
  { icon: Cog, num: '04', label: 'Triturar', desc: 'El robot comprime y procesa el residuo en origen.' },
  { icon: Database, num: '05', label: 'Almacenar', desc: 'El dato queda registrado: peso, sede, fecha y usuario.' },
  { icon: FileCheck, num: '06', label: 'Reportar', desc: 'La información fluye al dashboard ESG en tiempo real.' },
]

export default function HowItWorksSection() {
  return (
    <section className="bg-black py-28 md:py-36 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16 md:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label">Cómo Funciona</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-instrument text-[clamp(2.5rem,5.5vw,5rem)] text-white leading-[1.0]"
            >
              Del depósito
              <br />
              <em className="text-[rgba(255,255,255,0.5)]">al dato.</em>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[rgba(255,255,255,0.45)] text-lg leading-relaxed lg:text-right"
          >
            Seis pasos. Trazabilidad completa. Evidencia verificable desde el primer depósito.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.05 + i * 0.07 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="liquid-glass rounded-2xl p-6 flex gap-5 cursor-default"
              >
                {/* Step number + icon column */}
                <div className="flex flex-col items-center gap-3 flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(57,255,20,0.06)] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#39FF14]" />
                  </div>
                  <div className="text-[rgba(255,255,255,0.15)] text-xs font-mono tracking-wider">{step.num}</div>
                </div>

                <div>
                  <div className="text-white text-sm font-bold tracking-[0.15em] uppercase mb-2">
                    {step.label}
                  </div>
                  <div className="text-[rgba(255,255,255,0.4)] text-sm leading-relaxed">{step.desc}</div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Output card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="liquid-glass rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8"
        >
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-[rgba(57,255,20,0.08)] flex items-center justify-center">
              <FileCheck className="w-7 h-7 text-[#39FF14]" />
            </div>
          </div>
          <div>
            <div className="text-[#39FF14] text-xs tracking-[0.3em] uppercase mb-3">Output</div>
            <div className="font-instrument text-2xl md:text-3xl text-white mb-3">
              Cada botella se convierte en{' '}
              <em className="text-[#39FF14]">trazabilidad y evidencia.</em>
            </div>
            <p className="text-[rgba(255,255,255,0.45)] text-sm leading-relaxed">
              No solo se recupera el material. Se registra quién, cuándo, dónde y cuánto — generando datos reales para reportes ESG corporativos, rankings por sede y evidencia para auditoría.
            </p>
          </div>
          <div className="md:ml-auto flex-shrink-0">
            <div className="flex flex-col gap-2 text-right">
              {['Peso registrado', 'Sede identificada', 'Usuario activo', 'Reporte generado'].map((tag, i) => (
                <div key={i} className="flex items-center justify-end gap-2">
                  <span className="text-[rgba(255,255,255,0.4)] text-xs">{tag}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] opacity-70" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
