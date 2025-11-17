export default function NorgeFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-sm text-gray-600">© 2025 Rovex Robotics. Nettside av Webtjenesten.</p>
          <div className="text-sm text-gray-700">
            <a className="hover:underline" href="mailto:ab@rovexrobotics.no">ab@rovexrobotics.no</a> · <a className="hover:underline" href="tel:+4790151002">+47 901 51 002</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
