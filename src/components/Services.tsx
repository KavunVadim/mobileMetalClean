import React from 'react';
import { useTranslation } from 'react-i18next';
import { Zap, Building, Anchor, LandmarkIcon, Truck, Eraser, Baseline as Pipeline, Paintbrush, Maximize as WindowMaximize, Clock } from 'lucide-react';

const serviceIcons = {
  metalSurfaces: Zap,
  facadeRestoration: Building,
  yachtCleaning: Anchor,
  sculptureRestoration: LandmarkIcon,
  equipmentPreparation: Truck,
  graffitiRemoval: Eraser,
  scaleRemoval: Pipeline,
  postTreatment: Paintbrush,
  shutterRestoration: WindowMaximize,
  maintenance: Clock
};

export default function Services() {
  const { t } = useTranslation();

  return (
    <div id="services" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">{t('services.title')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(t('services.list', { returnObjects: true })).map(([key, service], index) => {
            const Icon = serviceIcons[key as keyof typeof serviceIcons];
            return (
              <div 
                key={key} 
                className={`group hover:bg-gray-800 transition-all duration-300 p-8 rounded-xl animate-scale-in delay-${index * 100}`}
              >
                <Icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}