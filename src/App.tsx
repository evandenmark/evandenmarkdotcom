import FutureAncestors from "./FutureAncestors/FutureAncestors"
import Home from './Homepage/homepage';
import './App.css';

import { 
  Navigate, 
  Route,
  Routes, 
  useNavigate
} from "react-router-dom"; 
import RetinalRitual from "./Projects/RetinalRitual";
import Postcards from "./Projects/Postcards";
import NatGeo from "./Projects/NatGeo";
import About from "./Projects/About";
import Intertidal from "./Projects/Intertidal";
import Autio from "./Projects/Autio";
import CDDL from "./Projects/CDDL";
import Pixar from "./Projects/Pixar";
import FOL from "./Projects/FOL"
import Brilliant from "./Projects/Brilliant"
import Speaking from "./Projects/Speaking";
import MyWork from "./Projects/MyWork";
import Schmidt from "./Projects/Schmidt";
import Reflection from "./Projects/Reflection";

function App() {
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
  return ( 
    <> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About navFunc={handleTitleClick}/>} />
            <Route path="/mywork" element={<MyWork navFunc={handleTitleClick}/>} />
            <Route path="/schmidtsciences" element={<Schmidt navFunc={handleTitleClick}/>} />
            <Route path="/futureancestors" element={<FutureAncestors />} />
            <Route path="/retinalritual" element={<RetinalRitual navFunc={handleTitleClick}/>} />
            <Route path="/postcards" element={<Postcards navFunc={handleTitleClick}/>} />
            <Route path="/natgeo" element={<NatGeo navFunc={handleTitleClick}/>} />
            <Route path="/intertidal" element={<Intertidal />} />
            <Route path="/autio" element={<Autio navFunc={handleTitleClick}/>} />
            <Route path="/cddl" element={<CDDL navFunc={handleTitleClick}/>} />
            <Route path="/pixar" element={<Pixar navFunc={handleTitleClick}/>} />
            <Route path="/fol" element={<FOL navFunc={handleTitleClick}/>} />
            <Route path="/speaking" element={<Speaking />} />
            <Route path="/brilliant" element={<Brilliant navFunc={handleTitleClick}/>} />
            <Route path="/reflection" element={<Reflection navFunc={handleTitleClick}/>} />

        </Routes>
    </> 
  ); 
}

export default App;
