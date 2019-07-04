import React, { Component } from "react";
import "./Social.scss";
import "../../grid.scss";
import Bounce from 'react-reveal/Bounce';
import social from "../../img/iphone-social2.png";
import facebook from "../../img/facebook.png";
import twitter from "../../img/twitter.png";
import instagram from "../../img/instagram.jpg";

export default class Social extends Component {
  constructor() {
    super();
    this.state = {
      stepArr: [
        {
          id: 1,
          text:
            "MEET- We are at The Sixfields Stadium for every Cobblers home game. Come down and say hi!"
        },
        {
          id: 2,
          text:
            "EAT- Taste our amazing dishes used with the best local ingredients"
        },
        {
          id: 3,
          text:
            "RATE- Give us a like on Facebook and be sure to follow us on Twitter and Instagram!"
        }
      ]
    };
  }
  render() {
    return (
      <section className="section-steps" id="Social">
        <div className="row">
          <h2>&mdash; Meet, Eat & Rate! &mdash;</h2>
        </div>
        <div className="row social-box">
          <div className="col span-1-of-2 steps-box1">
            <Bounce bottom duration={600}>
              <img
                src={social}
                alt="Get in touch on social media"
                className="social-screen"
              />
            </Bounce>
          </div>
          <div className="col span-1-of-2 steps-box2">
            {this.state.stepArr.map((step, i) => (
              <div className="works-step" key={i}>
                <div className="step-id">{step.id}</div>
                <p className="steps-text">{step.text}</p>
              </div>
            ))}
            <div className="social-icons">
              <a href="https://www.facebook.com/JNIKS4/?ref=py_c">
                <img
                  src={facebook}
                  alt="J'niks Facebook page"
                  className="icon"
                />
              </a>
              <a href="https://twitter.com/Jniks018">
                <img src={twitter} alt="J'niks twitter page" className="icon" />
              </a>
              <a href="https://www.instagram.com/jniks018/?hl=en">
                <img
                  src={instagram}
                  alt="J'niks instagram page"
                  className="icon"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
