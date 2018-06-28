import React, { Component } from "react";
import "../css/home.css";
import API from "../utils/API";
import Main from "../components/Main";
import PlantCard from "../components/PlantCard";
import Navbar from "../components/Navbar";


class Search extends Component {
  state = {
    plants: [],
    cName: "",
    isOpen: false
  }

  componentDidMount() {
    this.searchPlants();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // loadPlants = () => {
  //   API.getPlants()
  //     .then(res =>
  //       this.setState({ plants: res.data })
  //     ).catch(err => console.log(err));
  // };

  searchPlants = () => {
    API.searchPlants(this.state.cName)
      .then(res =>
        this.setState({ plants: res.data })
      ).catch(err => console.log(err));

  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (  
    <div>
      <Navbar />
    <Main>
      <h2>It's a Search</h2>
  {this.state.plants.length ? (
    <ul class="collection">
    {this.state.plants.map(plant => (
      <PlantCard 
        image = {plant.images.proportional}
        commonName = {plant.commonName}
        name = {plant.name}
        notes= {plant.notes}
      />
    ))}
    </ul>
  ) : (
    <h3>No Results to Display</h3>
  )}
      
    </Main>
    </div>)
  }
}

export default Search;