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
    Explore my AI, Machine Learning, and Data Analytics projects.
    </p>
    <div className="project-card project-card-1">
    <h3>Personal Finance Anomaly Detector</h3>

    <p>
    An AI-powered machine learning application that detects
    unusual financial transactions using Isolation Forest.
    </p>
    <div className="project-tech">
    <div className="project-actions">
  <a
    href="https://github.com/prajwalsortur"
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
    <span>Python</span>
    <span>Pandas</span>
    <span>Scikit-learn</span>
    <span>Streamlit</span>
    <span>Gemini AI</span>
    </div>
    </div>
    <div className="project-card project-card-2">
    <h3>Food Waste Analytics</h3>

    <p>
    A data analytics and machine learning dashboard for analyzing
    restaurant food waste, identifying patterns, and generating
    actionable insights.
    </p>
    <div className="project-tech">
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
    <span>Python</span>
    <span>Pandas</span>
    <span>Scikit-learn</span>
    <span>Streamlit</span>
    <span>Power BI</span>
    </div>
    </div>
    <div className="project-card project-card-3">
    <h3>E-Commerce Sales & Customer Behaviour Analytics</h3>

    <p>
    A data analytics project using Python, SQL, and Power BI to
    analyze sales performance, customer behaviour, and business trends.
    </p>
    <div className="project-tech">
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