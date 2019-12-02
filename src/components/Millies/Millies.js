import React from "react";
import "./Millies.scss";
import "../../grid.scss";
import MilliesImage from "./MilliesImage/MilliesImage";

function Millies() {
  return (
    <section className="section-features" id="Millies">
      <div className="row">
        <h2>&mdash; Millies Kitchen &mdash;</h2>
        <div className="row">
          <div className="col span-1-of-2 millies">
            <h3 className="title">Carts & Stalls</h3>
            <p className="text">
              We are proud to announce the reveal of Millies Kitchen to J'Nik's.
            </p>
            <p className="text">
              Our Horsebox offers a variety of options including jacket
              potatoes, deluxe hot chocolates, hog roast and much more!{" "}
            </p>
            <p className="text">
              Available to hire out for private events such as weddings, parties
              etc and can cater to whatever you wish to have served.
            </p>
            <p className="text">
              Kitted out to suite any event, be it christmas, new year or a
              summer party, be sure to enquire about what Millies Kitchen has to
              offer!
            </p>
          </div>
          <div className="col span-1-of-2">
            <MilliesImage />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Millies;
