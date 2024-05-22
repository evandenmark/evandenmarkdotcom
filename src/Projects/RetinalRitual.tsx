import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./pages.module.css"

interface RetinalRitualParams {
    navFunc: (link: string) => void
}


const RetinalRitual = ({ navFunc }: RetinalRitualParams) => {
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
                <h2> Retinal Ritual </h2>
                <div className={styles.content}>
                    <p className={styles.paragraph}>
                        During my graduate studies, I developed an art installation at MIT's <i>Under the Dome</i> exhibit.
                        As part of the Vision in Art and Neuroscience class, I created a flurescent resin and, when stimlated with a dancing UV laser, produces a result that
                        makes the viewer increasingly aware of their visual perception. 
                    </p>
                    <p className={styles.paragraph}>
                        <i>Retinal Ritual</i> presents a simple bright stimulus in a dark environment. As the point of light dances over the canvas, 
                        a trace - or afterimage - of the path is generated in the eye of the viewer. 
                        As time passes, both the retinal and physical traces fade and evolve. The canvas acts as a reflection of the retina; the 
                        afterimage transitions from being an optical effect, whole within the eye, to one imprinted on the canvas. This experience
                        evokes the experience that what we see is not a simple reflection of our physical environment, but an interpretation of our 
                        own hardware as well. </p>

                </div>

            </div>
            <div className={styles.imageWrapper}>
                <img src={"/images/retinalritual2.jpg"} className={styles.image} />
            </div>
        </div>
    </>
}

export default RetinalRitual;