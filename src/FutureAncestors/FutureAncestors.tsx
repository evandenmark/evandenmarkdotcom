import React, { useEffect, useState } from 'react';
import '../App.css';
import {fullAudio, shortAudio} from "./data"
import {shuffleArray} from "./utils"


import Header from "./Header";
import GridSystem from "./GridSystem";
import { Display } from './types';

const FutureAncestors = () => {

    const apikey = 'AIzaSyBXJ0-E1BwGOFs9hZuMOsfV5iVhzg97ih4'
    const CLIENT_ID = '579441668278-bgq91p7aodjrt92pgsjng9hnoib7sjp4.apps.googleusercontent.com'
    const FOLDER_ID = "13g2EvoropXH6CIacYlFnZ1ozbPyVoWok"
    

    const [display, setDisplay] = useState(Display.SHORT)

    //shuffle the shorts, allow fulls to go in chronological order
    const audioData = display == Display.SHORT ? shuffleArray(shortAudio) : fullAudio;
        return (
            <div className={"centerColumn"}>
                <Header display={display} setDisplay={setDisplay}/> 

                <GridSystem data={audioData}/>
        </div>
        )
}

export default FutureAncestors;