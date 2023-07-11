import { useEffect } from "react"
const ShopView = (showCode) => {
    useEffect(() => {
        const getEventInfo =  async () => {
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=${import.meta.env.VITE_APP_MY_API_KEY}`,{mode:'cors'})
        }

        getEventInfo()

    },[showCode])
    return (
        <div>Hello World</div>
        
    )
}

export default ShopView