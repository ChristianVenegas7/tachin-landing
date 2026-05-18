import { motion } from 'framer-motion'

const PROBLEMS = [
  'Se mezcla con otros residuos',
  'Pierde trazabilidad en el proceso',
  'No se mide en origen',
  'No genera evidencia de recuperación',
  'No activa participación sostenida',
  'No vuelve eficientemente a la economía circular',
]

export default function ProblemSection() {
  return (
    <section id="problema" className="bg-[#05070A] py-28 md:py-36 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">El Problema</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="font-instrument text-[clamp(2.5rem,5.5vw,5rem)] text-white leading-[1.0] mb-8">
              El plástico no
              <br />
              desaparece.
              <br />
              <em className="text-[rgba(255,255,255,0.45)]">Solo sale de</em>
              <br />
              <em className="text-[rgba(255,255,255,0.45)]">nuestra vista.</em>
            </h2>

            <p className="text-[rgba(255,255,255,0.55)] text-lg leading-relaxed mb-5">
              El verdadero problema no es solo cuánto plástico generamos, sino que el sistema no logra recuperarlo, medirlo ni devolverlo al ciclo productivo.
            </p>

            <p className="text-[rgba(255,255,255,0.35)] text-base leading-relaxed">
              Cada día, miles de botellas PET son consumidas en universidades, oficinas, centros comerciales y espacios públicos de Lima. Muchas duran minutos en nuestras manos, pero pueden permanecer décadas fuera del sistema productivo.
            </p>

            {/* Stat strip */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="liquid-glass rounded-2xl p-5">
                <div className="font-instrument text-4xl text-[#39FF14] mb-1">8M+</div>
                <div className="text-[rgba(255,255,255,0.45)] text-xs tracking-wide">toneladas de plástico al océano cada año</div>
              </div>
              <div className="liquid-glass rounded-2xl p-5">
                <div className="font-instrument text-4xl text-[rgba(255,100,60,0.9)] mb-1">&lt;10%</div>
                <div className="text-[rgba(255,255,255,0.45)] text-xs tracking-wide">del plástico global se recicla efectivamente</div>
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="liquid-glass rounded-3xl p-8"
            >
              <p className="text-[rgba(255,255,255,0.35)] text-xs tracking-[0.25em] uppercase mb-7">
                Sin infraestructura, el PET...
              </p>
              <ul className="space-y-4">
                {PROBLEMS.map((problem, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}
                    className="flex items-start gap-3.5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[rgba(255,80,60,0.8)] mt-[0.45rem] flex-shrink-0" />
                    <span className="text-[rgba(255,255,255,0.7)] text-base leading-relaxed">
                      {problem};
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-8 pt-8 border-t border-[rgba(255,255,255,0.05)]"
            >
              <p className="text-[rgba(255,255,255,0.55)] text-base leading-relaxed mb-2">
                El verdadero desperdicio no es solo el plástico.
              </p>
              <p className="font-instrument text-xl text-white leading-relaxed italic">
                Es todo el valor ambiental, social y económico que se pierde cuando no existe un sistema para recuperarlo.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
