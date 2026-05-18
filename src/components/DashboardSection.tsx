import { motion } from 'framer-motion'
import { TrendingUp, Download, ShieldCheck } from 'lucide-react'

const BARS = [
  { label: 'Ene', h: 40 }, { label: 'Feb', h: 55 }, { label: 'Mar', h: 48 },
  { label: 'Abr', h: 70 }, { label: 'May', h: 90 }, { label: 'Jun', h: 78 },
]

const KPIS = [
  { label: 'Botellas recicladas', value: '—', unit: 'unidades', color: '#39FF14' },
  { label: 'Kg de PET', value: '—', unit: 'kilogramos', color: '#39FF14' },
  { label: 'CO₂e evitado', value: '—', unit: 'kg CO₂e', color: '#38E8FF' },
  { label: 'Usuarios activos', value: '—', unit: 'participantes', color: '#38E8FF' },
]

export default function DashboardSection() {
  return (
    <section id="dashboard" className="bg-black py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left: copy */}
          <div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}>
              <span className="section-label">Dashboard ESG</span>
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.1 }}
              className="font-instrument text-[clamp(2.2rem,5vw,4.5rem)] text-white leading-[1.02] mb-6">
              No estimamos
              <br />
              intención.
              <br />
              <em className="text-[#39FF14]">Medimos operación.</em>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[rgba(255,255,255,0.45)] text-base leading-relaxed mb-8">
              Cada botella depositada genera un dato ESG directo, verificable y exportable para reportes corporativos.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, delay: 0.25 }}
              className="space-y-2 mb-8">
              {['KPIs ambientales en tiempo real', 'Ranking por sede y área', 'Reporte exportable PDF / CSV', 'Compatible con GRI y CDP', 'Evidencia para auditoría'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] flex-shrink-0" />
                  <span className="text-[rgba(255,255,255,0.6)] text-sm">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-2 text-[rgba(255,255,255,0.3)] text-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              Fuente primaria: medición directa en origen. Sin estimaciones.
            </motion.div>
          </div>

          {/* Right: dashboard mock */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.9, delay: 0.15 }}>
            <div className="liquid-glass rounded-3xl overflow-hidden relative">

              {/* Dashboard header */}
              <div className="px-6 pt-6 pb-4 border-b border-[rgba(255,255,255,0.05)]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white text-sm font-semibold tracking-wide">Panel ESG — Resumen</div>
                    <div className="text-[rgba(255,255,255,0.3)] text-xs mt-0.5">Fuente: depósitos verificados</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-[#39FF14]" />
                    <span className="text-[#39FF14] text-xs tracking-[0.2em]">LIVE</span>
                  </div>
                </div>
              </div>

              {/* KPI strip */}
              <div className="grid grid-cols-2 gap-2 px-6 pt-5 pb-4">
                {KPIS.map((kpi, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                    className="bg-[rgba(255,255,255,0.02)] rounded-xl p-3 border border-[rgba(255,255,255,0.04)]">
                    <div className="text-white text-xl font-bold mb-0.5">{kpi.value}</div>
                    <div className="text-[rgba(255,255,255,0.3)] text-[10px]">{kpi.unit}</div>
                    <div className="text-[rgba(255,255,255,0.5)] text-xs mt-1">{kpi.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="px-6 pb-4">
                <div className="text-[rgba(255,255,255,0.3)] text-[10px] tracking-[0.2em] uppercase mb-3">
                  Depósitos por mes
                </div>
                <div className="flex items-end gap-2 h-24">
                  {BARS.map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${bar.h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.5 + i * 0.08, ease: 'easeOut' }}
                        className="w-full rounded-t-md"
                        style={{
                          background: `linear-gradient(to top, rgba(57,255,20,0.5), rgba(57,255,20,0.2))`,
                          height: `${bar.h}%`
                        }} />
                      <span className="text-[rgba(255,255,255,0.25)] text-[9px]">{bar.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom bar */}
              <div className="px-6 pb-5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#39FF14]" />
                  <span className="text-[rgba(255,255,255,0.35)] text-xs">Tendencia positiva</span>
                </div>
                <div className="flex items-center gap-1.5 liquid-glass rounded-full px-3 py-1.5">
                  <Download className="w-3 h-3 text-[rgba(255,255,255,0.5)]" />
                  <span className="text-[rgba(255,255,255,0.5)] text-xs">Exportar</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
