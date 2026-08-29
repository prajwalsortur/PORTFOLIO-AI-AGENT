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
          Gained hands-on experience in Artificial Intelligence, Machine
          Learning, Data Analytics, and business intelligence through
          practical projects and applied problem-solving.
        </p>

        <div className="experience-skills">
          <span>Python</span>
          <span>SQL</span>
          <span>Pandas</span>
          <span>NumPy</span>
          <span>Machine Learning</span>
          <span>Power BI</span>
          <span>Data Analytics</span>
          <span>Generative AI</span>
        </div>
      </div>
    </section>
  )
}

export default Experience
