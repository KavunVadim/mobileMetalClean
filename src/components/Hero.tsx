'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Імпорт useTranslation

export default function Hero() {
  const { t } = useTranslation(); // Використання хука useTranslation

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-x-hidden flex justify-center items-center hero-video"
    >
      <div className="absolute inset-0 overflow-hidden w-full">
        <iframe
          src="https://www.youtube.com/embed/ssaNTgwY8zE?autoplay=1&mute=1&loop=1&playlist=ssaNTgwY8zE&controls=0&showinfo=0"
          allow="autoplay; encrypted-media ; replay;"
          allowFullScreen
          className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 max-lg:w-[400%] object-cover object-center"
        ></iframe>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="absolute z-10 text-center pb-4">
        <motion.img
          src="/images/logo.webp"
          alt="logo"
          width={300}
          height={300}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-2"
        />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-8 animate-fade-in drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]"
        >
          {t('hero.title')} {/* Використання перекладу для заголовка */}
          <span className="block text-[#b09a0b] mt-5 drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
            {t('hero.subtitle')} {/* Використання перекладу для підзаголовка */}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-cyan-50 drop-shadow-[0_2px_2px_#b09a0b]"
        >
          {t('hero.description')} {/* Використання перекладу для опису */}
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          {t('hero.button')} {/* Використання перекладу для кнопки */}
          <ArrowRight className="ml-2" />
        </motion.a>
      </div>
    </section>
  );
}
