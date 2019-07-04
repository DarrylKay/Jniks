import React, { Component } from "react";
import "./Events.scss";
import "../../grid.scss";
import EventsBox from "./EventsBox/EventsBox";
import IosRestaurantOutline from "react-ionicons/lib/IosRestaurantOutline";
import IosMailOutline from "react-ionicons/lib/IosMailOutline";
import IosCallOutline from "react-ionicons/lib/IosCallOutline";
import cobblersMenuBoard from "../../img/cobblers-menuboard.jpg";
import beerfestNick from "../../img/beerfest-nick.JPG";
import events from "../../img/events-pic.JPG";

export default class Events extends Component {
  render() {
    return (
      <section className="section-events" id="Events">
        <div className="row">
          <h2>&mdash; Type Of Events &mdash;</h2>
        </div>
        <div className="row">
          <EventsBox
            src={cobblersMenuBoard}
            title="Northampton Town FC"
            icon={<IosRestaurantOutline fontSize="18px" color="#c0392b" />}
            info="We cater at all home games"
            emailIcon={<IosMailOutline fontSize="18px" color="#c0392b" />}
            emailText="jniks018@gmail.com"
            callIcon={<IosCallOutline fontSize="18px" color="#c0392b" />}
            callText="07903960081 / 07828217468"
          />
          <EventsBox
            src={events}
            title="Weddings & Special Occasion's"
            icon={<IosRestaurantOutline fontSize="18px" color="#c0392b" />}
            info="Let us cater for your special day"
            emailIcon={<IosMailOutline fontSize="18px" color="#c0392b" />}
            emailText="jniks018@gmail.com"
            callIcon={<IosCallOutline fontSize="18px" color="#c0392b" />}
            callText="07903960081 / 07828217468"
          />
          <EventsBox
            src={beerfestNick}
            title="Private Functions & Parties"
            icon={<IosRestaurantOutline fontSize="18px" color="#c0392b" />}
            info="We specialise in all events"
            emailIcon={<IosMailOutline fontSize="18px" color="#c0392b" />}
            emailText="jniks018@gmail.com"
            callIcon={<IosCallOutline fontSize="18px" color="#c0392b" />}
            callText="07903960081 / 07828217468"
          />
        </div>
      </section>
    );
  }
}
