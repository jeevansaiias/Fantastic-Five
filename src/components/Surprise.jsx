import { useState, useCallback } from 'react'
import './Surprise.css'

function Surprise() {
    const [showConfetti, setShowConfetti] = useState(false)
    const [confettiPieces, setConfettiPieces] = useState([])
    const [heartClicked, setHeartClicked] = useState(false)

    const triggerConfetti = useCallback(() => {
        const heartEmojis = ['❤️', '💕', '💗', '💖', '🩷', '💘', '💝']
        const pieces = Array.from({ length: 100 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 1.5,
            duration: Math.random() * 2 + 3,
            size: Math.random() * 14 + 18,
            color: ['#E91E63', '#FFD700', '#FF6B6B', '#FFB6C1', '#9C27B0', '#FF9800'][
                Math.floor(Math.random() * 6)
            ],
            rotation: Math.random() * 360,
            type: Math.random() > 0.3 ? 'heart' : 'confetti',
            emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        }))
        setConfettiPieces(pieces)
        setShowConfetti(true)
        setHeartClicked(true)

        setTimeout(() => setShowConfetti(false), 6000)
    }, [])

    return (
        <section className="surprise" id="surprise">
            <div className="surprise-glow" />
            <div className="surprise-bg-photo">
                <img src={`${import.meta.env.BASE_URL}photos/valentines-setup.jpg`} alt="" className="surprise-bg-img" />
            </div>

            {showConfetti && (
                <div className="confetti-container">
                    {confettiPieces.map((piece) => (
                        <div
                            key={piece.id}
                            className={`confetti-piece ${piece.type === 'heart' ? 'heart-piece' : ''}`}
                            style={{
                                left: `${piece.left}%`,
                                animationDelay: `${piece.delay}s`,
                                animationDuration: `${piece.duration}s`,
                                width: piece.type === 'heart' ? `${piece.size + 4}px` : `${piece.size}px`,
                                height: piece.type === 'heart' ? `${piece.size + 4}px` : `${piece.size * 1.5}px`,
                                backgroundColor: piece.type === 'heart' ? 'transparent' : piece.color,
                                transform: `rotate(${piece.rotation}deg)`,
                                fontSize: piece.type === 'heart' ? `${piece.size + 4}px` : undefined,
                            }}
                        >
                            {piece.type === 'heart' ? piece.emoji : ''}
                        </div>
                    ))}
                </div>
            )}

            <div className="reveal">
                <div className="surprise-emoji">🎉</div>
                <h2 className="section-title">Happy Valentine's Day</h2>
                <p className="section-subtitle">To the one who made me believe in forever</p>
            </div>

            <div className="surprise-message reveal">
                <p className="surprise-text">
                    You turned a LinkedIn message into a love story.
                    <br />
                    You turned strangers into soulmates.
                    <br />
                    You turned a house into a home.
                    <br />
                    You turned me into your wife.
                </p>

                <button
                    className={`heart-button ${heartClicked ? 'clicked' : ''}`}
                    onClick={triggerConfetti}
                    aria-label="Surprise heart button"
                >
                    <span className="heart-icon">💝</span>
                    <span className="heart-text">{heartClicked ? 'I Love You So Much 💕' : 'Tap for a surprise'}</span>
                </button>
            </div>

            {heartClicked && (
                <div className="surprise-photo-reveal reveal visible">
                    <div className="surprise-photo-frame">
                        <div className="surprise-photo-glow" />
                        <img
                            src={`${import.meta.env.BASE_URL}photos/surprise-couple.jpg`}
                            alt="Us together"
                            className="surprise-photo"
                        />
                    </div>
                    <p className="surprise-photo-caption">This is my favorite picture of us 💕</p>
                </div>
            )}

            <div className="surprise-footer reveal">
                <p className="forever-text">Five years down. Forever to go.</p>
                <p className="family-text">You, Me, Nemo & Taka 🐱🐱</p>
            </div>
        </section>
    )
}

export default Surprise
