import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoBackground from './components/VideoBackground';
import './Projects.css';

const Projects = () => {
  // Updated project data
  const projects = [
    {
      id: 1,
      title: 'Flutterflow Project: Catstagram',
      description: 'A social media app for cat lovers built with Flutter and Firebase.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      id: 2,
      title: 'Game Project: Bewitched Brew',
      description: 'Bewitched Brew is a high-energy, single-player bakery management game where players take on the role of a baker running a witch bakery. The game emphasizes speed and efficiency as players handle multiple baking tasks under tight deadlines.',
      video: '/videos/Bewitched_Brew(SampleVideo).mp4', // Add video for this project
      link: '#',
    },
    {
      id: 3,
      title: '(Future) Flutterflow: Recipe App',
      description: 'A recipe app built with Flutter and Firebase.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
  ];

  return (
    <div className="App">
      {/* Video Background */}
      <VideoBackground />

      {/* Use the Header component */}
      <Header />

      {/* Projects Section */}
      <main className="projects">
        <h1>My Projects</h1>
        <div className="project-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Conditionally render video or image */}
              {project.video ? (
                <video
                  src={project.video}
                  controls
                  className="project-video"
                  poster="https://via.placeholder.com/300" // Optional poster image
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={project.image} alt={project.title} />
              )}
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;
