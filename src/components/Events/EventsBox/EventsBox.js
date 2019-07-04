import React, { Component } from "react";
import "../../../grid.scss";
import "./EventsBox.scss";
import Lightbox from "lightbox-react";
import beerfestBoard from "../../../img/beerfest-board.JPG";
import beerfestDisplay from "../../../img/beerfest-display.JPG";
import beerfestDisplay2 from "../../../img/beerfest-display2.JPG";
import beerfestFood from "../../../img/beerfest-food.JPG";
import beerfestNick2 from "../../../img/beerfest-nick2.JPG";
import beerfestStand from "../../../img/beerfest-stand.JPG";
import beerfestStand2 from "../../../img/beerfest-stand2.JPG";
import cranstonMusicDisplay from "../../../img/cranston-music-display.jpeg";
import cranstonMusicLeaflet from "../../../img/cranston-music-leaflet.jpeg";
import cranstonMusicTent from "../../../img/cranston-music-tent.jpeg";
import cranstonMusicTent2 from "../../../img/cranston-music-tent2.jpeg";
import cobblersMenu from "../../../img/cobblers-menu.JPG";
import cobblersMain from "../../../img/cobblers-main.jpg";
import cobblersMeat from "../../../img/cobblers-meat.jpg";
import cobblersMenuBoard from "../../../img/cobblers-menuboard.jpg";
import cobblersVanNew from "../../../img/cobblers-van-new.jpg";
import cobblersChips from "../../../img/cobblers-chips.jpg";
import punjabanFood1 from "../../../img/punjaban-food1.jpg";
import punjabanFood2 from "../../../img/punjaban-food2.jpg";
import punjabanLayout from "../../../img/punjaban-layout.jpg";
import punjabanLogo from "../../../img/punjaban-logo.jpg";
import punjabanPlate from "../../../img/punjaban-plate.jpg";
import punjabanPlate2 from "../../../img/punjaban-plate2.jpg";

const images = [
  cranstonMusicLeaflet,
  cranstonMusicDisplay,
  cranstonMusicTent,
  cranstonMusicTent2,
  beerfestBoard,
  beerfestDisplay,
  beerfestDisplay2,
  beerfestFood,
  beerfestNick2,
  beerfestStand,
  beerfestStand2,
  cobblersMain,
  cobblersVanNew,
  cobblersMenu,
  cobblersMeat,
  cobblersMenuBoard,
  cobblersChips,
  punjabanLogo,
  punjabanFood1,
  punjabanFood2,
  punjabanLayout,
  punjabanPlate,
  punjabanPlate2
];

export default class EventsBox extends Component {
  constructor() {
    super();
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const styles = {
      width: "80%",
      height: "335px"
    };
    return (
      <div className="box col span-1-of-3">
        <img
          src={this.props.src}
          alt={this.props.title}
          className="events-image"
          style={styles}
          onClick={() => this.setState({ isOpen: true })}
        />
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
        <h3 className="event-title">{this.props.title}</h3>
        <div className="info-section">
          <div className="event-icon">{this.props.icon}</div>
          <p className="event-text">{this.props.info}</p>
          <br />
          <div className="event-icon">{this.props.callIcon}</div>
          <p className="event-text">{this.props.callText}</p>
          <br />
          <div className="event-icon">{this.props.emailIcon}</div>
          <p className="email event-text">{this.props.emailText}</p>
        </div>
      </div>
    );
  }
}
