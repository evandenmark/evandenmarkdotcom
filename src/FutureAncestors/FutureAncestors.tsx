import React, { useEffect, useMemo, useState } from 'react';
import '../App.css';
import {fullAudio, shortAudio,storyslamAudio} from "../assets/futureancestors/data"
import useWindowDimensions, {shuffleArray} from "./utils"


import Header from "./Header";
import GridSystem from "./GridSystem";
import { Display } from './types';
import { Paper } from '@mui/material';


const FutureAncestors = () => {

    const [display, setDisplay] = useState(Display.SHORT)

    // const { height, width } = useWindowDimensions();
    const { innerWidth: width, innerHeight: height } = window;
    
    //shuffle the shorts, allow fulls to go in chronological order
    const audioData = useMemo( 
        () => {console.log("getting audio"); return (
            display === Display.SHORT ? shortAudio 
            : display === Display.STORYSLAM ? storyslamAudio
            :fullAudio)}, 
        [display]
    )

    const shuffledData = useMemo(
        () => display === Display.SHORT ? shuffleArray(audioData) : audioData,
        [audioData]
    )
    
    return (
        <Paper
            elevation={0}
            sx={
                {
                    width: width < 720 ? width*0.98 : width*0.8,
                    marginLeft: width < 720 ? 3  : `${width*0.1}px`,
                    marginTop: width < 720 ? 3  : `${width*0.05}px`,
                 }
                }
                >
            <Header 
                display={display} 
                setDisplay={setDisplay} 
                width ={width}
                height={height}
            /> 

            <GridSystem 
                data={shuffledData} 
                width={width}
                height={height}
                display={display}
            />
        </Paper>
    )
}

export default FutureAncestors;