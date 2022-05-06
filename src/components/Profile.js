import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
import './P.css';


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


<div class="reputation">
  <div className="titleReputation">
    <div className="rCol"><p>Reputation Badges</p></div>
    <div className="rCol"><b><Link to="/" style={{color:'black'}}>See All</Link></b></div>
  </div>
  <div className="repuRow2">
<div class="colReputation">
  <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5629581.jpg" />
  <b>Punctual</b><span class="dot">0</span>
</div>
<div class="colReputation"> <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5629581.jpg"/><b>Team Player</b><span class="dot">0</span></div>
<div class="colReputation"><img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5629581.jpg" /><b>Payment on Time</b><span class="dot">0</span></div>
</div>
</div>

<div class="Leaderboard"><p>Leaderboard</p>
<div className="rowLeader">
<div class="colLeader"><p>No chart available</p></div>
<div class="colLeader"><h6>Peer Rank--</h6>
<Link to="/login" style={{color:'green'}}>View Leaderboard</Link></div>
</div>
</div>

<div class="Sports"><p>My Sports</p>
<div className="cricket">
<button className="btnCricket"><i class="fa-solid fa-cricket-bat-ball"></i>Cricket</button></div>
<div class="rowOverll">
<div class="colOverall">Overall</div>
<div class="colOverall">Self <i class="fa-solid fa-pen"></i></div>

<hr></hr>


</div>

</div>

  </div>
  
  
  
    );
  }
  
  export default Profile;
  
  
  