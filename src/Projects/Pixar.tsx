import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./pages.module.css"

interface PixarParams {
    navFunc: (link: string) => void
}


const Pixar = ({navFunc} : PixarParams) => {
    return <>

        <div className={styles.menu}>
            <nav>
                <ul className={styles.navList}>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/intertidal">Intertidal</Link></li>
                    <li><Link to="https://docs.google.com/document/d/1SKFlFGR8Am_kIG0-sL_NDgGAwZA2eXAljyl3XXZKHag/edit?usp=sharing" target="_blank">CV</Link></li>

                </ul>
            </nav>
        </div>

        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2> Incredibles 2 </h2> 
                <div className={styles.content}>
                    <p className={styles.paragraph}>
                        My first gig out of college was as a technical director at Pixar Animation Studios. I worked on
                        the <i>lightspeed</i> team - an "intertidal" group that existed between the Lighting and Rendering team
                        in the Pixar pipeline.
                    </p>

                    <p className={styles.paragraph}>
                        As the lighting stage of computer graphics is by-far the most computationally intensive, I worked
                        with both lighting and render TDs to keep the film aesthically beautiful while minimizing 
                        render times and memory allocation. I primarily worked on <i>Incredibles 2</i> and was responsible for 
                        nearly 10% of the film's shots. I also have a film credit on Cars 3. 
                    </p>

                    <p className={styles.paragraph}>
                    <u onClick={() => navFunc('https://www.imdb.com/name/nm9761816/')} style={{cursor: 'pointer'}}>IMDB</u>
                    </p>

                </div>

            </div>
            <div className={styles.imageWrapper}>
                <img src={"/images/academy.jpeg"} className={styles.image} />
            </div>
        </div>
    </>
}

export default Pixar;