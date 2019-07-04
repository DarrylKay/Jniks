import React, { Component } from "react";
import HeaderBtn from "./HeaderBtn";
import NavBar from "./NavBar/NavBar";
import "./Header.scss";
import "../../grid.scss";

export default class Header extends Component {
  render() {
    return (
      <header>
        <NavBar />
        <div className="hero-text-box">
          <h1>{this.props.name}</h1>
          <h1>{this.props.tagLine}</h1>
          <HeaderBtn />
        </div>
      </header>
    );
  }
}
