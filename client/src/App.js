import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Search from "./pages/search";
import Garden from "./pages/garden";
import Contact from "./pages/contact";
import "./App.css";

const App = () => (
<Wrapper>
  <Router>
    <div> 
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/garden" component={Garden} />
    <Route exact path="/contact" component={Contact} />
    </div>   
  </Router>
  <Footer> 
  <h3>Bee-Z Street &copy; 2018</h3>
</Footer>
</Wrapper>
);

export default App;
