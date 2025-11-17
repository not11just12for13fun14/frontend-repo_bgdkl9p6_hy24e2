import { Menu, X, Bot, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gray-900 text-white grid place-items-center shadow-sm">
              <Bot size={20} />
            </div>
            <span className="font-semibold tracking-tight">Rovex Robotics</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#tjenester" className="hover:text-gray-900">Hva leverer vi</a>
            <a href="#visjon" className="hover:text-gray-900">Visjon & verdier</a>
            <a href="#contact" className="hover:text-gray-900">Kontakt</a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-300 transition">
              <Mail size={16} /> Ta kontakt
            </a>
          </nav>

          <button className="md:hidden inline-flex p-2" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a onClick={() => setOpen(false)} href="#tjenester" className="block py-2">Hva leverer vi</a>
            <a onClick={() => setOpen(false)} href="#visjon" className="block py-2">Visjon & verdier</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block py-2">Kontakt</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block py-2 font-medium text-gray-900">Ta kontakt</a>
          </div>
        )}
      </div>
    </header>
  )
}
