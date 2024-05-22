import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./pages.module.css"

interface CDDLParams {
    navFunc: (link: string) => void
}


const CDDL = ({navFunc} : CDDLParams) => {
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
            <h2> Civic Data Design Lab</h2>
                <div className={styles.content}>
                    <p className={styles.paragraph}>
                        As the world became increasingly obesessed with data at the beginning of the pandemic, I began
                        my interest into the world of data journalism. Through my graduate data visualization class,
                        I became connected with the MIT Civic Data Design Lab. 
                    </p>

                    <p className={styles.paragraph}>
                        During the summer, I managed the 
                        <u onClick={() => navFunc('https://blog.civicdatadesignlab.mit.edu/')} style={{cursor: 'pointer'}}> Missing Data Project</u>, 
                        a group of data scientists and journalists
                        interested in highlighting the gaps of nonexistent data. The CDDL is interested in the intersection
                        of data, design, and urban planning. 
                    </p>

                    <p className={styles.paragraph}>
                        In addition to managing the group and editing all posts, I produced two pieces myself
                        regarding farm labor under the H2A visa program, available
                        <u onClick={() => navFunc("https://blog.civicdatadesignlab.mit.edu/h2a:-america's-essential-yet-unknown-program")} style={{cursor: 'pointer'}}> here </u>
                        and <u onClick={() => navFunc('https://blog.civicdatadesignlab.mit.edu/h2a:-seeing-sketchiness-in-data')} style={{cursor: 'pointer'}}> here</u>. 
                    </p>



                </div>

            </div>
            <div className={styles.imageWrapper}>
                <img src={"/images/cddl.png"} className={styles.image} />
            </div>
        </div>
    </>
}

export default CDDL;