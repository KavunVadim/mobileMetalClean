'use client';

import { motion } from 'framer-motion';
import { Truck, Zap, Leaf, Ship } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Truck,
      title: t('about.benefits.0.title'),
      description: t('about.benefits.0.description'),
    },
    {
      icon: Zap,
      title: t('about.benefits.1.title'),
      description: t('about.benefits.1.description'),
    },
    {
      icon: Leaf,
      title: t('about.benefits.2.title'),
      description: t('about.benefits.2.description'),
    },
    {
      icon: Ship,
      title: t('about.benefits.3.title'),
      description: t('about.benefits.3.description'),
    },
  ];

  const applications: string[] = t('about.applications.items', {
    returnObjects: true,
  }) as string[];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 text-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          {t('about.title')}
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-700 p-6 rounded-lg"
            >
              <benefit.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center relative"
        >
          <h3 className="text-2xl font-semibold mb-4 ">
            {t('about.applications.title')}
          </h3>
          <ul className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {applications.map((app, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-500 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-300">{app}</span>
              </li>
            ))}
          </ul>
          {window.innerWidth > 768 ? (
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-[300px] h-auto absolute top-0 right-0 z-50"
              style={{ overflow: 'hidden' }}
            >
              <motion.img
                src="/images/car.webp"
                alt={t('about.carImage.alt')}
                className="rounded-lg"
                initial={{ x: '100%' }}
                whileInView={{ x: '0%' }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ x: '100%' }}
              whileInView={{ x: '0%' }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <img
                src="/images/car.webp"
                alt={t('about.carImage.alt')}
                className="rounded-lg w-full h-auto"
              />
            </motion.div>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">
            {t('about.marineCleaning.title')}
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            {t('about.marineCleaning.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
