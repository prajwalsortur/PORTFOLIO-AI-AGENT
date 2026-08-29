import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Projects() {

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const cards = gsap.utils.toArray('.project-card')

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [])

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <p>
        Selected projects across AI Engineering, Machine Learning, and Data Science.
      </p>

      <div className="project-card project-card-1">
        <h3>AI-Powered Voice Portfolio Agent</h3>

        <p>
          An interactive AI portfolio assistant that uses voice and text
          interactions to answer questions about my skills, projects,
          education, and experience.
        </p>

        <div className="project-actions">
          <a
            href="https://github.com/prajwalsortur/PORTFOLIO-AI-AGENT.git"
            className="project-button"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://prajwal-ai-portfolio.vercel.app/"
            className="project-button"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>

        <div className="project-tech">
          <span>React</span>
          <span>FastAPI</span>
          <span>Groq</span>
          <span>LLMs</span>
          <span>Voice AI</span>
          <span>GSAP</span>
        </div>
      </div>

      <div className="project-card project-card-2">
        <h3>Personal Finance Anomaly Detector</h3>

        <p>
          A machine learning application that analyzes financial transactions
          and identifies unusual spending patterns using the Isolation Forest
          anomaly detection algorithm.
        </p>

        <div className="project-actions">
          <a
            href="https://github.com/prajwalsortur/PERSONAL-FINANCE-ANOMALY-DETECTOR.git"
            className="project-button"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://prajwalsortur.streamlit.app/"
            className="project-button"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>

        <div className="project-tech">
          <span>Python</span>
          <span>Pandas</span>
          <span>Scikit-learn</span>
          <span>Isolation Forest</span>
          <span>Streamlit</span>
          <span>Gemini AI</span>
        </div>
      </div>

      <div className="project-card project-card-3">
        <h3>Food Waste Analytics</h3>

        <p>
          A data analytics and machine learning application that analyzes
          restaurant food waste, identifies patterns, and presents insights
          through interactive dashboards.
        </p>

        <div className="project-actions">
          <a
            href="https://github.com/prajwalsortur/FOOD-WASTE-ANALYTICS-FOR-RESTAURANT.git"
            className="project-button"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="project-tech">
          <span>Python</span>
          <span>Pandas</span>
          <span>Scikit-learn</span>
          <span>Streamlit</span>
          <span>Power BI</span>
        </div>
      </div>

      <div className="project-card project-card-4">
        <h3>E-Commerce Sales & Customer Behaviour Analytics</h3>

        <p>
          A data analytics project that uses Python, SQL, and Power BI to
          analyze sales performance, customer behaviour, and business trends
          to generate actionable insights.
        </p>

        <div className="project-actions">
          <a
            href="https://github.com/prajwalsortur/E-commerce-sales-and-customer-behaviour-analytics-system.git"
            className="project-button"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="project-tech">
          <span>Python</span>
          <span>SQL</span>
          <span>Pandas</span>
          <span>Power BI</span>
        </div>
      </div>
    </section>
  )
}

export default Projects
