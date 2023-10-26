import { Autocomplete, Paper, TextField } from "@mui/material";
import { padding } from "@mui/system";
import Stack from '@mui/material/Stack';
import MenuToggle from "./MenuToggle";
import { HeaderProps } from "./types";
import React, { useState } from "react";



const Header = (
    {
        display, 
        setDisplay, 
        width, 
        height
    }: HeaderProps) => {

    const aspectRatio = width / height;
    const numColumns = aspectRatio > 1.5 ? 3 : aspectRatio > 0.8 ? 2 : 1
        
    
    return (
        
        <Paper 
            sx={{
                // padding: 10, 
                // marginLeft: 20,
                // marginRight: 20,
                alignItems:"center",
                justifyContent:"space-between",
                display: "flex"
            }} 
            elevation={0}
            >
            {
                numColumns > 1 ? (
                <>
                <div className={"header-div"}>
                    <div id={"title"}>
                        <p> F U T U R E <b> A N C E S T O R S </b></p>
                    </div>
                    <div id={"subtitle"}>
                        <p><i>connecting our voices through time</i></p>
                    </div>
                </div>
                <MenuToggle display={display} setDisplay={setDisplay}/>
                </>
                )
                : (
                    <Stack 
                        direction={"column"} 
                        spacing={2}
                        >
                        <div className={"header-div"}>
                            <div id={"title"}>
                                <p> F U T U R E <b> A N C E S T O R S </b></p>
                            </div>
                            <div id={"subtitle"}>
                                <p><i>connecting our voices through time</i></p>
                            </div>
                        </div>
                    
                        <MenuToggle display={display} setDisplay={setDisplay}/>
                    </Stack>
                )
            }
            
            
        </Paper>
        
            
        
    )
}

export default Header;