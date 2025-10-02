import React, { useEffect, useRef, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./pages.module.css"

interface PostcardsParams {
    navFunc: (link: string) => void
}

const PRXAudioPlayer = () => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!playerRef.current) return;

    // Remove existing script if present
    document.getElementById("prx-p562324-embed")?.remove();

    // Create new script element
    const script = document.createElement("script");
    script.id = "prx-p562324-embed";
    script.src = "https://play.prx.org/e?uf=https://exchange.prx.org/p/562324/embed.js?size=small";
    script.async = true;

    playerRef.current.appendChild(script);
  }, []);

  return <div ref={playerRef} />;
};



const Postcards = ({ navFunc }: PostcardsParams) => {
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
                <h2> <i>Post Office Magic</i></h2>
                <div className={styles.content}>
                    <p className={styles.paragraph}>
                        If I gave you a postcard addressed to a total stranger in a city you do not know, would you be able to
                        deliver it?
                    </p>
                    <p className={styles.paragraph}>
                        Spoiler alert: I did.
                    </p>

                    <h2>THE TRAILER: </h2>
                    <iframe 
                        src="https://open.spotify.com/embed/episode/48W7r1PCKQhiGJmTou2eAs?utm_source=generator" 
                        width="100%" 
                        height="152" 
                        frameBorder="0" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy">

                        </iframe>

                    <h2>THE FULL 37 MINUTE PIECE</h2>
                    <iframe 
                        src="https://open.spotify.com/embed/episode/0QALfnHOGIwSsMrV4sCXae?utm_source=generator&t=0" 
                        width="100%" 
                        height="152" 
                        frameBorder="0" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy">

                        </iframe>
                    
                    
                    <p className={styles.paragraph}>
                        If you are intrigued, I am currently searching for TWO THINGS:
                    </p>
                    <p>1. A <b>media outlet</b> to get this project on the airwaves. Think NPR, Radiolab, and the like.
                    </p>
                    <p>2. <b>Funding</b> for something even bigger. This 37 min doc is actually the pilot for a 4 part series.
                        The next three episodes, which I've already laid the infrastructure for, are going to get increasingly crazier (spoiler).
                    </p>

                    <p>
                        Reach out to me: evanlewisdenmark [at] gmail.com
                    </p>



                </div>

            </div>
            <div className={styles.imageWrapper}>
                <img src={"/images/postcards2.png"} className={styles.image} />
            </div>
        </div>
    </>
}

export default Postcards;