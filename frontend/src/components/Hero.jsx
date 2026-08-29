import { useEffect } from 'react'
import gsap from 'gsap'

function Hero() {
    useEffect(() => {
  const timeline = gsap.timeline()

  timeline
    .fromTo(
      '.hero-greeting',
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }
    )
    .fromTo(
      '.hero-title',
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      },
      '-=0.3'
    )
    .fromTo(
      '.hero-subtitle',
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.5'
    )
    
    .fromTo(
      '.hero-buttons',
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.4'
    )
    gsap.to('.hero-background', {
    scale: 1.15,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
})
}, [])
  return (
    <section className="hero">

    <div className="hero-background"></div>
    <div className="hero-overlay"></div>
    <div className="hero-content">

        <p className="hero-greeting">
          Welcome ! 
        </p>

        <h1 className="hero-title">PRAJWAL SORTUR</h1>

<h2 className="hero-subtitle">
  AI/ML Engineer | Data Science | Generative AI & LLM Applications
</h2>


                <div className="hero-buttons">
          <button
            onClick={() => {
              document.getElementById('projects').scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            Explore My Work
          </button>

          <button
            onClick={() => {
              window.open('/Prajwal_Sortur_CV.pdf', '_blank')
            }}
          >
            View CV
          </button>
        </div>
<div className="hero-socials">

  <a
    href="https://www.linkedin.com/in/prajwalsortur"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.9c0-3.76-2-5.5-4.67-5.5-2.15 0-3.1 1.18-3.63 2.01V8.5H9.2V21h3.5v-6.19c0-1.63.31-3.2 2.33-3.2 1.99 0 2.02 1.86 2.02 3.31V21H21v-7.1Z" />
    </svg>
  </a>

  <a
    href="https://github.com/prajwalsortur"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.36 6.84 9.71.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.23-3.37-1.23-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.59 2.36 1.13 2.94.86.09-.67.35-1.13.64-1.39-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 9.17c.85 0 1.7.12 2.5.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.35 4.78-4.58 5.04.36.32.68.95.68 1.92v2.85c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
    </svg>
  </a>

</div>
        
        </div>

      
    </section>
  )
}

export default Hero

