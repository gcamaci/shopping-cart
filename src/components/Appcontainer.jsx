import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar"
import Home from "../pages/Home";
import Profile from '../pages/Profile';
import Comedy from '../pages/Comedy'
import ConcertPage from "../pages/Concerts";
import SportsPage from "../pages/Sports";
import TheaterPage from "../pages/Theatre";
import Cart from "../pages/Cart";
import { useState, useEffect } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { formatEvents } from "../utils/formatEvent";

const AppContainer = () => {
    const [currentEvent, setEvent] = useState([])
    const [searchResult, setSearchResult] = useState('');
    const [shows,setShows] = useState({
      name:'',
      id_code: 0,
      upcoming_events: [{}]  
    })
    //debounce hook
    const debouncedSearchTerm = useDebounce(searchResult,300)

    const searchEvents = async (searchWord) => {
      try {
        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=${import.meta.env.VITE_APP_MY_API_KEY}&keyword=${searchWord}`,{mode:'cors'});
        const data = await response.json();
        console.log(data)
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

    const clearSearch = () =>{
      setSearchResult('')
      setShows({})
    }
    

    

    useEffect(() => {
      if(debouncedSearchTerm){
        searchEvents(debouncedSearchTerm)
      }
    },[debouncedSearchTerm])
    return (
      <div>
        <BrowserRouter>
          <Navbar search={searchEvents} result={changeResult} clear={clearSearch}></Navbar>
            <Routes>
              <Route path="/" element={<Home setProfile={setSearchResult}/>} />
              <Route path="/profile" element={<Profile artistInfo={shows}/>} />
              <Route path="/comedy" element={<Comedy />}/>
              <Route path="/concerts" element={<ConcertPage />} />
              <Route path="/sports" element={<SportsPage />} />
              <Route path="/theatre" element={<TheaterPage />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
      </div>
    
    );
}

export default AppContainer