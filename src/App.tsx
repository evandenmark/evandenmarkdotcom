import FutureAncestors from "./FutureAncestors/FutureAncestors"
import Home from './Homepage/homepage';
import './App.css';

import { 
  Navigate, 
  Route,
  Routes 
} from "react-router-dom"; 
import RetinalRitual from "./Projects/RetinalRitual";
import Postcards from "./Projects/Postcards";
import Micronations from "./Projects/Micronations";
import NatGeo from "./Projects/NatGeo";
import BoothRoad from "./Projects/BoothRoad";

function App() {
  return ( 
    <> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/futureancestors" element={<FutureAncestors />} />
            <Route path="/retinalritual" element={<RetinalRitual />} />
            <Route path="/postcards" element={<Postcards />} />
            <Route path="/micronations" element={<Micronations />} />
            <Route path="/natgeo" element={<NatGeo />} />
            <Route path="/boothroad" element={<BoothRoad />} />
        </Routes>
    </> 
  ); 
}

export default App;
