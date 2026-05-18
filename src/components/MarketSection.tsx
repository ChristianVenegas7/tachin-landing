import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const DISTRICTS = [
  { name: 'San Isidro', col: 2, row: 1, highlight: true },
  { name: 'Miraflores', col: 3, row: 2, highlight: true },
  { name: 'San Borja', col: 3, row: 3, highlight: true },
  { name: 'Jesús María', col: 1, row: 2, highlight: true },
  { name: 'Surco', col: 2, row: 4, highlight: true, key: true },
  { name: 'La Molina', col: 4, row: 4, highlight: true },
  { name: 'Barranco', col: 2, row: 3, highlight: false },
  { name: 'Lince', col: 1, row: 1, highlight: false },
  { name: 'Pueblo Libre', col: 1, row: 3, highlight: false },
  { name: 'San Miguel', col: 0, row: 2, highlight: false },
  { name: 'Surquillo', col: 2, row: 2, highlight: false },
  { name: 'Ate', col: 4, row: 3, highlight: false },
]

const B2B_TAGS = ['Universidades', 'Corporativos', 'Malls', 'Coworkings', 'Sponsors ESG']
const B2C_TAGS = ['Estudiantes', 'Colaboradores', 'Participación', 'Puntos', 'Beneficios', 'Cultura']

export default function MarketSection() {
  return (
    <section id="mercado" className="bg-[#05070A] py-28 md:py-36 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Mercado</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-instrument text-[clamp(2.2rem,4.8vw,4.5rem)] text-white leading-[1.0] mb-6"
          >
            El primer mercado
            <br />
            está en{' '}
            <em className="text-[#39FF14]">Lima corporativa.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[rgba(255,255,255,0.5)] text-lg leading-relaxed"
          >
            Empezamos por distritos con alta concentración de universidades, corporativos, malls y espacios con potencial de adopción temprana.
          </motion.p>
        </div>

        {/* Map + info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Stylized district map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-3 liquid-glass rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-4 h-4 text-[#39FF14]" />
              <span className="text-[rgba(255,255,255,0.5)] text-xs tracking-[0.2em] uppercase">Lima Metropolitana — Corredor objetivo</span>
            </div>

            {/* Grid map */}
            <div
              className="grid gap-2"
              style={{ gridTemplateColumns: 'repeat(5, 1fr)', gridTemplateRows: 'repeat(5, auto)' }}
            >
              {DISTRICTS.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  style={{
                    gridColumn: d.col + 1,
                    gridRow: d.row + 1,
                  }}
                  className={`rounded-xl px-2 py-2.5 text-center text-[10px] font-medium tracking-wide transition-all duration-300 ${
                    d.key
                      ? 'bg-[rgba(57,255,20,0.15)] border border-[rgba(57,255,20,0.4)] text-[#39FF14]'
                      : d.highlight
                      ? 'bg-[rgba(57,255,20,0.06)] border border-[rgba(57,255,20,0.2)] text-[rgba(57,255,20,0.8)]'
                      : 'bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] text-[rgba(255,255,255,0.3)]'
                  }`}
                >
                  {d.key && <div className="text-[#39FF14] text-[8px] mb-0.5">★</div>}
                  {d.name}
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[rgba(255,255,255,0.05)]">
              <p className="text-[rgba(255,255,255,0.4)] text-xs leading-relaxed">
                <span className="text-[#39FF14]">Surco</span> funciona como distrito bisagra del mercado objetivo: conecta y articula el corredor entre Miraflores, San Borja y La Molina.
              </p>
            </div>
          </motion.div>

          {/* Right info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {[
              { label: 'Universidades objetivo', value: '12+', desc: 'Instituciones de alto tránsito en el corredor sur de Lima' },
              { label: 'Corporativos target', value: '80+', desc: 'Empresas con agenda ESG activa en San Isidro y Miraflores' },
              { label: 'Malls y centros', value: '8+', desc: 'Centros comerciales con flujo diario superior a 10k personas' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="liquid-glass rounded-2xl p-6 flex-1 cursor-default"
              >
                <div className="font-instrument text-4xl text-[#39FF14] mb-1">{stat.value}</div>
                <div className="text-white text-sm font-semibold mb-2">{stat.label}</div>
                <div className="text-[rgba(255,255,255,0.4)] text-xs leading-relaxed">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Strategy bands */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* B2B */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="liquid-glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14]" />
              <span className="text-[rgba(255,255,255,0.5)] text-xs tracking-[0.25em] uppercase">Estrategia B2B</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {B2B_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="text-xs border border-[rgba(57,255,20,0.25)] text-[rgba(57,255,20,0.8)] rounded-full px-3 py-1.5 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* B2C */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="liquid-glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#38E8FF]" />
              <span className="text-[rgba(255,255,255,0.5)] text-xs tracking-[0.25em] uppercase">Estrategia B2C</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {B2C_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="text-xs border border-[rgba(56,232,255,0.25)] text-[rgba(56,232,255,0.8)] rounded-full px-3 py-1.5 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
