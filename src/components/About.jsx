import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            Frontend Developer • UI/UX Designer • Network Designer
          </p>
          <p>
            Creative and detail-oriented, skilled in building responsive interfaces, designing intuitive user experiences, and planning efficient, secure network systems. Passionate about clean design, smooth functionality, and continuous learning.
          </p>
          <div className="about-stats">
            <div className="stat">
              <div className="stat-number">15</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat-number">20</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="image-container">
            <img 
              src="/images/b96234f4-ad8a-487c-9789-ef9473311231.jpg" 
              alt="Godwin Gabriel Cabreros" 
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

