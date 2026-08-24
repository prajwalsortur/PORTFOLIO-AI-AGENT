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