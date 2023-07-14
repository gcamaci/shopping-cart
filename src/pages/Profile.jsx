import { Link } from "react-router-dom";
import "../styles/profile.css"
const Profile = ({artistInfo, getEventCode}) => {
 
  console.log(artistInfo.upcoming_events)
  console.log(artistInfo)
  const shows = artistInfo.upcoming_events.map((show,index) => (
    <div key={index}>
      <p>{artistInfo.name}</p>
      <p>{show.date}</p>
      <p>{show.venue}</p>
      <p>{show.time}</p>
      <div>
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
          

        </div>
        <div>
          {shows}
        </div>
      </div>
    </div>
  );
};
  
export default Profile;