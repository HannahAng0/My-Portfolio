import React, { useState, useEffect, useCallback } from 'react';
import './Banner.css'; // Separate CSS file for the carousel

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Memoize the nextImage function using useCallback
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]); // Dependency: images.length

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically switch images every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [nextImage]); // Dependency: nextImage (now stable due to useCallback)

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={prevImage}>
        &#10094;
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="carousel-image"
        onError={(e) => {
          console.error('Failed to load image:', e.target.src);
          e.target.src = '/images/fallback.jpg'; // Fallback image if the original fails to load
        }}
      />
      <button className="carousel-button right" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
