import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_65%)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Ready for marketing that actually works?
        </motion.h3>
        <p className="mt-3 text-white/70">
          Tell us your goal and budget. We’ll propose the highest-leverage plan and ship the first wins in weeks, not months.
        </p>
        <form className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
          <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20 sm:col-span-1" placeholder="Your name" />
          <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20 sm:col-span-1" placeholder="Email" type="email" />
          <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20 sm:col-span-2" placeholder="Company / Website" />
          <textarea className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/20 sm:col-span-2" rows={4} placeholder="What do you want to achieve?" />
          <button className="mt-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 hover:scale-[1.02] transition-transform sm:col-span-2">Get a straight answer</button>
        </form>
        <p className="mt-4 text-xs text-white/50">No spam. No vague decks. Just the plan.</p>
      </div>
    </section>
  );
}
