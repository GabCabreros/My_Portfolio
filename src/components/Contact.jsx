import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(''), 3000)
  }

  const socialLinks = [
    { name: 'GitHub', icon: 'github', url: 'https://github.com' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
    { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
    { name: 'Email', icon: 'mail', url: 'mailto:your.email@example.com' }
  ]

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's work together on your next project</p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.name}
              >
                <span className="social-icon">{social.icon === 'github' ? '📱' : social.icon === 'linkedin' ? '💼' : social.icon === 'facebook' ? '👤' : '✉️'}</span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {status === 'success' && (
            <div className="form-status success">
              Message sent successfully!
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact

