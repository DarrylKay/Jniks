import React, { Component } from "react";
import carvery from "../../img/carvery-1.jpg";
import punjabanLogo from "../../img/punjaban-logo.jpg";
import cobblersVan from "../../img/cobblers-van.jpg";
import beerfestNick from "../../img/beerfest-nick-test.jpg";
import noodles from "../../img/noodle-bar-1.jpg";
import bugJam from "../../img/bug-jam-2.jpg";
import team from "../../img/team.jpg";
import weddingSetting from '../../img/wedding-setting.jpg';

import "./FavouriteMeals.scss";
import "../../grid.scss";

export default class FavouriteMeals extends Component {
  constructor() {
    super();
    this.state = {
      imgArr: [
        { name: cobblersVan, alt: "J'niks events catering Cobblers van" },
        { name: carvery, alt: "J'niks events catering Carvery" },
        { name: punjabanLogo, alt: "J'niks events catering Punjaban Logo" },
        { name: noodles, alt: "J'niks events catering Noodles Bar" },
        { name: weddingSetting, alt: "J'niks events catering j'niks wedding setting" },
        { name: beerfestNick, alt: "J'niks events catering Beer Festival Nick Cooking" },
        { name: bugJam, alt: "J'niks events catering Bug Jam Tent" },
        { name: team, alt: "J'niks events catering Our Team" }
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
