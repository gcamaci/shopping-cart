import "../styles/showSelection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faRightLeft, faCalendar, faLocationDot} from '@fortawesome/free-solid-svg-icons'

export default function ShowSelection({info}){
    console.log(info)
    return (
        <div className="show-selection-container">
            <div className="ticket-info-container">
                <div className="ticket-area">
                    <h3>General Admission</h3>
                    <div className="super-seller">
                        <FontAwesomeIcon icon={faCertificate} style={{color: "#ef38c1",}} />
                        <p>Super Seller</p>
                    </div>
                </div>
                <div className="price-tag">
                    <h3>{`$${info.price}`} <span>ea</span></h3>
                    <p>Includes 20% Service Fee</p>
                </div>
            </div>
            <div className="quantity-purchase-container">
                <div className="selection-container">
                    <select id='quantity-select'>
                        <option value='1'>1 Ticket</option>
                        <option value='2'>2 Tickets</option>
                        <option value="3">3 Tickets</option>
                        <option value="4">4 Tickets</option>
                    </select>
                </div>
                <div className="checkout-btn-container">
                    <button id="checkout-btn">Go To Checkout</button>
                </div>
            </div>
            <div className="ticket-info">
                <div className="ticket-info-card">
                    <div className="ticket-text-icon">
                        <FontAwesomeIcon icon={faRightLeft} style={{color: "#ef38c1",}} />
                        <h3>Mobile Transfer</h3>
                    </div>
                    <p>When your tickets are ready, we'll send a ticket transfer offer to your email.</p>
                </div>
                <div className="ticket-info-card">
                    <div className="ticket-text-icon">
                        <FontAwesomeIcon icon={faCalendar} style={{color: "#ef38c1",}} />
                        <h3>{info.name}</h3>
                    </div>
                    <p>{`${info.date} at ${info.time}`}</p>
                </div>
                <div className="ticket-info-card">
                    <div className="ticket-text-icon">
                        <FontAwesomeIcon icon={faLocationDot} style={{color: "#ef38c1",}} />
                        <h3>{info.venue_name}</h3>
                    </div>
                    <p>{info.venue_location}</p>
                </div>
            </div>
        </div>
    )
}