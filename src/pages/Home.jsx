import { Link } from "react-router-dom"
import mlb from "../assets/mlbhero.png"
import "../styles/home.css"
import { useEffect } from "react"

const Home = ({setProfile}) => {
    
    return (
        <div>
            <div className="">
                <div><img src={mlb} className=""></img></div>
                <div className=""> 
                    <h1 className="">Catch MLB Tickets Today!</h1>
                    <h2 className="">Buy MLB Tickets, <span>Earn Rewards</span></h2>
                    <Link className="" to="/sports">Find Tickets</Link>
                </div>
            </div>

        </div>
    )
}

export default Home