import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, Zap, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Додано i18next для багатомовності

const SOCIAL_LINKS_DATA = {
  telegram: 'https://t.me/yourusername',
  whatsapp: 'https://wa.me/1234567890',
  email: 'mailto:info@laserclean.com',
  phone: 'tel:+1234567890',
};

const pulseAnimation = {
  scale: [1.5, 1, 1.5],
  opacity: [0.8, 0.4, 0.8],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 30,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 20,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 30,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
  exit: {
    x: -20,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const LaserCleaningWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);
  const { t } = useTranslation(); // Використання i18next для перекладів

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={widgetRef} className="fixed bottom-6 right-6 z-50">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute inset-0 bg-blue-400 rounded-full opacity-50"
          animate={pulseAnimation}
        />
        <motion.button
          className="relative bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? t('widget.closeMenu') : t('widget.openMenu')} // Додано доступність
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={30} /> : <Zap size={30} />}
          </motion.div>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl overflow-hidden w-64"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white"
              variants={itemVariants}
            >
              <h3 className="text-lg font-semibold mb-2">
                {t('widget.contactUs')}
              </h3>
              <p className="text-sm">{t('widget.getConsultation')}</p>
            </motion.div>

            <div className="p-4 space-y-3">
              <motion.a
                href={SOCIAL_LINKS_DATA.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                variants={itemVariants}
                whileHover={{
                  x: 5,
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-blue-500">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.9-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.324.023.468.178.119.13.154.304.164.458-.001.062.001.13-.003.159z" />
                  </svg>
                </span>
                <span className="text-gray-700">Telegram</span>
              </motion.a>

              <motion.a
                href={SOCIAL_LINKS_DATA.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                variants={itemVariants}
                whileHover={{
                  x: 5,
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-green-500">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <span className="text-gray-700">WhatsApp</span>
              </motion.a>

              <motion.a
                href={SOCIAL_LINKS_DATA.email}
                className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                variants={itemVariants}
                whileHover={{
                  x: 5,
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="text-red-500" size={24} />
                <span className="text-gray-700">Email</span>
              </motion.a>

              <motion.a
                href={SOCIAL_LINKS_DATA.phone}
                className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                variants={itemVariants}
                whileHover={{
                  x: 5,
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="text-green-500" size={24} />
                <span className="text-gray-700">{t('widget.callUs')}</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LaserCleaningWidget;
