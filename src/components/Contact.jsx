import { Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Ta kontakt</h2>
          <p className="mt-2 text-gray-700">André Bertheussen</p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a href="mailto:ab@rovexrobotics.no" className="inline-flex items-center gap-2 text-gray-900 hover:opacity-80">
            <Mail size={18} /> ab@rovexrobotics.no
          </a>
          <a href="tel:+4790151002" className="inline-flex items-center gap-2 text-gray-900 hover:opacity-80">
            <Phone size={18} /> +47 901 51 002
          </a>
        </div>

        <div className="mt-10 text-center">
          <a href="mailto:ab@rovexrobotics.no" className="inline-flex items-center justify-center rounded-md bg-yellow-400 text-gray-900 px-6 py-3 font-medium hover:bg-yellow-300 transition">Ta kontakt</a>
        </div>
      </div>
    </section>
  )
}
