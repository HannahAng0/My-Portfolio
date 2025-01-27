// src/About.js
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoBackground from './components/VideoBackground';
import './About.css'; // Import the CSS file for the About page

const About = () => {
  // Array of image URLs for the carousel
  const images = [
    '/images/cat1.jpg',
    '/images/cat2.jpg',
    '/images/cat3.jpg',
    '/images/cat4.jpg',
  ];

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
    <div className="App">
      {/* Video Background */}
      <VideoBackground />

      {/* Use the Header component */}
      <Header />

      {/* About Page Content */}
      <main className="about">
        <h1>About Us</h1>
        <p>Learn more about our mission and team.</p>

        {/* Image Carousel */}
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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;