import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.12),transparent_50%)]" />

      <Navbar />
      <Hero />
      <Services />
      <Work />
      <CTA />

      <footer className="relative border-t border-white/10 py-8 text-center text-white/60">
        <p>© {new Date().getFullYear()} Sly Nerds — Built without the BS.</p>
      </footer>
    </div>
  )
}

export default App