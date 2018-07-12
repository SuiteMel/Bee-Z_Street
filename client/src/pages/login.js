import React, { Component } from "react";
import "../css/login.css";
import Main from "../components/Main";
import API from "../utils/API";

class Login extends Component {
  state = {
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
    const { username, password } = this.state;
    API.loginSubmit({ username, password })
      .then(result => {
        localStorage.setItem("jwtToken", result.data.token);
        localStorage.setItem("beeZUser", this.state.username);
        this.setState({ message: "" });

        this.props.history.push("/");
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.setState({
            message: error.response.data.msg
          });
        }
      });
  };

  render() {
    const { username, password, message } = this.state;
    return (
      <Main className="loginMain">
        <div className="container">
          <div className="row">
            <div className="col s5">
            </div>
            <div className="col s7">
              <h1 className="home">Welcome Back to Bee-Z Street</h1>
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
                    Submit
                  </button>
                </form>
              </div>
              <p className="instructions screen">
                Not a member? It's easy to{" "}
                <a className="home" href="/register">
                  sign up!
                </a>
              </p>
            </div>
          </div>
        </div>
      </Main>
    );
  }
}

export default Login;
