# AI-Powered Voice Portfolio Agent

An interactive AI-powered personal portfolio built with **React, Vite, FastAPI, and Groq**. It combines a personal portfolio website with a conversational AI assistant that helps visitors explore my background, technical skills, projects, experience, and education.

## Live Demo

- **Portfolio:** https://prajwal-ai-portfolio.vercel.app/
- **Backend API:** https://portfolio-ai-agent-anyb.onrender.com
- **GitHub Repository:** https://github.com/prajwalsortur/PORTFOLIO-AI-AGENT

## Features

- AI-powered conversational portfolio assistant
- Voice input using browser Speech Recognition
- Spoken responses using browser Speech Synthesis
- Interactive AI chat interface
- Voice-based navigation between portfolio sections
- Dedicated sections for projects, skills, experience, education, and contact
- Animated and interactive user interface
- Responsive design for desktop and mobile devices
- Links to professional profiles
- Downloadable CV
- React and Vite frontend
- FastAPI backend integrated with the Groq API
- Frontend and backend deployed using Vercel and Render

## How It Works

The React frontend displays the portfolio and provides the AI chat interface. When a visitor asks a question, the frontend sends it to the FastAPI backend, which communicates with the Groq API to generate a response.

Voice input and spoken responses are handled by the browser using the Web Speech APIs.

```text
Visitor / Recruiter
        |
        v
React + Vite Frontend
(Portfolio + AI Chat Interface)
        |
        v
FastAPI Backend
(API + AI Integration)
        |
        v
Groq API
(LLM Response Generation)
        |
        v
AI Response to the Visitor
```

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- CSS
- GSAP
- React Markdown

### Backend
- Python
- FastAPI
- Uvicorn
- Groq API
- python-dotenv
- python-multipart

### Browser APIs
- Web Speech API
- Speech Recognition
- Speech Synthesis

### Deployment
- **Vercel:** Frontend hosting
- **Render:** Backend hosting

### Development Tools
- Git
- GitHub
- Visual Studio Code
- npm

## Project Structure

```text
AI-Powered-Voice-Portfolio-Agent/
|
|-- backend/
|   |-- main.py
|   |-- requirements.txt
|   `-- .gitignore
|
|-- frontend/
|   |-- public/
|   |   |-- fire.mp4
|   |   |-- galaxy-bg.jpg
|   |   |-- planet.png
|   |   |-- planet2.png
|   |   |-- planet3.png
|   |   |-- planet4.png
|   |   `-- Prajwal_Sortur_CV.pdf
|   |
|   `-- src/
|       |-- components/
|       |   |-- AIAgent.jsx
|       |   |-- About.jsx
|       |   |-- Contact.jsx
|       |   |-- Experience.jsx
|       |   |-- Hero.jsx
|       |   |-- Navbar.jsx
|       |   |-- Projects.jsx
|       |   `-- Skills.jsx
|       |
|       |-- App.jsx
|       |-- App.css
|       |-- index.css
|       `-- portfolioData.js
|
|-- render.yaml
`-- README.md

```

## Author

**Prajwal Sortur**

- **GitHub:** https://github.com/prajwalsortur
- **Portfolio:** https://prajwal-ai-portfolio.vercel.app/

---

If you find this project interesting, feel free to explore the repository and try the live demo.
