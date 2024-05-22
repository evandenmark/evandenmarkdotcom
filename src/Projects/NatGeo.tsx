import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./pages.module.css"

interface NatGeoParams {
    navFunc: (link: string) => void
}


const NatGeo = ({navFunc} : NatGeoParams) => {
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
                <h2> National Geographic - Galapagos </h2>
                <div className={styles.content}>
                    <p className={styles.paragraph}>
                        During my graduate ocean studies, I partnered with National Geographic's  
                        <a onClick={() => navFunc('https://www.nationalgeographic.org/society/our-programs/lab/')} style={{cursor: 'pointer'}}> <u>Exploration Technology Lab</u> </a>
                        to launch a deep sea camera in the Galapagos Islands and acted as a resident scientist on board the 
                        Lindblad Expeditions vessel. The expedition was in collaboration with the MIT Media Lab Open Ocean Initiative. 
                    </p>

                </div>

            </div>
            <div className={styles.imageWrapper}>
                <img src={"/images/galapagos.jpeg"} className={styles.image} />
            </div>
        </div>
    </>
}

export default NatGeo;