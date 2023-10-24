import { Paper } from "@mui/material";
import { padding } from "@mui/system";
import Stack from '@mui/material/Stack';
import MenuToggle from "./MenuToggle";
import { HeaderProps } from "./types";



const Header = ({display, setDisplay}: HeaderProps) => {
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
            <div className={"header-div"}>
                <div id={"title"}>
                    <p> F U T U R E <b> A N C E S T O R S </b></p>
                </div>
                <div id={"subtitle"}>
                    <p><i>voices of the past, recorded in the present, listened in the future</i></p>
                </div>
            </div>
            
            <MenuToggle display={display} setDisplay={setDisplay}/>
        </Paper>
            
        
    )
}

export default Header;