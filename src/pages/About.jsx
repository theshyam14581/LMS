
import React from "react";
import "./About.css";
import Navbar from '../components/Navbar'


const teamMembers = [
    {
        id: 1,
        name: "Shyam Sundar Bairwa",
        role: "Team Leader & Developer",
        contribution:
            "Led the project and worked on React logic, application flow, component integration, and book data handling.",
        initials: "SS"
    },
    {
        id: 2,
        name: "Sanjay Sulaniya",
        role: "Login & Signup UI",
        contribution:
            "Designed the login and signup pages for a clear and user-friendly authentication experience.",
        initials: "SD"
    },
    {
        id: 3,
        name: "Nikunj Sen",
        role: "Dashboard Developer",
        contribution:
            "Designed the dashboard layout and helped organize the main content for users.",
        initials: "NS"
    },
    {
        id: 4,
        name: "Ram Tomer",
        role: "Book Cards UI",
        contribution:
            "Designed the book card section to present Marvel book information in a structured layout.",
        initials: "RT"
    },
    {
        id: 5,
        name: "Kritika Sahu",
        role: "UI/UX & Page Designer",
        contribution:
            "Worked on the navbar, footer, hero section, and villains page to maintain a consistent website design.",
        initials: "KS"
    }
];

const marvelHistory = [
    {
        year: "1939",
        title: "The Beginning",
        description:
            "Marvel's roots go back to Timely Publications, which introduced early comic-book stories and characters."
    },
    {
        year: "1961",
        title: "The Marvel Universe Takes Shape",
        description:
            "Fantastic Four helped launch a new era of interconnected superheroes, with more human personalities and relatable struggles."
    },
    {
        year: "1960s",
        title: "Legends Are Born",
        description:
            "Creators including Stan Lee, Jack Kirby, and Steve Ditko helped introduce iconic characters such as Spider-Man, the Hulk, Iron Man, Thor, and the X-Men."
    },
    {
        year: "2008",
        title: "The Cinematic Universe",
        description:
            "Iron Man began the Marvel Cinematic Universe, bringing interconnected superhero stories to the big screen."
    },
    {
        year: "2018",
        title: "Wakanda Inspires the World",
        description:
            "Black Panther brought the fictional nation of Wakanda and the legacy of T'Challa to a global film audience."
    },
    {
        year: "Today",
        title: "A Legacy That Continues",
        description:
            "Marvel continues to expand through comics, films, series, games, and generations of fans around the world."
    }
];

const About = () => {
    return (
        
        <div>
            <Navbar/>
            <main className="about-page">
            <section className="about-hero">
                <p className="about-eyebrow">BEYOND THE COMICS</p>

                <h1>
                    THE LEGACY OF <span>MARVEL</span>
                </h1>

                <p className="about-hero-text">
                    Heroes may wear different suits, carry different powers,
                    and come from different worlds. But the greatest stories
                    remind us that courage, sacrifice, and hope belong to everyone.
                </p>

                <a href="#marvel-history" className="about-cta">
                    EXPLORE THE LEGACY
                </a>
            </section>

            <section className="about-legends section-container">
                <div className="about-section-heading">
                    <p className="about-eyebrow">THE MINDS & THE LEGENDS</p>
                    <h2>ICONS THAT INSPIRE US</h2>
                    <p>
                        One helped create a universe of heroes. Another became
                        a symbol of leadership, identity, and responsibility.
                    </p>
                </div>

                <div className="legend-grid">
                    <article className="legend-panel">
                        <div className="legend-image-wrap">
                            <img
                                src="/about/stan-lee.jpg"
                                alt="Stan Lee"
                                className="legend-image"
                                loading="lazy"
                            />
                        </div>

                        <div className="legend-content">
                            <span className="legend-label">THE CREATOR</span>
                            <h3>Stan Lee</h3>
                            <p>
                                Stan Lee was one of the most influential figures
                                in Marvel Comics. As a writer, editor, and
                                publisher, he helped shape characters whose
                                personal struggles made them feel human, even
                                when they possessed extraordinary powers.
                            </p>
                            <p>
                                His creative legacy includes work on characters
                                such as Spider-Man, the Fantastic Four, Iron Man,
                                the Hulk, and the X-Men, alongside many talented
                                artists and co-creators.
                            </p>
                            <p className="legend-quote">
                                His legacy lives on in every story that inspires
                                people to become their own kind of hero.
                            </p>
                        </div>
                    </article>

                    <article className="legend-panel">
                        <div className="legend-image-wrap">
                            <img
                                src="./heros/king-tichala.jpg"
                                alt="Black Panther, King T'Challa"
                                className="legend-image"
                                loading="lazy"
                            />
                        </div>

                        <div className="legend-content">
                            <span className="legend-label">THE KING</span>
                            <h3>T'Challa — Black Panther</h3>
                            <p>
                                T'Challa is the king of Wakanda and the hero
                                known as Black Panther. He combines intelligence,
                                courage, advanced technology, and exceptional
                                combat skills with the responsibility of
                                protecting his people.
                            </p>
                            <p>
                                Black Panther represents leadership, cultural
                                pride, service, and the difficult choices that
                                come with power. His story reminds us that a
                                true leader must think beyond personal glory.
                            </p>
                            <p className="legend-quote">
                                Wakanda's legacy is a reminder that strength
                                means protecting and uplifting others.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section
                className="about-history section-container"
                id="marvel-history"
            >
                <div className="about-section-heading">
                    <p className="about-eyebrow">FROM COMICS TO CINEMA</p>
                    <h2>THE MARVEL HISTORY</h2>
                    <p>
                        A journey from comic-book beginnings to a universe
                        followed by fans across the world.
                    </p>
                </div>

                <div className="history-list">
                    {marvelHistory.map((item) => (
                        <article className="history-item" key={item.year}>
                            <div className="history-year">{item.year}</div>
                            <div className="history-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="about-project">
                <div className="section-container project-content">
                    <p className="about-eyebrow">OUR PROJECT</p>
                    <h2>MARVEL LMS</h2>
                    <p>
                        Marvel LMS is a Marvel-inspired learning project built
                        to bring together our interest in superheroes and our
                        journey in web development. The website showcases
                        heroes, villains, book information, and a themed
                        user experience through a collection of React components.
                    </p>

                    <div className="project-tech">
                        <span>React</span>
                        <span>JavaScript</span>
                        <span>CSS</span>
                        <span>React Router</span>
                    </div>
                </div>
            </section>

            <section className="about-team section-container" id="our-team">
                <div className="about-section-heading">
                    <p className="about-eyebrow">FIVE PEOPLE. ONE MISSION.</p>
                    <h2>MEET OUR TEAM</h2>
                    <p>
                        Every great project is built through teamwork.
                        Meet the people who contributed to creating Marvel LMS.
                    </p>
                </div>

                <div className="team-grid">
                    {teamMembers.map((member) => (
                        <article className="team-member" key={member.id}>
                            <div className="team-avatar">
                                <span>{member.initials}</span>
                            </div>

                            <p className="team-role">{member.role}</p>
                            <h3>{member.name}</h3>
                            <p className="team-contribution">
                                {member.contribution}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="team-closing">
                    <span className="team-star">✦</span>
                    <h3>BUILT WITH TEAMWORK. INSPIRED BY LEGENDS.</h3>
                    <p>
                        This project represents our shared learning,
                        creativity, and commitment to building something together.
                    </p>
                    <span className="team-star">✦</span>
                </div>
            </section>
        </main>
        </div>
    );
};

export default About;
