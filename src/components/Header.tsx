'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';
import { Button } from 'antd';

// Constants
const NAV_ITEMS = [
  'Home',
  'About',
  'Services',
  'Portfolio',
  'Reviews',
  'Contact',
];

// Reusable Components
const Logo = () => (
  <a
    href="#"
    className="text-gray-800 font-bold text-2xl max-sm:text-lg hover:text-blue-600 transition-colors"
  >
    <span className="text-green-600">ECO</span>
    <span className="text-blue-600">LC</span>
  </a>
);

const LanguageToggle = ({ language, toggleLanguage }) => (
  <Button
    type="primary"
    ghost
    onClick={toggleLanguage}
    className="flex items-center"
  >
    <Globe className="w-5 h-5" />
    <span className="font-bold">{language === 'en' ? 'EN' : 'ES'}</span>
  </Button>
);

const MobileMenuButton = ({ isOpen, toggleMenu }) => (
  <Button
    type="primary"
    ghost
    onClick={toggleMenu}
    className="text-gray-600"
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
  >
    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
  </Button>
);

const NavItem = ({ item, isOpen, isActive, onClick }) => {
  const { t } = useTranslation();
  return (
    <a
      href={`#${item.toLowerCase()}`}
      onClick={(e) => {
        e.preventDefault();
        onClick(item);
      }}
      className={`${
        isOpen
          ? 'block py-3 px-6 text-lg text-gray-800 hover:bg-gray-100'
          : 'relative text-gray-600 hover:text-blue-600'
      } transition-colors duration-300 ${
        isActive ? (isOpen ? 'text-blue-600 font-bold' : 'text-blue-600') : ''
      }`}
    >
      {t(`header.${item.toLowerCase()}`)}
      {!isOpen && isActive && (
        <motion.span
          layoutId="underline"
          className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600"
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
    </a>
  );
};

const MobileMenu = ({ isOpen, navItems }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
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
);

// Main Component
export default function Header() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(NAV_ITEMS[0]);
  const [language, setLanguage] = useState(i18n.language.substring(0, 2));

  const headerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle language
  const toggleLanguage = useCallback(() => {
    const newLang = language === 'en' ? 'es' : 'en';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  }, [language, i18n]);

  // Scroll to section
  const scrollToSection = useCallback((id: string) => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      const section = document.getElementById(id);
      if (section) {
        const sectionTop = section.offsetTop - headerHeight;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
      }
    }
  }, []);

  // Handle navigation click
  const handleNavClick = useCallback(
    (item: string) => {
      setActiveItem(item);
      setIsOpen(false);
      scrollToSection(item.toLowerCase());
      window.history.pushState({}, '', `#${item.toLowerCase()}`);
    },
    [scrollToSection]
  );

  // Close dropdown on outside click
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

  // Update language state on i18n change
  useEffect(() => {
    setLanguage(i18n.language.substring(0, 2));
  }, [i18n.language]);

  // Memoized navigation items
  const navItems = useMemo(
    () =>
      NAV_ITEMS.map((item) => (
        <NavItem
          key={item}
          item={item}
          isOpen={isOpen}
          isActive={activeItem === item}
          onClick={handleNavClick}
        />
      )),
    [activeItem, handleNavClick, isOpen]
  );

  return (
    <header
      ref={headerRef}
      className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center space-x-8">
            <Logo />
            <nav className="hidden md:flex space-x-6">{navItems}</nav>
          </div>

          {/* Language toggle and mobile menu */}
          <div className="h-auto flex items-center gap-3">
            <LanguageToggle
              language={language}
              toggleLanguage={toggleLanguage}
            />
            <div className="md:hidden">
              <MobileMenuButton
                isOpen={isOpen}
                toggleMenu={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} navItems={navItems} />
    </header>
  );
}
