import styles from "./intro.module.css"

import meImage from '../assets/images/me.jpeg'

interface IntroParams {
    navFunc: (link: string) => void
}

const Intro = ({navFunc} : IntroParams) => {

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
                            I am a technical storyteller - i.e. a software engineer, media producer, and communicator.
                        </p>
                        <p className={styles.paragraph}> Born and raised by the ocean, I thrive in the <b><u onClick={() => navFunc('/intertidal')} style={{cursor: 'pointer'}}>intertidal zone</u></b>:
                            my work brings many worlds together and leans into their intersection.
                        </p>
                        <p className={styles.paragraph}>I'm most interested in the question:  <i>how can technology enhance our storytelling?</i>
                        </p>
                        <p className={styles.paragraph}><i>...and how can storytelling enhance our tech?</i>
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