import React, { useEffect, useMemo, useState } from 'react';
import styles from "./about.module.css"

const About = () => {
    return <>
            
    <div className={styles.container}>
        <div className={styles.textContainer}>
            
            <div className={styles.content}>
                <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum lectus mauris ultrices eros in cursus turpis. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Volutpat blandit aliquam etiam erat velit scelerisque in. Est velit egestas dui id ornare arcu odio ut. Congue mauris rhoncus aenean vel. Massa eget egestas purus viverra. Egestas fringilla phasellus faucibus scelerisque. Turpis egestas pretium aenean pharetra magna ac placerat. Ac ut consequat semper viverra nam libero justo laoreet. Commodo sed egestas egestas fringilla. Quis varius quam quisque id diam vel quam elementum pulvinar.

               </p>

               <p className={styles.paragraph}>
               Bibendum neque egestas congue quisque egestas diam in. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Et molestie ac feugiat sed lectus vestibulum. Sed libero enim sed faucibus turpis in eu. Bibendum enim facilisis gravida neque convallis a cras semper. Nam at lectus urna duis convallis convallis tellus. Magna ac placerat vestibulum lectus mauris ultrices. Consequat interdum varius sit amet. Tincidunt arcu non sodales neque sodales ut etiam sit. Consequat ac felis donec et odio pellentesque. Vulputate mi sit amet mauris. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Nunc sed velit dignissim sodales. Ipsum dolor sit amet consectetur adipiscing elit.
 
               </p>

               <p className={styles.paragraph}>
               Contact: evanlewisdenmark [at] gmail.com
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