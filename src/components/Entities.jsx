const entities = [
  { name: 'Ulagi Digital', tag: 'Design & Web', desc: 'Brand, product and web experiences for modern companies.' },
  { name: 'Ulagi Labs', tag: 'AI & Automation', desc: 'Applied AI, internal tools and workflow automation.' },
  { name: 'Ulagi Ventures', tag: 'Capital', desc: 'Backing early-stage founders building purposeful tech.' },
  { name: 'Ulagi Media', tag: 'Content', desc: 'Storytelling and growth through content that resonates.' },
  { name: 'Ulagi Cloud', tag: 'Infra', desc: 'Cloud-native platforms and integration services.' },
  { name: 'Ulagi Care', tag: 'People', desc: 'Learning, community and wellbeing programmes.' },
];

export default function Entities() {
  return (
    <section id="entities" className="relative bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_10%_10%,rgba(124,58,237,0.12),transparent_60%)]"/>
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">A constellation of specialised entities</h2>
          <p className="mt-3 text-violet-100/80">Each unit focuses on a clear domain while sharing knowledge, design systems and culture.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {entities.map((e) => (
            <div key={e.name} className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 text-violet-200 ring-1 ring-violet-400/30 px-2 py-1 text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>
                {e.tag}
              </div>
              <h3 className="mt-4 text-white font-medium">{e.name}</h3>
              <p className="mt-2 text-sm text-violet-100/80">{e.desc}</p>
              <button className="mt-4 text-sm text-violet-300 hover:text-white">Learn more →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
