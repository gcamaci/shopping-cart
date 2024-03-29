import { useEffect, useState } from "react"
import '../styles/shop.css'
import PriceList from "../components/PriceList";
import ShowSelection from "../components/ShowSelection"
import dayjs from "dayjs";
import customParseFormat from 'dayjs'
dayjs.extend(customParseFormat)

const ShopView = ({ shopCode, addCart }) => {
    const [eventInfo, setEventInfo] = useState({});
    const [isTicketList, setShop] = useState(true);
   
    function addPriceToInfo(e){
        console.log(e.currentTarget.id)
        const newPrice = e.currentTarget.id;
        setEventInfo(prevState => ({
            ...prevState,
            price: newPrice,

        }));
        setShop(!isTicketList)
    }

    function addToCart(){
        addCart(eventInfo)
    }
    function adjustQuantity(e){
       const newQuantity = parseInt(e.target.value)
       setEventInfo(prevState => ({
        ...prevState,
        quantity: newQuantity

       }));
    }
    useEffect(() => {
        const getEventInfo =  async () => {
            try {
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?id=${shopCode}&apikey=${import.meta.env.VITE_APP_MY_API_KEY}`,{mode:'cors'})
                const data = await response.json();
                const eventResponse = data._embedded.events[0]
                console.log(eventResponse)

                const formatedEventInfo = {
                    name: eventResponse._embedded.attractions[0].name,
                    performance_name: eventResponse.name,
                    venue_name: eventResponse._embedded.venues[0].name,
                    date: dayjs(eventResponse.dates.start.dateTime).format('ddd, MMM D'),
                    time: dayjs(eventResponse.dates.start.dateTime).format('h:mm A'),
                    venue_location: `${eventResponse._embedded.venues[0].city.name}, ${eventResponse._embedded.venues[0].state.name}`,
                    image: eventResponse.images[0].url,
                    quantity:1,

                    
                }

                console.log(formatedEventInfo)
                setEventInfo(formatedEventInfo)
                
            }catch(error) {
                console.log(error)
                throw(error)
            }
            
        }

        getEventInfo()
        

    },[shopCode])
    return (
        <div className="shop-page">
            <div className="ticket-nav-container">
                <div className="artist-tag">
                    <div className="artist-text-container">
                        <h1 className="tag-name">{eventInfo.name}</h1>
                        <p>{eventInfo.venue_name}</p>
                        <p>{eventInfo.venue_location}</p>
                        <p>{`${eventInfo.date} at ${eventInfo.time}`}</p>
                    </div>
                    <img className="artist-tag-img" src={eventInfo.image}></img>
                </div>
                <div className="ticket-nav">
                    {isTicketList ? <PriceList price={300} switchPage={addPriceToInfo}/>
                     : <ShowSelection info={eventInfo} setQuantity={adjustQuantity} setCart={addToCart}/>}
                </div>
            </div>
        </div>
    )
}

export default ShopView