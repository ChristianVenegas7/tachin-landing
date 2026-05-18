import { useState } from 'react'
import { motion } from 'framer-motion'
import { CircuitBoard, ArrowRight, ChevronDown } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Problema', href: '#problema' },
  { label: 'Solución', href: '#solucion' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Mercado', href: '#mercado' },
  { label: 'Equipo', href: '#equipo' },
]

const METRICS = [
  { label: 'PET recuperado en origen', value: 'Fuente primaria', sup: '100%' },
  { label: 'Data ESG trazable', value: 'Verificable', sup: '↑' },
  { label: 'Modelo B2B recurrente', value: 'SaaS + Hardware', sup: '◇' },
]

export default function HeroSection() {
  const [email, setEmail] = useState('')

  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex flex-col">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-[#39FF14] opacity-[0.025] blur-[140px]" />
        <div className="absolute bottom-[-5%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#38E8FF] opacity-[0.025] blur-[120px]" />
        <div className="absolute top-[30%] right-[30%] w-[300px] h-[300px] rounded-full bg-white opacity-[0.012] blur-[80px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Navbar */}
      <nav className="relative z-10 pt-5 px-4 md:px-8">
        <div className="liquid-glass rounded-full max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#39FF14] bg-opacity-10 flex items-center justify-center flex-shrink-0">
              <CircuitBoard className="w-4 h-4 text-[#39FF14]" />
            </div>
            <div className="leading-none">
              <span className="text-white font-bold text-sm tracking-[0.25em] block">TACHÍN</span>
              <span className="text-[rgba(255,255,255,0.35)] text-[10px] tracking-[0.15em] block mt-0.5">ESG Infrastructure</span>
            </div>
          </div>

          {/* Nav links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[rgba(255,255,255,0.5)] hover:text-white text-sm transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-2">
            <motion.a
              href="#pitch"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden md:flex liquid-glass rounded-full px-4 py-2 text-xs text-[rgba(255,255,255,0.7)] tracking-wide items-center gap-1.5"
            >
              Ver pitch
            </motion.a>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="bg-[#39FF14] text-black rounded-full px-5 py-2 text-xs font-bold tracking-wide"
            >
              Solicitar demo
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-8 pt-12 pb-4">
        <div className="text-center max-w-5xl mx-auto w-full">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
            <span className="text-[#39FF14] text-xs tracking-[0.35em] uppercase">Infraestructura ESG Operativa</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-instrument text-[clamp(3rem,9vw,7rem)] leading-[1.0] text-white mb-7"
          >
            No solo reciclamos.
            <br />
            <em className="text-[rgba(255,255,255,0.7)]">Hacemos visible</em>
            <br />
            <em className="text-[#39FF14]">el impacto.</em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[rgba(255,255,255,0.5)] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            TACHÍN convierte botellas PET en datos, participación y evidencia ESG verificable para universidades, corporativos y espacios de alto tránsito.
          </motion.p>

          {/* Email form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-stretch max-w-md mx-auto mb-16"
          >
            <div className="liquid-glass rounded-full flex-1 flex items-center px-5 py-3.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu correo corporativo"
                className="bg-transparent text-white placeholder-[rgba(255,255,255,0.3)] text-sm outline-none w-full"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="bg-[#39FF14] text-black rounded-full px-6 py-3.5 text-sm font-bold tracking-wide flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Solicitar demo <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Metric cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {METRICS.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="liquid-glass rounded-2xl p-5 text-left cursor-default"
              >
                <div className="text-[#39FF14] text-xl font-bold mb-2">{m.sup}</div>
                <div className="text-white text-sm font-semibold tracking-wide mb-1">{m.value}</div>
                <div className="text-[rgba(255,255,255,0.4)] text-xs tracking-wide leading-relaxed">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8 mt-4">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.15)]" />
          <ChevronDown className="w-4 h-4 text-[rgba(255,255,255,0.2)]" />
        </motion.div>
      </div>
    </section>
  )
}
