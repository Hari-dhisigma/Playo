import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";
import './Profile.css';



function Profile() {
    return (
    <div className='containerprofile' >
  
<div className="Nav" >
  <div>
  <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3"></div>
  </div>
  </div>

  <div className="rowProfile" >
<div className="colProfile"><img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg" /><b>HARI MOHAN</b> <br></br><p>No activities yet</p></div>
<div className="colProfile"><span>0 <br></br>Activities<br></br>(0 no shows)</span></div>
<div className="colProfile"><span>0 <br></br>Paypals</span></div>
<div className="colProfile"><span>50 <br></br>Karma</span></div>
</div> 

<div className="vaccination">
<div className="VacImg"><img src="https://static.vecteezy.com/system/resources/thumbnails/001/511/518/small/injection-outline-icon-free-vector.jpg" />
</div>
<div className="colVac"><b>Vaccination Status</b><p>You've not updated your vaccination yet! Upgrade & improve game changes</p>
</div>
<div><button>Update Now</button></div>
</div>

<div class="activeLevel" >
    <div className="activeRow1">
        <div className="activeLearn"><p>Active level</p></div>
        <div  className="activeLearn"><b><Link to="/" style={{color:'black'}}><i class="fa-solid fa-circle-info"></i>Learn More</Link></b></div>
    </div>
<div className="activeImg">
<div class="colActive"><img src="https://media.istockphoto.com/vectors/heart-human-vector-medicalpulse-beat-wave-heartbeat-orange-color-icon-vector-id1155631243" /> <h6>Warming up</h6></div>
<div class="colActive"><img src="https://media.istockphoto.com/vectors/heart-human-vector-medicalpulse-beat-wave-heartbeat-orange-color-icon-vector-id1155631243" /><p>Active</p></div>
<div class="colActive"><img src="https://media.istockphoto.com/vectors/heart-human-vector-medicalpulse-beat-wave-heartbeat-orange-color-icon-vector-id1155631243" /><p>Super Active</p></div>
<div class="colActive"><img src="https://media.istockphoto.com/vectors/heart-human-vector-medicalpulse-beat-wave-heartbeat-orange-color-icon-vector-id1155631243"/><p>on fire</p></div>
</div>
</div>


<div class="reputation"><p>Reputation Badges</p>
<div class="colReputation">
  <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5629581.jpg" />
  <span>Punctual 0</span>
</div>
<div class="colReputation"> <img src="https://www.kindpng.com/picc/m/710-7104483_havelock-international-home-blue-icon-work-team-hd.png"/></div>
<div class="colReputation"><img src="https://www.kindpng.com/picc/m/710-7104483_havelock-international-home-blue-icon-work-team-hd.png" /></div>
</div>





  </div>
  
  
  
    );
  }
  
  export default Profile;
  
  
  
