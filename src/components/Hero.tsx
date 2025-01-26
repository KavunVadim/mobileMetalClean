'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex justify-center items-center hero-video"
    >
      {/* Background Video */}
      {/* <div className="absolute inset-0 overflow-hidden w-full">
        <iframe
          src="https://www.youtube.com/embed/ssaNTgwY8zE?autoplay=1&mute=1&loop=1&playlist=ssaNTgwY8zE&controls=0&modestbranding=1&rel=0"
          allow="encrypted-media;"
          allowFullScreen
          loading="lazy"
          className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 max-lg:w-[400%] object-cover"
          title="Hero Background Video"
        ></iframe>
      </div> */}
      <div className="absolute inset-0 overflow-hidden w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 max-lg:w-[400%] object-cover"
          title="Hero Background Video"
        >
          <source src="/videos/services/bg-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="absolute z-10 text-center pb-4">
        {/* Logo */}
        <motion.img
          src="/images/logo.webp"
          alt="Logo"
          width={300}
          height={300}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-2"
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]"
        >
          {t('hero.title')}
          <span className="block text-[#b09a0b] mt-5 drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
            {t('hero.subtitle')}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-cyan-50 drop-shadow-[0_2px_2px_#b09a0b]"
        >
          {t('hero.description')}
        </motion.p>

        {/* Call to Action Button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          {t('hero.button')}
          <ArrowRight className="ml-2" />
        </motion.a>
      </div>
    </section>
  );
}
