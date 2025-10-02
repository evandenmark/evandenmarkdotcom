import React, { useEffect, useMemo, useState } from 'react';
import styles from "./mywork.module.css"
import { useNavigate, Link } from "react-router-dom";

interface MyWorkParams {
    navFunc: (link: string) => void
}

const projects = [
    { name: "Future Ancestors", description: "A sound archive to connect my family's voices through time ", year: "2023-present", image: "images/futureancestors.png", link: "/futureancestors" },

    { name: "Autio", year: "2021", description: "A place-based podcast mobile app", link: "/autio", image: "/images/autio.png" },

    { name: "Cocoa Calypso", year: "2020", description: "Nomading North America through sound", link: "https://evandenmark.github.io/CocoaStorymap/", image: "/images/cocoa.png" },
]

const visual = [
    { name: "Incredibles 2", description: "Technical lighting on the Oscar-nominated film", link: "/pixar", image: "/images/i2.png" },
    { name: "For Spacious Skies", description: "A data scrollytelling visualization about COVID travel", link: "https://evandenmark.github.io/ForSpaciousSkies/", image: "/images/spaciousskies.png" },
    { name: "Civic Data Design Lab", description: "Data journalism work at MIT Urban Planning", link: "/cddl", image: "/images/cddl.png" },

    { name: "NatGeo DropCam",  description: "Deep sea cameras in the Galapagos", link: "/natgeo", image: "/images/natgeo.png" },
    { name: "Retinal Ritual", description: "Art installation at MIT's Under the Dome exhibit", link: "/retinalritual", image: "/images/retinalritual.png" },
    { name: "Future Ocean Lab",  description: "Deep sea photogrammetry and AR app", link: "/fol", image: "/images/fol.png" },

    { name: "Bloom Nepal", description: "A short film on innovative education in Nepal", link: "https://www.youtube.com/watch?v=F3zxuaIjTq0", image: "/images/bloom.png" },
    { name: "YouTube", description: "short documentaries",link: "https://www.youtube.com/channel/UCD5-TrhD1QOVLC7cHUWRvQw", image: "/images/youtube.jpg" }

]




const MyWork = ({navFunc} : MyWorkParams) => {

    const navigate = useNavigate();

    const handleTitleClick = (link: string) => {
        if (link) {
            // Check if the link is external
            if (/^(http|https):\/\//.test(link)) {
                // External link: Navigate using window.location.href
                window.open(link, '_blank');
            } else {
                // Internal link: Navigate using react-router-dom's navigate
                navigate(link);
            }
        }
    };

    return <>

        <div className={styles.home}>
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
        </div>
    
        

        <div className={styles.container}>
            <div>
            <h1>Audio </h1>
                <ul className={styles.projectList}>
                    {projects.map((p, index) => (
                        <li
                            key={index}
                            className={styles.projectItem}
                            style={{
                                backgroundImage: `url(${p.image})`,
                            }}
                            onClick={() => handleTitleClick(p.link)}
                        >
                            <h2>{p.name}</h2>
                            <p>{p.description}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <h1>Visual</h1>

            <div>
                <ul className={styles.projectList}>
                    {visual.map((p, index) => (
                        <li
                            key={index}
                            className={styles.projectItem}
                            style={{
                                backgroundImage: `url(${p.image})`,
                            }}
                            onClick={() => handleTitleClick(p.link)}
                        >
                            <h2>{p.name}</h2>
                            <p>{p.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    </>
}

export default MyWork;