import { useEffect, useState, useRef } from 'react'
import './App.css'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Navbar from './components/Navbar'


 function App() {
  const [scrollY, setScrollY] = useState(0)
  const projectsRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main>
      <Navbar />
      <div
  className="galaxy-background"
  style={{
    transform: `translateY(${scrollY * 0.18}px) scale(1.12)`,
  }}
/>
      <div
  className="scroll-planet"
  style={{
    transform: `translate(${scrollY * -0.35}px, ${scrollY * 0.15}px) rotate(${scrollY * 0.08}deg)`,
  }}
>
  <img src="/planet.png" alt="Planet" />
</div>
<div
  className="scroll-planet planet-two"
  style={{
    transform: `translate(${scrollY * 0.3}px, ${scrollY * 0.08}px) rotate(${scrollY * -0.06}deg)`,
    opacity: Math.min(Math.max((scrollY - 500) / 400, 0), 1),
  }}
>
  <img src="/planet2.png" alt="Planet 2" />
</div>
<div
  className="scroll-planet planet-three"
  style={{
    transform: `translate(${scrollY * -0.22}px, ${scrollY * 0.12}px) rotate(${scrollY * 0.05}deg)`,
    opacity: Math.min(Math.max((scrollY - 1200) / 400, 0), 1),
  }}
>
  <img src="/planet3.png" alt="Planet 3" />
</div>
<div
  className="scroll-planet planet-four"
  style={{
    transform: `translate(${scrollY * 0.28}px, ${scrollY * 0.1}px) rotate(${scrollY * -0.04}deg)`,
    opacity: projectsRef.current
      ? Math.min(
          Math.max(
            (scrollY - projectsRef.current.offsetTop + 300) / 400,
            0
          ),
          1
        )
      : 0,
  }}
>
  <img src="/planet4.png" alt="Planet 4" />
</div>
      <div
  style={{
    transform: `translateY(${scrollY * -0.25}px) scale(${Math.max(
      1 - scrollY / 3000,
      0.85
    )})`,
    opacity: Math.max(1 - scrollY / 700, 0),
  }}
>
  <Hero />
</div>

      <div
  style={{
    opacity: Math.min(scrollY / 500, 1),
    transform: `translateY(${Math.max(150 - scrollY * 0.15, 0)}px)`,
  }}
>
  <About />
</div>

      <Skills />

      <div ref={projectsRef}>
      <Projects />
      </div>

      <Experience />

      <Contact />
    </main>
  )
}

export default App