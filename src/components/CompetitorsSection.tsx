import { motion } from 'framer-motion'

interface Competitor {
  name: string
  x: number
  y: number
  color: string
  size: number
  isMain?: boolean
  type: 'local' | 'international' | 'tachin'
}

const COMPETITORS: Competitor[] = [
  { name: 'TACHÍN', x: 88, y: 90, color: '#39FF14', size: 14, isMain: true, type: 'tachin' },
  { name: 'Bosch', x: 30, y: 84, color: '#F5C542', size: 9, type: 'international' },
  { name: 'Green AI', x: 40, y: 72, color: '#F5C542', size: 9, type: 'international' },
  { name: 'BioBox', x: 56, y: 40, color: '#FF6B4A', size: 9, type: 'local' },
  { name: 'Irbin', x: 44, y: 30, color: '#FF6B4A', size: 9, type: 'local' },
  { name: 'Recicladores\ntradicionales', x: 20, y: 14, color: '#FF6B4A', size: 8, type: 'local' },
]

const W = 600
const H = 420
const PAD = { top: 30, right: 100, bottom: 64, left: 80 }
const PW = W - PAD.left - PAD.right
const PH = H - PAD.top - PAD.bottom

function toSVGX(x: number) {
  return PAD.left + (x / 100) * PW
}
function toSVGY(y: number) {
  return PAD.top + (1 - y / 100) * PH
}

const GRID_LINES = [0, 25, 50, 75, 100]

export default function CompetitorsSection() {
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
              <span className="section-label">Competidores</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-instrument text-[clamp(2rem,4.5vw,4rem)] text-white leading-[1.05]"
            >
              TACHÍN lidera en adaptabilidad regional e innovación.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            {[
              { color: '#FF6B4A', label: 'Competidores locales' },
              { color: '#F5C542', label: 'Internacionales' },
              { color: '#39FF14', label: 'TACHÍN' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-[rgba(255,255,255,0.55)] text-sm">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* SVG Chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="liquid-glass rounded-3xl p-4 md:p-8 overflow-x-auto"
        >
          <svg
            viewBox={`0 0 ${W} ${H}`}
            width="100%"
            style={{ maxWidth: W, display: 'block', margin: '0 auto', minWidth: 320 }}
            aria-label="Gráfico de posicionamiento competitivo"
          >
            {/* Grid lines */}
            {GRID_LINES.map((v) => (
              <g key={v}>
                <line
                  x1={toSVGX(v)}
                  y1={PAD.top}
                  x2={toSVGX(v)}
                  y2={PAD.top + PH}
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                />
                <line
                  x1={PAD.left}
                  y1={toSVGY(v)}
                  x2={PAD.left + PW}
                  y2={toSVGY(v)}
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                />
              </g>
            ))}

            {/* Axes */}
            <line
              x1={PAD.left}
              y1={PAD.top + PH}
              x2={PAD.left + PW}
              y2={PAD.top + PH}
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1.5"
            />
            <line
              x1={PAD.left}
              y1={PAD.top}
              x2={PAD.left}
              y2={PAD.top + PH}
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1.5"
            />

            {/* Axis arrows */}
            <polygon
              points={`${PAD.left + PW + 6},${PAD.top + PH} ${PAD.left + PW - 4},${PAD.top + PH - 5} ${PAD.left + PW - 4},${PAD.top + PH + 5}`}
              fill="rgba(255,255,255,0.2)"
            />
            <polygon
              points={`${PAD.left},${PAD.top - 6} ${PAD.left - 5},${PAD.top + 4} ${PAD.left + 5},${PAD.top + 4}`}
              fill="rgba(255,255,255,0.2)"
            />

            {/* Axis labels */}
            <text
              x={PAD.left + PW / 2}
              y={H - 10}
              textAnchor="middle"
              fill="rgba(255,255,255,0.35)"
              fontSize="11"
              letterSpacing="2"
              fontFamily="sans-serif"
            >
              ADAPTABILIDAD REGIONAL →
            </text>
            <text
              x={18}
              y={PAD.top + PH / 2}
              textAnchor="middle"
              fill="rgba(255,255,255,0.35)"
              fontSize="11"
              letterSpacing="2"
              fontFamily="sans-serif"
              transform={`rotate(-90, 18, ${PAD.top + PH / 2})`}
            >
              INNOVACIÓN ↑
            </text>

            {/* TACHÍN highlight zone */}
            <ellipse
              cx={toSVGX(85)}
              cy={toSVGY(87)}
              rx={70}
              ry={60}
              fill="rgba(57,255,20,0.04)"
              stroke="rgba(57,255,20,0.08)"
              strokeWidth="1"
            />

            {/* Competitor dots */}
            {COMPETITORS.map((c) => {
              const cx = toSVGX(c.x)
              const cy = toSVGY(c.y)
              const nameLines = c.name.split('\n')

              return (
                <g key={c.name}>
                  {c.isMain && (
                    <circle
                      cx={cx}
                      cy={cy}
                      r={c.size + 10}
                      fill="none"
                      stroke={c.color}
                      strokeWidth="1"
                      opacity="0.2"
                    />
                  )}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={c.size}
                    fill={c.color}
                    opacity={c.isMain ? 1 : 0.75}
                  />
                  {nameLines.map((line, li) => (
                    <text
                      key={li}
                      x={cx + (c.isMain ? 0 : 14)}
                      y={c.isMain ? cy - c.size - 10 + li * 14 : cy + 4 + li * 13}
                      textAnchor={c.isMain ? 'middle' : 'start'}
                      fill={c.isMain ? c.color : 'rgba(255,255,255,0.6)'}
                      fontSize={c.isMain ? '12' : '10'}
                      fontWeight={c.isMain ? 'bold' : 'normal'}
                      fontFamily="sans-serif"
                      letterSpacing={c.isMain ? '1' : '0'}
                    >
                      {line}
                    </text>
                  ))}
                </g>
              )
            })}
          </svg>
        </motion.div>

        {/* Context note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            { title: 'Moat regional', desc: 'Diseñado para el contexto peruano: regulación, logística, cultura de reciclaje y cadena de valor local.' },
            { title: 'Innovación ESG nativa', desc: 'No adaptamos tecnología extranjera. Construimos infraestructura específica para datos ESG verificables en Latinoamérica.' },
            { title: 'Ventaja de primer movimiento', desc: 'Sin competidores directos con el stack completo — robot, data, dashboard y engagement — en la región.' },
          ].map((item, i) => (
            <div key={i} className="liquid-glass rounded-2xl p-5">
              <div className="text-[#39FF14] text-xs tracking-[0.2em] uppercase mb-2">{item.title}</div>
              <div className="text-[rgba(255,255,255,0.5)] text-sm leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
