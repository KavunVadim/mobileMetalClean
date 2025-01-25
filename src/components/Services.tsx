'use client';

import { motion } from 'framer-motion';
import { t } from 'i18next';
import {
  Zap,
  Building,
  Ship,
  Landmark,
  Truck,
  SprayCanIcon as Spray,
  StarIcon as Industry,
  PaintBucket,
  Blinds,
  Clock,
} from 'lucide-react';

import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();
  const services = [
    {
      icon: Zap,
      title: t('services.zap.title'),
      description: t('services.zap.description'),
      beforeImage: '/images/services/item-before.webp',
      afterImage: '/images/services/item-after.webp',
    },
    {
      icon: Building,
      title: t('services.building.title'),
      description: t('services.building.description'),
      beforeImage: '/images/facade-before.jpg',
      afterImage: '/images/facade-after.jpg',
    },
    {
      icon: Ship,
      title: t('services.ship.title'),
      description: t('services.ship.description'),
      beforeImage: '/images/yacht-before.jpg',
      afterImage: '/images/yacht-after.jpg',
    },
    {
      icon: Landmark,
      title: t('services.landmark.title'),
      description: t('services.landmark.description'),
      beforeImage: '/images/sculpture-before.jpg',
      afterImage: '/images/sculpture-after.jpg',
    },
    {
      icon: Truck,
      title: t('services.truck.title'),
      description: t('services.truck.description'),
      beforeImage: '/images/vehicle-before.jpg',
      afterImage: '/images/vehicle-after.jpg',
    },
    {
      icon: Spray,
      title: t('services.spray.title'),
      description: t('services.spray.description'),
      beforeImage: '/images/graffiti-before.jpg',
      afterImage: '/images/graffiti-after.jpg',
    },
    {
      icon: Industry,
      title: t('services.industry.title'),
      description: t('services.industry.description'),
      beforeImage: '/images/industrial-before.jpg',
      afterImage: '/images/industrial-after.jpg',
    },
    {
      icon: PaintBucket,
      title: t('services.paintBucket.title'),
      description: t('services.paintBucket.description'),
      beforeImage: '/images/painting-before.jpg',
      afterImage: '/images/painting-after.jpg',
    },
    {
      icon: Blinds,
      title: t('services.blinds.title'),
      description: t('services.blinds.description'),
      beforeImage: '/images/shutters-before.jpg',
      afterImage: '/images/shutters-after.jpg',
    },
    {
      icon: Clock,
      title: t('services.clock.title'),
      description: t('services.clock.description'),
      beforeImage: '/images/maintenance-before.jpg',
      afterImage: '/images/maintenance-after.jpg',
    },
  ];
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
        >
          {t('services.title')}
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.beforeImage}
                  alt={`Before - ${service.title}`}
                  className="absolute inset-0 w-full h-full object-cover z-10 group-hover:opacity-0 transition-opacity duration-300"
                />
                <img
                  src={service.afterImage}
                  alt={`After - ${service.title}`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
                  <service.icon className="w-16 h-16 text-blue-500" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
