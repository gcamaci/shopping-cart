import { Link } from "react-router-dom"
import mlb from "../assets/mlbhero.png"
import { useEffect } from "react"

const Home = ({setProfile}) => {
    
    return (
        <div>
            <div className="relative h-96">
                <div><img src={mlb} className="absolute inset-0 h-full w-full object-cover"></img></div>
                <div className="absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center text-white p-4 gap-4"> 
                    <h1 className="text-7xl font-bold">Catch MLB Tickets Today!</h1>
                    <h2 className="text-3xl">Buy MLB Tickets, <span className="text-[#ce3197] font-bold">Earn Rewards</span></h2>
                    <Link className="text-xl" to="/sports">Find Tickets</Link>
                </div>
            

            </div>

        </div>
    )
}

export default Home