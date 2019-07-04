import React, { Component } from "react";
import "./AboutUs.scss";
import "../../grid.scss";
import Slide from "react-reveal/Slide";
import FeatureBox from "./FeatureBox/FeatureBox";
import IosTrophyOutline from "react-ionicons/lib/IosTrophyOutline";
import IosPeopleOutline from "react-ionicons/lib/IosPeopleOutline";
import IosThumbsUpOutline from "react-ionicons/lib/IosThumbsUpOutline";

export default class AboutUs extends Component {
  render() {
    return (
      <section className="section-features" id="AboutUs">
        <div className="row">
          <h2>&mdash; We Cater To Your Needs &mdash;</h2>
          <p className="long-copy">
            J’Nik's is the brain child of Nick and Jason who are lifelong
            friends. They have always dreamt of running their own catering
            business, that not only provides high quality, but also helps to
            promote and support other local businesses.
          </p>
          <div className="row">
            <Slide right duration={400}>
              <FeatureBox
                icon={<IosPeopleOutline fontSize="40px" color="#c0392b" />}
                title="Locally sourced products"
                text="We want to support local business, so all of our ingredients are
          locally sourced. We only choose the finest to ensure you get the best quality!"
              />
              <FeatureBox
                icon={<IosTrophyOutline fontSize="40px" color="#c0392b" />}
                title="Our Company Aim"
                text="Our aim is for J’Nik's to be the number one “go to” catering company for all occasions, from a baby shower to a 100th birthday celebration and all life events in between. "
              />
              <FeatureBox
                icon={<IosThumbsUpOutline fontSize="40px" color="#c0392b" />}
                title="Exceeding Expectations"
                text="Need a catering company for your wedding? Or how about a Corporate function? We pride ourselves on discussing your individual needs and how we can exceed them."
              />
            </Slide>
          </div>
        </div>
      </section>
    );
  }
}
