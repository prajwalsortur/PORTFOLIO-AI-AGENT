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
      '.hero-description',
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
        <div className="hero-content">

        <p className="hero-greeting">
          Welcome ! 
        </p>

        <h1>Prajwal Sortur</h1>

        <h2>
        AI & Machine Learning Enthusiast
        </h2>

        <p>
        Electronics & Communication Engineering graduate focused on
        building AI, Machine Learning, and Data Analytics solutions.
        </p>

        <div className="hero-buttons">
        <button onClick={() => {
  document.getElementById('projects').scrollIntoView({
    behavior: 'smooth'
  })
}}>
  Explore My Work
</button>
          <button>View CV</button>
        </div>

      </div>
    </section>
  )
}

export default Hero