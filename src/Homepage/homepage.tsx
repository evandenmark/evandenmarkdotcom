import { useNavigate, Link } from "react-router-dom";
import Intro from "../Projects/Intro";
import styles from "./homepage.module.css";
import { Paper, Stack } from "@mui/material";
import natgeo from "../assets/images/natgeo.png"
import purplemaia from "../assets/images/purplemaia.png"
import pixar from "../assets/images/pixar.png"
import medialab from "../assets/images/medialab.png"
import cddl from "../assets/images/cddl.png"
import autio from "../assets/images/autio.png"
import thetech from "../assets/images/thetech.png"
import schmidt from "../assets/images/schmidt.png"
import zIndex from "@mui/material/styles/zIndex";
import MyWork from "../Projects/MyWork";
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
        { name: "Post Office Magic", description: "An audio documentary about the delivery of a postcard...without Google Maps", year: "2024", image: "images/postcards3.png", link: "/postcards" },
        // {name: "Micronations", description: "Is a nation a nation no matter how small?", year: "2022-present", image:"images/micronations.png", link: "/micronations"}

    ]

    const affiliations = [
        { name: "National Geographic", img: natgeo, link: "https://www.nationalgeographic.org/society/our-programs/lab/" },
        { name: "MIT Media Lab", img: medialab, link: "https://www.media.mit.edu/" },
        { name: "Pixar", img: pixar, link: "https://www.imdb.com/name/nm9761816/" },
        { name: "Purple Mai'a", img: purplemaia, link: "https://purplemaia.org/" },
        { name: "Schmidt Sciences", img: schmidt, link: "https://www.schmidtsciences.org/" },
        { name: "Civic Data Design Lab", img: cddl, link: "https://civicdatadesignlab.mit.edu/" },
        { name: "Autio", img: autio, link: "https://autio.com/" },
    ]

    const projects = [
        { name: "Future Ancestors", description: "A sound archive to connect my family's voices through time ", year: "2023-present", image: "images/futureancestors.png", link: "/futureancestors" },

        { name: "Autio", year: "2021", description: "A place-based podcast mobile app", link: "/autio", image: "/images/autio.png" },

        { name: "Cocoa Calypso", year: "2020", description: "Nomading North America through sound", link: "https://evandenmark.github.io/CocoaStorymap/", image: "/images/cocoa.png" },
    ]

    const visual = [
        { name: "For Spacious Skies", description: "A data scrollytelling visualization about COVID travel", link: "https://evandenmark.github.io/ForSpaciousSkies/", image: "/images/spaciousskies.png" },
        { name: "Civic Data Design Lab", description: "Data journalism work at MIT Urban Planning", link: "/cddl", image: "/images/cddl.png" },

        { name: "NatGeo DropCam",  description: "Deep sea cameras in the Galapagos", link: "/natgeo", image: "/images/natgeo.png" },
        { name: "Retinal Ritual", description: "Art installation at MIT's Under the Dome exhibit", link: "/retinalritual", image: "/images/retinalritual.png" },
        { name: "Future Ocean Lab",  description: "Deep sea photogrammetry and AR app", link: "/fol", image: "/images/fol.png" },

        { name: "Incredibles 2", description: "Technical lighting on the Oscar-nominated film", link: "/pixar", image: "/images/i2.png" },
        { name: "Bloom Nepal", description: "A short film on innovative education in Nepal", link: "https://www.youtube.com/watch?v=F3zxuaIjTq0", image: "/images/bloom.png" },
        { name: "YouTube", description: "short documentaries",link: "https://www.youtube.com/channel/UCD5-TrhD1QOVLC7cHUWRvQw", image: "/images/youtube.jpg" }

    ]

    return (
        <Paper className={styles.main}>
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


                <Intro navFunc={handleTitleClick} />

                <ul className={styles["affiliations-ul"]}>
                    {affiliations.map(aff =>
                        <div className={styles.affiliations}>
                            <img src={aff.img} onClick={() => handleTitleClick(aff.link)}></img>
                        </div>
                    )}

                </ul>

               

                <h1></h1>
                <div id="my-work">
                <div style={{ width: "100%" }}>
                    <Stack
                    direction={{ xs: "column", md: "row" }} // column on mobile, row on desktop
                    alignItems={{ xs: "center", md: "flex-start" }}
                    justifyContent="center"
                    spacing={{ xs: 4, md: 25 }}
                    sx={{ width: "100%" }}
                    >
                    {/* Spotify block */}
                    <div
                        style={{
                        textAlign: "center",
                        width: "100%",
                        maxWidth: "500px",
                        order: 1, // default
                        }}
                    >
                        <h2>Post Office Magic</h2>
                        <p>
                        <i>
                            An{" "}
                            <a
                            href="https://open.spotify.com/episode/0QALfnHOGIwSsMrV4sCXae?si=d1fbac8384474056"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            audio documentary
                            </a>{" "}
                            to deliver a postcard...without Google Maps
                        </i>
                        </p>
                        <iframe
                        src="https://open.spotify.com/embed/episode/48W7r1PCKQhiGJmTou2eAs?utm_source=generator"
                        width="100%"
                        height="350"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        style={{
                            borderRadius: "8px",
                        }}
                        ></iframe>
                    </div>

                    {/* Video block */}
                    <div
                        style={{
                        textAlign: "center",
                        width: "100%",
                        maxWidth: "500px",
                        order: 2, // stays below on mobile
                        }}
                    >
                        <h2>Schmidt Sciences</h2>
                        <p>
                        <i>
                            A{" "}
                            <a
                            href="/schmidtsciences"
                            onClick={() => window.scrollTo(0, 0)}
                            >
                            series
                            </a>{" "}
                            of animated videos about the foundation's cutting edge science
                        </i>
                        </p>
                        <iframe
                        src="https://drive.google.com/file/d/1ibBvNatw42GwsBKm8k0mrkZgu16xmTow/preview"
                        width="100%"
                        height="281"
                        allow="autoplay"
                        style={{
                            borderRadius: "8px",
                        }}
                        ></iframe>
                    </div>
                    </Stack>
                </div>
                </div>


                <div style={{ paddingTop: 30, alignItems: "center",display: "flex", justifyContent: "center" , width: "100%"}}>
                   <button
                    onClick={() => {handleTitleClick("/mywork");  window.scrollTo(0, 0)}}
                    style={{
                        alignSelf: "start",
                        alignContent: "center",
                        fontSize: "30px",
                        display: "flex",
                        color: "#fff",
                        backgroundColor: "#131313",
                        border: "1px solid #fff",
                        borderRadius: "4px",
                        cursor: "pointer",
                        transition: "background-color 0.3s",
                    }}
                ><h3> Full Portfolio</h3> </button> 
                </div>
                

            </div>
            
        </Paper >
    )
}

export default Home;