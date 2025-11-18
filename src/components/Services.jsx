import { Cpu, BarChart3, Megaphone, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Cpu,
    title: "Performance Branding",
    desc: "Creative that converts. We fuse bold visuals with ruthless A/B testing to scale profitably.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Experimentation",
    desc: "Dashboards, cohorts, LTV modeling, and rapid experiments to find real signal fast.",
  },
  {
    icon: Megaphone,
    title: "Full-Funnel Campaigns",
    desc: "From awareness to retention—we architect journeys that compound across channels.",
  },
  {
    icon: Rocket,
    title: "Launch Sprints",
    desc: "Two-week sprints to plan, ship, and optimize your next product or feature launch.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What we do</h2>
          <p className="mt-3 text-white/70">Bold creative, sharp strategy, and a no-bullshit process that respects your time and budget.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition-colors"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-400 to-amber-300 text-slate-900">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
