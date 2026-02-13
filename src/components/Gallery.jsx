import { useState } from 'react'
import './Gallery.css'

const memories = [
    {
        id: 1,
        title: 'Where We Started',
        caption: 'One swing, one hug, flowers in hand',
        color: '#E91E63',
        photo: '/photos/gallery-swing-hug.jpg',
    },
    {
        id: 2,
        title: 'Snow Days',
        caption: 'Our first winter, bundled up and happy',
        color: '#64B5F6',
        photo: '/photos/year1-snow.jpg',
    },
    {
        id: 3,
        title: 'Nemo & Us',
        caption: 'The family portrait we didn\'t plan but needed',
        color: '#FF9800',
        photo: '/photos/gallery-nemo-family.jpg',
    },
    {
        id: 4,
        title: 'Nemo\'s Supervisor',
        caption: 'Someone has to make sure the kitchen runs smoothly',
        color: '#8BC34A',
        photo: '/photos/gallery-cooking-nemo.jpg',
    },
    {
        id: 5,
        title: 'Temple Blessings',
        caption: 'Pink saree, warm hearts, answered prayers',
        color: '#E91E63',
        photo: '/photos/year3-temple.jpg',
    },
    {
        id: 6,
        title: 'Christmas Magic',
        caption: 'Mirror mirror on the wall...',
        color: '#4CAF50',
        photo: '/photos/gallery-christmas-mirror.jpg',
    },
    {
        id: 7,
        title: 'Olympic Dreams',
        caption: 'We aim for gold, always',
        color: '#2196F3',
        photo: '/photos/gallery-olympic-rings.jpg',
    },
    {
        id: 8,
        title: 'Little Taka',
        caption: 'Our unexpected miracle 🐾',
        color: '#9C27B0',
        photo: '/photos/gallery-taka.jpg',
    },
    {
        id: 9,
        title: 'Holiday Lights',
        caption: 'Every adventure is better together',
        color: '#00BCD4',
        photo: '/photos/year4-christmas.jpg',
    },
    {
        id: 10,
        title: 'Tulip Fields',
        caption: 'Walking through a dream with you',
        color: '#FFD700',
        photo: '/photos/gallery-tulip-walk.jpg',
    },
    {
        id: 11,
        title: 'Nemo Welcomes Me',
        caption: 'This is what coming home looks like',
        color: '#FF9800',
        photo: '/photos/gallery-nemo-jump.jpg',
    },
    {
        id: 12,
        title: 'Inside the Heart',
        caption: 'Where we belong, always',
        color: '#E91E63',
        photo: '/photos/year5-tulips.jpg',
    },
]

function Gallery() {
    const [activeCard, setActiveCard] = useState(null)

    return (
        <section className="gallery" id="gallery">
            <div className="reveal">
                <h2 className="section-title">Our Memories</h2>
                <p className="section-subtitle">Every moment with you is my favorite moment</p>
            </div>

            <div className="gallery-grid reveal">
                {memories.map((memory) => (
                    <div
                        key={memory.id}
                        className={`gallery-card has-photo ${activeCard === memory.id ? 'active' : ''}`}
                        onClick={() => setActiveCard(activeCard === memory.id ? null : memory.id)}
                        style={{ '--card-color': memory.color }}
                    >
                        <img
                            src={memory.photo}
                            alt={memory.title}
                            className="gallery-card-photo"
                            loading="lazy"
                        />
                        <div className="gallery-card-overlay">
                            <h3 className="gallery-card-title">{memory.title}</h3>
                            <p className="gallery-card-caption">{memory.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery
