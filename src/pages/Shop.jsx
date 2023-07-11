import { useEffect } from "react"
const ShopView = (shopCode) => {
    useEffect(() => {
        console.log(shopCode)
        const getEventInfo =  async () => {
            try {
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${shopCode}.json&apikey=${import.meta.env.VITE_APP_MY_API_KEY}`,{mode:'cors'})
                const data = await response.json();
                console.log(data)
            }catch(error) {
                console.log(error)
                throw(error)
            }
        }

        getEventInfo()

    },[shopCode])
    return (
        <div>Hello World</div>
        
    )
}

export default ShopView