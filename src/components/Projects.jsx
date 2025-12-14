import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '🛒',
      link: '#'
    },
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot powered by Flowise with natural language processing.',
      tech: ['React', 'Flowise', 'OpenAI'],
      image: '🤖',
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and notifications.',
      tech: ['Vue.js', 'Firebase', 'WebSocket'],
      image: '📋',
      link: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization dashboard with interactive charts and reports.',
      tech: ['React', 'D3.js', 'Python'],
      image: '📊',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <div className="project-icon">{project.image}</div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-link">View Project →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

