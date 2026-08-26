import { useState, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import portfolioData from '../portfolioData'

function AIAgent() {
  const recognitionRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [input, setInput] = useState('')

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hi! I'm Prajwal's AI assistant. Ask me about his projects, skills, experience, education, or anything else about his portfolio."
    }
  ])

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

  const handleLocalAction = (question) => {
  const query = question.toLowerCase().trim()

  // About
  if (
  query === 'about' ||
  query.includes('about me') ||
  query.includes('who is prajwal') ||
  query.includes('tell me about prajwal') && !query.includes('project') && !query.includes('skill') && !query.includes('experience')
) {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    })

    return "Opening Prajwal's About section for you."
  }

  // Skills
  if (
    query.includes('skills') ||
    query.includes('skill set') ||
    query.includes('technologies') ||
    query.includes('technical skills')
  ) {
    document.getElementById('skills')?.scrollIntoView({
      behavior: 'smooth'
    })

    return "Opening Prajwal's skills for you."
  }

  // Education
  if (
    query.includes('education') ||
    query.includes('degree') ||
    query.includes('qualification') ||
    query.includes('college') ||
    query.includes('university') ||
    query.includes('study')
  ) {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    })

    return "Opening Prajwal's education details for you."
  }
  // Experience
  if (
    query.includes('experience') ||
    query.includes('internship') ||
    query.includes('work experience') ||
    query.includes('professional experience')
  ) {
    document.getElementById('experience')?.scrollIntoView({
      behavior: 'smooth'
    })

    return "Opening Prajwal's experience for you."
  }

  // Projects
  if (
  query.includes('projects') ||
  query.includes('project') ||
  query.includes('portfolio projects') ||
  query.includes('my work') ||
  query.includes('your work') ||
  query.includes('show work')
) {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    })

    return "Opening Prajwal's projects for you."
  }

  // GitHub
  if (
    query.includes('github') ||
    query.includes('github profile') ||
    query.includes('github account')
  ) {
    window.open(portfolioData.links.github, '_blank')

    return "Opening Prajwal's GitHub for you."
  }

  // LinkedIn
  if (
    query.includes('linkedin') ||
    query.includes('linkedin profile')
  ) {
    window.open(portfolioData.links.linkedin, '_blank')

    return "Opening Prajwal's LinkedIn profile for you."
  }

  // CV / Resume
  if (
    query.includes('cv') ||
    query.includes('resume') ||
    query.includes('curriculum vitae')
  ) {
    window.open(portfolioData.links.cv, '_blank')

    return "Opening Prajwal's CV for you."
  }

  return null
}

  const getPortfolioAnswer = (question) => {
    const query = question.toLowerCase().trim()

    if (
      (query.includes('what are prajwal') && query.includes('skills')) ||
      query.includes('what skills') ||
      query.includes('skill set')
    ) {
      return `Prajwal's key skills include ${portfolioData.skills.join(', ')}.`
    }

    if (
      (query.includes('what') && query.includes('project')) ||
      (query.includes('tell me about') && query.includes('project'))
    ) {
      return portfolioData.projects
        .map(
          (project) =>
            `**${project.name}** - ${project.description} Technologies: ${project.technologies.join(', ')}.`
        )
        .join('\n\n')
    }

    if (
      query.includes('education') ||
      query.includes('degree') ||
      query.includes('qualification')
    ) {
      return `Prajwal completed a ${portfolioData.education.degree} in ${portfolioData.education.branch}.`
    }

    if (
      query.includes('experience') ||
      query.includes('internship') ||
      query.includes('worked')
    ) {
      return `Prajwal worked as an ${portfolioData.experience.role} at ${portfolioData.experience.company} during ${portfolioData.experience.duration}. ${portfolioData.experience.description}`
    }

    return null
  }
  const askBackend = async (question) => {
    try {
      setIsLoading(true)

      const response = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          message: question
        })
      })

      if (!response.ok) {
        throw new Error('Backend request failed')
      }

      const data = await response.json()

      return data.response
    } catch (error) {
      console.error('AI backend error:', error)

      return "I'm having trouble connecting to Prajwal's AI backend right now."
    } finally {
      setIsLoading(false)
    }
  }

  const processMessage = async (message) => {
    const portfolioAnswer = getPortfolioAnswer(message)
    const localActionResponse = portfolioAnswer ? null : handleLocalAction(message)

    setMessages((prev) => [
      ...prev,
      {
        role: 'user',
        text: message
      }
    ])

    setInput('')

    let response

    if (localActionResponse) {
      response = localActionResponse
    } else if (portfolioAnswer) {
      response = portfolioAnswer
    } else {
      response = await askBackend(message)
    }

    setMessages((prev) => [
      ...prev,
      {
        role: 'assistant',
        text: response
      }
    ])

    speakResponse(response)
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

      setInput(transcript)

      processMessage(transcript)
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

  const handleSend = () => {
    const message = input.trim()

    if (!message || isLoading) {
      return
    }

    processMessage(message)
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
        &#10024; AI
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
              &#10005;
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
                <ReactMarkdown
  components={{
    a: ({ node, ...props }) => (
      <a
        {...props}
        target="_blank"
        rel="noopener noreferrer"
      />
    )
  }}
>
  {message.text}
</ReactMarkdown>
              </div>
            ))}

            {isLoading && (
              <div className="ai-message ai-message-assistant">
                Thinking...
              </div>
            )}
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
              &#127908;
            </button>

            <button
              onClick={handleSend}
              aria-label="Send message"
              disabled={isLoading}
            >
              &#10148;
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default AIAgent