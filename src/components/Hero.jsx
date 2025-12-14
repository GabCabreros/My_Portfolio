import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Godwin Gabriel Cabreros</span>
          </h1>
          <h2 className="hero-subtitle">UI/UX Designer & Network Designer</h2>
          <p className="hero-description">
            I create beautiful, functional, and user-centered digital experiences.
            Welcome to my portfolio!
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card">
            <div className="card-content">
              <div className="code-snippet">
                <div className="code-line">
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-variable">developer</span> = {'{'}
                </div>
                <div className="code-line indent">
                  <span className="code-property">name</span>: <span className="code-string">'Godwin Gabriel Cabreros'</span>,
                </div>
                <div className="code-line indent">
                  <span className="code-property">passion</span>: <span className="code-string">'Creating amazing things'</span>,
                </div>
                <div className="code-line indent">
                  <span className="code-property">skills</span>: [<span className="code-string">'React'</span>, <span className="code-string">'Node.js'</span>, <span className="code-string">'AI/ML'</span>]
                </div>
                <div className="code-line">{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  )
}

export default Hero

