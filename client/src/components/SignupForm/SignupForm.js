import React, { Component } from "react";
import "./SignupForm.css";
//import API from "../../utils/API";

class SignupForm extends Component {
  state = {
    firstname: "",
    lastname: "",
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
    const { firstname, lastname, username, password } = this.state;
    //API.registerSubmit({ firstname, lastname, username, password }).then(
    //result => {
    //if (result.data.success) {
    //this.props.history.push("/login");
    //} else {
    //this.setState({ message: result.data.msg });
    //}
    //}
    //);
    console.log(firstname, lastname, username, password);
  };
  render() {
    const { firstname, lastname, username, password, message } = this.state;
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
            Register me 4
          </button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
