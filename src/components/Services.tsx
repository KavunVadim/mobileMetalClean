'use client';

import React, { useEffect, useState, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useViewportScroll,
  AnimatePresence,
} from 'framer-motion';
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

// Service Card Component
const ServiceCard = React.memo(
  ({ icon: Icon, title, description, videoSrc }: Service) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = React.useRef<HTMLDivElement>(null);
    const { width } = useViewportScroll();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { threshold: 0.1 }
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

    // Determine if it's a mobile device based on Framer Motion's viewport width
    const isMobile = width !== undefined && width <= 768;

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
      >
        <div className="relative h-48 overflow-hidden">
          <AnimatePresence>
            {isVisible && !isMobile && (
              <motion.video
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                playsInline
                autoPlay
                src={videoSrc}
                className="absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300"
                loop
                muted
              />
            )}
          </AnimatePresence>

          {/* Mobile fallback */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-gray-100 flex items-center justify-center"
            >
              <Icon className="w-16 h-16 text-blue-400 opacity-50" />
            </motion.div>
          )}

          <div className="absolute inset-0 bg-black bg-opacity-20 z-20" />
          <Icon className="w-12 h-12 text-blue-400 absolute top-4 right-4 z-40" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-light mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </motion.div>
    );
  }
);

// Service Interface
interface Service {
  icon: React.ComponentType;
  title: string;
  description: string;
  videoSrc: string;
}

export default function Services() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { width } = useViewportScroll();

  // Determine if it's a mobile device
  const isMobile = width !== undefined && width <= 768;

  // Parallax effect with Framer Motion
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Responsive parallax transformations
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ['0%', '20%'] : ['0%', '50%']
  );
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

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
    <section
      id="services"
      ref={ref}
      className="relative py-20 bg-gray-50 overflow-hidden"
    >
      {/* Responsive Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/bg-services.webp")', // Replace with your parallax background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY,
          opacity: backgroundOpacity,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-light mb-12 text-center text-gray-800"
        >
          {t('services.title')}
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
