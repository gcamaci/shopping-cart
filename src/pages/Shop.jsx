import { useEffect, useState } from "react"
const ShopView = ({ shopCode }) => {
    const [eventInfo, setEventInfo] = useState({})
    useEffect(() => {
        console.log(shopCode)
        const getEventInfo =  async () => {
            const eventOBJ = {}
            const objtwo = {}
            try {
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?id=${shopCode}&apikey=${import.meta.env.VITE_APP_MY_API_KEY}`,{mode:'cors'})
                const data = await response.json();
                console.log(data)
                
            }catch(error) {
                console.log(error)
                throw(error)
            }
        }

        name:"Guiseppe"
        name: "Desmend"

        Object.assign()

        getEventInfo()

    },[shopCode])
    return (
        <div>Hello World</div>
        
    )
}

export default ShopView