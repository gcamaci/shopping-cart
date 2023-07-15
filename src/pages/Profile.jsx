import { Link } from "react-router-dom";
import "../styles/profile.css"
const Profile = ({artistInfo, getEventCode}) => {
 
  console.log(artistInfo.upcoming_events)
  console.log(artistInfo)
  const shows = artistInfo.upcoming_events.map((show,index) => (
    <div className="event-card" key={index}>
      <div className="date-time">
        <p>{show.date}</p>
        <div className="day-time">
          <p>{show.day}</p>
          <p>{show.time}</p>
        </div>
        
      </div>
      <div className="event-tag">
        <p>{artistInfo.name}</p>
        <p>{show.venue}</p>
      </div>
      
      <div className="shop-link">
      <Link to="/shop" id={show.show_id} onClick={getEventCode}>See Tickets</Link>
      </div>
    </div>
    
  ))
  return (
    <div className="profile-page">
      <div className="page-wrapper">
        <div className="artist-banner">
          <div>
            <h1>{artistInfo.name}</h1>
            <p>Upcoming Shows {artistInfo.upcoming_events.length}</p>

          </div>
          <img className="artist-img" src={artistInfo.image}></img>
        

        </div>
        <div className="card-container">
          {shows}
        </div>
      </div>
    </div>
  );
};
  
export default Profile;