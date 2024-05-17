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
        {name: "Autio", link:"https://autio.com/"}, 
        {name: "For Spacious Skies", link:"https://autio.com/"}, 
        {name: "Cocoa Calypso", link:"https://autio.com/"}, 
        {name: "Retinal Ritual", link:"https://autio.com/"}, 
        {name: "Future Ocean Lab", link:"https://autio.com/"}, 
        {name: "Incredibles 2", link:"https://autio.com/"}, 
        {name: "Bloom Nepal", link:"https://autio.com/"}, 
        {name: "NatGeo DropCam", link:"https://autio.com/"}, 
        {name: "Civic Data Design Lab", link:"https://autio.com/"}, 
        
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
            <ul>
            <li>
                <AnswerProject 
                    title={"Postcards"}
                    time={"2024"}
                    description={"COMING SOON: Let's hand deliver a postcard without Google Maps."}
                    link={"/postcards"}
                    />
                </li>
            <li>
                <AnswerProject 
                    title={"Future Ancestors"}
                    time={"2023 - present"}
                    description={"A creative sound archive to connect my family's voices through time"}
                    link={'/futureancestors'}
                    />
                </li>
            <li>
                <AnswerProject 
                    title={"Micronations"}
                    time={"2022 - present"}
                    description={"Is a nation a nation no matter how small?"}
                    link={"/micronations"}
                    />
                </li>
            </ul>

            <h1>Past Projects</h1>
            <ul>
                <li>
                    <AnswerProject 
                        title={"Autio"}
                        time={"2021"}
                        description={"A place-based podcast travel mobile app"}
                        link={"https://autio.com/"}
                        />
                </li>

                <li>
                    <AnswerProject 
                        title={"For Spacious Skies"}
                        time={"2020"}
                        description={"A data scrollytelling visualization about travel during COVID"}
                        link={"https://evandenmark.github.io/ForSpaciousSkies/"}
                        />
                </li>
                <li>
                    <AnswerProject 
                        title={"Cocoa Calypso"}
                        time={"2020-2021"}
                        description={"Nomading North America through sound"}
                        link={"https://evandenmark.github.io/CocoaStorymap/"}
                        />
                </li> 
                <li>
                    <AnswerProject 
                        title={"Retinal Ritual"}
                        time={"2019"}
                        description={"Art installation at MIT's Under the Dome exhibit"}
                        link={"/retinalritual"}
                        />
                </li>

                <li>
                    <AnswerProject 
                        title={"Bloom Nepal"}
                        time={"2017"}
                        description={"A short film on innovative education in Nepal"}
                        link={"https://www.youtube.com/watch?v=F3zxuaIjTq0"}
                        />
                </li>
            </ul>


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