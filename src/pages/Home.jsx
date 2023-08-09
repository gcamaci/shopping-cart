import { Link } from "react-router-dom"
import { RewardsBanner } from "../components/RewardsBanner"
import "../styles/home.css"
import { useEffect, useState } from "react"

const Home = ({setProfile}) => {
    const [genre,setGenre] = useState('')
    const [attractionList, setSlideEvents] = useState([])
    useEffect(()=>{
        setGenre("Music")
    },[])
    useEffect(() => {
        const getEventsFromGenre = async () => {
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?classificationName=${genre}&size=40&apikey=${import.meta.env.VITE_APP_MY_API_KEY}`,{mode:'cors'})
            const data = await response.json()
            setSlideEvents(data._embedded.attractions)
        }

        getEventsFromGenre()
       
    },[genre])

    const genreSearch = (e) => {
        setGenre(e.target.id)
        
    }

    const updateSearch = (e) => {
        setProfile(e.target.id)
    }
    return (
        <div>
            <div className="event-banner">
                <div className="event-text-container"> 
                    <h1 className="banner-title">Being there is all that matters.</h1>
                    <h2 className="banner-caption">Buy Tickets, <span className="span">Earn Rewards</span></h2>
                </div>
            </div>
            <div className="event-slide-container">
                <ul className="category-container">
                    <li id="Sports" className="" onClick={genreSearch}>Sports</li>
                    <li id="music" className="" onClick={genreSearch}>Concerts</li>
                    <li id="Comedy" className="" onClick={genreSearch}>Comedy</li>
                    <li id="Musical"  className="" onClick={genreSearch}>Theater</li>
                </ul>
                <div className="event-container">
                    {attractionList.map((attraction,index) => {
                        if(index < 4){
                            return <div key={attraction.id} id={attraction.id} className="slide-card">
                                <img className="card-img" src={attraction.images[0].url}></img>
                                <div className="text-container">
                                    <p>{attraction.name}</p>
                                    <Link to='/profile' onClick={updateSearch} id={attraction.name}>Find Tickets</Link>
                                </div>
                            </div>
                        }
                    })}
                </div>
            </div>
            <RewardsBanner></RewardsBanner>     
        </div>
    )
}

export default Home