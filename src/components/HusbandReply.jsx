import { useState, useRef, useEffect } from 'react'
import './HusbandReply.css'

const PLAYLIST = [
    `${import.meta.env.BASE_URL}audio/time-and-distance.mp3`,
    `${import.meta.env.BASE_URL}audio/mana-katha.mp3`,
    `${import.meta.env.BASE_URL}audio/life-of-viraj.mp3`,
    `${import.meta.env.BASE_URL}audio/viraj-theme.mp3`,
    `${import.meta.env.BASE_URL}audio/full-circle.mp3`,
]

function HusbandReply() {
    const [isOpen, setIsOpen] = useState(false)
    const audioRef = useRef(null)
    const currentTrackRef = useRef(0)

    // Play a specific track
    const playTrack = (trackIndex) => {
        if (trackIndex >= PLAYLIST.length) return
        
        // Stop current audio if any
        if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current = null
        }
        
        // Create and play new audio
        const audio = new Audio(PLAYLIST[trackIndex])
        audio.volume = 0.7
        audioRef.current = audio
        currentTrackRef.current = trackIndex
        
        // When track ends, play next
        audio.onended = () => {
            playTrack(trackIndex + 1)
        }
        
        // Handle errors
        audio.onerror = () => {
            console.log('Audio error for track:', trackIndex)
        }
        
        audio.play().catch(err => {
            console.log('Play failed:', err)
        })
    }

    // Handle opening the letter
    const handleOpen = () => {
        setIsOpen(true)
        // Start playing from first track
        playTrack(0)
    }

    // Handle closing the letter
    const handleClose = () => {
        setIsOpen(false)
        if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current = null
        }
        currentTrackRef.current = 0
    }

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
            }
        }
    }, [])

    return (
        <section className="husband-reply" id="husband-reply">
            <div className="reveal">
                <h2 className="section-title">My Reply to You</h2>
                <p className="section-subtitle">Building Our Kingdom</p>
            </div>

            <div className="reveal">
                <div className={`reply-wrapper ${isOpen ? 'opened' : ''}`}>
                    {!isOpen && (
                        <button
                            className="reply-envelope"
                            onClick={handleOpen}
                            aria-label="Open reply letter"
                        >
                            <div className="reply-envelope-body">
                                <div className="reply-envelope-seal">👑</div>
                                <p className="reply-envelope-prompt">Read My Heart</p>
                            </div>
                        </button>
                    )}

                    {isOpen && (
                        <div className="reply-container">
                            <div className="reply-letter">
                                <p className="reply-greeting">To my Wifey,</p>

                                <p className="reply-body">
                                    You wrote about our last five years, but I need to tell you about one moment. 
                                    January 2024. When the world came crashing down, when I lost my job over lies 
                                    I couldn't control, when I stood at what felt like the edge of everything... 
                                    you were the only reason I didn't fall. 🥺
                                </p>

                                <p className="reply-body">
                                    You didn't just stand beside me. You became my foundation. When I said I wanted 
                                    to build something of our own   something no one could ever take away   you didn't 
                                    laugh. You didn't hesitate. You looked at my wild dream and said <em>"let's do it."</em> 🚀
                                </p>

                                <p className="reply-body">
                                    I know I haven't made this journey easy. The AMC trades I held too long. The Tesla 
                                    decisions driven by panic instead of patience. The loans I took in desperation, 
                                    thinking I could fix everything overnight. 📉 I trusted voices that led me astray, 
                                    joined rooms that cost us dearly, and watched hard-earned savings slip through my fingers. 
                                    But in every moment of failure, you saw something no one else did   not the mistakes, 
                                    but the man desperately trying to build us a future. 🛤️
                                </p>

                                <p className="reply-body">
                                    I know I'm distant right now. Ten hours a day in this room, drowning in charts and 
                                    options chains, pouring everything I have into cracking this code. 💻 It feels like 
                                    assembling a rocket ship with no manual, and I know it consumes me. I know I leave 
                                    this room physically but sometimes stay gone mentally. I know that's not fair to you. 🧠
                                </p>

                                <p className="reply-body">
                                    I hear you when you say I've become unromantic. I hear you when you miss the dates, 
                                    the flowers, the man who used to plan surprises just to see you smile. 🌹 It breaks 
                                    me that I can't be him right now   that this mission has swallowed so much of who 
                                    I used to be. But please, my love, understand this: <strong>I am fighting this hard 
                                    so you never have to fight at all. Every sacrifice now is a promise of freedom later. 💎</strong>
                                </p>

                                <p className="reply-body">
                                    It destroys me when anyone thinks you're doing "maid duty." As if you're waiting 
                                    on me. As if this is all there is. I'm working myself to the bone so I can give 
                                    you the world you deserve   so I can wake you up in Paris for no reason, so I can 
                                    fill our home with everything you've ever wanted, so I can treat you like the queen 
                                    you've always been. 👑 I never wanted handouts from anyone. I just wanted to build 
                                    a kingdom worthy of you. 🏰
                                </p>

                                <p className="reply-body">
                                    I'm sorry I'm not planning those cute trips right now. Thank you for stepping in, 
                                    for carrying that weight too. I'm sorry I get defensive when you call me out   
                                    I'm fighting battles out there all day, and sometimes I forget to take the armor 
                                    off when I walk through our door. 😔 I promise I'm working on that. 🛡️
                                </p>

                                <p className="reply-body reply-highlight">
                                    But here's what I need you to know, deep in your bones: If you think I love you 
                                    at 100%, you're wrong. <strong>I love you 3000%. ❤️</strong>
                                </p>

                                <p className="reply-body">
                                    I may not have your patience, but I have your back. I will fight anyone who 
                                    speaks against you   the world, strangers, even my own family. I know I'm intense. 
                                    I know I'm imperfect. But I am entirely, completely, irrevocably yours. 💍
                                </p>

                                <p className="reply-body">
                                    Give me just a little more time to finish what we started. The romance isn't gone   
                                    it's transformed. The flowers are in the foundation I'm laying. The surprises are 
                                    in every late night, every chart analyzed, every strategy refined. My love is in 
                                    the work now. My love is building our forever. 🏗️
                                </p>

                                <p className="reply-body">
                                    Thank you for loving me through the chaos. Thank you for choosing me   not just 
                                    on the easy days, but on every single one. Thank you for believing in us when 
                                    I barely believed in myself. 💑
                                </p>

                                <p className="reply-closing">With everything I am and everything I'm becoming,</p>
                                <p className="reply-signature">
                                    Your stubborn, devoted, forever-working-on-it <span className="signature-initial">J</span> ❤️
                                </p>
                                <p className="reply-postscript">P.S.   The kingdom is coming. And you're already its queen. 👑</p>
                            </div>

                            <button className="close-reply" onClick={handleClose}>
                                <span>Close Reply</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default HusbandReply
