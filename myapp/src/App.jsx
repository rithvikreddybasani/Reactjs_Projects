import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "./assets/1.png";
import img2 from "./assets/3.jpg";
import "./styles/App.css";
import { TextLoop } from "styled-components";
import Typewriter from "typewriter-effect";

const App = () => {
  return (
    <div className="dummy">
      Hello, I am{" "}
      <Typewriter
        className="hello"
        options={{
          strings: ["Aspiring Full Stack developer", "Problem Solver", "DSA"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default App;
