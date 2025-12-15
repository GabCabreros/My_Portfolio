import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import './Chatbot.css'

const Chatbot = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hello! I'm your AI assistant. How can I help you today?"
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Flowise API URL - Set this after deploying Flowise
  const FLOWISE_API_URL = import.meta.env.VITE_FLOWISE_API_URL || null

  // Fallback chatbot responses (works without Flowise)
  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase()
    
    // Greetings
    if (message.match(/hi|hello|hey|greetings|good morning|good afternoon|good evening/)) {
      return "Hello! I'm here to help you learn more about Godwin Gabriel Cabreros. What would you like to know?"
    }
    
    // About questions
    if (message.match(/who are you|what do you do|about|tell me about|introduce/)) {
      return "I'm an AI assistant helping visitors learn about Godwin Gabriel Cabreros. He's a Frontend Developer, UI/UX Designer, and Network Designer. Would you like to know more about his skills or projects?"
    }
    
    // Skills questions
    if (message.match(/skill|what can you do|expertise|technologies|tech stack/)) {
      return "Godwin specializes in Frontend Development, UI/UX Design, and Network Design. He's skilled in building responsive interfaces, designing intuitive user experiences, and planning efficient network systems."
    }
    
    // Projects questions
    if (message.match(/project|work|portfolio|what have you built|examples/)) {
      return "Godwin has completed 15 projects and worked with 20 happy clients. You can check out his projects section to see more details about his work!"
    }
    
    // Contact questions
    if (message.match(/contact|email|reach|get in touch|how to contact|social/)) {
      return "You can reach out through the Contact section on this website. There you'll find links to GitHub, LinkedIn, Facebook, and Email."
    }
    
    // Experience questions
    if (message.match(/experience|years|how long|background/)) {
      return "Godwin has 3+ years of experience in Frontend Development, UI/UX Design, and Network Design. He's passionate about clean design and continuous learning."
    }
    
    // Default responses
    if (message.match(/thank|thanks|appreciate/)) {
      return "You're welcome! Is there anything else you'd like to know?"
    }
    
    if (message.match(/bye|goodbye|see you|farewell/)) {
      return "Goodbye! Feel free to come back anytime if you have more questions."
    }
    
    // Generic response
    return "That's interesting! I'm here to help you learn about Godwin Gabriel Cabreros. You can ask me about his skills, projects, experience, or how to contact him. What would you like to know?"
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSend = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { role: 'user', content: input.trim() }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Try Flowise API first, fallback to local responses
    if (FLOWISE_API_URL) {
      try {
        const response = await axios.post(
          FLOWISE_API_URL,
          {
            question: userMessage.content,
            overrideConfig: {}
          },
          {
            headers: {
              'Content-Type': 'application/json'
            },
            timeout: 30000 // 30 second timeout
          }
        )

        const assistantMessage = {
          role: 'assistant',
          content: response.data.text || response.data.answer || response.data || 'I received your message, but the response format was unexpected.'
        }
        setMessages(prev => [...prev, assistantMessage])
        setIsLoading(false)
        return
      } catch (error) {
        console.error('Flowise API error:', error)
        // Fall through to local responses if API fails
      }
    }

    // Fallback to local responses if Flowise is not configured or fails
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage.content)
      const assistantMessage = {
        role: 'assistant',
        content: botResponse
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsLoading(false)
    }, 500)
  }

  return (
    <>
      <button 
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={onToggle}
        aria-label="Toggle chatbot"
      >
        {isOpen ? '✕' : '💬'}
      </button>
      
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div className="chatbot-avatar">🤖</div>
              <div>
                <h3>AI Assistant</h3>
                <p className="chatbot-status">Online</p>
              </div>
            </div>
            <button 
              className="chatbot-close"
              onClick={onToggle}
              aria-label="Close chatbot"
            >
              ✕
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
              >
                <div className="message-content">
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message assistant-message">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <form className="chatbot-input-form" onSubmit={handleSend}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="chatbot-input"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className="chatbot-send"
              disabled={isLoading || !input.trim()}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default Chatbot

