import React, { Component } from "react";
import "../css/register.css";
import Main from "../components/Main";
import API from "../utils/API";

class Register extends Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    message: ""
  };

  onChange = event => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  };

  onSubmit = event => {
    event.preventDefault();
    const { firstname, lastname, username, password } = this.state;
    API.registerSubmit({ firstname, lastname, username, password }).then(
      result => {
        if (result.data.success) {
          console.log("SUCCESSFUL REGISTRATION!");
          this.props.history.push("/login");
        } else {
          this.setState({ message: result.data.msg });
        }
      }
    );
  };
  render() {
    const { firstname, lastname, username, password, message } = this.state;
    return (
      <Main className="homeMain home">
        <div className="container">
          <div className="homeBorder" />
          <div className="row">
            <div className="col s6">
              <h2 className="homeform">
                New to Bee-Z Street? It's easy to register! It is!
              </h2>
              <div className="input-field col s12 screen black-text">
                <form id="signup" onSubmit={this.onSubmit}>
                  {message !== "" && (
                    <div
                      className="alert alert-warning alert-dismissible"
                      role="alert"
                    >
                      <b>{message}</b>
                    </div>
                  )}
                  <input
                    className="col s12"
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    value={firstname}
                    onChange={this.onChange}
                    required
                  />
                  <input
                    className="col s12"
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    value={lastname}
                    onChange={this.onChange}
                    required
                  />
                  <input
                    className="col s12"
                    type="email"
                    placeholder="Email"
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    required
                  />
                  <input
                    className="col s12"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    required
                  />
                  <button
                    className="btn waves-effect waves-light #f9a825 yellow darken-3"
                    type="submit"
                    name="action"
                  >
                    Register me
                  </button>
                </form>
              </div>
            </div>
            <div className="col s6">
              <h1 className="homeHead">Welcome to Bee-Z Street!</h1>
              <h2 className="home">Your guide to bee-friendly gardening</h2>

              <p className="home">
                If you're interested in beautifying your garden with more
                diversity and fewer chemicals, it's never been easier to find
                and grow hearty native plants.
              </p>

              <p className="home">
                Pollinators play an important role in the health and beauty of
                your garden. By choosing indigenous plants, you provide great
                natural food sources for endangered bees and other pollinators.
              </p>

              <p className="home">
                Climate-tolerant native plants are low-maintenance and use less
                water. And the fascinating bees, butterflies, and birds they
                attract are a beautiful bonus Mother Nature throws in free.
              </p>

              <p className="home">
                Whether you're interested in prairie habitat, growing in loamy
                soil or searching for shade-friendly species, Bee-Z Street help
                you identify the right plants for your situation. We think
                you'll love the results; the bees will thank you too!
              </p>
              <div className="row">
                <div className="col s4">
                  <a href="./search">
                    <img
                      src="../images/prairie.png"
                      alt="prairie"
                      className="circle responsive-img shadow"
                    />
                  </a>
                  <p className="trio">
                    Choose your<br />habitat
                  </p>
                </div>
                <div className="col s4">
                  <a href="./search">
                    <img
                      src="../images/loam.png"
                      alt="loam soil"
                      className="circle responsive-img shadow"
                    />
                  </a>
                  <p className="trio">
                    Choose your<br />soil
                  </p>
                </div>
                <div className="col s4">
                  <a href="./search">
                    <img
                      src="../images/shade.png"
                      alt="shade garden"
                      className="circle responsive-img shadow"
                    />
                  </a>
                  <p className="trio">
                    Choose your<br />sun level
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    );
  }
}

export default Register;
