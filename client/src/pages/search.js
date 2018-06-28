import React, { Component } from "react";
import "../css/home.css";
import API from "../utils/API";
import Main from "../components/Main";
import PlantCard from "../components/PlantCard";
import SearchForm from "../components/SearchForm";
// import Modal from "../components/Modal";
import "../css/search.css";

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
      <Main>
        <h2>It's a Search</h2>
        <div className="row">
          <div className="col s3" id="searchCol">
            <SearchForm
              onClick={this.searchPlants}
              name="cName"
              value={this.state.cName}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="col s9">
            {this.state.plants.length ? (
              <ul className="collection">
                {this.state.plants.map(plant => (
                  <div>
                    <PlantCard
                      key={plant._id}
                      id={plant.id}
                      image={plant.images.box}
                      commonName={plant.commonName}
                      name={plant.name}
                      notes={plant.notes}
                      onClick={this.toggleModal}
                      show={this.state.isOpen}
                      onClose={this.toggleModal}
                    >

                    </PlantCard>
                  </div>
                ))}
              </ul>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </div>
          {/* <Modal show={this.state.isOpen}
            onClose={this.toggleModal}
            image={this.state.plants[0].images.box}
            commonName={this.state.plants[0].commonName}
            notes={this.state.plants[0].notes}
          >
          </Modal> */}
        </div>
        <a className="waves-effect waves-light btn modal-trigger" href="#modal2" onClick={this.toggleModal}>Modal</a>

      </Main>)
  }
}

export default Search;