import { useNavigate } from "react-router-dom";
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
        {name: "Postcards", description: "An audio documentary to deliver a postcard...without Google Maps", year: "2024", image:"images/postcards.png"},
        {name: "Future Ancestors", description: "A sound archive to connect my family's voices through time ", year: "2023-present", image:"images/futureancestors.png"},
        {name: "Micronations", description: "Is a nation a nation no matter how small?", year: "2022-present", image:"images/micronations.png"}
    
    ]

    const affiliations = [
        {name: "National Geographic", img: natgeo, link: "/natgeo"},
        {name: "MIT Media Lab", img: medialab, link: "/"},
        {name: "Pixar", img: pixar, link: "/natgeo"},
        {name: "Purple Mai'a", img: purplemaia, link: "/natgeo"},
        {name: "CDDL", img: cddl, link: "/natgeo"},
        {name: "The Tech", img: thetech, link: "/natgeo"},
        {name: "Autio", img: autio, link: "/natgeo"},
    ]

    const projects = [
        {name: "Autio", year: "2021", description: "A place-based podcast mobile app", link:"https://autio.com/", image: "/images/autio.png"}, 
        {name: "For Spacious Skies", year: "2020",description: "A data scrollytelling visualization about COVID travel", link:"https://evandenmark.github.io/ForSpaciousSkies/", image: "/images/spaciousskies.png"}, 
        {name: "Civic Data Design Lab", year: "2020", description: "Data journalism work at MIT Urban Planning", link:"https://blog.civicdatadesignlab.mit.edu/h2a:-america's-essential-yet-unknown-program", image: "/images/cddl.png"}, 
        
        {name: "Cocoa Calypso", year: "2020",description: "Nomading North America through sound", link:"https://evandenmark.github.io/CocoaStorymap/", image: "/images/cocoa.png"}, 
        
        {name: "NatGeo DropCam", year: "2019",description: "Deep sea cameras in the Galapagos", link:"/natgeo", image: "/images/natgeo.png"},
        {name: "Retinal Ritual", year: "2019",description: "Art installation at MIT's Under the Dome exhibit", link:"/retinalritual", image: "/images/retinalritual.png"}, 
        {name: "Future Ocean Lab", year: "2019-2020",description: "Deep sea photogrammetry and AR app", link:"https://www.youtube.com/watch?v=NEfQTtMSXHQ", image: "/images/fol.png"}, 
        
        {name: "Incredibles 2", year: "2016-2018",description: "Technical lighting on the Oscar-nominated film",link:"https://www.imdb.com/name/nm9761816/", image: "/images/i2.png"}, 
        {name: "Bloom Nepal", year: "2017",description: "A short film on innovative education in Nepal", link:"https://www.youtube.com/watch?v=F3zxuaIjTq0", image: "/images/bloom.png"}, 
         
        
    ]

    return(
        <Paper className={styles.main}>
        <div className={styles.home}>
            <Intro/>

            <ul className={styles["affiliations-ul"]}>
                {affiliations.map(aff => 
                <div className={styles.affiliations}>
                    <img src={aff.img} onClick={() => handleTitleClick(aff.link)}></img>
                </div>
                )}
            
            </ul>

            <h1>Open Collaborations and Projects</h1>
            <div> 
                <ul className={styles.projectList}> 
                {collabs.map((c, index) => (
                    <li
                        key={index}
                        className={styles.projectItem}
                        style={{
                            backgroundImage: `url(${c.image})`, 
                        }}
                    >
                        <h2>{c.name}</h2>
                        <p><b><i>{c.year}</i></b></p>
                        <p>{c.description}</p>
                    </li>
                ))}
                </ul>
            </div>

            <h1>My Work</h1>

            <div> 
                <ul className={styles.projectList}> 
                {projects.map((c, index) => (
                    <li
                        key={index}
                        className={styles.projectItem}
                        style={{
                            backgroundImage: `url(${c.image})`, 
                        }}
                    >
                        <h2>{c.name}</h2>
                        <p><b><i>{c.year}</i></b></p>
                        <p>{c.description}</p>
                    </li>
                ))}
                </ul>
            </div>
            


            <h1>Expeditions and Residencies</h1>
            <ul>
                <li>
                    <AnswerProject 
                        title={"National Geographic"}
                        time={"2019"}
                        description={"Galapagos Islands, Deep Sea Drop Camera"}
                        link={"/natgeo"}
                        />
                </li> 
                
                <li>
                    <AnswerProject 
                        title={"Booth Road Farms"}
                        time={"2021-2023"}
                        description={"Farming in Residency: malama 'aina a Pauoa Valley agroforest"}
                        link={"/boothroad"}
                        />
                </li> 
                
                <li>
                    <AnswerProject 
                        title={"Mars College"}
                        time={"2021"}
                        description={"An off-grid technical art residency in the desert "}
                        link={"https://mars.college/"}
                        />
                </li> 
            </ul>

            
            
            <div id="intertidal">
                <IntertidalZone/>
            </div>

            
        </div>
        </Paper>
    )
}
 
export default Home;