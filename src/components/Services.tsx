'use client';

import { motion } from 'framer-motion';

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
      videoSrc: '/videos/services/zap.webm', // Add video path
    },
    {
      icon: Building,
      title: t('services.building.title'),
      description: t('services.building.description'),
      videoSrc: '/videos/services/building.webm', // Add video path
    },
    {
      icon: Ship,
      title: t('services.ship.title'),
      description: t('services.ship.description'),
      videoSrc: '/videos/services/ship.webm', // Add video path
    },
    {
      icon: Landmark,
      title: t('services.landmark.title'),
      description: t('services.landmark.description'),
      videoSrc: '/videos/services/landmark.webm', // Add video path
    },
    {
      icon: Truck,
      title: t('services.truck.title'),
      description: t('services.truck.description'),
      videoSrc: '/videos/vehicle-video.mp4', // Add video path
    },
    {
      icon: Spray,
      title: t('services.spray.title'),
      description: t('services.spray.description'),
      videoSrc: '/videos/graffiti-video.mp4', // Add video path
    },
    {
      icon: Industry,
      title: t('services.industry.title'),
      description: t('services.industry.description'),
      videoSrc: '/videos/industrial-video.mp4', // Add video path
    },
    {
      icon: PaintBucket,
      title: t('services.paintBucket.title'),
      description: t('services.paintBucket.description'),
      videoSrc: '/videos/painting-video.mp4', // Add video path
    },
    {
      icon: Blinds,
      title: t('services.blinds.title'),
      description: t('services.blinds.description'),
      videoSrc: '/videos/shutters-video.mp4', // Add video path
    },
    {
      icon: Clock,
      title: t('services.clock.title'),
      description: t('services.clock.description'),
      videoSrc: '/videos/maintenance-video.mp4', // Add video path
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
                <video
                  playsInline
                  autoPlay
                  src={service.videoSrc} // Set video source
                  alt={`${t('services.title')} - ${service.title}`}
                  className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300"
                  loop
                  muted
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
