
import { useEffect } from 'react'
import gsap from 'gsap'

function Hero() {
  useEffect(() => {
    const timeline = gsap.timeline()

    timeline
      .fromTo(
        '.hero-greeting',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo(
        '.hero-title',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(
        '.hero-buttons',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.3'
      )

    gsap.to('.hero-background', {
      scale: 1.08,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    return () => {
      timeline.kill()
      gsap.killTweensOf('.hero-background')
    }
  }, [])

  return (
    <section className="hero">
  <div className="hero-background" />

      {/* Provides subtle contrast while preserving the image colors. */}
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-greeting">W E L C O M E !</p>

        <h1 className="hero-title">PRAJWAL SORTUR</h1>

        <h2 className="hero-subtitle">
          AI/ML Engineer | Data Science | Generative AI &amp; LLM Applications
        </h2>

        <div className="hero-buttons">
          <button
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
            Explore My Work
          </button>

          <button
            onClick={() => window.open('/Prajwal_Sortur_CV.pdf', '_blank')}
          >
            View CV
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
