import React, { useState, useRef, useEffect, useCallback } from 'react';

interface CoinLogoProps {
  onZoomComplete: () => void;
}

const CoinLogo: React.FC<CoinLogoProps> = ({ onZoomComplete }) => {
  const [rotation, setRotation] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const velocityRef = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const isAnimating = useRef(false);

  const DAMPING = 0.98;
  const CLICK_VELOCITY = 25;
  const MIN_VELOCITY = 0.05;

  const animate = useCallback(() => {
    velocityRef.current *= DAMPING;
    setRotation(prev => prev + velocityRef.current);

    if (Math.abs(velocityRef.current) > MIN_VELOCITY) {
      animationFrameId.current = requestAnimationFrame(animate);
    } else {
      velocityRef.current = 0;
      isAnimating.current = false;
      // Garante que a moeda sempre pare virada para a frente (múltiplo de 360)
      setRotation(prev => Math.round(prev / 360) * 360);
    }
  }, []);
  
  const handleClick = () => {
    velocityRef.current += CLICK_VELOCITY;
    if (!isAnimating.current) {
        isAnimating.current = true;
        animate();
    }
    if (!isZooming) {
      setIsZooming(true);
    }
  };

  const handleAnimationEnd = () => {
    onZoomComplete();
    setIsZooming(false);
  };

  useEffect(() => {
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div 
      className={`w-28 h-28 md:w-32 md:h-32 rounded-full cursor-pointer ${isZooming ? 'animate-zoom-for-modal' : ''}`}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
      style={{ perspective: '1000px' }}
    >
      <img
        src="/logo.png"
        alt="Logo Chriss Confecções"
        className="w-full h-full rounded-full object-cover"
        style={{
          transform: `rotateY(${rotation}deg)`,
          transition: 'transform 0s linear',
        }}
      />
    </div>
  );
};

export default CoinLogo;