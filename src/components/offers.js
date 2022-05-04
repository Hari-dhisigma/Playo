import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,Container,Navbar } from "react-bootstrap";

import "./Qbook.css";
// import { FaStar,FaStarHalf } from "react-icons/fa";
// import { BsShare } from "react-icons/bs";
// import { GoLocation } from "react-icons/go";

function Offers() {
  return (
    <Container>
        <Navbar>
  <Container>
    <Navbar.Brand href="#home">Offers</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    </Navbar.Collapse>
  </Container>
</Navbar>
<Card style={{ width: '50%' }}>
  <Card.Img style={{ width: '100%' }} variant="top" src="https://playo.gumlet.io/OFFERS/PlaySmartMultiSportExclusivePlayoOfferFlat50offonallsportsf8ej5ccover1650727281342.jpg" />
  <Card.Body>
    <Card.Title>Play Smart Multi Sports exclusive Playo offer-Flat 50% off on all sports </Card.Title>


  </Card.Body>
</Card>

<Card style={{ width: '50%' }}>
  <Card.Img style={{ width: '100%' }} variant="top" src="https://playo.gumlet.io/OFFERS/MATSportsAcademyExclusivePlayoOfferFlat50offonallslotsxzfmlcover1651329692023.jpg" />
  <Card.Body>
    <Card.Title>Mat Sports Academy- Kadugodi Exclusive Playo offer-50% off on all slots</Card.Title>


  </Card.Body>
</Card>

<Card style={{ width: '50%' }}>
  <Card.Img style={{ width: '100%' }} variant="top" src="https://d3qokvektr0ozw.cloudfront.net/OFFERS/CooluluCricketAcademyExclusivePlayoOfferFlat10offonallbookingsahtxnscover1645777841741.jpg" />
  <Card.Body>
    <Card.Title>Coolulu Crickert Academy Exclusive Playo offer- Flat 10% off on all Bookings</Card.Title>


  </Card.Body>
</Card>

<Card style={{ width: '50%' }}>
  <Card.Img style={{ width: '100%' }} variant="top" src="https://playo.gumlet.io/OFFERS/BreakPointPoolSnookerLoungeOfferFlat10offonallbookingsc6byc1cover1647964112506.jpg" />
  <Card.Body>
    <Card.Title>Break Point Pool and Snooker Lounge offer-Flat 10% off on all Bookings</Card.Title>


  </Card.Body>
</Card>

<Card style={{ width: '50%' }}>
  <Card.Img style={{ width: '100%' }} variant="top" src="https://playo.gumlet.io/OFFERS/FettleSportsandSportsStudioFlat5offonallbookingsduringPeakHoursjuma0ccover1643634882894.jpg" />
  <Card.Body>
    <Card.Title>Fettle Sports and Sports Studio Flat 5% off on all Bookings During Peak Hours</Card.Title>


  </Card.Body>
</Card>

</Container> 
  );
}

export default Offers;
