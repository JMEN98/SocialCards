const SocialCard =({userData})=> {
return(
<div className="card">
   <div className="card-title">  {userData.name.first} {userData.name.last} </div>
   <div className="card_body"> </div>
   <div className="card_image"> <img  src={userData.picture.medium}></img></div>
</div>

);


};


export default SocialCard;