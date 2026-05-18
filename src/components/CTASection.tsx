import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { useState } from 'react'

export default function CTASection() {
  const [email, setEmail] = useState('')

  return (
    <section id="contacto" className="bg-black relative overflow-hidden py-32 md:py-48 px-4 md:px-8">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080E14] via-black to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[#39FF14] opacity-[0.04] blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#38E8FF] opacity-[0.03] blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
          <span className="text-[#39FF14] text-xs tracking-[0.35em] uppercase">El ESG no se declara. Se opera.</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-instrument text-[clamp(2.8rem,7vw,7rem)] text-white leading-[1.0] mb-6"
        >
          No solo somos
          <br />
          <em className="text-[rgba(255,255,255,0.6)]">un robot.</em>
          <br />
          Somos{' '}
          <em className="text-[#39FF14]">infraestructura ESG.</em>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[rgba(255,255,255,0.5)] text-xl leading-relaxed max-w-2xl mx-auto mb-14"
        >
          TACHÍN convierte residuos en datos, datos en evidencia y evidencia en valor corporativo.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="bg-[#39FF14] text-black rounded-full px-8 py-4 text-base font-bold tracking-wide flex items-center gap-3 w-full sm:w-auto justify-center"
            style={{ boxShadow: '0 0 40px rgba(57,255,20,0.25)' }}
          >
            Solicitar demo <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="liquid-glass rounded-full px-8 py-4 text-base text-white tracking-wide flex items-center gap-3 w-full sm:w-auto justify-center"
          >
            Contactar al equipo
          </motion.button>
        </motion.div>

        {/* Email form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-stretch max-w-md mx-auto mb-16"
        >
          <div className="liquid-glass rounded-full flex-1 flex items-center px-5 py-3.5">
            <Mail className="w-4 h-4 text-[rgba(255,255,255,0.3)] mr-3 flex-shrink-0" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@empresa.com"
              className="bg-transparent text-white placeholder-[rgba(255,255,255,0.3)] text-sm outline-none w-full"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="bg-[rgba(57,255,20,0.1)] border border-[rgba(57,255,20,0.25)] text-[#39FF14] rounded-full px-6 py-3.5 text-sm font-bold tracking-wide whitespace-nowrap"
          >
            Enviar
          </motion.button>
        </motion.div>

        {/* Email contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-2"
        >
          <Mail className="w-3.5 h-3.5 text-[rgba(255,255,255,0.3)]" />
          <a
            href="mailto:contacto@tachin.pe"
            className="text-[rgba(255,255,255,0.35)] text-sm hover:text-white transition-colors tracking-wide"
          >
            contacto@tachin.pe
          </a>
        </motion.div>

        {/* Footer strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14]" />
            <span className="text-white font-bold text-sm tracking-[0.25em]">TACHÍN</span>
            <span className="text-[rgba(255,255,255,0.3)] text-xs tracking-[0.15em]">Infraestructura ESG Operativa</span>
          </div>
          <div className="text-[rgba(255,255,255,0.2)] text-xs tracking-wide">
            Lima, Perú · {new Date().getFullYear()}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
