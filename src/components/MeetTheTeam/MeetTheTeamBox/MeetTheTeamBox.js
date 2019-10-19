import React, { Component } from "react";
import "./MeetTheTeamBox.scss";
import "../../../grid.scss";
import Slide from "react-reveal/Slide";
import jason from "../../../img/jason.jpg";
import nick from "../../../img/nick.jpg";

export default class TestimonialsBox extends Component {
  constructor() {
    super();
    this.state = {
      meetArr: [
        {
          name: "JASON",
          quote:
            "My vision for J’Nik's is to be the number one catering company in Northamptonshire that consistently provides high quality food and service that everybody will talk about and others can only aspire to.",
          caption:
            " Jason has been employed within the Beverage industry for the past 20 years. He is a family man with two sons.",
          src: jason
        },
        {
          name: "NICK",
          quote:
            "My vision for J’Nik's is to produce high-end quality food that everyone will enjoy.I have always been passionate about using and promoting small local business products in my cooking.",
          caption:
            "Nick has been a chef for 35 years, working in many high class establishments. Nick is a family man and has two daughters and a son.",
          src: nick
        }
      ]
    };
  }
  render() {
    return (
      <div className="row">
        <Slide right duration={600}>
          {this.state.meetArr.map((meet, i) => (
            <div className="col span-1-of-2 team-box" key={i}>
              <h2>{meet.name}</h2>
              <div className="meetImgBox">
                <img src={meet.src} alt={`J'niks events catering ${meet.name}`} className="meetImg" />
              </div>
              <blockquote>{meet.quote}</blockquote>
              <cite>
                <span>&mdash;</span> {meet.caption}
              </cite>
            </div>
          ))}
        </Slide>
      </div>
    );
  }
}
