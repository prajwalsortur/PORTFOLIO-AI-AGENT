import { useState, useRef } from 'react'
import portfolioData from '../portfolioData'

function AIAgent() {
  const recognitionRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [input, setInput] = useState('')

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hi! I'm Prajwal's AI assistant. Ask me about his projects, skills, experience, or education."
    }
  ])

  const getLocalResponse = (question) => {
  const query = question.toLowerCase()
if (
  query.includes('show about') ||
  query.includes('open about') ||
  query.includes('show about me') ||
  query.includes('open about me')
) {
  document.getElementById('about')?.scrollIntoView({
    behavior: 'smooth'
  })

  return 'Opening Prajwal’s About section for you.'
}
  if (
  query.includes('show my skills') ||
  query.includes('open my skills') ||
  query.includes('show skills') ||
  query.includes('open skills')
) {
  document.getElementById('skills')?.scrollIntoView({
    behavior: 'smooth'
  })

  return 'Opening Prajwal’s skills for you.'
}

if (query.includes('skill')) {
  return `Prajwal's key skills include ${portfolioData.skills.join(', ')}.`
}

  if (query.includes('who') || query.includes('about prajwal')) {
    return `${portfolioData.name} is an ${portfolioData.title}. He is an ${portfolioData.education.branch} graduate with a strong interest in Artificial Intelligence, Machine Learning, and Data Analytics.`
  }

 if (
  query.includes('show my experience') ||
  query.includes('open my experience') ||
  query.includes('show experience') ||
  query.includes('open experience')
) {
  document.getElementById('experience')?.scrollIntoView({
    behavior: 'smooth'
  })

  return 'Opening Prajwal’s experience for you.'
}

if (query.includes('experience') || query.includes('intern')) {
  return `Prajwal worked as an ${portfolioData.experience.role} at ${portfolioData.experience.company} from ${portfolioData.experience.duration}. ${portfolioData.experience.description}`
}

    if (
  query.includes('show my projects') ||
  query.includes('open my projects') ||
  query.includes('show projects') ||
  query.includes('open projects')
) {
  document.getElementById('projects')?.scrollIntoView({
    behavior: 'smooth'
  })

  return 'Opening Prajwal’s projects for you.'
}

if (query.includes('project')) {
  const projectNames = portfolioData.projects
    .map((project) => project.name)
    .join(', ')

  return `Prajwal has worked on these projects: ${projectNames}.`
}

    if (
  query.includes('open my github') ||
  query.includes('open github') ||
  query.includes('show my github')
) {
  window.open(portfolioData.links.github, '_blank')

  return 'Opening Prajwal’s GitHub for you.'
}

if (query.includes('github')) {
  return `Prajwal's GitHub: ${portfolioData.links.github}`
}

    if (query.includes('linkedin')) {
      return `Prajwal's LinkedIn: ${portfolioData.links.linkedin}`
    }

    if (
  query.includes('open my cv') ||
  query.includes('open cv') ||
  query.includes('show my cv') ||
  query.includes('resume')
) {
  window.open(portfolioData.links.cv, '_blank')

  return 'Opening Prajwal’s CV for you.'
}
    return `I can tell you about Prajwal's skills, experience, education, projects, GitHub, LinkedIn, or CV.`
  }

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition

    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser.')
      return
    }

    const recognition = new SpeechRecognition()

    recognition.lang = 'en-US'
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onstart = () => {
      setIsListening(true)
    }

    recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript
  const response = getLocalResponse(transcript)

speakResponse(response)

  setInput(transcript)

  setMessages((prev) => [
    ...prev,
    {
      role: 'user',
      text: transcript
    },
    {
      role: 'assistant',
      text: response
    }
  ])
}

    recognition.onerror = () => {
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognitionRef.current = recognition
    recognition.start()
  }
const speakResponse = (text) => {
  if (!('speechSynthesis' in window)) {
    return
  }

  window.speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(text)

  utterance.lang = 'en-US'
  utterance.rate = 1
  utterance.pitch = 1

  window.speechSynthesis.speak(utterance)
}
  const handleSend = () => {
    const message = input.trim()

    if (!message) return
const response = getLocalResponse(message)

speakResponse(response)
    setMessages((prev) => [
      ...prev,
      {
        role: 'user',
        text: message
      },
      {
        role: 'assistant',
        text: response
      }
    ])

    setInput('')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <>
      <button
        className="ai-agent-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI assistant"
      >
        ✨ AI
      </button>

      {isOpen && (
        <div className="ai-agent-panel">
          <div className="ai-agent-header">
            <div>
              <h3>Prajwal's AI Assistant</h3>
              <span>Ask me about Prajwal</span>
            </div>

            <button
              className="ai-agent-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close AI assistant"
            >
              ×
            </button>
          </div>

          <div className="ai-agent-body">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`ai-message ${
                  message.role === 'user'
                    ? 'ai-message-user'
                    : 'ai-message-assistant'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="ai-agent-input-area">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={
                isListening
                  ? 'Listening...'
                  : 'Ask me anything...'
              }
            />

            <button
              onClick={startListening}
              className={isListening ? 'listening' : ''}
              aria-label="Use voice input"
            >
              🎙️
            </button>

            <button
              onClick={handleSend}
              aria-label="Send message"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default AIAgent