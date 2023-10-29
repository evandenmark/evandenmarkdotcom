import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return(
        <div className="home">
            <h1>Click Below</h1>
            <button 
                onClick={() => navigate('/futureancestors')}
                style={{
                    fontSize: 30
                }}

                >Future Ancestors</button>
        </div>
    )
}
 
export default Home;