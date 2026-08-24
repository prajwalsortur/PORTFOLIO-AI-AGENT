import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Contact() {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.fromTo(
      '.contact > *',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <section id="contact" className="contact">
      <h2>Let's Connect</h2>

      <p>
        Interested in working together or discussing an AI/ML opportunity?
      </p>

      <div className="contact-links">

        <a href="mailto:YOUR_EMAIL_HERE">
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/prajwalsortur"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/prajwalsortur"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

      </div>
    </section>
  )
}

export default Contact