import { useNavigate, Link } from "react-router-dom";
import Intro from "../Projects/Intro";
import styles from "./homepage.module.css";
import { Paper } from "@mui/material";
import natgeo from "../assets/images/natgeo.png"
import purplemaia from "../assets/images/purplemaia.png"
import pixar from "../assets/images/pixar.png"
import medialab from "../assets/images/medialab.png"
import cddl from "../assets/images/cddl.png"
import autio from "../assets/images/autio.png"
import thetech from "../assets/images/thetech.png"
import zIndex from "@mui/material/styles/zIndex";
// import postcards_trailer from "/audio/trailer_final.mp3"


const Home = () => {
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

    const collabs = [
        { name: "The Post Man", description: "An audio documentary about the delivery of a postcard...without Google Maps", year: "2024", image: "images/postcards3.png", link: "/postcards" },
        // {name: "Micronations", description: "Is a nation a nation no matter how small?", year: "2022-present", image:"images/micronations.png", link: "/micronations"}

    ]

    const affiliations = [
        { name: "National Geographic", img: natgeo, link: "https://www.nationalgeographic.org/society/our-programs/lab/" },
        { name: "MIT Media Lab", img: medialab, link: "https://www.media.mit.edu/" },
        { name: "Pixar", img: pixar, link: "https://www.imdb.com/name/nm9761816/" },
        { name: "Purple Mai'a", img: purplemaia, link: "https://purplemaia.org/" },
        { name: "CDDL", img: cddl, link: "https://civicdatadesignlab.mit.edu/" },
        { name: "The Tech", img: thetech, link: "https://thetech.com" },
        { name: "Autio", img: autio, link: "https://autio.com/" },
    ]

    const projects = [
        { name: "Future Ancestors", description: "A sound archive to connect my family's voices through time ", year: "2023-present", image: "images/futureancestors.png", link: "/futureancestors" },

        { name: "Autio", year: "2021", description: "A place-based podcast mobile app", link: "/autio", image: "/images/autio.png" },

        { name: "Cocoa Calypso", year: "2020", description: "Nomading North America through sound", link: "https://evandenmark.github.io/CocoaStorymap/", image: "/images/cocoa.png" },
    ]

    const visual = [
        { name: "For Spacious Skies", year: "2020", description: "A data scrollytelling visualization about COVID travel", link: "https://evandenmark.github.io/ForSpaciousSkies/", image: "/images/spaciousskies.png" },
        { name: "Civic Data Design Lab", year: "2020", description: "Data journalism work at MIT Urban Planning", link: "/cddl", image: "/images/cddl.png" },

        { name: "NatGeo DropCam", year: "2019", description: "Deep sea cameras in the Galapagos", link: "/natgeo", image: "/images/natgeo.png" },
        { name: "Retinal Ritual", year: "2019", description: "Art installation at MIT's Under the Dome exhibit", link: "/retinalritual", image: "/images/retinalritual.png" },
        { name: "Future Ocean Lab", year: "2019-2020", description: "Deep sea photogrammetry and AR app", link: "/fol", image: "/images/fol.png" },

        { name: "Incredibles 2", year: "2016-2018", description: "Technical lighting on the Oscar-nominated film", link: "/pixar", image: "/images/i2.png" },
        { name: "Bloom Nepal", year: "2017", description: "A short film on innovative education in Nepal", link: "https://www.youtube.com/watch?v=F3zxuaIjTq0", image: "/images/bloom.png" },
        { name: "YouTube", description: "short documentaries",link: "https://www.youtube.com/channel/UCD5-TrhD1QOVLC7cHUWRvQw", image: "/images/youtube.png" }

    ]

    return (
        <Paper className={styles.main}>
            <div className={styles.home}>
                <div className={styles.menu}>
                    <nav>
                        <ul className={styles.navList}>

                            <li><Link to="/">My Work</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/intertidal">Intertidal</Link></li>
                            <li><Link to="https://docs.google.com/document/d/1SKFlFGR8Am_kIG0-sL_NDgGAwZA2eXAljyl3XXZKHag/edit?usp=sharing" target="_blank">CV</Link></li>

                        </ul>
                    </nav>
                </div>


                <Intro navFunc={handleTitleClick} />

                <ul className={styles["affiliations-ul"]}>
                    {affiliations.map(aff =>
                        <div className={styles.affiliations}>
                            <img src={aff.img} onClick={() => handleTitleClick(aff.link)}></img>
                        </div>
                    )}

                </ul>

                <h1>Active Projects</h1>
                <p>"in-the-pipeline" work looking for funding and collaborators </p>
                <div id={"my-work"}>
                    <div style={{ alignItems: "center" }}>
                        <ul>
                            <li>
                                <img src={"/images/postcardart.png"}></img>
                            </li>
                            <li style={{ alignItems: "center" }}>
                                <h2>The Post Man</h2>
                                <p><i>An audio documentary to deliver a postcard...without Google Maps</i></p>

                                <p>Listen to the Trailer</p>
                                <audio controls >
                                    <source src={"/audio/trailer_final.mp3"} type="audio/mpeg" />
                                    Your browser does not support the audio tag.
                                </audio>
                            </li>
                            <li style={{
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 40
                            }}>
                                <button
                                    onClick={() => handleTitleClick("/postcards")}
                                    style={{
                                        // alignSelf: "start",
                                        alignContent: "center",
                                        fontSize: "30px",
                                        display: "flex",
                                        color: "#fff",
                                        backgroundColor: "#ff2b2b",
                                        border: "none",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                        transition: "background-color 0.3s",
                                    }}
                                ><h3>Learn More</h3> </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <h1>Audio </h1>

                <div>
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
                                <p><b><i>{p.year}</i></b></p>
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
                                <p><b><i>{p.year}</i></b></p>
                                <p>{p.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </Paper >
    )
}

export default Home;