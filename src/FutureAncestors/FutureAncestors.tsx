import React, { useEffect, useState } from 'react';
import '../App.css';
import {fullAudio, shortAudio} from "../assets/futureancestors/data"
import {shuffleArray} from "./utils"


import Header from "./Header";
import GridSystem from "./GridSystem";
import { Display } from './types';

const FutureAncestors = () => {

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