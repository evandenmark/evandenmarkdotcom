import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./pages.module.css"

const Intertidal = () => {
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
                    <h1>The Intertidal Zone</h1>
                    <p className={styles.paragraph}>
                        The <b>intertidal zone</b> is the space between the high and low tide marks.
                        I grew up on the shores of southeastern Massachusetts where the deep,
                        glacially gouged topography of Cape Cod Bay creates massive fluxuations
                        in the tides. Every six hours, millions of gallons of water ebb
                        and flow onto the sand flats, moving the water line hundreds or even
                        thousands of feet.
                    </p>
                    <p className={styles.paragraph}>
                        As a result of this movement, the community that resides there -
                        horseshoe crabs, seaweeds, periwinkle snails... and me on most
                        summer days - was made to be dynamic, adaptive to both the world
                        above and below the water. And, in navigating that balance, they
                        created an environment unlike anywhere else.
                    </p>

                    <p className={styles.paragraph}>
                        Reflecting upon the land that I connect with, I use this as inspiration for
                        my projects:
                    </p>
                    <p className={styles.paragraph}>
                        <i> how can I mediate between two divergent worlds? </i>
                    </p>



                </div>

            </div>
            <div className={styles.imageWrapper}>
                <img src={"/images/intertidal.jpeg"} className={styles.image} />
            </div>
        </div>
    </>
}

export default Intertidal;