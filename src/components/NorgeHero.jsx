import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function NorgeHero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/70 via-white/40 to-white/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 grid lg:grid-cols-12 items-center gap-10">
        <div className="lg:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            VÅR KOSTNAD, DIN LØNNSOMHET
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-6 text-lg text-gray-800 max-w-2xl"
          >
            Vi tar risikoen fra starten av og du som kunde betaler ikke før systemet er lønnsomt.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-2 text-base text-gray-700"
          >
            Garanterer responstid på 24 t.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.15 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-yellow-400 text-gray-900 px-6 py-3 font-medium hover:bg-yellow-300 transition">
              Ta kontakt
            </a>
          </motion.div>
        </div>
        <div className="lg:col-span-5" />
      </div>
    </section>
  )
}
