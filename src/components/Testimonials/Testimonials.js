import React, { Component } from "react";
import "./Testimonials.scss";
import "../../grid.scss";
import TestimonialsBox from "./TestimonialsBox/TestimonialsBox";

export default class Testimonials extends Component {
  render() {
    
    return (
      <section className="section-testimonials" >
        <div className="row">
          <h2>&mdash; We value our customers &mdash;</h2>
        </div>
        <TestimonialsBox />
      </section>
    );
  }
}
