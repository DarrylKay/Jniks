import React, { Component } from "react";
import "./MeetTheTeam.scss";
import "../../grid.scss";

import MeetTheTeamBox from "./MeetTheTeamBox/MeetTheTeamBox";

export default class Testimonials extends Component {
  render() {
    return (
      <section className="section-meet-the-team" id="MeetTeam">
        <div className="row">
          <h2>&mdash; Meet The Team &mdash;</h2>
        </div>
        <MeetTheTeamBox />
      </section>
    );
  }
}
