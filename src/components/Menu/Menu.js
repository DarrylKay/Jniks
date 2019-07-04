import React, { Component } from "react";
import "./Menu.scss";
import "../../grid.scss";

import MenuBox from "./MenuBox/MenuBox";

export default class Menu extends Component {
  render() {
    return (
      <section className="section-menu" id="Menu">
        <div className="row">
          <h2>&mdash; view our menu selection &mdash;</h2>
          <p className="menu-tagline">
            Below is a few sample menus that we have created. Please get in touch and we will happily discuss how we can cater for your event. 
          </p>
        </div>
        <div className="row">
          <MenuBox />
        </div>
      </section>
    );
  }
}
