import { useNavigate, Link } from "react-router-dom";
import AnswerProject from "./AnswerProject";
import IntertidalZone from "./IntertidalZone";
import Intro from "./Intro";
import QuestionDropdown from "./QuestionDropdown";
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
        {name: "The Post Man", description: "An audio documentary about the delivery of a postcard...without Google Maps", year: "2024", image:"images/postcards3.png", link: "/postcards"},
        // {name: "Micronations", description: "Is a nation a nation no matter how small?", year: "2022-present", image:"images/micronations.png", link: "/micronations"}
    
    ]

    const affiliations = [
        {name: "National Geographic", img: natgeo, link: "/natgeo"},
        {name: "MIT Media Lab", img: medialab, link: "/"},
        {name: "Pixar", img: pixar, link:"https://www.imdb.com/name/nm9761816/"},
        {name: "Purple Mai'a", img: purplemaia, link: "/natgeo"},
        {name: "CDDL", img: cddl, link: "/natgeo"},
        {name: "The Tech", img: thetech, link: "/natgeo"},
        {name: "Autio", img: autio, link: "/natgeo"},
    ]

    const projects = [
        {name: "Future Ancestors", description: "A sound archive to connect my family's voices through time ", year: "2023-present", image:"images/futureancestors.png", link: "/futureancestors"},
        
        {name: "Autio", year: "2021", description: "A place-based podcast mobile app", link:"https://autio.com/", image: "/images/autio.png"}, 
        
        {name: "Cocoa Calypso", year: "2020",description: "Nomading North America through sound", link:"https://evandenmark.github.io/CocoaStorymap/", image: "/images/cocoa.png"}, 
    ]

    const visual = [
        {name: "For Spacious Skies", year: "2020",description: "A data scrollytelling visualization about COVID travel", link:"https://evandenmark.github.io/ForSpaciousSkies/", image: "/images/spaciousskies.png"}, 
        {name: "Civic Data Design Lab", year: "2020", description: "Data journalism work at MIT Urban Planning", link:"https://blog.civicdatadesignlab.mit.edu/h2a:-america's-essential-yet-unknown-program", image: "/images/cddl.png"}, 
        
        {name: "NatGeo DropCam", year: "2019",description: "Deep sea cameras in the Galapagos", link:"/natgeo", image: "/images/natgeo.png"},
        {name: "Retinal Ritual", year: "2019",description: "Art installation at MIT's Under the Dome exhibit", link:"/retinalritual", image: "/images/retinalritual.png"}, 
        {name: "Future Ocean Lab", year: "2019-2020",description: "Deep sea photogrammetry and AR app", link:"https://www.youtube.com/watch?v=NEfQTtMSXHQ", image: "/images/fol.png"}, 
        
        {name: "Incredibles 2", year: "2016-2018",description: "Technical lighting on the Oscar-nominated film",link:"https://www.imdb.com/name/nm9761816/", image: "/images/i2.png"}, 
        {name: "Bloom Nepal", year: "2017",description: "A short film on innovative education in Nepal", link:"https://www.youtube.com/watch?v=F3zxuaIjTq0", image: "/images/bloom.png"}, 
         
    ]

    return(
        <Paper className={styles.main}>
        <div className={styles.home}>
            <div className={styles.menu}>
                <nav>
                    <ul className={styles.navList}>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="#my-work">My Work</Link></li>
                        <li><Link to="https://docs.google.com/document/d/1SKFlFGR8Am_kIG0-sL_NDgGAwZA2eXAljyl3XXZKHag/edit?usp=sharing">CV</Link></li>
                        
                    </ul>
                </nav>
            </div>`


            <Intro/>

            <ul className={styles["affiliations-ul"]}>
                {affiliations.map(aff => 
                <div className={styles.affiliations}>
                    <img src={aff.img} onClick={() => handleTitleClick(aff.link)}></img>
                </div>
                )}
            
            </ul>

            <h1>Active Projects</h1>
            <h3>"in-the-pipeline" work looking for funding and collaborators </h3>
            <div id={"my-work"}> 
                <ul className={styles.projectList}> 
                {collabs.map((c, index) => (
                    <li
                        key={index}
                        className={styles.projectItem}
                        style={{
                            backgroundImage: `url(${c.image})`, 
                        }}
                        onClick={() => handleTitleClick(c.link)}
                    >
                        <h2>{c.name}</h2>
                        <p><b><i>{c.year}</i></b></p>
                        <p>{c.description}</p>
                    </li>
                ))}
                </ul>
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
            
            <div id="intertidal">
                <IntertidalZone/>
            </div>

            
        </div>
        </Paper>
    )
}
 
export default Home;