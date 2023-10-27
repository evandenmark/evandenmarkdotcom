import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return(
        <div className="home">
            <h1>This is the Home page</h1>
            <button onClick={() => navigate('/futureancestors')}>Future Ancestors</button>
        </div>
    )
}
 
export default Home;