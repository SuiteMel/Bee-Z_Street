import React, { Component } from "react";
import "../css/contact.css";
import Main from "../components/Main";
import API from "../utils/API";
import axios from "axios";

class Contact extends Component {
  state = {
    username: localStorage.getItem("beeZUser"),
    subject: "",
    body: "",
    jwtToken: localStorage.getItem("jwtToken")
  };

  onChange = event => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  };

  onSubmit = event => {
    event.preventDefault();
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );
    const { username, subject, body } = this.state;
    API.contactSubmit({ username, subject, body }).then(result => {
      console.log(result);
      if (result.status === 200) {
        alert("Message successfully sent!");
        this.setState({ subject: "" });
        this.setState({ body: "" });
      } else {
        alert("Duplicative message content. Message refused.");
        this.setState({ body: "" });
      }
    });
  };

  logout = event => {
    event.preventDefault();
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("beeZUser");
    this.props.history.push("/login");
  };

  render() {
    const { username, subject, body, jwtToken } = this.state;
    return (
      <div>
        {jwtToken && username ? (
          <Main className="contactMain contact">
            <div className="container">
              <div className="row">
                <div className="col s6">
                  <div>
                    <h1 className="contact">
                      Bee-friendly gardening is a breeze!
                    </h1>
                    <h2 className="contact">
                      Have a question or suggestion? Share it!
                    </h2>
                    <form
                      className="input-field col s9"
                      onSubmit={this.onSubmit}
                    >
                      <h3 className="contactForm contact">Topic</h3>
                      <input
                        className="contactForm"
                        type="text"
                        placeholder="Example: Plant identification"
                        name="subject"
                        value={subject}
                        onChange={this.onChange}
                        required
                      />
                      <h3 className="contactForm contact">
                        Tell us what's on your mind
                      </h3>
                      <textarea
                        type="text"
                        placeholder="Share a story, tell us about successes luring bees to your garden ... we want to hear!"
                        name="body"
                        value={body}
                        onChange={this.onChange}
                        required
                      />
                      <button
                        className="btn waves-effect waves-light #f9a825 yellow darken-3 contactButton"
                        name="action"
                        type="submit"
                      >
                        Share your story
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col s6">
                  <h1 className="contactHead">We want to hear from you!</h1>

                  <p className="contact">
                    Bee-Z Street gardeners across the country are beautifying
                    their yards and gardens and helping vital bee populations.
                  </p>

                  <p className="contact">
                    Bee-Z Street gardeners across the country are beautifying
                    their yards and gardens and helping vital bee populations.
                  </p>

                  <p className="contact">
                    Share your tips, tricks and successes, and we'll include
                    them in our future garden showcase!
                  </p>
                </div>
              </div>{" "}
              <button
                className="logoutbutton"
                type="button"
                onClick={this.logout}
              >
                Logout
              </button>
            </div>
          </Main>
        ) : (
          this.props.history.push("/login")
        )}
      </div>
    );
  }
}

export default Contact;
