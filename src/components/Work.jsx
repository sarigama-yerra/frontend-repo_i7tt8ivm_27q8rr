import { motion } from "framer-motion";

const work = [
  {
    tag: "E-comm",
    title: "7-figure Q4 with a 3-week creative sprint",
    result: "+212% ROAS",
  },
  {
    tag: "SaaS",
    title: "Story-led launch funnel that doubled trials",
    result: "+108% Trials",
  },
  {
    tag: "Fintech",
    title: "Segmented lifecycle with 1:1 personalization",
    result: "-34% CAC",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Proven outcomes</h2>
            <p className="mt-3 max-w-2xl text-white/70">We obsess over leverage: where a single sharp narrative and a clean funnel move the needle the most.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-white/20 px-5 py-2 text-white hover:bg-white/10 transition-colors md:inline-block">Request case studies</a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {work.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">{w.tag}</span>
                <span className="text-sm font-semibold text-emerald-300/90">{w.result}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{w.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
