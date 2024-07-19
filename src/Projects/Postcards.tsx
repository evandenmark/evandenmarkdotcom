import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./pages.module.css"

interface PostcardsParams {
    navFunc: (link: string) => void
}


const Postcards = ({ navFunc }: PostcardsParams) => {
    return <>

        <div className={styles.menu}>
            <nav>
                <ul className={styles.navList}>

                    <li><Link to="/">My Work</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/intertidal">Intertidal</Link></li>
                    <li><Link to="https://docs.google.com/document/d/1SKFlFGR8Am_kIG0-sL_NDgGAwZA2eXAljyl3XXZKHag/edit?usp=sharing" target="_blank">CV</Link></li>

                </ul>
            </nav>
        </div>

        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2> <i>The Post Man</i></h2>
                <div className={styles.content}>
                    <p className={styles.paragraph}>
                        If I gave you a postcard addressed to a total stranger in a city you do not know, would you be able to
                        deliver it?
                    </p>
                    <p className={styles.paragraph}>
                        Spoiler alert: I did.
                    </p>

                    <p className={styles.paragraph}>
                        I'm currently on my final draft of an audio documentary that tells the story of the delivery process... and a
                        journey highlights how connected we actually are.
                    </p>

                    <h2>LISTEN TO THE TRAILER: </h2>
                    <audio controls >
                        <source src={"/audio/trailer_final.mp3"} type="audio/mpeg" />
                        Your browser does not support the audio tag.
                    </audio>

                    <p className={styles.paragraph}>
                        If you are intrigued, I am currently searching for TWO THINGS:
                    </p>
                    <p>1. A <b>media outlet</b> to get this project on the airwaves. Think NPR, Radiolab, and the like.
                    </p>
                    <p>2. <b>Funding</b> for something even bigger. This 38 min doc is actually the pilot for a 4 part series.
                        The next three episodes, which I've already laid the infrastructure for, are going to get increasingly crazier (spoiler).
                    </p>

                    <p>
                        Reach out to me: evanlewisdenmark [at] gmail.com
                    </p>



                </div>

            </div>
            <div className={styles.imageWrapper}>
                <img src={"/images/postcards2.png"} className={styles.image} />
            </div>
        </div>
    </>
}

export default Postcards;