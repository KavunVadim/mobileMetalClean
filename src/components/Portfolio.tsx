import React, { useRef } from 'react';
import { Carousel, Modal, Button } from 'antd';
import { ZoomInOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  before: string;
  after: string;
  category: string;
}

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentItem, setCurrentItem] = React.useState<PortfolioItem | null>(
    null
  );
  const { t } = useTranslation();
  const carouselRef = useRef<any>(null); // Реф для керування слайдером

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: t('portfolio.items.project1.title'),
      description: t('portfolio.items.project1.description'),
      before: '/images/portfolio/item-before.webp',
      after: '/images/portfolio/item-after.webp',
      category: t('portfolio.items.project1.category'),
    },
    {
      id: 2,
      title: t('portfolio.items.project2.title'),
      description: t('portfolio.items.project2.description'),
      before: '/images/portfolio/yacht-befor.webp',
      after: '/images/portfolio/yacht-after.webp',
      category: t('portfolio.items.project2.category'),
    },
    {
      id: 3,
      title: t('portfolio.items.project3.title'),
      description: t('portfolio.items.project3.description'),
      before: '/images/portfolio/item3-before.webp',
      after: '/images/portfolio/item3-after.webp',
      category: t('portfolio.items.project3.category'),
    },
    {
      id: 4,
      title: t('portfolio.items.project4.title'),
      description: t('portfolio.items.project4.description'),
      before: '/images/portfolio/memorial-before.webp',
      after: '/images/portfolio/memorial-after.webp',
      category: t('portfolio.items.project4.category'),
    },
    {
      id: 5,
      title: t('portfolio.items.project5.title'),
      description: t('portfolio.items.project5.description'),
      before: '/images/portfolio/memorial-2-before.webp',
      after: '/images/portfolio/memorial-2-after.webp',
      category: t('portfolio.items.project5.category'),
    },
    {
      id: 6,
      title: t('portfolio.items.project6.title'),
      description: t('portfolio.items.project6.description'),
      before: '/images/portfolio/rolet-before.webp',
      after: '/images/portfolio/rolet-after.webp',
      category: t('portfolio.items.project6.category'),
    },
    {
      id: 7,
      title: t('portfolio.items.project7.title'),
      description: t('portfolio.items.project7.description'),
      before: '/images/portfolio/wall-before.webp',
      after: '/images/portfolio/wall-after.webp',
      category: t('portfolio.items.project7.category'),
    },
    {
      id: 8,
      title: t('portfolio.items.project8.title'),
      description: t('portfolio.items.project8.description'),
      before: '/images/portfolio/barrel-before.webp',
      after: '/images/portfolio/barrel-after.webp',
      category: t('portfolio.items.project8.category'),
    },
  ];

  const showModal = (item) => {
    setCurrentItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentItem(null);
  };

  // Функції для керування слайдером
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <section id="portfolio" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          {t('portfolio.title')}
        </h1>

        {/* Слайдер */}
        <Carousel
          ref={carouselRef} // Додаємо реф для керування
          autoplay
          dots={false} // Вимкнути стандартні точки
          arrows={false} // Вимкнути стандартні стрілки
          slidesToShow={3}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {portfolioItems.map((project, index) => (
            <div key={project.id} className="px-2">
              <div
                className={`group relative animate-scale-in delay-${
                  index * 100
                }`}
              >
                <div
                  onClick={() => showModal(project)}
                  className="relative h-96 overflow-hidden rounded-xl"
                >
                  {/* Before Image */}
                  <img
                    src={project.before}
                    alt={`${project.title} before`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:opacity-0"
                  />
                  {/* After Image */}
                  <img
                    src={project.after}
                    alt={`${project.title} after`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-1000 group-hover:opacity-100 transform scale-105 group-hover:scale-100"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 bg-cyan-500 text-white text-sm rounded-full mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>

                  {/* Before/After Label */}
                  <div className="absolute top-4 left-4 bg-white/70 text-gray-800 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <span className="group-hover:opacity-0 transition-opacity duration-500">
                      {t('portfolio.before')}
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {t('portfolio.after')}
                    </span>
                  </div>
                </div>

                {/* Modal Button */}
                <Button
                  onClick={() => showModal(project)}
                  className="absolute top-4 right-4 bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors duration-300"
                >
                  <ZoomInOutlined />
                </Button>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Кнопки перелистування */}
        <div className="flex justify-center mt-6 space-x-4">
          <Button
            onClick={handlePrev}
            className="flex items-center justify-center w-10 h-10 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors duration-300"
          >
            <LeftOutlined />
          </Button>
          <Button
            onClick={handleNext}
            className="flex items-center justify-center w-10 h-10 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors duration-300"
          >
            <RightOutlined />
          </Button>
        </div>

        {/* Модальне вікно */}
        {currentItem && (
          <Modal
            open={isModalOpen}
            onCancel={closeModal}
            footer={null}
            centered
            width={800}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {currentItem?.title}
            </h3>
            <p className="text-gray-700 mb-4">{currentItem?.description}</p>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <h4 className="font-semibold mb-2 text-gray-800">
                  {t('portfolio.before')}
                </h4>
                <img
                  src={currentItem?.before}
                  alt={`${t('portfolio.before')} - ${currentItem?.title}`}
                  className="w-full md:h-[500px] object-cover rounded-md"
                />
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gray-800">
                  {t('portfolio.after')}
                </h4>
                <img
                  src={currentItem?.after}
                  alt={`${t('portfolio.after')} - ${currentItem?.title}`}
                  className="w-full md:h-[500px] object-cover rounded-md"
                />
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
}
