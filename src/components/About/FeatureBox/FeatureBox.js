import React, { Component } from "react";
import "./FeatureBox.scss";
import "../../../grid.scss";

export default class FeatureBox extends Component {
  render() {
    return (
      <div className="col span-1-of-3 box">
        <div className="icon">{this.props.icon}</div>
        <h3 className="title">{this.props.title}</h3>
        <p className="text">{this.props.text}</p>
      </div>
    );
  }
}
