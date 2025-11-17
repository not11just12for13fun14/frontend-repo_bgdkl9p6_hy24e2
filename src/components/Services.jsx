import { Wrench, Cog, Camera } from 'lucide-react'

const items = [
  {
    icon: Wrench,
    title: 'Robotløsninger',
    desc: 'Løftekapasitet fra 4 til 250 kg, rekkevidde fra 0,1 til 3 meter.',
  },
  {
    icon: Cog,
    title: 'Maskinbygging',
    desc: 'Vi designer og bygger maskiner rundt PLS med tilhørende sensorikk, pneumatikk og aktuatorer.',
  },
  {
    icon: Camera,
    title: 'Kameraløsninger',
    desc: 'Systemer som gjenkjenner, varsler og måler for å sikre presisjon og effektivitet.',
  },
]

export default function Services() {
  return (
    <section id="tjenester" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Hva leverer vi?</h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">Vi håndterer hele prosessen fra planlegging og design til implementering og vedlikehold – for en sømløs overgang til automatiserte løsninger.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 p-6 bg-white hover:shadow-md transition">
              <div className="h-11 w-11 rounded-lg bg-yellow-400 text-gray-900 grid place-items-center mb-4">
                <item.icon size={20} />
              </div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
