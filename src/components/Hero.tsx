'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-x-hidden flex items-center justify-center hero-video"
    >
      <div className="absolute inset-0 overflow-hidden w-full">
        <iframe
          src="https://www.youtube.com/embed/ssaNTgwY8zE?autoplay=1&mute=1&loop=1&playlist=ssaNTgwY8zE&controls=0&showinfo=0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2"
        ></iframe>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-white mb-8 animate-fade-in"
        >
          Perfect Metal Cleaning
          <span className="block text-cyan-400">No Disassembly Required</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-cyan-50"
        >
          Fast, effective, and eco-friendly laser cleaning for all metal
          surfaces
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Замовити послугу
          <ArrowRight className="ml-2" />
        </motion.a>
      </div>
    </section>
  );
}
