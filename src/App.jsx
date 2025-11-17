import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Norwegian engineering. Global impact.</h2>
              <p className="mt-4 text-gray-700">Rooted in Scandinavian design principles, we create robots that are robust, elegant, and deceptively simple to use. Our systems are built for offshore, industrial, and logistics environments where reliability is non‑negotiable.</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-2xl font-semibold">IP67</p>
                  <p className="text-xs text-gray-600">Weather‑sealed</p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-2xl font-semibold"><span className="align-super text-xs">±</span>2 cm</p>
                  <p className="text-xs text-gray-600">Localization accuracy</p>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200" />
          </div>
        </section>
        <section id="tech" className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-center">A platform you can build on</h2>
            <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">Open APIs, ROS2 compatibility, and cloud fleet management. Integrate your sensors and workflows with minimal friction.</p>
            <Features />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
