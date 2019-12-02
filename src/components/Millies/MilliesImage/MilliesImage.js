import React from "react";
import './MilliesImage';
import { Zoom } from "react-slideshow-image";
import Millies1 from "../../../img/millies-1.jpg";
import Millies2 from "../../../img/millies-2.jpg";
import Millies3 from "../../../img/millies-3.jpg";
import Millies4 from "../../../img/millies-4.jpg";
import Millies5 from "../../../img/millies-5.jpg";
import Millies6 from "../../../img/millies-6.jpg";
import Millies7 from "../../../img/millies-7.jpg";
import Millies8 from "../../../img/millies-8.jpg";

const images = [
  Millies1,
  Millies2,
  Millies3,
  Millies4,
  Millies5,
  Millies6,
  Millies7,
  Millies8
];

const zoomInProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    scale: 0.4,
    arrows: false
  }

  const style= {
      height: "500px",
      objectFit: "cover",
      objectPosition: "center", 
      width: "100%"
  }

function MilliesImage() {
  return (
    <div className="slide-container">
      <div className="slide-container">
        <Zoom {...zoomInProperties}>
          {
            images.map((each, index) => <img key={index} src={each} style={style} />)
          }
        </Zoom>
      </div>
    </div>
  );
}

export default MilliesImage;



/*

 <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[4]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[5]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[6]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[7]})` }}></div>
        </div>
      </Slide>

      */