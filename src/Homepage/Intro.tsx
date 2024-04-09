import styles from "./intro.module.css"


const Intro = () => {

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth', // Optional: adds smooth scrolling
        });
    };

    return (
        <>
        <div className={styles.header}>
            Ahoy there! I'm Evan.
        </div>
        <p>I am a technical storyteller.  Born and raised by the ocean, I thrive 
            in the  <u onClick={scrollToBottom} style={{cursor: 'pointer'}}>intertidal zone</u>, physically and metaphorically. 
            My work involves bringing many worlds together and leaning into their intersection.
            Right now, I'm most interested in the question of <i>"how can we use storytelling, 
            (appropriate doses of) tech, and indigenous wisdom to increase our connection
            with the land, with our humanity, and with each other?"</i>
            </p>
        
        </>
    )
}

export default Intro;