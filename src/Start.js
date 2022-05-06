import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Offcanvas, Button,Form,FormControl,Container,Col,NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Start.css';
// import { FaStar,FaStarHalf } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

function Start() {
  return (
      <div class="bg">
        <div className="rowApp"><p>Your Sports Comunity App</p></div>
          <div class="startrow"><button className="btnstart">Lets get started</button></div>
          <div className="startLogin"><p style={{color:'white'}}>Already a Playoholic? <Link to="/login" style={{color:'green'}}>Login</Link></p></div>
          </div>

  );
}

export default Start;


