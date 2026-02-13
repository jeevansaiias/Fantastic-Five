import { useState } from 'react'
import './LoveLetter.css'

function LoveLetter() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className="love-letter" id="love-letter">
            <div className="reveal">
                <h2 className="section-title">A Letter For You</h2>
                <p className="section-subtitle">Nuvvu Leka Nenu Lenu 💕</p>
            </div>

            <div className="reveal">
                <div className={`envelope-wrapper ${isOpen ? 'opened' : ''}`}>
                    {!isOpen && (
                        <button
                            className="envelope"
                            onClick={() => setIsOpen(true)}
                            aria-label="Open love letter"
                        >
                            <div className="envelope-body">
                                <div className="envelope-flap" />
                                <div className="envelope-seal">💌</div>
                                <p className="envelope-prompt">Tap to open</p>
                            </div>
                        </button>
                    )}

                    {isOpen && (
                        <div className="letter-container">
                            <div className="letter">
                                <div className="letter-decoration top-left">✿</div>
                                <div className="letter-decoration top-right">✿</div>

                                <p className="letter-greeting">Hey Mr. Husband,</p>

                                <p className="letter-body">
                                    Where do I even begin? From that very first LinkedIn
                                    message to flying back to India together, it's been
                                    five whole years of this wild, beautiful, sometimes
                                    chaotic ride. And honestly? I'd do it all over again.
                                    Even the parts where you annoyed me. <em>Especially</em> those parts.
                                    (Okay, maybe not all of them. 😏)
                                </p>

                                <p className="letter-body">
                                    So far so good, right? But listen, the future needs
                                    you to keep being my gentleman. The same guy who drove
                                    across Buffalo for me, the same guy I said yes to. Promise
                                    me you'll keep being that guy. Because that's the one I
                                    married. And that's the one I want forever.
                                </p>

                                <p className="letter-body">
                                    And about money? 💰 I know I can be a lot when it comes to
                                    decisions. I know I argue. I know I don't just nod and agree.
                                    And I know that annoys you sometimes. 😂 But here's the thing,
                                    I never want to be left out. I always want to be the first
                                    person at that table, debating with you, questioning your
                                    ideas, driving you a little crazy, because that's how we
                                    make the best decisions. Together. Not one of us deciding
                                    and the other finding out later. Promise me you'll always
                                    keep that seat open for me. Even when I'm being impossible.
                                </p>

                                <p className="letter-body">
                                    Also yes, I know. 🙄 I give you a LOT of suggestions.
                                    I question everything. I probably sound like a full time
                                    critic sometimes, finding flaws like it's my second job.
                                    But please hear me out, it doesn't mean I think you're dumb.
                                    And it definitely doesn't mean I think I'm the only genius
                                    on the planet. 😂 I just want to be the one person who can
                                    say anything to you without hesitation. You're literally my
                                    safe space. So yes, I might say the same thing twice... okay
                                    maybe three times. I know it annoys you. But that's just me
                                    caring a little too loudly. And honestly? You can handle it.
                                    You married this. No refunds. 😏
                                </p>

                                <p className="letter-body">
                                    And since we're here... I have one HUGE complaint. 🗣️
                                    PUT. THINGS. BACK. WHERE. THEY. BELONG. I know I know,
                                    it's probably the hardest thing in the world for you. Chargers
                                    back in the drawer? Impossible. Leftovers in a storage
                                    container? Unheard of. Used clothes in the basket instead
                                    of the floor? Revolutionary concept. But guess what,
                                    I believe in you. You can do this. And I'll even cheer for you
                                    next time. 📣 "Yaaay he put the charger back!! STANDING OVATION!!" 😂
                                </p>

                                <p className="letter-body">
                                    Oh and one more thing. When our parents visit,
                                    we don't suddenly become different people. Our routines
                                    stay. Our teamwork stays. We don't hand off our responsibilities
                                    and sit back. Whoever's parents are visiting, we still do
                                    everything together, the same way we always do. That's the deal.
                                    Marriage doesn't come with a "guest mode." 😤
                                </p>

                                <p className="letter-body">
                                    Also, drink more water. 💧 That's not a request, that's a
                                    life instruction. I plan to annoy you for a very, very long
                                    time, and I need you alive and healthy for that. So hydrate.
                                    Eat better. Stay active. Because I want forever with you.
                                    Well... maybe forever. Let's see how you behave. 😜
                                </p>

                                <p className="letter-body">
                                    One more request. 📸 Take more pictures and videos of me.
                                    I take so many of you with Nemo and Taka so we can look back
                                    at those little moments one day. I want that too. I know,
                                    I KNOW you are a very very bad photographer. Like, impressively
                                    bad. Not even close to the pro that I am. 💅 But honestly?
                                    That's fine. I accept you 100% in this department because
                                    I had no idea what I was signing up for when I chose you.
                                    The terms and conditions were not clear. 😂 But I'm still here,
                                    so just point the camera and press the button. That's all I ask.
                                </p>

                                <p className="letter-body">
                                    Oh, and one last thing for the boys of this house 🐱🧔...
                                    Have some patience. Like Taka and me. You two, you and Nemo,
                                    are the grumpy ones around here. Always huffing, always dramatic.
                                    You boys need to learn A LOT from us girls. We're the calm,
                                    composed, graceful ones. You're welcome. 💁‍♀️
                                </p>

                                <p className="letter-body">
                                    I'm not always easy to love. I know that. But then again,
                                    neither are you. 😜 And that's exactly why we work. We chose
                                    each other knowing the full picture, the arguments, the
                                    make ups, all of it.
                                </p>

                                <p className="letter-body">
                                    So here's to us. Imperfect, stubborn, a little dramatic,
                                    but always, always choosing each other. Nuvvu leka nenu lenu.
                                    And I really mean that. ❤️
                                </p>

                                <div className="letter-photo">
                                    <img
                                        src={`${import.meta.env.BASE_URL}photos/wonder-woman.jpg`}
                                        alt="The Wonder Woman in your life"
                                        className="letter-photo-img"
                                    />
                                    <p className="letter-photo-caption">The Wonder Woman in your life 💫</p>
                                </div>

                                <p className="letter-closing">Your sometimes annoying but always loving,</p>
                                <p className="letter-signature">Wifey 💕</p>

                                <div className="letter-decoration bottom-left">✿</div>
                                <div className="letter-decoration bottom-right">✿</div>
                            </div>

                            <button className="close-letter" onClick={() => setIsOpen(false)}>
                                <span>Close Letter</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default LoveLetter
