import React from "react";
import "../css/home.css";
import Main from "../components/Main";
import SignupForm from "../components/SignupForm";

const Home = () => (
  <Main className = "homeMain">
    <div className="container">
      <div className="row">
        <div className="col s6">
          <h2>New to Bee-Z Street? Sign up is easy!</h2>
          <SignupForm />

        </div>
        <div className="col s6">
          <h1>Welcome to bee-friendly gardening!</h1>

          <p>If you're interested in beautifying your garden with more diversity and fewer chemicals,
            it's never been easier to find and grow hearty native plants.</p>

          <p>Pollinators play an important role in the health and beauty of your garden. By choosing indigenous 
            plants, you provide a great natural food sources for endangered bees and other pollinators.</p>

          <p>Climate-tolerant native plants are low-maintenance and use less water. And the fascinating bees, butterflies,
      and birds they attract are a beautiful bonus Mother Nature throws in for free!</p>

          <p>Bee-Z Street help you identify native plants and visualize how they can brighten and beautify
      your home landscaping. We think you'll love the results; the bees will thank you too!</p>
        </div>
      </div>
    </div>
  </Main>
);

export default Home;