import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function GradientPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0a0a0a] via-[#0a1a0a] to-[#0a0a0a] overflow-hidden"
    >
      {/* Subtle radial gradient blob for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-600/10 rounded-full blur-3xl opacity-50 pointer-events-none animate-pulse-slow"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-8xl font-black text-neutral-50 tracking-tighter leading-tight">
          Unleash Your Creativity
        </h1>
        <p className="mt-6 md:mt-8 max-w-3xl mx-auto text-lg md:text-xl text-neutral-400 leading-relaxed font-light">
          Experience the next generation of seamless design and intuitive functionality. Built for creators, by creators.
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:bg-neutral-200 transition-colors duration-200"
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
}
