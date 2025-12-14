import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Chatbot from './components/Chatbot'
import './App.css'

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  return (
    <div className="App" style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Chatbot isOpen={isChatbotOpen} onToggle={() => setIsChatbotOpen(!isChatbotOpen)} />
    </div>
  )
}

export default App

