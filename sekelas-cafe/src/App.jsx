// ─── SEKELAS CAFE · single-page composition ─────────────────────────────────
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Visit from './components/Visit'
import Newsletter from './components/Newsletter'
import StyleGuide from './components/StyleGuide'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="noise-overlay relative min-h-screen bg-bg text-ink">
      {/* Skip link for keyboard users */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-lime focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Visit />
        <Newsletter />
        <StyleGuide />
      </main>

      <Footer />
    </div>
  )
}
