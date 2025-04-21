import React, { useEffect, useState, useRef } from 'react';
import './ImageInfoCard.css';

interface ImageInfoCardProps {
  title: string;
  description: string;
  image: string; // Path to the image
  fromRight?: boolean; // Optional: Animate from the right
}

const ImageInfoCard: React.FC<ImageInfoCardProps> = ({ title, description, image, fromRight = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        console.log('Card position:', rect); // Debugging
        console.log('Window height:', window.innerHeight); // Debugging

        // Check if the card is within the viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
          console.log('Card is visible'); // Debugging
        } else {
          setIsVisible(false);
          console.log('Card is not visible'); // Debugging
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger the scroll logic on mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`image-info-card ${isVisible ? 'visible' : ''} ${fromRight ? 'right' : ''}`}
    >
      <img src={image} alt={title} className="image-info-card-image" />
      <div className="image-info-card-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageInfoCard;