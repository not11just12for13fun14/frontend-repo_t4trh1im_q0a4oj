export default function Footer(){
  return (
    <footer id="contact" className="relative bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_80%_20%,rgba(76,29,149,0.25),transparent_60%)]"/>
      <div className="relative mx-auto max-w-7xl px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-600 grid place-items-center">
              <span className="text-white font-black">U</span>
            </div>
            <div className="text-white font-semibold">Ulagi Group</div>
          </div>
          <p className="mt-3 text-sm text-violet-100/80 max-w-sm">We partner with ambitious leaders to design, build and scale purposeful companies.</p>
        </div>

        <div>
          <div className="text-white/90 font-medium">Contact</div>
          <ul className="mt-3 space-y-2 text-violet-200/80 text-sm">
            <li>hello@ulagi.in</li>
            <li>Chennai, India</li>
          </ul>
        </div>

        <div>
          <div className="text-white/90 font-medium">Explore</div>
          <ul className="mt-3 space-y-2 text-violet-200/80 text-sm">
            <li><a href="#entities" className="hover:text-white">Our Entities</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-violet-200/60">
          © {new Date().getFullYear()} Ulagi Group. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
