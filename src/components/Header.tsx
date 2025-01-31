'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';
import { Button } from 'antd';

// Constants for navigation items
const NAV_ITEMS = [
  'Home',
  'About',
  'Services',
  'Portfolio',
  'Reviews',
  'Contact',
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(NAV_ITEMS[0]);
  const [language, setLanguage] = useState(i18n.language.substring(0, 2));

  const headerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleLanguage = useCallback(() => {
    const currentLanguage = i18n.language.substring(0, 2);
    const newLang = currentLanguage.startsWith('en') ? 'es' : 'en';

    setLanguage(newLang);
    i18n.changeLanguage(newLang).then(() => {
      console.log('Language changed to:', newLang);
    });
  }, [i18n]);

  const scrollToSection = useCallback((id: string) => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      const section = document.getElementById(id);
      if (section) {
        const sectionTop = section.offsetTop - headerHeight;
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth',
        });
      }
    }
  }, []);

  const handleNavClick = useCallback(
    (item: string) => {
      setActiveItem(item);
      setIsOpen(false);
      scrollToSection(item.toLowerCase());
    },
    [scrollToSection]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setLanguage(i18n.language.substring(0, 2));
  }, [i18n.language]);

  const navItems = useMemo(
    () =>
      NAV_ITEMS.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(item);
          }}
          className={`${
            isOpen
              ? 'block py-3 px-6 text-lg text-gray-800 hover:bg-gray-100'
              : 'relative text-gray-600 hover:text-blue-600'
          } transition-colors duration-300 ${
            activeItem === item
              ? isOpen
                ? 'text-blue-600 font-bold'
                : 'text-blue-600'
              : ''
          }`}
        >
          {t(`header.${item.toLowerCase()}`)}
          {!isOpen && activeItem === item && (
            <motion.span
              layoutId="underline"
              className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </a>
      )),
    [activeItem, handleNavClick, isOpen, t]
  );

  return (
    <header
      ref={headerRef}
      className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-800 font-bold text-2xl max-sm:text-lg hover:text-blue-600 transition-colors duration-300"
            >
              <span className="text-green-600">ECO</span>
              <span className="text-blue-600">LC</span>
            </a>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">{navItems}</nav>
          </div>

          {/* Language toggle and mobile menu */}
          <div className=" h-auto flex items-center gap-3">
            <Button
              type="primary"
              ghost
              onClick={toggleLanguage}
              className="flex items-center"
            >
              <Globe className="w-5 h-5" />
              <span className="font-bold">
                {language === 'en' ? 'EN' : 'ES'}
              </span>
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                onClick={() => setIsOpen(!isOpen)}
                type="primary"
                ghost
                className="text-gray-600"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white py-4 shadow-lg"
          >
            {navItems}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
