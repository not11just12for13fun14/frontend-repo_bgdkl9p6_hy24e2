import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-gray-100">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/60 via-white/30 to-white/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 grid lg:grid-cols-12 items-center gap-10">
        <div className="lg:col-span-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-[800] tracking-tight text-gray-900"
          >
            Autonomous robotics for a safer, smarter world
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-lg text-gray-700 max-w-xl"
          >
            We design and deploy intelligent robots that navigate complex environments with precision. Explore our platform for inspection, logistics, and industrial automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#products" className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-black px-5 py-3 text-white hover:bg-gray-900 transition">
              Explore Solutions
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-900 hover:bg-gray-50 transition">
              Talk to us
            </a>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 max-w-md text-center">
            <div>
              <p className="text-3xl font-bold">10x</p>
              <p className="text-xs text-gray-600">Faster inspections</p>
            </div>
            <div>
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-xs text-gray-600">Autonomous ops</p>
            </div>
            <div>
              <p className="text-3xl font-bold">99.9%</p>
              <p className="text-xs text-gray-600">Uptime</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6" />
      </div>
    </section>
  )
}
