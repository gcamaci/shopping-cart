import { useEffect, useState } from "react"
const ShopView = ({ shopCode }) => {
    const [eventInfo, setEventInfo] = useState({})
    useEffect(() => {
        console.log(shopCode)
        const getEventInfo =  async () => {
            /*
            const eventOBJ = {}
            const objtwo = {}
            */
            try {
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?id=${shopCode}&apikey=${import.meta.env.VITE_APP_MY_API_KEY}`,{mode:'cors'})
                const data = await response.json();
                const eventResponse = data._embedded.events[0]
                console.log(eventResponse)
                setEventInfo({
                    name: eventResponse._embedded.attractions[0].name,
                    venue: eventResponse._embedded.venues[0].name
                })
                
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