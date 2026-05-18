import { useState } from 'react'
import { motion } from 'framer-motion'
import { CircuitBoard, ArrowRight, ChevronDown } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Problema', href: '#problema' },
  { label: 'Solución', href: '#solucion' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Tarifas', href: '#tarifas' },
]

export default function HeroSection() {
  const [email, setEmail] = useState('')

  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[15%] w-[800px] h-[700px] rounded-full bg-[#39FF14] opacity-[0.03] blur-[160px]" />
        <div className="absolute bottom-0 right-[5%] w-[500px] h-[500px] rounded-full bg-[#38E8FF] opacity-[0.025] blur-[120px]" />
      </div>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Navbar */}
      <nav className="relative z-10 pt-5 px-4 md:px-8">
        <div className="liquid-glass rounded-full max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[rgba(57,255,20,0.08)] flex items-center justify-center flex-shrink-0">
              <CircuitBoard className="w-4 h-4 text-[#39FF14]" />
            </div>
            <div className="leading-none">
              <span className="text-white font-bold text-sm tracking-[0.25em] block">TACHÍN</span>
              <span className="text-[rgba(255,255,255,0.35)] text-[10px] tracking-[0.15em] block mt-0.5">ESG Infrastructure</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href}
                className="text-[rgba(255,255,255,0.5)] hover:text-white text-sm transition-colors tracking-wide">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <motion.a href="#tarifas" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              className="hidden md:flex liquid-glass rounded-full px-4 py-2 text-xs text-[rgba(255,255,255,0.7)] tracking-wide items-center">
              Ver planes
            </motion.a>
            <motion.a href="#contacto" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              className="bg-[#39FF14] text-black rounded-full px-5 py-2 text-xs font-bold tracking-wide">
              Solicitar demo
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-8 pt-8 pb-4">
        <div className="text-center max-w-5xl mx-auto w-full">

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
            <span className="text-[#39FF14] text-xs tracking-[0.35em] uppercase">Infraestructura ESG Operativa · Lima, Perú</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-instrument text-[clamp(3rem,9vw,7.5rem)] leading-[0.97] text-white mb-7">
            No solo reciclamos.
            <br />
            <em className="text-[rgba(255,255,255,0.5)]">Hacemos visible</em>
            <br />
            <em className="text-[#39FF14]">el impacto.</em>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[rgba(255,255,255,0.5)] text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Residuos PET → Data ESG verificable para corporativos, universidades y espacios de alto tránsito.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-stretch max-w-md mx-auto mb-14">
            <div className="liquid-glass rounded-full flex-1 flex items-center px-5 py-3.5">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="correo@empresa.com"
                className="bg-transparent text-white placeholder-[rgba(255,255,255,0.3)] text-sm outline-none w-full" />
            </div>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              className="bg-[#39FF14] text-black rounded-full px-6 py-3.5 text-sm font-bold tracking-wide flex items-center justify-center gap-2 whitespace-nowrap">
              Solicitar demo <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* 3 metric pills */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3">
            {[
              { val: 'PET en origen', tag: 'Captura directa' },
              { val: 'Data ESG trazable', tag: '100% verificable' },
              { val: 'Modelo B2B', tag: 'SaaS + Hardware' },
            ].map((m, i) => (
              <div key={i} className="liquid-glass rounded-full px-5 py-2.5 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14]" />
                <span className="text-white text-xs font-semibold tracking-wide">{m.val}</span>
                <span className="text-[rgba(255,255,255,0.35)] text-xs">{m.tag}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-8 mt-2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.12)]" />
          <ChevronDown className="w-4 h-4 text-[rgba(255,255,255,0.18)]" />
        </motion.div>
      </div>
    </section>
  )
}
