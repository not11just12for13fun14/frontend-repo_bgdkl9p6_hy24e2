export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900">Rovex Robotics</h4>
            <p className="mt-2 text-sm text-gray-600 max-w-sm">We build autonomous systems that augment human capability and unlock operational excellence.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Company</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li><a href="#about" className="hover:text-gray-900">About</a></li>
              <li><a href="#products" className="hover:text-gray-900">Solutions</a></li>
              <li><a href="#tech" className="hover:text-gray-900">Technology</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Contact</h4>
            <p className="mt-2 text-sm text-gray-600">hello@rovexrobotics.no</p>
            <p className="text-sm text-gray-600">+47 55 55 55</p>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Rovex Robotics. All rights reserved.</div>
      </div>
    </footer>
  )
}
