import { Link } from "react-router-dom"
import mlb from "../assets/mlbhero.png"
import { useEffect } from "react"

const Home = ({setProfile}) => {
    
    return (
        <div>
            <div>
                
                <h1>Summer fun at the ball park! </h1>
                <Link to="/sports">Find Tickets</Link>

            </div>

        </div>
    )
}

export default Home