import styles from "./intro.module.css"


const IntertidalZone = () => {
    return (
        <>
        <h1>The Intertidal Zone</h1>
        <p className={styles.paragraph}>
            The intertidal zone is the space between the high and low tide marks. 
            I grew up on the shores of southeastern Massachusetts where the deep,
            glacially gouged topography of Cape Cod Bay creates massive fluxuations
            in the tides. Every six hours, millions of gallons of water ebb 
            and flow onto the sand flats, moving the water line hundreds or even
            thousands of feet. 
        </p>
        <p className={styles.paragraph}>
            As a result of this movement, the community that resides there - 
            horseshoe crabs, seaweeds, periwinkle snails... and me on most 
            summer days - was made to be dynamic, adaptive to both the world
            above and below the water. And, in navigating that balance, they
            created an environment unlike anywhere else. 
        </p>

        <p className={styles.paragraph}>
            I graduated from MIT in 2017 (B.S) and 2020 (MEng) with degrees
            in Computer Science and Engineering.  
        </p>
        <p className={styles.paragraph}>I now reside on the north shore of O'ahu, Hawai'i and think a lot about 'ai pono (food sovereignty) and malama 'aina (taking care of the land). </p>
        
        </>
    )
}

export default IntertidalZone;