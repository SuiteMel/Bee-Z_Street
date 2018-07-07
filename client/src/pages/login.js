import React from "react";
import "../css/login.css";
import Main from "../components/Main";
import LoginForm from "../components/LoginForm";

const Login = () => (
  <Main className="loginMain">
    <div className="container">
      <div className="row">
        <div className="col s5">
          {/* <h2 className="home">Already a member? Sign in here!</h2> */}
          {/* <LoginForm /> */}
        </div>
        <div className="col s7">
          <h1 className="home">Welcome Back to Bee-Z Street</h1>
          <LoginForm />
          <p className="instructions screen">Not a member? It's easy to <a className="home" href="/">sign up!</a></p>        
        </div>
      </div>
    </div>
  </Main>
);

export default Login;