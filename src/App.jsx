import Navbar from './components/Navbar'
import NorgeHero from './components/NorgeHero'
import Services from './components/Services'
import Values from './components/Values'
import Contact from './components/Contact'
import NorgeFooter from './components/NorgeFooter'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <NorgeHero />
        <Services />
        <Values />
        <Contact />
      </main>
      <NorgeFooter />
    </div>
  )
}

export default App
