import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Search from "./pages/search";
import Garden from "./pages/garden";
import Contact from "./pages/contact";
import PlantInfo from "./pages/plantInfo";
import Login from "./pages/login";
import "./App.css";

const App = () => (
<Wrapper className="Site">
  <Router>
    <div className="Site-content">
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/garden" component={Garden} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/search/:id" component={PlantInfo} />
      </div>
  </Router>
  <Footer> 
  <h3>Bee-Z Street &copy; 2018</h3>
</Footer>
</Wrapper>
);

export default App;
