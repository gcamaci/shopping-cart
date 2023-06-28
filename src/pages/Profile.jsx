import { Link } from "react-router-dom";
const Profile = ({artistInfo}) => {
 
  console.log(artistInfo.upcoming_events)
  const shows = artistInfo.upcoming_events.map((show,index) => (
    <div key={index}>
      <p>{artistInfo.name}</p>
      <p>{show.date}</p>
      <p>{show.venue}</p>
      <p>{show.time}</p>
      <div>
      <Link to="/profile">See Tickets</Link>
      </div>
      
    </div>
    
  ))
  return (
    <div>
      <h1>{artistInfo.name}</h1>
      <div>
        {shows}
      </div>
    </div>
  );
};
  
export default Profile;