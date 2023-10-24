import FutureAncestors from './futureancestors';
import Home from './homepage';
import './App.css';

import { 
  BrowserRouter as Router, 
  Route,
  Routes 
} from "react-router-dom"; 

function App() {
  return ( 
    <> 
      {/* This is the alias of BrowserRouter i.e. Router */} 
      <Router> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/futureancestors"
                element={<FutureAncestors />} />
        </Routes>
      </Router> 
    </> 
  ); 
}

export default App;
