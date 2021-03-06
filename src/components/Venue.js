import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Card } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Venue.css";

function Venue() {
  return (
    <div className="container1">
      <div className="firstrow">
        <Carousel interval={null}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://playo.gumlet.io/BRIGHTSPORTSCENTER/brightsportscenter11.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Fstorage.googleapis.com%2Fplayoapp%2Flogo%2Fplayo-imgix-white.png&markalign=bottom%2Cright&markalpha=50&markfit=clip&markscale=20&markpad=12&markw=160&w=1446"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://playo.gumlet.io/BRIGHTSPORTSCENTER/brightsportscenter12.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Fstorage.googleapis.com%2Fplayoapp%2Flogo%2Fplayo-imgix-white.png&markalign=bottom%2Cright&markalpha=50&markfit=clip&markscale=20&markpad=12&markw=160&w=1446"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://playo.gumlet.io/BRIGHTSPORTSCENTER/brightsportscenter13.jpeg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Fstorage.googleapis.com%2Fplayoapp%2Flogo%2Fplayo-imgix-white.png&markalign=bottom%2Cright&markalpha=50&markfit=clip&markscale=20&markpad=12&markw=160&w=1446"
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://playo.gumlet.io/BRIGHTSPORTSCENTER/brightsportscenter14.jpeg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Fstorage.googleapis.com%2Fplayoapp%2Flogo%2Fplayo-imgix-white.png&markalign=bottom%2Cright&markalpha=50&markfit=clip&markscale=20&markpad=12&markw=160&w=1446"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://playo.gumlet.io/BRIGHTSPORTSCENTER/brightsportscenter15.jpeg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Fstorage.googleapis.com%2Fplayoapp%2Flogo%2Fplayo-imgix-white.png&markalign=bottom%2Cright&markalpha=50&markfit=clip&markscale=20&markpad=12&markw=160&w=1446"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://playo.gumlet.io/BRIGHTSPORTSCENTER/brightsportscenter16.jpeg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Fstorage.googleapis.com%2Fplayoapp%2Flogo%2Fplayo-imgix-white.png&markalign=bottom%2Cright&markalpha=50&markfit=clip&markscale=20&markpad=12&markw=160&w=1446"
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://playo.gumlet.io/BRIGHTSPORTSCENTER/brightsportscenter17.jpeg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Fstorage.googleapis.com%2Fplayoapp%2Flogo%2Fplayo-imgix-white.png&markalign=bottom%2Cright&markalpha=50&markfit=clip&markscale=20&markpad=12&markw=160&w=1446"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://playo.gumlet.io/BRIGHTSPORTSCENTER/brightsportscenter7.jpeg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Fstorage.googleapis.com%2Fplayoapp%2Flogo%2Fplayo-imgix-white.png&markalign=bottom%2Cright&markalpha=50&markfit=clip&markscale=20&markpad=12&markw=160&w=1446"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://playo.gumlet.io/BRIGHTSPORTSCENTER/brightsportscenter9.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Fstorage.googleapis.com%2Fplayoapp%2Flogo%2Fplayo-imgix-white.png&markalign=bottom%2Cright&markalpha=50&markfit=clip&markscale=20&markpad=12&markw=160&w=1446"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div class="heading">
        <div className="titlerow">
          <b>Bright Sports Center</b>{" "}
        </div>
        <div className="time">
          <i className="fa-solid fa-clock"></i>
          <span>5 AM - 12 PM</span>
        </div>{" "}
        <br></br>
        <div className="locationrow">
          <i className="fa-solid fa-location-dot" />
          <span>Bright Sports Centre Vadacode P.O</span>
        </div>
        <div className="locrow">
          <span>Kollamkudimugal, Kochi, Kerala</span>
        </div>
        <div>
          <button type="button" className="buttonMap">
            <i className="fa-solid fa-location-dot" />
            Show in Map
          </button>
        </div>
      </div>
      <hr></hr>
      <div className="rating">
        <div className="colr">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
          <b>4.53</b>(19 rating){" "}
        </div>{" "}
        <div className="colr">|</div>{" "}
        <div className="colr">
          <b> 2.06k Total Activities</b>
        </div>{" "}
        <br></br>
      </div>
      <div className="rowbtn">
        <div className="colbtn">
          <button className="btnRating">Rate Venue</button>
        </div>
        <div className="colbtn">
          <button className="btnRating">0 Upcoming</button>
        </div>
      </div>
      <br></br>

      <div class="AvailableSp">
        <b>Available Sports</b>
        <p>(Tap on the sport icon to see "Price Chart")</p>
        <div class="scrolling-wrapper">
          <Card>
            <Card.Img
              src="https://live.staticflickr.com/4876/32438497118_c15f2ba51e_b.jpg"
              alt="Card image"
            />
            <Card.Title>Football</Card.Title>
          </Card>
          <Card>
            <Card.Img
              src="https://icon-library.com/images/badminton-icon/badminton-icon-8.jpg"
              alt="Card image"
            />
            <Card.Title>Badminton</Card.Title>
          </Card>
          <Card>
            <Card.Img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAD6+vrz8/M4ODgyMjLn5+fu7u7T09MWFhZFRUXc3Nw9PT35+fkPDw/29vbAwMAfHx92dnagoKAmJiYsLCzNzc2Dg4Oampq6urpWVlaTk5Ourq7FxcW7u7uxsbFtbW1LS0tfX19paWmGhoZ9fX1RUVH6da+OAAAE7UlEQVR4nO2d6XqiMBhGCYpYN5RxqVuV2vb+L3Fc+ALBAEGiTdL3/JlnDJOXIwiZEBLPAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPhVltvNqJsx2myX1ifl8P8xGf98i5MEljNpLGMz3d/u65IEdiWp1y9Xa5L8AD4jSTlWb/DrkgT2lbGMTbUlfdQk7bUlCUQ1sYxF1iWJrGpzV5qSvmuTvjQlCYRZ/e/9sEOE/fcJLwg1J00KSUxzkgi/jv6MCyXRDxXtnpw0TvQmiZzSuhfF2DN07/rUkvSZ1ja7Lxov0rKjliQBn+peSwrXaVlXR4NjHCgkBfqbNvz6JvsFjHX+PPjPUHKyZIX6r6Yd+vJkufwA9zQk9ejnIDtM/AB3NCSJkKH0RPSDJxhKT0S/C8OHgeGrDWWXg3aYZrieEvuhhlDPPEOBuK8h12hDxpL2joYbnv878GCcP77hU2PCWEMWN06K1kdJPeYasu9mOf5WXo3BhuyjSUx/UVKLyYazBs3xQ2ktphge45RTkO2c+tWmoq/LFMNcYW/DD6JqxrDiTDDFUGiXxrR3qnfFxDbDaJ5+qthXvM4JzTgmG3rUC6d4TxyQ3tsu1ythtOEy/TRplMC6+V4X01ptomE//XSklMC7K4XddcmQeu/FRpBLhtSDLT7gcclwlG4t3ltgCEN1YAjDemAoy4VhE2AIw3raGPbD9vRbGUZn6p6AtzF800ELQ7aYnwlGp4P86Vt0+Qo7bQx18pBhRlwcU7BcFffScsPCmJvl4H4D6w3zo9CkA8nsN8yGvyXSYgcM2eFWvJGXumA4uV5u3ktKXTC8nqelXfj2tmmiafaEaux5ucegweACDRe119DLWX3khqvG6e7RjcNqQ4+2W2VPCrdU5kbLm7wG/MHUhpe5YUi1vHm0b1n/rxuGY7qceJO7fXPD0OeG6Z+TrDoYynJh2AQYwjDdEIYwLOTCsAkwVDOkWibcMBvd74YhvdLbdbZdSp1PMfc58DInDPkI5wMfH9TlW7cx1Pl23iOGg9tfe1nXTCcbiHikrdsYjgbtofxHDCfXGnI9f8fcy5FsMY1aG+pES2/i5Y2hr7JCFwyvA7/DSUmpA4aft9Kycfn2G/LxtCXnqfWGuYdr8vkgLDccCPPYSOedsdkwWBXfSwjjYv2PGe6H7aEW5UNtms5lKIL85aDO4TQKLgMZFm0Mf7vVNqip278MRrG6XVpneAOGslwYNgGGMKwHhrJcGDYBhlWG7o+CdvcYUmt9I/kn99hoSMNH1eY1tNCQv9irNhWffYYhH6inlp+kW4uz2ZpmmNt+R6P7FV/l5sP6xEkmTDO8myjggmweQgk0w+1c6AwwzVCG4iHMenWECQpsMFSe9Isf901uh33zDdUn4MkN/A5ONA0M/TrNNTxINi8hKpss3GTDRaPpzKommzbUcNtwlsGKyZhNNIzXzedrlXSBG2YY8pnkHowpe83EGMP2s3sOE9cNz3d+6anqkuGZ4Z7PElo5obW9hjki5w1Na5fCsDl/x9DdOdlfN68+71Z68bz67q+N4P76FtmYm8TVNUrK15nJCuxeZ8b9tYL+wHpPL1yza1qT9KQ1u/7AumuvXNGuKukZ11HOcl6SOndk/UPPgDUstQfd4/g6pAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABV/AfVEWm7n6aAtgAAAABJRU5ErkJggg=="
              alt="Card image"
            />
            <Card.Title>Gymming</Card.Title>
          </Card>
          <Card>
            <Card.Img
              src="https://d1nhio0ox7pgb.cloudfront.net/_img/i_collection_png/512x512/plain/table_tennis_racket.png"
              alt="Card image"
            />
            <Card.Title>Table Tennis</Card.Title>
          </Card>
          <Card>
            <Card.Img
              src="https://cdn-icons-png.flaticon.com/512/103/103255.png"
              alt="Card image"
            />
            <Card.Title>Carom</Card.Title>
          </Card>
          <Card>
            <Card.Img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jhn8zsrt3r1-KR3-vMY0Tiy_YcLABRf8laSjmhpd4uDZrOhB0ZwKXq-CVPkt59Ix1Ag&usqp=CAU"
              alt="Card image"
            />
            <Card.Title>Box Cricket</Card.Title>
          </Card>
        </div>
      </div>
      <div className="Advert">Ad goes here</div>
      <div className="amenities">
        <b>Amenities</b>
        <div className="rowAmenities">
          <div className="colAmenities">Washrooms</div>
          <div className="colAmenities">Change rooms</div>
          <div className="colAmenities">Drinking Water</div>
        </div>
        <div className="row2Amenities">
          <div className="colAmenities2">Cafetaria</div>
          <div className="colAmenities2">Parking</div>
        </div>
      </div>
      <hr></hr>
      <div className="rowActivities">
        <b>Activities</b>
        <button className="btActivity">
          <b>+Create Activity</b>
        </button>
      </div>
      <div class="about">
        <b>About Venue</b>
        <p>
          <div className="rowAbout">
            Only non-making shoes are allowed in the wooden court.
          </div>
          <div className="rowAbout">
            Badminton shoes and rackets are available for rent.
          </div>
          <div className="rowAbout">Badminton coaching Available</div>
        </p>
      </div>
      <div className="bookNow">
        <button class="btnBook">Book Now</button>
      </div>
    </div>
  );
}

export default Venue;
