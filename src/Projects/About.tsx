import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./pages.module.css"

interface AboutParams {
    navFunc: (link: string) => void
}


const About = ({navFunc} : AboutParams) => {
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

                <div className={styles.content}>
                    <p className={styles.paragraph}>
                        <b>Evan Denmark</b> is a multi-media journalist with a technical background. His work focuses on how to use technology
                        to enhance our connection with each other and the land, rather than (as we far too often see) to numb our relationship
                        with the world around us. A trained computer scientist and software engineer, Evan uses his technical skills in a
                        variety of media. While he intially found his techno-artistic outlet in visual media (film, visual arts, computer graphics, VR),
                        he now focuses on investigative journalism and audio storytelling.
                    </p>

                    <p className={styles.paragraph}>
                        Evan grew up on the shores of the pseudo-island Cape Cod, where he developed a deep reationship with the ocean, particularly the intertidal zone.
                        Taking inspiration from this unique habitat, Evan seeks to find spaces of the "in-between": spaces that navigate
                        the complex interdisciplinary (tech and storytelling, indigenous wisdom and modernity, etc...). He often plays the role
                        of facilitator of those zones.
                    </p>

                    <p className={styles.paragraph}>
                        He received his B.S. (2017) and
                        MEng (2020) from <b>MIT</b> in Computer Science and Engineering. Evan has collaborated with and developed projects at
                        Pixar, MIT Media Lab, National Geographic, Purple Mai'a, and various startups. He now lives in the pae'aina - the highly "intertidal"
                        archipelago of Hawai'i - and thinks a lot about 'ai pono (food sovereignty) and malama 'aina (taking care of the land).
                    </p>

                    <p className={styles.paragraph}>
                        Contact: evanlewisdenmark [at] gmail.com
                    </p>
                    <p className={styles.paragraph}>
                        <a onClick={() => navFunc('https://github.com/evandenmark')} style={{cursor: 'pointer'}}> <u>Github</u></a>
                    </p>
                    <p className={styles.paragraph}>
                        <a onClick={() => navFunc('https://www.imdb.com/name/nm9761816/')} style={{cursor: 'pointer'}}> <u>IMDB</u></a>
                    </p>


                </div>

            </div>
            <div className={styles.imageWrapper}>
                <img src={"/images/aboutphoto.png"} className={styles.image} />
            </div>
        </div>
    </>
}

export default About;