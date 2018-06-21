import React, { Component } from "react";
import "../css/home.css";
import API from "../utils/API";

class Search extends Component {
  state = {
    plants: []
  }

  componentDidMount() {
    this.loadPlants();
  }

  loadPlants = () => {
    API.getPlants()
      .then(res =>
        this.setState({ plants: res.data })
      ).catch(err => console.log(err));
  };

  render() {
    return (  
    <div>
      <h2>It's a Search</h2>
  {this.state.plants.length ? (
    <div>
    {this.state.plants.map(plant => (
      <p>
      {plant.name}
      </p>
    ))}
    </div>
  ) : (
    <h3>No Results to Display</h3>
  )}
      
    </div>)
  }
}


export default Search;