// src/components/VideoBackground.js
import React from 'react';
import './VideoBackground.css'; // Create a corresponding CSS file for styling

const VideoBackground = () => {
  return (
    <video autoPlay loop muted playsInline className="video-background">
      <source src="/videos/video1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;
