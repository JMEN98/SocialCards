import './SocialCard.css'
import Location from './Location';
const SocialCard =({userData})=> {
return(
<div className="card">
   <div className="card-title">  {userData.name.first} {userData.name.last} </div>
   <div className="card_body"> 
   <Location location={userData.location}/>
   <div className="card_image"> <img  src={userData.picture.medium}></img></div>
   </div>
</div>

);


};


export default SocialCard;