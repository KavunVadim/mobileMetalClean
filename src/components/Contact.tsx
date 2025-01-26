import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const ContactInfoItem = ({ icon: Icon, title, description, href }) => (
  <div className="flex items-start space-x-4 ">
    <div className="p-3 bg-cyan-400/10 rounded-lg">
      <Icon className="w-6 h-6 text-cyan-400" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">
        <a href={href} className="text-cyan-400 hover:underline">
          {description}
        </a>
      </p>
    </div>
  </div>
);

const ChatButton = ({
  gradientFrom,
  gradientTo,
  hoverFrom,
  hoverTo,
  iconSrc,
  children,
  ...props
}) => (
  <a
    {...props}
    target="_blank"
    className={`flex items-center space-x-3 bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white px-6 py-3 rounded-lg hover:${hoverFrom} hover:${hoverTo} transition-all shadow-lg hover:shadow-xl`}
  >
    <img src={iconSrc} alt="" className="w-6 h-6" aria-hidden="true" />
    <span>{children}</span>
  </a>
);

const chatServices = [
  {
    gradientFrom: 'from-green-400',
    gradientTo: 'to-green-600',
    hoverFrom: 'from-green-500',
    hoverTo: 'to-green-700',
    iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
    children: 'chatWhatsApp',
    href: 'https://wa.me/34678744950',
  },
  {
    gradientFrom: 'from-blue-400',
    gradientTo: 'to-blue-600',
    hoverFrom: 'from-blue-500',
    hoverTo: 'to-blue-700',
    iconSrc:
      'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg',
    children: 'chatTelegram',
    href: 'https://t.me/EuroDTV',
  },
  {
    gradientFrom: 'from-red-400',
    gradientTo: 'to-red-600',
    hoverFrom: 'from-red-500',
    hoverTo: 'to-red-700',
    iconSrc:
      'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
    children: 'chatEmail',
    href: 'mailto:ecolaserclean.es@gmail.com',
  },
];

const contactItems = [
  {
    icon: Phone,
    title: 'callUs',
    description: '+34 678 74 49 50',
    href: 'tel:+34678744950', // Для дзвінка
  },
  {
    icon: Mail,
    title: 'email',
    description: 'ecolaserclean.es@gmail.com',
    href: 'mailto:ecolaserclean.es@gmail.com', // Для надсилання email
  },
  {
    icon: MapPin,
    title: 'serviceArea',
    description: 'Greater Metropolitan Area',
    href: 'https://www.google.com/maps/dir/?api=1&destination=Greater+Metropolitan+Area', // Для прокладання маршруту
  },
];

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-gray-900 py-20 relative">
      {/* Map Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3166440.023816191!2d-4.01054637583934!3d39.53348224870717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2zRXNwYcOxYQ!5e0!3m2!1ses!2sua!4v1737835247556!5m2!1ses!2sua"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen
          loading="lazy"
          title="Google Maps"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            {t('contact.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 bg-gray-900/90 p-8 rounded-lg">
            {/* Contact Information */}
            <div className="space-y-8">
              {contactItems.map((item, index) => (
                <ContactInfoItem
                  key={index}
                  title={t(`contact.${item.title}`)}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </div>

            {/* Quick Chat */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-400/10 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {t('contact.chatTitle')}
                  </h3>
                  <div className="flex flex-col space-y-4">
                    {chatServices.map((service, index) => (
                      <ChatButton key={index} {...service}>
                        {t(`contact.${service.children}`)}
                      </ChatButton>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
