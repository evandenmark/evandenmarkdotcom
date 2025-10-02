import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./pages.module.css"

interface BrilliantParams {
    navFunc: (link: string) => void
}


const Brilliant = ({navFunc} : BrilliantParams) => {
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
                    <h2>Greetings Brilliant Team!</h2>
                    <p >
                        You made it here! Wooo! I'd be quite stoked to join the team as a Senior Producer and here's why I think I'd be a great fit. 
                    </p>

                    <b> <u>Teaching Curricula</u></b>
                    <p>In grad school, my focus was the process of photogrammetry - the reconstruction of 3D models from 2D photos - and how to use those 3D models for something educational (augmented reality apps). 
                        In short, my goal was to "open-sourcify" the process of creating photogrammetry-based mobile apps, particularly for students and curious adults. 
                    </p>
                    <p> 
                        As a result, I created many guides for a various audiences, explaining the entire process from planning the photography shoot to developing your own app with the created models. Here are a few: 
                    </p> 
                        <ol>
                            <li>
                            A photogrammetry guide for high school students: 
                            <a href="https://drive.google.com/file/d/1tOaGjPaU7WTHrXjbJc63fg-uH0_xgjWy/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                HERE
                            </a>
                            </li>
                            <li>
                            A four part series catered to adults: 
                        <ol>
                            <li>
                            <a href="https://drive.google.com/file/d/1JQgczYVgkDpn9baUvtuy49F81JkxBNQS/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                The Deep Sea AR Pipeline
                            </a>
                            <a href="https://drive.google.com/file/d/1C8-LdOYqocsW-PrB5XOQRKH4cBERma1a/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                1. Photogrammetry Overview
                            </a>
                            <a href="https://drive.google.com/file/d/1wawP6-Opf6TtUi2VwP9elyCliRvUAei8/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                2. Photoshoot Prep
                            </a>
                            <a href="https://drive.google.com/file/d/1XJy9LrDvpaAP0QCjIfBqiih1FQ17gVJv/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                3. Asset Creation
                            </a>
                            <a href="https://drive.google.com/file/d/1VGq8Dy7krVVU7CL04k9bv5Eshzg3z6xe/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                4. Mobile AR Development
                            </a>
                            </li>
                        </ol>
                        </li>
                        </ol>
                    
                    <p> Also in grad school, I was a TA (and then instructor) of 6.UAT: Oral Communication, MIT's capstone public speaking class for computer science majors. Quite frankly, one of the highlights of my time at MIT.  
                    </p>
                    <p>During the class, I created a few interactive workshops to push students in different areas of public speaking. Here are a few:
                    </p>

                    <ol>
                            <li><a href="https://drive.google.com/file/d/1AxOLW113Dcq0ACCxUwP3-5_U6Fcv8lyF/view?usp=share_link" target="_blank" rel="noopener noreferrer">
                                Effective Storytelling Workshop
                            </a> elements of storytelling to enhance public speaking</li>
                            <li><a href="https://drive.google.com/file/d/1twr3uTJGYr7_20bYOv7Ve0wyiP9EetT6/view?usp=share_link" target="_blank" rel="noopener noreferrer">
                            Podcast Checkoff
                            </a>getting students comfortable in front of a mic</li>
                            <li><a href="https://drive.google.com/file/d/1Ru2NnNU5aGqgffeovj3llHRwAqlpugjs/view?usp=share_link" target="_blank" rel="noopener noreferrer">
                                Career Fair Workshop
                            </a>simulating the (sometimes overwhelming) career fair environment</li>
                            
                            
                    </ol>

                    <u><b style={{paddingTop:20}}>Science Communication in Various Media</b></u>

                    <p>For nearly a decade, I've enjoyed the process of "technical storytelling" in various media. Here are a few projects across time and domain that highlight my adaptablity to different mediums:</p>
                    
                    <ol>
                        <li>
                            <a href="https://evandenmark.github.io/ForSpaciousSkies/" >For Spacious Skies</a> Inspired by the New York Times data scrollytelling articles, I created my own to show how COVID affected flight patterns. (best on safari) 
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=_o_1YaLAJI4" > Northeastern RISE</a> Way back in 2016, I made a short documentary in a weekend for a friend's research. It won the video competition.
                        </li>
                    </ol>

                    <p>Many other storytelling projects can be found on the <a href="https://evandenmark.com"> My Work </a>page.</p>




                    

                    
                </div>

            </div>
            {/* <div className={styles.imageWrapper}>
                <img src={"/images/nautilus.jpeg"} className={styles.image} />
            </div> */}
        </div>
    </>
}

export default Brilliant;