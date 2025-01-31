import React from 'react';
import { Link } from 'react-router-dom';
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
        <button className="get-started">Get Started</button>
      </header>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Collaborate?</h2>
        <p>Let’s create something amazing together! Explore my projects or get in touch with me.</p>
        <div className="cta-buttons">
          <Link to="/projects" className="cta-button">View Projects</Link>
          <Link to="/contact" className="cta-button">Contact Me</Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What People Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Hannah is a talented developer with a keen eye for design. Her work is always top-notch!"</p>
            <p className="author">- John Doe</p>
          </div>
          <div className="testimonial-card">
            <p>"Working with Hannah was a pleasure. She delivered beyond expectations!"</p>
            <p className="author">- Jane Smith</p>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="skills-tools">
        <h2>Skills & Tools</h2>
        <div className="skills-grid">
          <div className="skill-item">HTML/CSS</div>
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">React</div>
          <div className="skill-item">Figma</div>
          <div className="skill-item">Git</div>
          <div className="skill-item">UI/UX Design</div>
        </div>
      </section>

      {/* Fun Fact Section */}
      <section className="fun-fact">
        <h2>Did You Know?</h2>
        <p>I love coding while listening to lo-fi music! 🎶 It helps me stay focused and creative.</p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;