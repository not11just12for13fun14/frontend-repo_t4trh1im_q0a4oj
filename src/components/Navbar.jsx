import { Menu, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-600 shadow-[0_10px_30px_-12px_rgba(139,92,246,0.7)] grid place-items-center">
            <span className="text-white font-black tracking-tight">U</span>
          </div>
          <div className="leading-tight">
            <div className="text-white font-semibold text-lg">Ulagi Group</div>
            <div className="text-xs text-violet-200/80">A family of future-ready companies</div>
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#entities" className="text-violet-100/80 hover:text-white transition-colors">Our Entities</a>
          <a href="#about" className="text-violet-100/80 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-violet-100/80 hover:text-white transition-colors">Contact</a>
          <button className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors">
            Explore <ChevronDown size={16} />
          </button>
        </nav>

        <button className="md:hidden text-white/90">
          <Menu />
        </button>
      </div>
    </header>
  );
}
