import React from "react";
import "../css/home.css";
import Main from "../components/Main";
import SignupForm from "../components/SignupForm";



const Home = () => (
  <Main>
    <div class="container">
      <div class="row">
        <div class="col s5">
          <h2>New to Bee-Z Street? Sign up is easy!</h2>
          <SignupForm />

        </div>
        <div class="col s7">
          <h1>Welcome to bee-friendly gardening!</h1>

          <p>Interested in beautifying your garden with more diversity and fewer chemicals? Great! 
            It's never been easier to grow hearty native plants.</p>

          <p>Pollinators play an important role in the health and beauty of your garden. You can help endangered 
            honey bees and other pollinators by choosing indigenous plants &mdash; a great natural food sources for bees.</p>

          <p>Native plants use less water and are climate tolerant. The fascinating bees, butterflies,
      and birds they attract are a beautiful bonus Mother Nature throws in free of charge!</p>

          <p>Bee-Z Street is designed to help you choose easy-care native plants that brighten and beautify
      your home landscaping. We think you'll love the results; the bees will thank you too!</p>
        </div>
      </div>
    </div>
  </Main>
);

export default Home;