import styles from "./intro.module.css"


const Intro = () => {
    return (
        <>
        <div className={styles.header}>
            Aloha, I'm Evan.
        </div>
        <p>I am a technical storyteller.  Born and raised by the ocean, I thrive 
            in the <a href="#intertidal"> <u>intertidal zone</u> </a>, physically and metaphorically. 
            My work involves bringing many worlds together and leaning into their intersection.
            Right now, I'm most interested in the question of <i>"how can we use storytelling, 
            (appropriate doses of) tech, and indigenous wisdom to increase our connection
            with the land, with our humanity, and with each other?"</i>
            </p>
        
        </>
    )
}

export default Intro;