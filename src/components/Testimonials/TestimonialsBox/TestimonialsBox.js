import React, { Component } from "react";
import "./TestimonialsBox.scss";
import "../../../grid.scss";

import andrea from "../../../img/andrea.jpg";
import simon from "../../../img/simon.jpg";
import tracy from "../../../img/tracy.jpg";

export default class TestimonialsBox extends Component {
  constructor() {
    super();
    this.state = {
      TestArr: [
        {
          name: "Andrea",
          quote:
            "J'nik's catered for our wedding. We had some vegan guests attending and all our dietary needs were met. It was excellent service and really made our special day more memorable.",
          src: andrea
        },
        {
          name: "Simon",
          quote:
            "I can always count on J'nik's providing a great service with helpful and friendly staff. I take my lads to watch the Cobblers play and we always grab a bite to eat before the match.",
          src: simon
        },
        {
          name: "Tracy",
          quote:
            "We hired J'nik's to cater for my dads 80th birthday party. They took the time to listen to what we wanted and exceeded our expectations. We will be using J'niks again. ",
          src: tracy
        }
      ]
    };
  }
  render() {
    return (
      <div className="row">
        {this.state.TestArr.map((test, i) => (
          <div className="col span-1-of-3 text-box" key={i}>
            <blockquote className='block'>{test.quote}</blockquote>
            <cite className='test-cite'>
              <img src={test.src} alt={`J'niks events catering ${test.name}`} className='test-img'/>
              {test.name}
            </cite>
          </div>
        ))}
      </div>
    );
  }
}
