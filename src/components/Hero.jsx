
import React from "react";
import "./Hero.css";

const Hero = () => {
    const heroes = [
        {
            id: 1,
            name: "Black Panther",
            image: "./heros/black.png"
        },
        {
            id: 2,
            name: "White Vision",
            image: "./heros/3rd-eye.png"
        },
        {
            id: 3,
            name: "Captain America",
            image: "./heros/caption-1.png"
        },
        {
            id: 4,
            name: "Black Widow",
            image: "./heros/back-wido.png"
        },
        {
            id: 5,
            name: "Doctor Strange",
            image: "./heros/dr-strange.png"
        },
        {
            id: 6,
            name: "Drax",
            image: "./heros/drax.png"
        },
        {
            id: 7,
            name: "Falcon",
            image: "./heros/falcon.png"
        },
        {
            id: 8,
            name: "Gamora",
            image: "./heros/gamora-1.png"
        },
        {
            id: 9,
            name: "Groot",
            image: "./heros/groot.png"
        },
        {
            id: 10,
            name: "Groot",
            image: "./heros/groot-1.png"
        },
        {
            id: 11,
            name: "Hawkeye",
            image: "./heros/hawk-eye.png"
        },
        {
            id: 12,
            name: "Hulk",
            image: "./heros/hulk.png"
        },
        {
            id: 13,
            name: "Hulk",
            image: "./heros/hulk-1.png"
        },
        {
            id: 14,
            name: "Iron Man",
            image: "./heros/iron-1.png"
        },
        {
            id: 15,
            name: "Iron Man",
            image: "./heros/iron-man.png"
        },
        {
            id: 16,
            name: "Korg",
            image: "./heros/kidi.png"
        },
        {
            id: 17,
            name: "Nick Fury",
            image: "./heros/neack-fury.png"
        },
        {
            id: 18,
            name: "Nebula",
            image: "./heros/nebula.png"
        },
        {
            id: 19,
            name: "Rocket",
            image: "./heros/rocket.png"
        },
        {
            id: 20,
            name: "Star-Lord",
            image: "./heros/star-loard.png"
        },
        {
            id: 21,
            name: "Captain America",
            image: "./heros/steav-america.png"
        },
        {
            id: 22,
            name: "Thor",
            image: "./heros/thor-1.png"
        },
        {
            id: 23,
            name: "Valkyrie",
            image: "./heros/valkryi.png"
        },
        {
            id: 24,
            name: "Vision",
            image: "./heros/vision.png"
        },
        {
            id: 25,
            name: "Wanda",
            image: "./heros/wanda.png"
        },
        {
            id: 26,
            name: "War Machine",
            image: "./heros/war-machine.png"
        }
    ];

    return (
        <div className="hero-container">

            <div className="hero-heading">
                <span className="hero-line"></span>

                <h1>HEROES</h1>

                <span className="hero-line"></span>

                

                
            </div>

            <div className="hero-grid">

                {heroes.map((hero) => (
                    <div className="hero-card" key={hero.id}>

                        <div className="hero-image-box">
                            <img
                                src={hero.image}
                                alt={hero.name}
                                className="hero-image"
                            />
                        </div>

                        <div className="hero-info">
                            <h2>{hero.name}</h2>

                            <span className="hero-number">
                                #{String(hero.id).padStart(2, "0")}
                            </span>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default Hero;
