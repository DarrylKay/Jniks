import React, { Component } from "react";
import "./index.css";
import Header from "./components/Header/Header";
import AboutUs from "./components/About/AboutUs";
import FavouriteMeals from "./components/FavouriteMeals/FavouriteMeals";
import Social from "./components/Social/Social";
import Events from "./components/Events/Events";
import Testimonials from "./components/Testimonials/Testimonials";
import Menu from "./components/Menu/Menu";
import MeetTheTeam from "./components/MeetTheTeam/MeetTheTeam";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "J'nik's Event Catering,",
      tagLine: "All your events catered for"
    };
  }
  render() {
    return (
      <div>
        <Header name={this.state.name} tagLine={this.state.tagLine} />
        <AboutUs />
        <FavouriteMeals />
        <Menu />
        <MeetTheTeam />
        <Testimonials />
        <Events />
        <Social />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
