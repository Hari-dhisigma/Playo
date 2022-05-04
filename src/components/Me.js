import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Offcanvas, Button,Form,FormControl,Container,Col,NavDropdown } from 'react-bootstrap';

import './Me.css';
// import { FaStar,FaStarHalf } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

function Profile() {
  return (<div class='containerprofile' style={{backgroundColor:'grey'}}>

<div class="Nav" style={{backgroundColor:'white',width:'100%'}}>
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
 
  <div class="share"><img src="https://preview.pixlr.com/images/800wm/100/1/1001398780.jpg" style={{width:'40px',height:'40px',float:'right',   }}></img></div>
  <div class="share"><img src="https://cdn-icons-png.flaticon.com/512/650/650143.png" style={{width:'30px',height:'30px',    float:'right'}}></img></div>
</div>
<div class="profilepic">
<img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg" style={{width:'80px',height:'80px'}} />
<div class="col"><span>0 <br></br>Activities<br></br>(0 no shows)</span></div>
<div class="col"><span>0 <br></br>Paypals</span></div>
<div class="col"><span>50 <br></br>Karma</span></div>
</div> 
<div class="vaccination">

<div><img src="https://static.vecteezy.com/system/resources/thumbnails/001/511/518/small/injection-outline-icon-free-vector.jpg" style={{width:'40px',height:'40px'}}/>
</div>
<div></div>

</div>
<div class="active" style={{backgroundColor: 'white'}}>
<p>Active level</p>
<img src="https://media.istockphoto.com/vectors/heart-human-vector-medicalpulse-beat-wave-heartbeat-orange-color-icon-vector-id1155631243" style={{width:'40px',height:'40px'}}/> 
<img src="https://media.istockphoto.com/vectors/heart-human-vector-medicalpulse-beat-wave-heartbeat-orange-color-icon-vector-id1155631243" style={{width:'40px',height:'40px'}}/>
<img src="https://media.istockphoto.com/vectors/heart-human-vector-medicalpulse-beat-wave-heartbeat-orange-color-icon-vector-id1155631243" style={{width:'40px',height:'40px'}}/>
<img src="https://media.istockphoto.com/vectors/heart-human-vector-medicalpulse-beat-wave-heartbeat-orange-color-icon-vector-id1155631243" style={{width:'40px',height:'40px'}}/>
</div>

</div>

  );
}

export default Profile;


