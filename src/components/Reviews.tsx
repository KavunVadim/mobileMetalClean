import { useState, useEffect, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const getInitialReviews = (t) => [
  {
    id: 1,
    name: 'Ivan Petrenko',
    rating: 5,
    comment: 'Excellent service! My yacht looks like new.',
    createdAt: '2023-05-15T10:30:00Z',
  },
  {
    id: 2,
    name: 'Olena Kovalenko',
    rating: 4,
    comment: 'Very professional team. Highly recommend!',
    createdAt: '2023-05-14T14:45:00Z',
  },
  {
    id: 3,
    name: 'Mykhailo Shevchenko',
    rating: 5,
    comment: 'Impressive results. Thanks for the excellent work!',
    createdAt: '2023-05-13T09:15:00Z',
  },
];

const ReviewCard = ({ review }) => {
  const { t } = useTranslation();

  if (!review) return null;

  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg transition-all duration-300 transform hover:scale-105">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
          <span className="text-2xl text-gray-300">
            {review.name.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-white">{review.name}</h3>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-xl ${
                  star <= review.rating ? 'text-yellow-400' : 'text-gray-400'
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-300">{review.comment}</p>
      <p className="text-sm text-gray-400 mt-4">
        {new Date(review.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div
        className="bg-white rounded-lg p-6 w-full max-w-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

const Reviews = () => {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState(() => getInitialReviews(t));
  const [filterRating, setFilterRating] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: '',
  });

  const filteredReviews = useMemo(() => {
    return filterRating === 0
      ? reviews
      : reviews.filter((review) => review.rating === filterRating);
  }, [filterRating, reviews]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [filteredReviews]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!newReview.name || !newReview.comment) {
        return;
      }

      const review = {
        id: reviews.length + 1,
        ...newReview,
        createdAt: new Date().toISOString(),
      };

      setReviews([review, ...reviews]);
      setShowModal(false);
      setNewReview({ name: '', rating: 5, comment: '' });
    },
    [newReview, reviews]
  );

  const nextSlide = () => {
    if (filteredReviews.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredReviews.length);
    }
  };

  const prevSlide = () => {
    if (filteredReviews.length > 0) {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + filteredReviews.length) % filteredReviews.length
      );
    }
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          {t('reviews.title')}
        </h2>

        <div className="mb-8 flex justify-center space-x-4 flex-wrap gap-2">
          {[0, 5, 4, 3, 2, 1].map((stars) => (
            <button
              key={stars}
              onClick={() => setFilterRating(stars)}
              className={`px-4 py-2 rounded ${
                filterRating === stars
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {stars === 0 ? t('reviews.filterAll') : `${stars} ★`}
            </button>
          ))}
        </div>

        <div className="relative min-h-64">
          {filteredReviews.length === 0 ? (
            <div className="p-4 text-white text-center">
              <p>{t('reviews.noReviews')}</p>
            </div>
          ) : (
            <div className="relative">
              <ReviewCard review={filteredReviews[currentIndex]} />

              {filteredReviews.length > 1 && (
                <div className="absolute bottom-[-60px] w-full flex justify-center gap-4 px-4">
                  <button
                    onClick={prevSlide}
                    className="bg-gray-800 hover:bg-gray-700 w-10 h-10 text-white p-2 rounded-full"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextSlide}
                    className="bg-gray-800 hover:bg-gray-700 w-10 h-10 text-white p-2 rounded-full"
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            {t('reviews.leaveReview')}
          </button>
        </div>

        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">
                {t('reviews.form.name')}
              </label>
              <input
                type="text"
                value={newReview.name}
                onChange={(e) =>
                  setNewReview({ ...newReview, name: e.target.value })
                }
                placeholder={t('reviews.form.namePlaceholder')}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                {t('reviews.form.rating')}
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    className={`text-2xl ${
                      star <= newReview.rating
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                {t('reviews.form.comment')}
              </label>
              <textarea
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
                placeholder={t('reviews.form.commentPlaceholder')}
                className="w-full p-2 border rounded"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              {t('reviews.form.submit')}
            </button>
          </form>
        </Modal>
      </div>
    </section>
  );
};

export default Reviews;
