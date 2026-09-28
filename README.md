# AI-Powered Voice Portfolio Agent

An interactive AI-powered personal portfolio built with **React, Vite, FastAPI, and Groq**. The portfolio combines a modern personal website with a conversational AI agent that can answer questions about my background, skills, projects, experience, and education.

## Live Demo

**Portfolio:** https://prajwal-ai-portfolio.vercel.app/

**Backend API:** https://portfolio-ai-agent-anyb.onrender.com

**GitHub:** https://github.com/prajwalsortur/PORTFOLIO-AI-AGENT

---

## Features

* 🤖 AI-powered conversational portfolio agent
* 🎙️ Voice input using browser Speech Recognition
* 🔊 Voice responses using browser Speech Synthesis
* 💬 Interactive AI chat interface
* 🧭 Voice-based portfolio navigation
* 📂 Projects, skills, experience, and education sections
* 🎨 Animated and interactive portfolio interface
* 📱 Responsive desktop and mobile design
* 🔗 Direct links to professional profiles
* 📄 Downloadable CV
* ⚡ React + Vite frontend
* 🚀 FastAPI backend
* ☁️ Production deployment with Vercel and Render

---

## How It Works

The portfolio uses a React frontend connected to a FastAPI backend. The backend communicates with the Groq API to generate AI responses.

```text
Visitor / Recruiter
        |
        v
React + Vite Frontend
(Portfolio + AI Agent)
        |
        v
FastAPI Backend
(API + AI Integration)
        |
        v
Groq
(LLM Response Generation)
```

Voice input and voice output are handled directly by the browser using the Web Speech APIs.

---

## Tech Stack

### Frontend

* React
* Vite
* JavaScript
* CSS
* GSAP
* React Markdown

### Backend

* Python
* FastAPI
* Uvicorn
* Groq API
* python-dotenv
* python-multipart

### Browser APIs

* Web Speech API
* Speech Recognition
* Speech Synthesis API

### Deployment

* Vercel — Frontend
* Render — Backend

### Development Tools

* Git
* GitHub
* VS Code
* npm

---

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

---

## Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/prajwalsortur/PORTFOLIO-AI-AGENT.git
cd PORTFOLIO-AI-AGENT
```

### 2. Start the Backend

```bash
cd backend
```

Create a Python virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```powershell
venv\Scripts\Activate.ps1
```

Install the dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file inside the `backend` folder:

```env
GROQ_API_KEY=your_groq_api_key_here
```

Start the FastAPI server:

```bash
uvicorn main:app --reload
```

The backend will run at:

```text
http://127.0.0.1:8000
```

### 3. Start the Frontend

Open another terminal:

```powershell
cd frontend
npm install
npm run dev
```

The frontend will run at:

```text
http://localhost:5173
```

---

## Environment Variables

The backend requires:

```env
GROQ_API_KEY=your_groq_api_key_here
```

The API key must **never** be committed to GitHub.

The backend `.env` file is excluded from Git using:

```text
backend/.gitignore
```

---

## Voice Interaction

The AI agent supports browser-based voice interaction.

Users can:

* Ask questions about the portfolio
* Ask about projects and technical skills
* Ask about experience and education
* Navigate through portfolio sections using voice commands
* Receive spoken AI responses

Voice functionality depends on browser support for the Web Speech APIs.

---

## Deployment

The application uses a separate frontend and backend architecture.

```text
React + Vite
     |
     v
   Vercel
     |
     v
FastAPI Backend
     |
     v
   Render
     |
     v
    Groq
```

The frontend is deployed on **Vercel**, while the FastAPI backend is deployed on **Render**.

The `GROQ_API_KEY` is stored as an environment variable on the backend deployment and is not included in the repository.

---

## Purpose

This project was created to go beyond a traditional static portfolio by combining a personal website with an interactive AI assistant.

The goal is to allow recruiters and visitors to explore my:

* Background
* Technical skills
* Projects
* Experience
* Education

through both a conventional portfolio interface and a conversational AI experience.

---

## Author

**Prajwal Sortur**

Bachelor of Engineering — Electronics & Communication Engineering

### Areas of Interest

* Artificial Intelligence
* Machine Learning
* Generative AI
* Data Science
* Data Analytics
* Python
* Interactive Web Applications

---

## Project Status

**Deployed and actively maintained.**

The portfolio is available online with a React frontend deployed on Vercel and a FastAPI backend deployed on Render.
