// import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Carousal_img1 from "../../Images/Carousal_img1.jpg";
import Carousal_img2 from "../../Images/Carousal_img2.jpg";
import Carousal_img3 from "../../Images/Carousal_img3.jpg";
import "./CarousalPage.scss";

function CarouselPage() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ width: "100%", maxHeight: "70vh", objectFit: "cover" }}
            className="d-block w-100"
            src={Carousal_img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>LOTS OF EBOOKS,100% FREE</h3>
            <p>Welcome to your friendly neighbourhood library.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", maxHeight: "70vh", objectFit: "cover" }}
            className="d-block w-100"
            src={Carousal_img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>FREE AND DISCOUNTED BESTSELLERS</h3>
            <p>Get free and discounted bestselers straight to your inbox. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", maxHeight: "70vh", objectFit: "cover" }}
            className="d-block w-100"
            src={Carousal_img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>THE ULTIMATE GUIDE TO FREE EBOOKS</h3>
            <p>Not sure what to read next? Explore our categories </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
