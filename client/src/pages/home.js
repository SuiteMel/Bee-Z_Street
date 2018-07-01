import React from "react";
import "../css/home.css";
import Main from "../components/Main";
import SignupForm from "../components/SignupForm";
import { Row } from "react-materialize";


const Home = () => (
  <Main className="homeMain home">
    <div className="container">
    <div className="homeBorder" />
      <div className="row">
        <div className="col s6">
          <h2 className="homeform">New to Bee-Z Street? Sign up is easy!</h2>
          <SignupForm />

        </div>
        <div className="col s6">
          <h1 className="home">Welcome to Bee-Z Street!</h1>
          <h2 className="home">Your guide to bee-friendly gardening</h2>

          <p className="home">If you're interested in beautifying your garden with more diversity and fewer chemicals,
            it's never been easier to find and grow hearty native plants.</p>

          <p className="home">Pollinators play an important role in the health and beauty of your garden. By choosing indigenous
            plants, you provide great natural food sources for endangered bees and other pollinators. <a className="home" href="./search">Search plants</a></p>

          <p className="home">Climate-tolerant native plants are low-maintenance and use less water. And the fascinating bees, butterflies,
      and birds they attract are a beautiful bonus Mother Nature throws in free.</p>

          <p className="home">Whether you're interested in prairie habitat, growing in loamy soil or searching for shade-friendly 
          species, Bee-Z Street help you identify the right plants for your situation. We think you'll love the results; 
          the bees will thank you too!</p>
      <div className="row filters">
        <img src="../images/prairie.png" alt="" className="circle responsive-img shadow" />
        <img src="../images/loam.png" alt="" className="circle responsive-img shadow" />
        <img src="../images/shade.png" alt="" className="circle responsive-img shadow" />
        </div>
        </div>
      </div>
    </div>
  </Main>
);

export default Home;