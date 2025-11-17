import { Shield, Radar, Package, Cpu } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Industrial-grade safety',
    desc: 'Multi-layer sensing, active fail-safes, and continuous health monitoring to meet stringent compliance.'
  },
  {
    icon: Radar,
    title: 'Perception that adapts',
    desc: 'Sensor fusion across LiDAR, depth, and vision to handle reflective, dark, and dynamic environments.'
  },
  {
    icon: Package,
    title: 'Modular payloads',
    desc: 'Swap tools for inspection, mapping, and material handling without re-writing mission logic.'
  },
  {
    icon: Cpu,
    title: 'Edge AI platform',
    desc: 'On-board inference with remote fleet orchestration, updates, and analytics.'
  }
]

export default function Features() {
  return (
    <section id="products" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Built for the real world</h2>
          <p className="mt-3 text-gray-600">Hardware, software, and AI working together so you can deploy with confidence.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition bg-white">
              <div className="h-10 w-10 rounded-lg bg-black text-white grid place-items-center mb-4">
                <f.icon size={18} />
              </div>
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
