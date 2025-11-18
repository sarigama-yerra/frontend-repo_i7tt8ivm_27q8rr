import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Digital marketing that doesn't BS.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-5 max-w-xl text-lg text-white/70"
          >
            We’re Sly Nerds: data-obsessed creatives who build bold campaigns, ship fast, and tell you the truth. No fluff, just results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="rounded-full bg-white px-6 py-3 text-slate-900 font-semibold hover:scale-[1.02] transition-all">Book a strategy call</a>
            <a href="#work" className="rounded-full border border-white/20 px-6 py-3 text-white hover:bg-white/10 transition-colors">See our work</a>
          </motion.div>

          <div className="mt-10 flex items-center gap-6 text-xs text-white/50">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            <p>Transparent pricing • Weekly updates • Your data, your IP</p>
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full lg:aspect-square">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
    </section>
  );
}
