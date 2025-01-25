import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-white font-bold text-xl">
              LaserClean
            </a>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                {t('header.services')}
              </a>
              <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
                {t('header.portfolio')}
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                {t('header.contact')}
              </a>
            </nav>
          </div>
          
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span>{i18n.language.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </header>
  );
}