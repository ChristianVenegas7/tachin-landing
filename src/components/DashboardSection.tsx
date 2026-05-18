import { motion } from 'framer-motion'
import { Recycle, Weight, Wind, Users, Building2, Calendar, Download, ShieldCheck } from 'lucide-react'

const KPIS = [
  { icon: Recycle, label: 'Botellas recicladas', value: '—', unit: 'unidades', color: '#39FF14' },
  { icon: Weight, label: 'Kg de PET recolectado', value: '—', unit: 'kilogramos', color: '#39FF14' },
  { icon: Wind, label: 'CO₂e evitado estimado', value: '—', unit: 'kg CO₂e', color: '#38E8FF' },
  { icon: Users, label: 'Participación de usuarios', value: '—', unit: 'activos', color: '#38E8FF' },
  { icon: Building2, label: 'Ranking por sede / área', value: '—', unit: 'posición', color: '#39FF14' },
  { icon: Calendar, label: 'Historial por fecha', value: '—', unit: 'períodos', color: '#38E8FF' },
  { icon: Download, label: 'Reporte exportable', value: 'PDF · CSV', unit: 'formatos', color: '#39FF14' },
  { icon: ShieldCheck, label: 'Evidencia para auditoría', value: 'Trazable', unit: 'verificable', color: '#38E8FF' },
]

export default function DashboardSection() {
  return (
    <section id="dashboard" className="bg-[#080E14] py-28 md:py-36 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Dashboard ESG</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-instrument text-[clamp(2.5rem,5.5vw,5rem)] text-white leading-[1.0] mb-6"
          >
            No estimamos intención.
            <br />
            <em className="text-[#39FF14]">Medimos operación.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[rgba(255,255,255,0.5)] text-lg leading-relaxed"
          >
            Cada botella depositada se convierte en una fuente directa de información ESG para la organización.
          </motion.p>
        </div>

        {/* Mock dashboard frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="liquid-glass rounded-3xl p-6 md:p-8 mb-8"
        >
          {/* Dashboard header bar */}
          <div className="flex items-center justify-between mb-8 pb-5 border-b border-[rgba(255,255,255,0.06)]">
            <div>
              <div className="text-white text-sm font-bold tracking-wide mb-1">Panel ESG — Resumen Ejecutivo</div>
              <div className="text-[rgba(255,255,255,0.35)] text-xs">Fuente primaria: medición directa del peso y evento de depósito.</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
              <span className="text-[#39FF14] text-xs tracking-[0.2em]">EN VIVO</span>
            </div>
          </div>

          {/* KPI grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {KPIS.map((kpi, i) => {
              const Icon = kpi.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.06 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-[rgba(255,255,255,0.02)] rounded-2xl p-4 border border-[rgba(255,255,255,0.04)] cursor-default"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Icon className="w-4 h-4" style={{ color: kpi.color }} />
                    <div
                      className="w-1.5 h-1.5 rounded-full opacity-60"
                      style={{ backgroundColor: kpi.color }}
                    />
                  </div>
                  <div className="text-white text-lg font-bold tracking-wide mb-1">{kpi.value}</div>
                  <div className="text-[rgba(255,255,255,0.3)] text-[10px] tracking-wide uppercase">{kpi.unit}</div>
                  <div className="text-[rgba(255,255,255,0.5)] text-xs mt-2 leading-tight">{kpi.label}</div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom bar */}
          <div className="mt-6 pt-5 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-[rgba(255,255,255,0.3)]" />
              <span className="text-[rgba(255,255,255,0.35)] text-xs">
                Datos verificados en origen · Exportable a PDF y CSV · Compatible con GRI, CDP y reportes internos
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 liquid-glass rounded-full px-5 py-2.5 text-xs text-white tracking-wide whitespace-nowrap flex-shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              Exportar reporte
            </motion.button>
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-[rgba(255,255,255,0.3)] text-sm"
        >
          Fuente primaria: medición directa del peso y evento de depósito. Sin estimaciones. Sin encuestas.
        </motion.p>
      </div>
    </section>
  )
}
