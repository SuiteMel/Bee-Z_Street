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
        //PCK added next four lines
        console.log("Result: " + result);
        const resString = JSON.stringify(result);
        console.log("Result String: " + resString);
        console.log("Token: " + result.data.token);
        localStorage.setItem("jwtToken", result.data.token);
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
    console.log(username, password);
  };

  render() {
    const { username, password, message } = this.state;
    return (
      <Main className="loginMain">
        <div className="container">
          <div className="row">
            <div className="col s5">
              {/* <h2 className="home">Already a member? Sign in here!</h2> */}
              {/* <LoginForm /> */}
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

              {/* <h2 className="home">Let's get growing!</h2>

      <p className="home">Whether you've perused our <a className="home" href="./search">plant search</a> or played with our virtual 
      garden, we hope Bee-Z Street inspires your passion for bee-friendly gardening.</p>

      <p className="home">We're adding new plants all the time and working on our 
      coming-soon garden gallery. We hope it will provide even more ideas and encouragement for  
      planting easy-care, pollinator-friendly gardens.</p>

      <p className="home">If you've already had some gardening successes, don't forget to visit 
      our <a className="home" href="./contact">Contact page</a> and share a story, image, or both. 
      We can't wait to see how your garden grows!</p> */}
            </div>
          </div>
        </div>
      </Main>
    );
  }
}

export default Login;
