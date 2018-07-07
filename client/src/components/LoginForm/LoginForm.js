import React, { Component } from "react";
import "./LoginForm.css";
//import API from "../../utils/API";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    message: "THE COWS ARE COMING!"
  };

  onChange = event => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  };

  onSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    //API.loginSubmit({ username, password })
    //.then(result => {
    //PCK added next four lines
    //console.log("Result: " + result);
    //const resString = JSON.stringify(result);
    //console.log("Result String: " + resString);
    //console.log("Token: " + result.data.token);
    //localStorage.setItem("jwtToken", result.data.token);
    //this.setState({ message: "" });

    //this.props.history.push("/");
    //})
    //.catch(error => {
    //if (error.response.status === 401) {
    //this.setState({
    //message: error.response.data.msg
    //});
    //}
    //});
    console.log(username, password);
  };
  render() {
    const { username, password, message } = this.state;
    return (
      <div className="input-field col s12 screen black-text">
        <form id="signup" onSubmit={this.onSubmit}>
          {message !== "" && (
            <div className="alert alert-warning alert-dismissible" role="alert">
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
    );
  }
}

export default LoginForm;
