import React from "react";
import { useSpring, animated } from "react-spring";
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "React Todo App",
      description:
        "A simple todo app built with React, which allows you to add, edit and delete tasks.",
      image:
        "https://via.placeholder.com/300x150.png?text=React+Todo+App",
      demoUrl: "https://example.com",
      sourceUrl: "https://github.com",
    },
    {
      id: 2,
      title: "Node.js Blog",
      description:
        "A simple blog built with Node.js, which allows you to create, edit and delete posts.",
      image: "https://via.placeholder.com/300x150.png?text=Node.js+Blog",
      demoUrl: "https://example.com",
      sourceUrl: "https://github.com",
    },
    {
      id: 3,
      title: "React Native Weather App",
      description:
        "A weather app built with React Native, which displays the current weather for your location.",
      image:
        "https://via.placeholder.com/300x150.png?text=React+Native+Weather+App",
      demoUrl: "https://example.com",
      sourceUrl: "https://github.com",
    },
  ];

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fadeIn} id = "projects" className="projects-container">
      <h1>Projects</h1>
      <div className="project-cards-container">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i> Demo
                </a>
                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </animated.div>
  );
};

export default Projects;
