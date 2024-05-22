import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./pages.module.css"

interface AutioParams {
    navFunc: (link: string) => void
}


const Autio = ({navFunc} : AutioParams) => {
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
                    <h2>Autio</h2>
                    <p className={styles.paragraph}>
                        Autio is the world's best place-based mobile app, narrating stories as you travel across the world. 
                    </p>

                    <p className={styles.paragraph}>
                        I wrote hundreds of the app's thousands of stories and even narrated a few. A few of my writing 
                        favorites are about my hometown's 
                        <u onClick={() => navFunc('https://app.autio.com/stories/G9fmXAXXWpnNcWXAidyQ')} style={{cursor: 'pointer'}}> boardwalk</u>, 
                         an 
                        <u onClick={() => navFunc('https://app.autio.com/stories/EASIxzUQNhH1VfOwcNWJ')} style={{cursor: 'pointer'}}> intertidal resident</u>, 
                        and a nod to my  
                        <u onClick={() => navFunc('https://app.autio.com/stories/s6PktMyORVbA0JoYOqD7')} style={{cursor: 'pointer'}}> vanlife </u> escapades. 
                    </p>

                    <p className={styles.paragraph}>
                        A selection of my favorite narrations include a few from Idaho's 
                        <u onClick={() => navFunc('https://app.autio.com/stories/1OhJHUzY1f8W9r4d2U15')} style={{cursor: 'pointer'}}> beauty </u>
                         and 
                        <u onClick={() => navFunc('https://app.autio.com/stories/APrKEfBrmDSf3NvDLjZv')} style={{cursor: 'pointer'}}> peculiarities</u>.  
                        </p>


                </div>

            </div>
            <div className={styles.imageWrapper}>
                <img src={"/images/travel.png"} className={styles.image} />
            </div>
        </div>
    </>
}

export default Autio;