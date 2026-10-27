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

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Install the following tools before starting:

- Python
- Node.js and npm
- Git
- A Groq API key

### 1. Clone the Repository

```bash
git clone https://github.com/prajwalsortur/PORTFOLIO-AI-AGENT.git
cd PORTFOLIO-AI-AGENT
```

### 2. Set Up the Backend

Navigate to the backend directory:

```powershell
cd backend
```

Create a Python virtual environment:

```powershell
python -m venv venv
```

Activate the virtual environment on Windows:

```powershell
.\venv\Scripts\Activate.ps1
```

Install the required dependencies:

```powershell
pip install -r requirements.txt
```

Create a `.env` file inside the `backend` directory and add your Groq API key:

```env
GROQ_API_KEY=your_groq_api_key_here
```

Start the FastAPI development server:

```powershell
uvicorn main:app --reload
```

The backend will be available at:

http://127.0.0.1:8000

You can access the interactive API documentation at:

http://127.0.0.1:8000/docs

### 3. Set Up the Frontend

Open a second terminal from the project root directory and run:

```powershell
cd frontend
npm install
npm run dev
```

The frontend will be available at:

http://localhost:5173

## Environment Variables

The backend requires the following environment variable:

```env
GROQ_API_KEY=your_groq_api_key_here
```

**Security note:** Never commit your actual API key to GitHub. Keep the `.env` file excluded from version control using `backend/.gitignore`. Configure the same environment variable in Render for production deployment.

## Voice Interaction

The portfolio assistant supports browser-based voice interaction.

Visitors can:

- Ask questions about my background and technical skills
- Explore my projects and experience
- Ask about my education
- Navigate portfolio sections using supported voice commands
- Listen to AI-generated responses

Voice features depend on browser compatibility and microphone permissions. Speech Recognition support may vary between browsers.

## Deployment Architecture

The application uses a separate frontend and backend architecture.

```text
Frontend: React + Vite
        |
        v
Vercel Hosting
        |
        v
FastAPI Backend
        |
        v
Render Hosting
        |
        v
Groq API
```

The frontend is hosted on Vercel, while the backend runs on Render. The backend uses the `GROQ_API_KEY` environment variable to communicate with the Groq API.

## Project Purpose

This project demonstrates how a traditional personal portfolio can be enhanced with conversational AI and voice interaction.

It allows recruiters and visitors to explore my background through a conventional website or interact with an AI assistant to learn about my:

- Technical skills
- Projects
- Internship experience
- Education
- Professional background

The project also provides practical experience with frontend development, backend API integration, AI-powered applications, browser speech APIs, and cloud deployment.

## Author

**Prajwal Sortur**

- **GitHub:** https://github.com/prajwalsortur
- **Portfolio:** https://prajwal-ai-portfolio.vercel.app/

---

If you find this project interesting, feel free to explore the repository and try the live demo.
