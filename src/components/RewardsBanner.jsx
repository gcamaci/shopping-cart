
import '../styles/home.css'
import Rewards from "../assets/images/vivid-rewards.png"
const RewardsBanner = () => {
    return (
        <div>
            <div className="banner-container"> 
                <div className="banner">
                    <h1>Reliable & Rewarding Tickets</h1>
                    <p>We have a 100% Buyer Guarantee + the only ticket rewards program around.
                        So, grab your seats, they're guaranteed - just like your 11th ticket on us*.
                    </p>
                    <p>Earn a Reward Credit equal to the average price of the 10 tickets, excluding taxes, fees, and processing costs.</p>
                </div>
            </div>
            <div className='rewards-img-container'>
                <img src={Rewards}></img>
            </div>
        </div>
    )
}

export {RewardsBanner}