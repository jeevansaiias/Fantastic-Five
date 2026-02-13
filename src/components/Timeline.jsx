import './Timeline.css'

const milestones = [
    {
        year: 'Year 1 - 2021',
        title: 'The Day Everything Changed',
        description: 'It started with a LinkedIn message and ended with you driving all the way across Buffalo just to pick me up from the airport. We\'d known each other for years but never really spoken. And then suddenly, there you were. Standing there waiting for me like you\'d been waiting your whole life. That\'s the moment I knew.',
        emoji: '✈️',
        color: '#FFD700',
    },
    {
        year: 'Year 2 - 2022',
        title: 'Our First Home & Our First Baby',
        description: 'We moved to Austin and walked into our very first house together. Everything felt new and exciting and ours. And then you brought Nemo home, our fluffy orange troublemaker who turned that house into something more. I said I wasn\'t a cat person. You knew better. Nemo made us a family.',
        emoji: '🐱',
        color: '#FF9800',
    },
    {
        year: 'Year 3 - 2023',
        title: 'Learning Each Other\'s Hearts',
        description: 'This was the year we stopped trying to be perfect and started being real. We learned patience from each other, respect, kindness, even when it wasn\'t easy. We weren\'t just in love anymore. We were building something. Something that would last.',
        emoji: '💛',
        color: '#E91E63',
    },
    {
        year: 'Year 4 - 2024',
        title: 'Tested & Unbreakable',
        description: '2024 tested us in ways we never expected. Life got heavy. Things got uncertain. But not once did you let go of my hand and not once did I let go of yours. We held each other up when it would\'ve been easy to fall apart. That year didn\'t break us, it showed us exactly what we\'re made of. And we came out stronger than ever.',
        emoji: '💪',
        color: '#2196F3',
    },
    {
        year: 'Year 5 - 2025',
        title: 'A New Beginning',
        description: 'Canada. A fresh start. A new chapter, not as two people figuring it out, but as husband and wife. And then came Taka, our sweet little girl, just like me. Our family grew and my heart grew with it. Five years in, and loving you still feels like the easiest thing I\'ve ever done.',
        emoji: '💍',
        color: '#9C27B0',
    },
]

function Timeline() {
    return (
        <section className="timeline" id="timeline">
            <div className="reveal">
                <h2 className="section-title">Our Journey</h2>
                <p className="section-subtitle">Five chapters of us</p>
            </div>

            <div className="timeline-container">
                <div className="timeline-line" />
                {milestones.map((milestone, index) => (
                    <div
                        key={index}
                        className={`timeline-item reveal ${index % 2 === 0 ? 'left' : 'right'}`}
                    >
                        <div className="timeline-dot" style={{ background: milestone.color, boxShadow: `0 0 20px ${milestone.color}40` }}>
                            <span className="timeline-dot-emoji">{milestone.emoji}</span>
                        </div>
                        <div className="timeline-card">
                            <div className="timeline-card-glow" style={{ background: `${milestone.color}10` }} />
                            <span className="timeline-year" style={{ color: milestone.color }}>{milestone.year}</span>
                            <h3 className="timeline-card-title">{milestone.title}</h3>
                            <p className="timeline-card-desc">{milestone.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Timeline
