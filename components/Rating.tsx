import React, { useState } from 'react';

interface RatingProps {
  onRate: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ onRate }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [currentRating, setCurrentRating] = useState(0);

  const handleRatingClick = (rate: number) => {
    setCurrentRating(rate);
    onRate(rate);
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => handleRatingClick(star)}
          className="transition-transform duration-200 ease-in-out transform hover:scale-125 focus:outline-none"
          aria-label={`Avaliar com ${star} estrela${star > 1 ? 's' : ''}`}
        >
          <svg
            className="w-10 h-10"
            fill={
              (hoverRating >= star || currentRating >= star)
                ? 'currentColor'
                : 'none'
            }
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
            style={{
              color: (hoverRating >= star || currentRating >= star) ? '#F59E0B' : '#D1D5DB' /* amber-500 and gray-300 */
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </button>
      ))}
    </div>
  );
};

export default Rating;