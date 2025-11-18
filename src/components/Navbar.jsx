import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="group inline-flex items-center gap-2">
              <div className="relative">
                <motion.span
                  initial={{ rotate: -10, scale: 0.9 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 text-slate-900 shadow-lg"
                >
                  <Sparkles className="h-5 w-5" />
                </motion.span>
              </div>
              <div className="font-semibold tracking-tight text-white">
                <span className="text-lg">Sly</span>
                <span className="ml-1 rounded-md bg-gradient-to-tr from-fuchsia-400 to-amber-300 px-1.5 py-0.5 text-slate-900">Nerds</span>
              </div>
            </a>

            <div className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
              <a href="#work" className="hover:text-white transition-colors">Work</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              <a href="#contact" className="rounded-full bg-white text-slate-900 px-4 py-2 hover:scale-[1.02] transition-transform">Start a project</a>
            </div>

            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
