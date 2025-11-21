import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Entities from './components/Entities'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Soft starfield and purple hue */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(70%_70%_at_20%_20%,rgba(124,58,237,0.1),transparent_60%)]" />

      <Navbar />
      <Hero />
      <Entities />
      <section id="about" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">One brand, many builders</h2>
            <p className="mt-4 text-violet-100/85">
              We believe big outcomes emerge from small, focused teams. Each entity operates independently with the autonomy to ship fast, while the group provides brand, shared services and long-term alignment.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-violet-100/90">Design-led decisions</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-violet-100/90">Compound knowledge</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-violet-100/90">Shared platforms</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-violet-100/90">Patient capital</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-fuchsia-500/10 via-violet-500/10 to-indigo-600/10 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-950/80 p-6">
              <div className="text-violet-100/80 text-sm">
                "When many small orbs align, they become a galaxy. We apply the same principle to building companies — small, bright, and connected."
              </div>
              <div className="mt-4 text-white font-medium">Ulagi Group</div>
              <div className="text-violet-200/70 text-sm">Corporate Office</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App