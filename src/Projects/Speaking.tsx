import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./pages.module.css"

const Speaking = () => {
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

                <div className={styles.content}>
                    <h1>Public Speaking</h1>
                    <p className={styles.paragraph}>
                        An expert public speaker, Evan has given talks and speaking workshops to audiences of all sizes. 
                    </p>
                    <p className={styles.paragraph}>
                        For speaking and workshop inquiries, please reach out at evanlewisdenmark@gmail.com
                    </p>

                    


                </div>

            </div>
            <div className={styles.imageWrapper}>
                <img src={"/images/mao.png"} alt='' className={styles.image} />
            </div>
        </div>
    </>
}

export default Speaking;