import { useEffect, useState } from "react"
import "../styles/pricelist.css"
export default function PriceList({ price, switchPage}){
    const [prices, setPrices] = useState([])
    useEffect(() => {
        function randomPrices(){
            const priceList = []
            const min = price / 2
            for (let i = 0; i < 20; i++){
                const random = Math.random() * (price - min) + min
                priceList.push(Math.floor(random))
            }
            priceList.sort()
            setPrices(priceList)
        }
        randomPrices()
    },[price])
    return (
        <div className="price-container">
            {prices.map((cost,index) => {
                console.log(cost)
                return (
                    <div key={index} id={`${cost}`} className="price-card" onClick={switchPage}>
                        <p>{`$${cost} ea`}</p>
                        <div className="ga-tag">
                            <p>General Admission</p>
                            <div className="card-info-tag">
                                <p>1-6 tickets</p>
                                <p>Instant Delivery</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

            
        
    )
}