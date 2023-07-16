import { useEffect, useState } from "react"
import '../styles/shop.css'
import dayjs from "dayjs";
import customParseFormat from 'dayjs'
dayjs.extend(customParseFormat)

const ShopView = ({ shopCode }) => {
    const [eventInfo, setEventInfo] = useState({})
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
                    venue_location: eventResponse._embedded.venues[0]
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
        <div></div>
        
    )
}

export default ShopView