import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./assets/1.png";
import img2 from "./assets/3.jpg";
import "./styles/App.css";

const App = () => {
  return (
    <div>
      <Carousel infiniteLoop interval={1000}>
        <div>
          <img src={img1} alt="image1" />
          <p>Full stack</p>
        </div>
        <div>
          <img src={img2} alt="image2" />
          <p>Machine Learning</p>
        </div>
      </Carousel>
    </div>
  );
};

export default App;
