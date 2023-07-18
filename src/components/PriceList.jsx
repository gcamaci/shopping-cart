import { useEffect, useState } from "react"

export default function PriceList({price}){
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
        randomPrices
    },[price])
    return (
        <div>
            <div>
                {prices.map((cost,index) => {
                    return (
                        <div key={index} className="price-card">
                            <p>General Admission</p>
                            <p>{`$${cost}`}</p>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}