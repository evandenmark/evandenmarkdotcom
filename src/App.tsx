import FutureAncestors from "./FutureAncestors/FutureAncestors"
import Home from './homepage';
import './App.css';

import { 
  Navigate, 
  Route,
  Routes 
} from "react-router-dom"; 

function App() {
  return ( 
    <> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/futureancestors" element={<FutureAncestors />} />
        </Routes>
    </> 
  ); 
}

export default App;
