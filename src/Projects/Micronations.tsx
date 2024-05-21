import React, { useEffect, useMemo, useState } from 'react';
import styles from "./about.module.css"

const Micronations = () => {
    return <>
            
    <div className={styles.container}>
        <div className={styles.textContainer}>
            
            <div className={styles.content}>
                <p className={styles.paragraph}>
                What defines a "nation"? 
               </p>

                
                
            </div>
            
        </div>
        <div className={styles.imageWrapper}>
            {/* <img src={"/images/aboutphoto.png"} className={styles.image} /> */}
        </div>
    </div>
</>
}

export default Micronations;