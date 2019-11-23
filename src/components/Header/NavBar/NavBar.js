import React, { Component } from "react";
import "./NavBar.scss";
import "../../../grid.scss";

import { Link, animateScroll as scroll } from "react-scroll";

export default class NavBar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav>
        <div className="row nav-row">
          <img
            src={require("../../../img/JNIKS-LOGO-NEW.jpg")}
            alt="jniks events catering jniks logo"
            className="logo"
            onClick={this.scrollToTop}
          />
          <ul className="main-nav">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="AboutUs"
                spy={true}
                smooth={true}
                //offset={-70}
                duration={1000}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                activeClass="active"
                to="Menu"
                spy={true}
                smooth={true}
                //offset={-70}
                duration={1000}
              >
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="MeetTeam"
                spy={true}
                smooth={true}
                //offset={-70}
                duration={1000}
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Events"
                spy={true}
                smooth={true}
                //offset={-70}
                duration={1000}
              >
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Social"
                spy={true}
                smooth={true}
                //offset={-70}
                duration={1000}
              >
                Social
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                //offset={-70}
                duration={1000}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="menu-wrap">
            <input type="checkbox" className="toggler" aria-label='jniks events catering hamburger'/>
            <div className="hamburger">
              <div />
            </div>
            <div className="menu">
              <div>
                <div>
                  <ul>
                    <li>
                      <Link
                        activeClass="active"
                        to="AboutUs"
                        spy={true}
                        smooth={true}
                        //offset={-70}
                        duration={1000}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="Menu"
                        spy={true}
                        smooth={true}
                        //offset={-70}
                        duration={1000}
                      >
                        Menu
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="MeetTeam"
                        spy={true}
                        smooth={true}
                        //offset={-70}
                        duration={1000}
                      >
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="Events"
                        spy={true}
                        smooth={true}
                        //offset={-70}
                        duration={1000}
                      >
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="Social"
                        spy={true}
                        smooth={true}
                        //offset={-70}
                        duration={1000}
                      >
                        Social
                      </Link>
                    </li>
                    <li>
                      <Link
                        activeClass="active"
                        to="Contact"
                        spy={true}
                        smooth={true}
                        //offset={-70}
                        duration={1000}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
