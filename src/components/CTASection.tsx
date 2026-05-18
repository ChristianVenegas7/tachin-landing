import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { useState } from 'react'

export default function CTASection() {
  const [email, setEmail] = useState('')

  return (
    <section id="contacto" className="bg-black relative overflow-hidden py-32 md:py-44 px-4 md:px-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#39FF14] opacity-[0.04] blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#38E8FF] opacity-[0.025] blur-[100px]" />
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-2 mb-10">
          <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
          <span className="text-[#39FF14] text-xs tracking-[0.35em] uppercase">El ESG no se declara. Se opera.</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.9, delay: 0.1 }}
          className="font-instrument text-[clamp(2.8rem,7vw,6.5rem)] text-white leading-[0.97] mb-6">
          No solo somos
          <br />
          <em className="text-[rgba(255,255,255,0.45)]">un robot.</em>
          <br />
          Somos{' '}
          <em className="text-[#39FF14]">infraestructura ESG.</em>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[rgba(255,255,255,0.45)] text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Residuos → datos → evidencia → valor corporativo.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, delay: 0.28 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            className="bg-[#39FF14] text-black rounded-full px-8 py-4 text-sm font-bold tracking-wide flex items-center justify-center gap-2"
            style={{ boxShadow: '0 0 40px rgba(57,255,20,0.2)' }}>
            Solicitar demo <ArrowRight className="w-4 h-4" />
          </motion.button>
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            className="liquid-glass rounded-full px-8 py-4 text-sm text-white tracking-wide">
            Contactar al equipo
          </motion.button>
        </motion.div>

        {/* Email form */}
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6, delay: 0.36 }}
          className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto mb-10">
          <div className="liquid-glass rounded-full flex-1 flex items-center px-4 py-3">
            <Mail className="w-3.5 h-3.5 text-[rgba(255,255,255,0.25)] mr-2.5 flex-shrink-0" />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="correo@empresa.com"
              className="bg-transparent text-white placeholder-[rgba(255,255,255,0.25)] text-sm outline-none w-full" />
          </div>
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            className="bg-[rgba(57,255,20,0.1)] border border-[rgba(57,255,20,0.2)] text-[#39FF14] rounded-full px-5 py-3 text-sm font-bold tracking-wide whitespace-nowrap">
            Enviar
          </motion.button>
        </motion.div>

        <motion.a href="mailto:contacto@tachin.pe" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.44 }}
          className="text-[rgba(255,255,255,0.3)] text-sm hover:text-white transition-colors">
          contacto@tachin.pe
        </motion.a>

        {/* Footer */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 pt-7 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#39FF14]" />
            <span className="text-white font-bold text-xs tracking-[0.25em]">TACHÍN</span>
            <span className="text-[rgba(255,255,255,0.25)] text-xs">· Infraestructura ESG Operativa</span>
          </div>
          <span className="text-[rgba(255,255,255,0.18)] text-xs">Lima, Perú · {new Date().getFullYear()}</span>
        </motion.div>
      </div>
    </section>
  )
}
