import os

from dotenv import load_dotenv
from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from groq import Groq

load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


PORTFOLIO_CONTEXT = """
You are Prajwal Sortur's AI portfolio assistant.

Use ONLY the following portfolio information when answering questions.

NAME:
Prajwal Sortur

TITLE:
AI & Machine Learning Enthusiast

EDUCATION:
Bachelor of Engineering in Electronics & Communication Engineering.

ABOUT:
Prajwal Sortur is an Electronics and Communication Engineering graduate
with a strong interest in Artificial Intelligence, Machine Learning,
and Data Analytics.

SKILLS:
Python, SQL, Machine Learning, Artificial Intelligence, Data Analytics,
Pandas, NumPy, Scikit-learn, Power BI, Streamlit, Git.

EXPERIENCE:
Applied AI Intern at Gleamator Technologies LLP, 2025-2026.
Worked on Python, SQL, data analytics, machine learning, Power BI,
and AI-based projects.

PROJECTS:

1. Personal Finance Anomaly Detector
An AI-powered machine learning application that detects unusual
financial transactions using Isolation Forest.
Technologies: Python, Pandas, Scikit-learn, Streamlit, Gemini AI.
Live Demo: https://prajwalsortur.streamlit.app/

2. Food Waste Analytics
A data analytics and machine learning dashboard for analyzing
restaurant food waste, identifying patterns, and generating
actionable insights.
Technologies: Python, Pandas, Scikit-learn, Streamlit, Power BI.

3. E-Commerce Sales & Customer Behaviour Analytics
A data analytics project using Python, SQL, and Power BI to analyze
sales performance, customer behaviour, and business trends.
Technologies: Python, SQL, Pandas, Power BI.

LINKS:
GitHub: https://github.com/prajwalsortur
LinkedIn: https://www.linkedin.com/in/prajwalsortur
CV: /Prajwal_Sortur_CV.pdf

INSTRUCTIONS:
- Answer professionally and naturally.
- Keep answers concise unless the user asks for more detail.
- Do not invent information that is not provided above.
- If the information is not available, clearly say that it is not
  available in Prajwal's portfolio.
- You are an AI portfolio assistant, not Prajwal himself.
"""


@app.get("/")
def root():
    return {"message": "Prajwal AI Portfolio Backend is running!"}


@app.get("/health")
def health():
    return {"status": "ok"}


groq_client = Groq(api_key=os.getenv("GROQ_API_KEY"))


@app.post("/chat")
def chat(message: str = Form(...)):

    prompt = f"""
{PORTFOLIO_CONTEXT}

USER QUESTION:
{message}

Answer the user's question using only the portfolio information above.
"""

    response = groq_client.chat.completions.create(
        model="openai/gpt-oss-20b",
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
        temperature=0.4,
        max_tokens=300,
    )

    return {"response": response.choices[0].message.content}
