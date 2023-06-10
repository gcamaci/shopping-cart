import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar"
import Home from "../pages/Home";
import Profile from '../pages/Profile';
import Comedy from '../pages/Comedy'
import { useState, useEffect } from "react";
import { formatEvents } from "../utils/formatEvent";

const AppContainer = () => {
    const [searchResult, setSearchResult] = useState('');
    const [shows,setShows] = useState({})

    const searchEvents = async () => {
      try {
        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=${import.meta.env.VITE_APP_MY_API_KEY}&keyword=${searchResult}`,{mode:'cors'});
        const data = await response.json();
        const code = data._embedded.attractions[0].id
        const eventResponse = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?attractionId=${code}&apikey=${import.meta.env.VITE_APP_MY_API_KEY}`,{mode:'cors'});
        const eventData = await eventResponse.json();

        const showData = {
          name:data._embedded.attractions[0].name,
          id_code: data._embedded.attractions[0].id,
          upcoming_events: formatEvents(eventData._embedded.events)
        };
        setShows(showData)
      } catch (error){
        console.error('Error Fetching events:',error)
        throw error
      }
    }

    const changeResult = (e) => {
      setSearchResult(e.target.value)
      
    }
    useEffect(() => {
      console.log(searchResult)
      console.log(shows)
    },[searchResult,shows])
    return (
      <div>
        <BrowserRouter>
          <Navbar search={searchEvents} result={changeResult}></Navbar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile artistInfo={shows}/>} />
              <Route path="/comedy" element={<Comedy />}/>
            </Routes>
        </BrowserRouter>
      </div>
    
    );
}

export default AppContainer