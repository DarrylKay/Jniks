import React, { Component } from "react";
import "./Header.scss";
import { Link } from "react-scroll";

export default class HeaderBtn extends Component {
  render() {
    return (
      <div className="row" id="header-btn">
        <div className='btn-area'>
          <Link
            to="Menu"
            spy={true}
            smooth={true}
            //offset={-70}
            duration={750}
            className='btn btn-fill'
          >
            Show Me Food!
          </Link>
        </div>

        <div className='btn-area'>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            //offset={-70}
            duration={750}
            className='btn btn-outline'
          >
            Contact Us!
          </Link>
        </div>
      </div>
    );
  }
}
