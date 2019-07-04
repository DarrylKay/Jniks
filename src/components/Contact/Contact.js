import React, { Component } from "react";
import "./Contact.scss";
import "../../grid.scss";
import * as emailjs from "emailjs-com";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      errors: {
        name: "",
        email: "",
        message: ""
      }
    };
  }
  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  validateMail() {
    let errors = {};
    let formIsValid = true;

    if (!this.state.name || this.state.name.length < 3) {
      errors.name = "Minimum 3 symbols";
      formIsValid = false;
    }

    if (!this.state.message || this.state.message.length < 5) {
      errors.message = "Minimum 5 symbols";
      formIsValid = false;
    }

    if (!this.state.email || this.state.email.length < 3) {
      errors.email = "Minimum 3 symbols";
      formIsValid = false;
    }

    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!pattern.test(this.state.email)) {
      errors.email = "This is not a valid email";
      formIsValid = false;
    }

    this.setState({
      errors: errors
    });

    return formIsValid;
  }

  sentMessage(event) {
    event.preventDefault();

    if (!this.validateMail()) {
      return;
    }

    var templateParams = {
      user_name: `${this.state.name} (${this.state.email})`,
      user_email: "jniks018@gmail.com",
      subject: this.state.subject,
      message_html: this.state.message
    };

    emailjs
      .send(
        "gmail",
        "jniks_email",
        templateParams,
        "user_trHip63BlHiylAdktePYC"
      )
      .then(
        function(response) {
          alert("Message sent successfully");
          console.log("SUCCESS!", response.status, response.text);
        },
        function(err) {
          alert(err);
          console.log(err);
        }
      );

    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }

  render() {
    return (
      <section className="section-form" id="Contact">
        <div className="row">
          <h2>&mdash; We're happy to hear from you &mdash;</h2>
        </div>
        <div className="row form-area">
          <form
            method="post"
            action=""
            className="contact-form"
            name="contact-form"
            id="contact-form"
          >
            <div className="row">
              <div className="col span-1-of-3">
                <label htmlFor="name" className="label">
                  Name
                </label>
              </div>
              <div className="col span-2-of-3">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name..."
                  onChange={this.handleInputChange.bind(this)}
                  value={this.state.name}
                  required
                />
                <span className="errors">{this.state.errors.name} </span>
              </div>
            </div>
            <div className="row">
              <div className="col span-1-of-3">
                <label htmlFor="email" className="label">
                  Email
                </label>
              </div>
              <div className="col span-2-of-3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email..."
                  onChange={this.handleInputChange.bind(this)}
                  value={this.state.email}
                  required
                />
                <span className="errors">{this.state.errors.email} </span>
              </div>
            </div>
            <div className="row">
              <div className="col span-1-of-3">
                <label htmlFor="subject" className="label">
                  Subject
                </label>
              </div>
              <div className="col span-2-of-3">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter message subject.."
                  onChange={this.handleInputChange.bind(this)}
                  value={this.state.subject}
                />
              </div>
            </div>
            <div className="row">
              <div className="col span-1-of-3">
                <label htmlFor="message" className="label">
                  Drop us a message
                </label>
              </div>
              <div className="col span-2-of-3">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter message..."
                  onChange={this.handleInputChange.bind(this)}
                  value={this.state.message}
                  required
                />
                <span className="errors">{this.state.errors.message}</span>
              </div>
            </div>
            <div className="row ">
              <div className="col span-1-of-3">
                <label className="label">&nbsp;</label>
              </div>
              <div className="col span-2-of-3">
                <button
                  type="button"
                  name="submit"
                  className="submit-btn"
                  onClick={this.sentMessage.bind(this)}
                >
                  Submit Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
