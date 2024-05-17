import styles from "./intro.module.css"

import meImage from '../assets/images/me.jpeg'
const Intro = () => {

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth', // Optional: adds smooth scrolling
        });
    };

    return (
        <>
            
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <div className={styles.header}>
                        Ahoy there!
                    </div>
                    <div className={styles.header}>
                        I'm Evan.
                    </div>
                    <div className={styles.content}>
                        <p className={styles.paragraph}>
                            I am a technical storyteller - i.e. a trained engineer and multi-media creator.
                        </p>
                        <p className={styles.paragraph}> Born and raised by the ocean, I thrive in the <b><u onClick={scrollToBottom} style={{cursor: 'pointer'}}>intertidal zone</u></b>:
                            my work brings many worlds together and leans into their intersection.
                        </p>
                        <p className={styles.paragraph}>I'm most interested in the question  <i>"how can we use storytelling, 
                            (appropriate doses of) tech, and indigenous wisdom to increase our connection
                            with the land, with our humanity, and with each other?"</i>
                        </p>
                    </div>
                    
                </div>
                <div className={styles.imageWrapper}>
                    <img src={meImage} className={styles.image} />
                </div>
            </div>
        </>
    )
}

export default Intro;