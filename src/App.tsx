import FutureAncestors from './futureancestors';
import Home from './homepage';
import './App.css';

import { 
  BrowserRouter as Router, 
  Navigate, 
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
                
            {/* default redirect to home page */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router> 
    </> 
  ); 
}

export default App;
