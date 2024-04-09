import { useNavigate } from "react-router-dom";
import AnswerProject from "./AnswerProject";
import IntertidalZone from "./IntertidalZone";
import Intro from "./Intro";
import QuestionDropdown from "./QuestionDropdown";
import styles from "./homepage.module.css";
import { Paper } from "@mui/material";

const Home = () => {
    const navigate = useNavigate();
    return(
        <Paper className={styles.main}>
        <div className={styles.home}>
            <Intro/>

            <h1>Open Collaborations and Projects</h1>
            <ul>
            <li>
                <AnswerProject 
                    title={"Postcards"}
                    time={"2024"}
                    description={"COMING SOON: Let's hand deliver a postcard without Google Maps."}
                    link={""}
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
                    link={""}
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
                        title={"Retinal Ritual"}
                        time={"2019"}
                        description={"Art installation at MIT's Under the Dome exhibit"}
                        link={""}
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

            <h1>Affiliations</h1>

            <ul>
            <li>
                    <AnswerProject 
                        title={"Purple Mai'a"}
                        time={"2023"}
                        description={"Cohort 5 of Ka Maka Inana - Ethical Design in a Hawaiian context"}
                        link={"https://purplemaia.org/innovation/training/ka-maka-inana/"}
                        />
                </li>    
                <li>
                    <AnswerProject 
                        title={"MIT Media Lab, Future Ocean Lab"}
                        time={"2019-2020"}
                        description={"Created multimedia educational experiences for ocean storytelling "}
                        link={"https://youtu.be/NEfQTtMSXHQ"}
                        />
                </li>
                <li>
                    <AnswerProject 
                        title={"Pixar Animation Studios"}
                        time={"2016-2018"}
                        description={"Technical director for Oscar nomiated Incredibles 2 and Cars 3"}
                        link={"https://www.imdb.com/name/nm9761816/?ref_=fn_al_nm_1"}
                        />
                </li>
                <li>
                    <AnswerProject 
                        title={"MIT Civic Data Design Lab"}
                        time={"2020"}
                        description={"Project Manager for data journalism blog"}
                        link={"https://blog.civicdatadesignlab.mit.edu/page/3"}
                        />
                </li>
                
                <li>
                    <AnswerProject 
                        title={"The Tech"}
                        time={"2020"}
                        description={"Staff reporter for MIT newspaper"}
                        link={"https://thetech.com/authors/evan-denmark"}
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
                        link={""}
                        />
                </li> 
                
                <li>
                    <AnswerProject 
                        title={"Booth Road Farms"}
                        time={"2021-2023"}
                        description={"Farming in Residency: malama 'aina a Pauoa Valley agroforest"}
                        link={""}
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