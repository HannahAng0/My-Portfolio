// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoBackground from './components/VideoBackground';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Video Background */}
      <VideoBackground />

      {/* Use the Header component */}
      <Header />

      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi! I am Hannah Hennesy Ang, 4th year college student. I am glad that you are taking
          an interest in my portfolio! Feel free to explore my projects and learn more about me.
        </p>
        <button>Get Started</button>
      </header>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
