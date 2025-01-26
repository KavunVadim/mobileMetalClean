'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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

// Сервіс компонент
const ServiceCard = React.memo(
  ({ icon: Icon, title, description, videoSrc }: Service) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { threshold: 0.5 }
      );
      if (cardRef.current) {
        observer.observe(cardRef.current);
      }
      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }, []);

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group"
      >
        <div className="relative h-48 overflow-hidden">
          {isVisible && (
            <video
              playsInline
              autoPlay
              src={videoSrc}
              className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300"
              loop
              muted
            />
          )}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
            <Icon className="w-16 h-16 text-blue-500" />
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </motion.div>
    );
  }
);

// Основний компонент
interface Service {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  videoSrc: string;
}

export default function Services() {
  const { t } = useTranslation();
  const services: Service[] = [
    {
      icon: Zap,
      title: t('services.zap.title'),
      description: t('services.zap.description'),
      videoSrc: '/videos/services/zap.webm',
    },
    {
      icon: Building,
      title: t('services.building.title'),
      description: t('services.building.description'),
      videoSrc: '/videos/services/building.webm',
    },
    {
      icon: Ship,
      title: t('services.ship.title'),
      description: t('services.ship.description'),
      videoSrc: '/videos/services/ship.webm',
    },
    {
      icon: Landmark,
      title: t('services.landmark.title'),
      description: t('services.landmark.description'),
      videoSrc: '/videos/services/landmark.webm',
    },
    {
      icon: Truck,
      title: t('services.truck.title'),
      description: t('services.truck.description'),
      videoSrc: '/videos/services/truck.webm',
    },
    {
      icon: Spray,
      title: t('services.spray.title'),
      description: t('services.spray.description'),
      videoSrc: '/videos/services/spray.mp4',
    },
    {
      icon: Industry,
      title: t('services.industry.title'),
      description: t('services.industry.description'),
      videoSrc: '/videos/services/industry.webm',
    },
    {
      icon: PaintBucket,
      title: t('services.paintBucket.title'),
      description: t('services.paintBucket.description'),
      videoSrc: '/videos/services/paintBucket.webm',
    },
    {
      icon: Blinds,
      title: t('services.blinds.title'),
      description: t('services.blinds.description'),
      videoSrc: '/videos/services/blinds.webm',
    },
    {
      icon: Clock,
      title: t('services.clock.title'),
      description: t('services.clock.description'),
      videoSrc: '/videos/services/clock.webm',
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
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
