import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./pages.module.css"

interface FOLParams {
    navFunc: (link: string) => void
}


const FOL = ({navFunc} : FOLParams) => {
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
                    <h2> Future Ocean Lab</h2>
                    <p className={styles.paragraph}>
                        During my <a onClick={() => navFunc('https://dspace.mit.edu/bitstream/handle/1721.1/129202/1227275209-MIT.pdf?sequence=1&isAllowed=y')} style={{cursor: 'pointer'}}> <u>Master's thesis</u> </a> 
                        work at MIT, I was a part of the Future Ocean Lab, a start-up style
                        ocean technology lab hidden in an old, abandoned warehouse of Cambridge. The focus of the lab was to 
                        create low-cost robotics that enhance our relationship with the ocean. We partnered with the MIT Media Lab. 
                    </p>

                    <p className={styles.paragraph}>
                        My work revolved around ocean storytelling and, in particular, how new 
                        forms of media (AR, VR, and 360 video) bring the ocean to life. 
                    </p>

                    <p className={styles.paragraph}>
                        During my time, I contributed to an underwater cave mapping device, redesigned a deep-sea 360 camera,
                        and built interactive AR apps to highlight ocean exploration. One such app is shown in the video
                        below. 
                        
                    </p>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/NEfQTtMSXHQ?si=z2LBthQcRL1LvRy_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                </div>

            </div>
            <div className={styles.imageWrapper}>
                <img src={"/images/nautilus.jpeg"} className={styles.image} />
            </div>
        </div>
    </>
}

export default FOL;