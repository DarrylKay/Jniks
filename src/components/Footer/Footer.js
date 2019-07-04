import React, { Component } from "react";
import "./Footer.scss";
import "../../grid.scss";

import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";
import { Link } from "react-scroll";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="row ">
          <div className="col span-1-of-2 footer-box">
            <ul className="footer-nav">
              <li>
                <Link
                  to="AboutUs"
                  spy={true}
                  smooth={true}
                  //offset={-70}
                  duration={750}
                >
                  About 
                </Link>
              </li>
              <li>
                <Link
                  to="Menu"
                  spy={true}
                  smooth={true}
                  //offset={-70}
                  duration={750}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="MeetTeam"
                  spy={true}
                  smooth={true}
                  //offset={-70}
                  duration={750}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  //offset={-70}
                  duration={750}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col span-1-of-2 footer-box">
            <ul className="social-link">
              <li>
                <a href="https://www.facebook.com/JNIKS4/?ref=py_c">
                  <LogoFacebook color="#888" fontSize="25px" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Jniks018">
                  <LogoTwitter color="#888" fontSize="25px" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/jniks018/?hl=en">
                  <LogoInstagram color="#888" fontSize="25px" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p>Designed and Developed by Darryl Kay 2019.</p>
        </div>
      </footer>
    );
  }
}
