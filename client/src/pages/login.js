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

export default Login;