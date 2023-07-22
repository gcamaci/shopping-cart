import "../styles/checkout.css"
import { useState } from "react"

export default function Checkout({eventChoice}){
    const [option, setOption] = useState(false);
    
    function optionChange(e){
        if(e.target.value==="option2"){
            setOption(true)
        }else{
            setOption(false)
        }
    }
    return (
        <div className="checkout-page">
            <div className="form-container">
                <div className="list-container">
                    <ol type="1" className="checkout-steps">
                        <li>Login or Register</li>
                        <li>Shipping & Delivery</li>
                        <li>Billing Information</li>
                        <li>Place Order</li>
                    </ol>
                </div>
                <div className="fb-btn-container">
                    <button className="fb-btn">Continue with Facebook</button>
                </div>
                <div className="email-inpt">
                    <label>Email</label>
                    <input placeholder="Email Adress" id="email" type="email"></input>
                </div>
                <div className="radio-inpt-container">
                    <div className="radio-containers">
                        <input type="radio" name="option" id="option1" value="option1" onClick={optionChange}/>
                        <label className="labels" htmlFor="option1">Create a new account</label>
                    </div>
                    <div className="radio-containers">
                        <input type="radio" name="option" id="option2" value="option2" onClick={optionChange}/>
                        <label className="labels" htmlFor="option2">Sign into existing account</label>
                    </div>
                </div>
                <div className="email-inpt">
                    {option && <input type="password" id="password" name="password" placeholder="Password"/> }
                </div>
                <div>
                    <button id="continue-btn">Continue</button>
                </div>
            </div>
            <div className="cart-info">
                <div className="event-title">
                    <h4>{eventChoice.name}</h4>
                    <p>{`${eventChoice.venue_name} - ${eventChoice.venue_location}`}</p>
                    <p>{`${eventChoice.date} at ${eventChoice.time}`}</p>
                </div>
                <div className="ticket-details">
                    <h4>Ticket Details</h4>
                    <p>Section: General Admission</p>
                    <p>Row: GA</p>
                    <p>Notes: Please note that you will need to use an iOS or Android mobile device to gain entry to your event.</p>

                </div>
                <div className="price-details">
                    <p>{`Price: $${eventChoice.price} each`}</p>
                    <p>{`Quantity: ${eventChoice.quantity}`}</p>
                </div>
                <div>
                    <h4>Mobile Tickets</h4>
                    <p>When the seller transfers the tickets to you, you will receive an email instructing you how to claim the tickets on your phone. Please note that you will need to use an iOS or Android mobile device to gain entry to your event.</p>
                </div>
                <div>
                    <div>
                        <h4>100% Buyer Guarentee</h4>
                    </div>
                    <ul>
                        <li>When the seller transfers the tickets to you, you will receive an email instructing you how to claim the tickets on your phone. Please note that you will need to use an iOS or Android mobile device to gain entry to your event.</li>
                        <li>Full compensation for events that are canceled and not rescheduled</li>
                        <li>Valid tickets delivered in time for the event or your money back</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}