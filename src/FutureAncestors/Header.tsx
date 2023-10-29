import { Autocomplete, Box, Modal, Paper, TextField, Typography } from "@mui/material";
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

    const [modalOpen, setModalOpen] = useState(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
        
    
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
                <Stack spacing={2}>
                    <MenuToggle display={display} setDisplay={setDisplay}/>
                    <button
                        style={{
                            fontSize: 15
                        }}
                        onClick={() => {setModalOpen(true)}}
                        >Want to Contribute?
                    </button>
                
                </Stack>
                
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

                        <button
                            style={{
                                fontSize: 15,
                            }}
                            onClick={() => {setModalOpen(true)}}
                            >Want to Contribute?
                        </button>
                    </Stack>
                )
            }
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <center>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                    This project is a family time capsule and will live on in perpetuity. 
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    ...but it isn't free.  
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    While this site is homemade, it costs <b>$60 per year</b> to store the audio files.  
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    If you would like to sponsor this project and help it live on, please reach out to Evan or Venmo him  
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    @Evan-Denmark
                    </Typography>
                    </center>
                </Box>
            </Modal>
            
            
        </Paper>
        
            
        
    )
}

export default Header;