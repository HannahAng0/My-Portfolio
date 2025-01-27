import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './Contact.css';
import VideoBackground from './components/VideoBackground';

const Contact = () => {
  return (
    <div className="App">
      {/* Header */}
      <VideoBackground />
      <Header />

      {/* Contact Section */}
      <main className="contact">
        <h1>Contact Me Through My Social Media!</h1>

        {/* Social Media Section */}
        <section className="socials">
          <h2>Connect with Me!!</h2>
          <div className="social-links">
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://www.linkedin.com/in/hannah-hennesy-ang-714a3921b/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/HannahAng0" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="mailto:hannahhennesy.ang1@gmail.com">
              <i className="fas fa-envelope"></i> Email
            </a>
          </div>
        </section>

        {/* Feedback Form Section */}
        <section className="feedback">
          <div className="form-container">
            <h2>Send Me Your Feedback</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Write your feedback" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
