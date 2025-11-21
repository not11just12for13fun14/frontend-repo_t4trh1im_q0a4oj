import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(124,58,237,0.35),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-violet-100 ring-1 ring-white/20 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse"></span>
              Part of a larger whole
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Building a universe of companies — many small entities, one united vision
            </h1>
            <p className="mt-5 text-base sm:text-lg text-violet-100/90 max-w-2xl">
              We are a group of specialised businesses operating under a shared philosophy — design-led, tech-forward and people-centered. Together, we turn bold ideas into durable value.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#entities" className="rounded-full bg-violet-500 hover:bg-violet-400 text-white px-5 py-3 text-sm transition-colors">Explore our entities</a>
              <a href="#contact" className="rounded-full bg-white/10 hover:bg-white/20 text-white px-5 py-3 text-sm transition-colors">Partner with us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
