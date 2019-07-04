import React, { Component } from "react";
import carvery from "../../img/carvery-1.JPG";
import punjabanLogo from "../../img/punjaban-logo.jpg";
import cobblersVan from "../../img/cobblers-van.JPG";
import beerfestNick from "../../img/beerfest-nick-test.JPG";
import beerfestDisplay from "../../img/beerfest-display.JPG";
import noodles from "../../img/noodle-bar-1.JPG";
import jniksFood from "../../img/jniks-food.jpg";
import team from "../../img/team.jpg";

import "./FavouriteMeals.scss";
import "../../grid.scss";

export default class FavouriteMeals extends Component {
  constructor() {
    super();
    this.state = {
      imgArr: [
        { name: cobblersVan, alt: "Cobblers van" },
        { name: carvery, alt: "Carvery" },
        { name: punjabanLogo, alt: "Punjaban Logo" },
        { name: noodles, alt: "Noodles Bar" },
        { name: beerfestDisplay, alt: "Beer Festival Display" },
        { name: beerfestNick, alt: "Beer Festival Nick Cooking" },
        { name: jniksFood, alt: "J'niks Food" },
        { name: team, alt: "Our Team" }
      ]
    };
  }

  render() {
    return (
      <section className="section-meals">
        <ul className="meals-showcase clearfix">
          {this.state.imgArr.map((img, i) => (
            <li key={i}>
              <figure className="meal-photo">
                <img src={img.name} alt={img.alt} />
              </figure>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
