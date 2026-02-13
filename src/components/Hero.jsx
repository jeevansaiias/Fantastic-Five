import { useState, useEffect } from 'react'
import './Hero.css'

function Hero() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => setLoaded(true), 300)
    }, [])

    const scrollToTimeline = () => {
        document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="hero" id="hero">
            <div className="hero-bg-overlay" />
            <div className="hero-stars" />

            <div className={`hero-content ${loaded ? 'loaded' : ''}`}>
                <div className="hero-badge">💕 5 Years Together 💕</div>
                <h1 className="hero-title">Fantastic Five</h1>
                <p className="hero-subtitle">Five years of love, laughter, and everything in between</p>

                {/* Featured Couple Photo */}
                <div className="hero-photo-frame">
                    <div className="hero-photo-glow" />
                    <div className="hero-photo-border">
                        <img
                            src={`${import.meta.env.BASE_URL}photos/couple-hero.jpg`}
                            alt="Our beautiful moment together"
                            className="hero-photo"
                        />
                    </div>
                    <div className="hero-photo-caption">Our love story 💕</div>
                </div>

                <div className="hero-year-display">
                    <span className="year-start">2021</span>
                    <span className="year-divider">
                        <span className="heart-line">♥ ♥ ♥ ♥ ♥</span>
                    </span>
                    <span className="year-end">2026</span>
                </div>
                <p className="hero-tagline">This is our story...</p>
            </div>

            <button className="scroll-indicator" onClick={scrollToTimeline} aria-label="Scroll to timeline">
                <span className="scroll-text">Explore Our Journey</span>
                <span className="scroll-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </span>
            </button>
        </section>
    )
}

export default Hero
