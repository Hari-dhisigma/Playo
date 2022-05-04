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
          <div class="btnstart"><button>Lets get started</button></div>
          <p style={{color:'white'}}>Already a Playoholic? <Link to="/login" style={{color:'green'}}>Login</Link></p>
          </div>

  );
}

export default Start;


