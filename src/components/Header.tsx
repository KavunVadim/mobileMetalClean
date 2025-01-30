'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

// Константи для навігаційних пунктів
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
  const [activeItem, setActiveItem] = useState(NAV_ITEMS[0]); // Активний пункт меню
  const [language, setLanguage] = useState(i18n.language.substring(0, 2));

  const headerRef = useRef(null); // Реф для header
  const dropdownRef = useRef(null); // Реф для випадаючого меню

  // Перемикання мови
  const toggleLanguage = useCallback(() => {
    const currentLanguage = i18n.language.substring(0, 2); // Отримуємо поточну мову
    const newLang = currentLanguage.startsWith('en') ? 'es' : 'en'; // Визначаємо нову мову

    setLanguage(newLang);
    i18n.changeLanguage(newLang).then(() => {
      console.log('Мову змінено на:', newLang); // Логування для дебагу
    });
  }, [i18n, language]);

  // Плавна прокрутка до секції з урахуванням висоти header
  const scrollToSection = useCallback((id) => {
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

  // Обробник кліку на пункт меню
  const handleNavClick = useCallback(
    (item) => {
      setActiveItem(item);
      setIsOpen(false); // Закриваємо мобільне меню
      scrollToSection(item.toLowerCase()); // Прокрутка до секції
    },
    [scrollToSection]
  );

  // Закриття меню при кліку поза блоком
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Синхронізація мови з i18n
  useEffect(() => {
    setLanguage(i18n.language.substring(0, 2));
  }, [i18n.language]);

  // Рендер навігаційних пунктів (мемоїзований)
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
              ? 'block py-3 px-6 text-2xl text-white hover:bg-gray-700'
              : 'relative text-gray-300 hover:text-[#b09a0b]'
          } transition-colors duration-300 ${
            activeItem === item
              ? isOpen
                ? 'text-[#b09a0b] font-bold'
                : 'text-[#b09a0b]'
              : ''
          }`}
        >
          {t(`header.${item.toLowerCase()}`)}
          {!isOpen && activeItem === item && (
            <motion.span
              layoutId="underline"
              className="absolute left-0 bottom-0 w-full h-0.5 bg-[#b09a0b]"
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
      className="sticky top-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm shadow-xl"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Логотип */}
          <div className="flex items-center space-x-8">
            <a
              href="#"
              className="text-white font-bold text-2xl max-sm:text-lg hover:text-green-500 transition-colors duration-300"
            >
              <span className="text-green-500">ECO</span> LASER CLEANING
            </a>
            {/* Навігація для десктопу */}
            <nav className="hidden md:flex space-x-6">{navItems}</nav>
          </div>

          {/* Кнопка зміни мови та мобільне меню */}
          <div className="flex items-center gap-6">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
              aria-label="Change language"
            >
              <Globe className="w-5 h-5" />
              <span className="font-medium">
                {language === 'en' ? 'EN' : 'ES'.toUpperCase()}
              </span>
            </button>

            {/* Кнопка мобільного меню */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none flex items-center space-x-2"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? (
                  <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  </svg>
                ) : (
                  <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Мобільне меню */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-gray-800 py-4"
          >
            {navItems}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
