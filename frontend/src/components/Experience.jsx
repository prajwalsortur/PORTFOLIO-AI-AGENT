import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Experience() {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
  gsap.fromTo(
    '.experience-card',
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
        trigger: '.experience-card',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}, [])
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>

      <div className="experience-card">
        <h3>Applied AI Intern</h3>

        <h4>Gleamator Technologies LLP</h4>

        <p className="experience-duration">
          2025 - 2026
        </p>

        <p>
          Worked on Python, SQL, data analytics, machine learning,
          Power BI, and AI-based projects during my internship.
        </p>
      </div>
    </section>
  )
}

export default Experience
