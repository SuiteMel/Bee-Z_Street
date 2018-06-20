import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Search from "./pages/search";
import Garden from "./pages/garden";
import Contact from "./pages/contact";
import "./App.css";

const App = () => (

  <Router>
    <div> 
    <Route exact path="/" component={Home} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/garden" component={Garden} />
    <Route exact path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
