import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Register from "./pages/register";
import Search from "./pages/search";
import Garden from "./pages/garden";
import Contact from "./pages/contact";
import PlantInfo from "./pages/plantInfo";
import Login from "./pages/login";
import Navigation from "./components/Navbar";
import NoMatch from "./pages/NoMatch";

import "./App.css";

const App = () => (
  <Wrapper className="Site">
    <Router>
      <div className="Site-content">
      <Navigation />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Search} />
        <Route exact path="/garden" component={Garden} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/search/:id" component={PlantInfo} />
        <Route path="*" component={NoMatch} />
      </Switch>
      </div>
    </Router>
    <Footer>
      <h3>Bee-Z Street &copy; 2018</h3>
    </Footer>
  </Wrapper>
);

export default App;
