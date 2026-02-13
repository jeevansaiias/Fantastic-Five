import { useEffect } from 'react'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import LoveLetter from './components/LoveLetter'
import Gallery from './components/Gallery'
import Surprise from './components/Surprise'
import FloatingHearts from './components/FloatingHearts'
import './App.css'

function App() {
  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <FloatingHearts />
      <Hero />
      <Timeline />
      <LoveLetter />
      <Gallery />
      <Surprise />
      <footer className="footer">
        <p>Made with 💕 for my forever person</p>
        <p className="footer-sub">Fantastic Five, 5 years and counting...</p>
      </footer>
    </div>
  )
}

export default App
