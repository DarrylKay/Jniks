import React, { Component } from "react";
import "./MenuBox.scss";
import "../../../grid.scss";
import { Link } from "react-scroll";
import "../../Header/Header.scss";
import Lightbox from "lightbox-react";
import hotDogMenu from "../../../img/hotDog-menu.JPG";
import menuOne from "../../../img/jniks-menu.JPG";
import menuTwo from "../../../img/jniks-menu-2.JPG";
import noodleMenu from "../../../img/noodle-menu.JPG";
import "lightbox-react/style.css";

const images = [hotDogMenu, menuOne, menuTwo, noodleMenu];

export default class MenuBox extends Component {
  constructor() {
    super();
    this.state = {
      menuArr: [
        { id: 1, name: "Hot-Dog's ", src: hotDogMenu },
        { id: 2, name: "Event's 1", src: menuOne },
        { id: 3, name: "Event's 2", src: menuTwo },
        { id: 4, name: "Noodle's", src: noodleMenu }
      ],
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const styles = {
      width: "100%",
      height: "auto"
    };
    return (
      <div className="row">
        {this.state.menuArr.map((item, i) => (
          <div className="col span-1-of-4" key={i}>
            <div className="plan-box">
              <div>
                <h3>{item.name}</h3>
              </div>
              <div className="img-box">
                <img
                  src={item.src}
                  alt={item.name}
                  style={styles}
                  onClick={() => this.setState({ isOpen: true })}
                />
              </div>
              {isOpen && (
                <Lightbox
                  mainSrc={images[photoIndex]}
                  nextSrc={images[(photoIndex + 1) % images.length]}
                  prevSrc={
                    images[(photoIndex + images.length - 1) % images.length]
                  }
                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() =>
                    this.setState({
                      photoIndex:
                        (photoIndex + images.length - 1) % images.length
                    })
                  }
                  onMoveNextRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + 1) % images.length
                    })
                  }
                />
              )}
              <div className="btn-box">
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  //offset={-70}
                  duration={1000}
                  className="btn btn-outline"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
