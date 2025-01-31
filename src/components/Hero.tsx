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
      aria-label="Hero Section"
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
          title="Hero Background Video"
          aria-hidden="true"
        >
          <source src="/videos/services/bg-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center pb-4 px-2 max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-2"
        >
          <img
            src="/images/logo.webp"
            alt="Logo"
            width={300}
            height={300}
            className="mx-auto"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-bold text-gray-800 mb-8"
        >
          {t('hero.title')}
          <span className="block text-blue-600 mt-5">{t('hero.subtitle')}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-600"
        >
          {t('hero.description')}
        </motion.p>

        {/* Call to Action Button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
        >
          {t('hero.button')}
          <ArrowRight className="ml-2" />
        </motion.a>
      </div>
    </section>
  );
}
