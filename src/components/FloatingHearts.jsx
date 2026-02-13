import { useEffect, useState, useRef, useCallback } from 'react'

function FloatingHearts() {
    const [hearts, setHearts] = useState([])
    const heartId = useRef(0)

    const generateHeart = useCallback(() => {
        const id = heartId.current++
        const heart = {
            id,
            left: Math.random() * 100,
            size: Math.random() * 20 + 10,
            duration: Math.random() * 6 + 6,
            delay: 0,
            opacity: Math.random() * 0.3 + 0.1,
            emoji: ['💕', '💖', '💗', '❤️', '✨', '💝', '🌹'][Math.floor(Math.random() * 7)],
        }
        setHearts((prev) => [...prev.slice(-15), heart])
    }, [])

    useEffect(() => {
        // Generate initial hearts
        for (let i = 0; i < 8; i++) {
            setTimeout(() => generateHeart(), i * 800)
        }
        // Continue generating
        const interval = setInterval(generateHeart, 3000)
        return () => clearInterval(interval)
    }, [generateHeart])

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                pointerEvents: 'none',
                zIndex: 1,
                overflow: 'hidden',
            }}
        >
            {hearts.map((heart) => (
                <span
                    key={heart.id}
                    style={{
                        position: 'absolute',
                        left: `${heart.left}%`,
                        bottom: '-30px',
                        fontSize: `${heart.size}px`,
                        opacity: heart.opacity,
                        animation: `floatUp ${heart.duration}s linear forwards`,
                        pointerEvents: 'none',
                    }}
                >
                    {heart.emoji}
                </span>
            ))}
            <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: var(--opacity, 0.2);
          }
          50% {
            transform: translateY(-50vh) rotate(180deg) scale(1.1);
          }
          100% {
            transform: translateY(-110vh) rotate(360deg) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
        </div>
    )
}

export default FloatingHearts
