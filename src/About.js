import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoBackground from './components/VideoBackground';
import carouselImages from './data/Images'; // Import the separated image data
import Carousel from './components/Banner'; // Import the separated carousel
import './About.css';

const About = () => {

  return (
    <div className="App">
      {/* Video Background */}
      <VideoBackground />

      {/* Header */}
      <Header />

      {/* About Page Content */}
      <main className="about">
        <h1>My Greatest Accomplishment in College! </h1>
        <p>My Group and I won the Best Thesis in BS Computer Science Category.</p>

        {/* Image Carousel (Now as a separate component) */}
        <Carousel images={carouselImages} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
