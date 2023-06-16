import { Link } from "react-router-dom"
import mlb from "../assets/mlbhero.png"
import "../styles/home.css"
import { useEffect } from "react"

const Home = ({setProfile}) => {
    
    return (
        <div>
            <div className="baseball-banner">
                <div className="baseball-text-container"> 
                    <h1 className="banner-title">Catch MLB Tickets Today!</h1>
                    <h2 className="banner-caption">Buy MLB Tickets, <span className="span">Earn Rewards</span></h2>
                    <Link className="banner-link" to="/sports">Find Tickets</Link>
                </div>
            </div>

        </div>
    )
}

export default Home